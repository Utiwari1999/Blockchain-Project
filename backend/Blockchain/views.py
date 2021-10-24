from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework import status
import hashlib
from rest_framework.views import APIView


def find_hash(text: str):
    return hashlib.sha256(text.encode()).hexdigest()


def find_nonce(current_hash: str, block_number: int, previous_hash='0'*64):
    nonce = 1
    while True:
        exp = current_hash + str(block_number ** 2 + nonce ** 2) + previous_hash
        hash = find_hash(exp)
        if hash[:4] == '0000':
            return nonce, hash
        nonce += 1


class pingurl(APIView):
    def get(self, request):
        return Response('pong', status=status.HTTP_200_OK)


class GenensisBlockAPI(APIView):

    def post(self, request):
        block_number = request.data.get('block_number', 1)
        data = request.data.get('data')
        nonce, actual_hash = find_nonce(current_hash=find_hash(data), block_number=int(block_number))

        response = {
            'block_number': block_number,
            'nonce': nonce,
	    'data' : data,
            'hash': actual_hash
        }

        return Response(data=response, status=status.HTTP_200_OK)

    def get(self, request):
        nonce, hash = find_nonce(find_hash(''), 1)
        response = {
            'block_number': 1,
            'nonce': nonce,
            'data': '',
            'hash': hash
        }

        return Response(data=response, status=status.HTTP_200_OK)

block_structure = ["block_number", "nonce", "data", "prev_hash", "hash"]

blockchain = []
# distributed blockchain for multiple peers (here we are considering static peers with number 4)
distributed_blockchain = [[],[],[],[]]

def generate_initial_blocks():
    global blockchain
    prev_hash = '0'*64
    initial_data_hash = find_hash('')
    for block_number in range(1,6):
        nonce, current_hash = find_nonce(initial_data_hash,block_number,prev_hash)
        blockchain.append({
            "block_number" : block_number,
            "nonce" : nonce,
            "data" : '',
            "prev_hash" : prev_hash,
            "hash" : current_hash
        })
        prev_hash = current_hash

def generate_initial_distributed_blocks():
    global distributed_blockchain
    initial_data_hash = find_hash('')
    for i in range(4):
        prev_hash = '0' * 64
        for block_number in range(1,6):
            nonce, current_hash = find_nonce(initial_data_hash,block_number,prev_hash)
            distributed_blockchain[i].append({
                "block_number" : block_number,
                "nonce" : nonce,
                "data" : '',
                "prev_hash" : prev_hash,
                "hash" : current_hash
            })
            prev_hash = current_hash



class BlockchainListAPI(APIView):

    def get(self, request):
        if not blockchain:
            generate_initial_blocks()

        return Response(data=blockchain,status=status.HTTP_200_OK)

class MineBlockAPI(APIView):
    def post(self, request, block_number):
        global blockchain
        data = request.data
        for field in block_structure:
            if field in data:
                blockchain[block_number-1][field] = data[field]

        nonce, current_hash = find_nonce(find_hash(blockchain[block_number-1]["data"]), blockchain[block_number-1]["block_number"], blockchain[block_number-1]["prev_hash"])

        blockchain[block_number - 1]["nonce"] = nonce
        blockchain[block_number - 1]["hash"] = current_hash

        prev_hash = current_hash
        for i in range(block_number,5):
            blockchain[i]["prev_hash"] = prev_hash
            blockchain[i]["hash"] = find_hash(find_hash(blockchain[i]["data"]) + str(blockchain[i]["block_number"] ** 2 + blockchain[i]["nonce"] ** 2) + prev_hash)
            prev_hash = blockchain[i]["hash"]

        return Response(data=blockchain,status=status.HTTP_202_ACCEPTED)

class UpdateBlockAPI(APIView):
    def post(self, request, block_number):
        global blockchain
        data = request.data
        for field in block_structure:
            if field in data:
                blockchain[block_number-1][field] = data[field]

        prev_hash = blockchain[block_number-1]["prev_hash"]
        for i in range(block_number-1,5):
            blockchain[i]["prev_hash"] = prev_hash
            blockchain[i]["hash"] = find_hash(find_hash(blockchain[i]["data"]) + str(blockchain[i]["block_number"] ** 2 + blockchain[i]["nonce"] ** 2) + prev_hash)
            prev_hash = blockchain[i]["hash"]

        return Response(data=blockchain,status=status.HTTP_202_ACCEPTED)

class DistributedBlockchainListAPI(APIView):

    def get(self, request):
        if not distributed_blockchain[0]:
            generate_initial_distributed_blocks()

        return Response(data=distributed_blockchain,status=status.HTTP_200_OK)


class MineDistributedBlockAPI(APIView):
    def post(self, request, peer_number, block_number):
        global distributed_blockchain
        data = request.data
        for field in block_structure:
            if field in data:
                distributed_blockchain[peer_number-1][block_number-1][field] = data[field]

        nonce, current_hash = find_nonce(find_hash(distributed_blockchain[peer_number-1][block_number-1]["data"]), distributed_blockchain[peer_number-1][block_number-1]["block_number"], distributed_blockchain[peer_number-1][block_number-1]["prev_hash"])

        distributed_blockchain[peer_number-1][block_number - 1]["nonce"] = nonce
        distributed_blockchain[peer_number-1][block_number - 1]["hash"] = current_hash

        prev_hash = current_hash
        for i in range(block_number,5):
            distributed_blockchain[peer_number-1][i]["prev_hash"] = prev_hash
            distributed_blockchain[peer_number-1][i]["hash"] = find_hash(find_hash(distributed_blockchain[peer_number-1][i]["data"]) + str(distributed_blockchain[peer_number-1][i]["block_number"] ** 2 + distributed_blockchain[peer_number-1][i]["nonce"] ** 2) + prev_hash)
            prev_hash = distributed_blockchain[peer_number-1][i]["hash"]

        return Response(data=distributed_blockchain[peer_number-1],status=status.HTTP_202_ACCEPTED)

class UpdateDistributedBlockAPI(APIView):
    def post(self, request, peer_number, block_number):
        global distributed_blockchain
        data = request.data
        for field in block_structure:
            if field in data:
                distributed_blockchain[peer_number-1][block_number-1][field] = data[field]

        prev_hash = distributed_blockchain[peer_number-1][block_number-1]["prev_hash"]
        for i in range(block_number-1,5):
            distributed_blockchain[peer_number-1][i]["prev_hash"] = prev_hash
            distributed_blockchain[peer_number-1][i]["hash"] = find_hash(find_hash(distributed_blockchain[peer_number-1][i]["data"]) + str(distributed_blockchain[peer_number-1][i]["block_number"] ** 2 + distributed_blockchain[peer_number-1][i]["nonce"] ** 2) + prev_hash)
            prev_hash = distributed_blockchain[peer_number-1][i]["hash"]

        return Response(data=distributed_blockchain[peer_number-1],status=status.HTTP_202_ACCEPTED)




class FindHashAPI(APIView):
    def post(self, request):
        data = request.data["data"]
        return Response(data=find_hash(data), status=status.HTTP_200_OK)
