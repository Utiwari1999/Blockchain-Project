import React from 'react';
import BlockChainDistributedComp from './BlockChainDistributedComp';
import * as API from '../utils/apiUtils';
import * as CONSTANTS from '../utils/constants';
import PlaceholderLoading from 'react-placeholder-loading'

const LoadingComponent = () => (
    <>
  <PlaceholderLoading shape="rect" width={1400} height={10} colorStart={"#D9D3D2"} colorEnd={"#7B7776"}/>
  <br/>
  </>
)
const Distributed = () => {
    const initial_state=[
        [
        {
            block_number: 1,
            nonce: 74154,
            data: "",
           prev_hash: "0000000000000000000000000000000000000000000000000000000000000000",
            hash: "000009615279ef698fe2d12b34f480d027be49770aa9081b665b2b4b7890c7fe"
        },
        {
            block_number: 2,
            nonce: 14170,
            data: "",
           prev_hash: "000009615279ef698fe2d12b34f480d027be49770aa9081b665b2b4b7890c7fe",
            hash: "00005de4df34fe27520bf3b135a5d6e3e7e46b820371f6787b721763d6e8387b"
        },
        {
            block_number: 3,
            nonce: 16501,
            data: "",
           prev_hash: "00005de4df34fe27520bf3b135a5d6e3e7e46b820371f6787b721763d6e8387b",
            hash: "000082f316f4cb9920370c39bdf6e9289dd43b348881b2689951cdc862b62975"
        },
        {
            block_number: 4,
            nonce: 89679,
            data: "",
           prev_hash: "000082f316f4cb9920370c39bdf6e9289dd43b348881b2689951cdc862b62975",
            hash: "00005b63a0f94f3551dc111e2124dfac35de1d74d7e4ef8b4aeb7906df72d1d1"
        },
        {
            block_number: 5,
            nonce: 42353,
            data: "",
           prev_hash: "00005b63a0f94f3551dc111e2124dfac35de1d74d7e4ef8b4aeb7906df72d1d1",
            hash: "0000839087f77abf48b6cf873487e62aa39f3ee789b30361611a840008e492fa"
        }
    ],
    [
        {
            block_number: 1,
            nonce: 74154,
            data: "",
           prev_hash: "0000000000000000000000000000000000000000000000000000000000000000",
            hash: "000009615279ef698fe2d12b34f480d027be49770aa9081b665b2b4b7890c7fe"
        },
        {
            block_number: 2,
            nonce: 14170,
            data: "",
           prev_hash: "000009615279ef698fe2d12b34f480d027be49770aa9081b665b2b4b7890c7fe",
            hash: "00005de4df34fe27520bf3b135a5d6e3e7e46b820371f6787b721763d6e8387b"
        },
        {
            block_number: 3,
            nonce: 16501,
            data: "",
           prev_hash: "00005de4df34fe27520bf3b135a5d6e3e7e46b820371f6787b721763d6e8387b",
            hash: "000082f316f4cb9920370c39bdf6e9289dd43b348881b2689951cdc862b62975"
        },
        {
            block_number: 4,
            nonce: 89679,
            data: "",
           prev_hash: "000082f316f4cb9920370c39bdf6e9289dd43b348881b2689951cdc862b62975",
            hash: "00005b63a0f94f3551dc111e2124dfac35de1d74d7e4ef8b4aeb7906df72d1d1"
        },
        {
            block_number: 5,
            nonce: 42353,
            data: "",
           prev_hash: "00005b63a0f94f3551dc111e2124dfac35de1d74d7e4ef8b4aeb7906df72d1d1",
            hash: "0000839087f77abf48b6cf873487e62aa39f3ee789b30361611a840008e492fa"
        }
    ],
    [
        {
            block_number: 1,
            nonce: 74154,
            data: "",
           prev_hash: "0000000000000000000000000000000000000000000000000000000000000000",
            hash: "000009615279ef698fe2d12b34f480d027be49770aa9081b665b2b4b7890c7fe"
        },
        {
            block_number: 2,
            nonce: 14170,
            data: "",
           prev_hash: "000009615279ef698fe2d12b34f480d027be49770aa9081b665b2b4b7890c7fe",
            hash: "00005de4df34fe27520bf3b135a5d6e3e7e46b820371f6787b721763d6e8387b"
        },
        {
            block_number: 3,
            nonce: 16501,
            data: "",
           prev_hash: "00005de4df34fe27520bf3b135a5d6e3e7e46b820371f6787b721763d6e8387b",
            hash: "000082f316f4cb9920370c39bdf6e9289dd43b348881b2689951cdc862b62975"
        },
        {
            block_number: 4,
            nonce: 89679,
            data: "",
           prev_hash: "000082f316f4cb9920370c39bdf6e9289dd43b348881b2689951cdc862b62975",
            hash: "00005b63a0f94f3551dc111e2124dfac35de1d74d7e4ef8b4aeb7906df72d1d1"
        },
        {
            block_number: 5,
            nonce: 42353,
            data: "",
           prev_hash: "00005b63a0f94f3551dc111e2124dfac35de1d74d7e4ef8b4aeb7906df72d1d1",
            hash: "0000839087f77abf48b6cf873487e62aa39f3ee789b30361611a840008e492fa"
        }
    ],
    [
        {
            block_number: 1,
            nonce: 74154,
            data: "",
           prev_hash: "0000000000000000000000000000000000000000000000000000000000000000",
            hash: "000009615279ef698fe2d12b34f480d027be49770aa9081b665b2b4b7890c7fe"
        },
        {
            block_number: 2,
            nonce: 14170,
            data: "",
           prev_hash: "000009615279ef698fe2d12b34f480d027be49770aa9081b665b2b4b7890c7fe",
            hash: "00005de4df34fe27520bf3b135a5d6e3e7e46b820371f6787b721763d6e8387b"
        },
        {
            block_number: 3,
            nonce: 16501,
            data: "",
           prev_hash: "00005de4df34fe27520bf3b135a5d6e3e7e46b820371f6787b721763d6e8387b",
            hash: "000082f316f4cb9920370c39bdf6e9289dd43b348881b2689951cdc862b62975"
        },
        {
            block_number: 4,
            nonce: 89679,
            data: "",
           prev_hash: "000082f316f4cb9920370c39bdf6e9289dd43b348881b2689951cdc862b62975",
            hash: "00005b63a0f94f3551dc111e2124dfac35de1d74d7e4ef8b4aeb7906df72d1d1"
        },
        {
            block_number: 5,
            nonce: 42353,
            data: "",
           prev_hash: "00005b63a0f94f3551dc111e2124dfac35de1d74d7e4ef8b4aeb7906df72d1d1",
            hash: "0000839087f77abf48b6cf873487e62aa39f3ee789b30361611a840008e492fa"
        }
    ]

]
    const [cur_state,changeCurState]= React.useState(initial_state);
    const [loading,setLoading]= React.useState(false);
    React.useEffect(() => {
       getState();
      },[]);

      async function changeState(peer,index,data){
        console.log(data);
        console.log(peer,index)
         let new_state= cur_state;
         new_state[peer-1]=data;
         console.log(new_state)
         changeCurState(new_state);
      }

     
    
      async function getState(){
        setLoading(true);
        await API.GetRequestApi(CONSTANTS.API_ENDPOINT.GET_DISTRIBUTED_BLOCKCHAIN, CONSTANTS.API_TIMEOUT_TYPE.SLOW_TIMEOUT).then((data)=>{changeCurState(data); setLoading(false);}).catch(err=>console.log(err));
        
        }

     
    return (
        <div>
        <br />
            <div  className="App">
                <h1>Distributed Blockchain</h1>
            </div>
            <br />
            <div style={{textAlign: 'left', marginLeft: '90px'}}><h3>Peer A</h3></div>
            <div  style={{
                    marginLeft: 'auto', 
                    marginRight: 'auto',
                    // margin: '20px',
                    paddingLeft: "5%", 
                    paddingRight: "5%", 
                    display: 'flex', 
                    flexDirection: 'row', 
                    overflowX: 'auto',
                    // overflowY: 'hidden', 
                    boxSizing: 'border-box', 
                    width: '100%', 
                    height:'100vh',
                    whiteSpace: 'nowrap', 
                }}>
                 {loading?
                 <div style={{marginTop:"90px"}}>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                   
                </div>:
                    <>   
                    <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[0][0]} changeCurState={changeState} setLoading={setLoading} index={1} peer={1} /></div>
                    <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[0][1]} changeCurState={changeState} setLoading={setLoading} index={2} peer={1}/></div>
                    <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[0][2]} changeCurState={changeState} setLoading={setLoading} index={3} peer={1}/></div>
                    <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[0][3]} changeCurState={changeState} setLoading={setLoading} index={4} peer={1}/></div>
                    <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[0][4]} changeCurState={changeState} setLoading={setLoading} index={5} peer={1}/></div>
                    </>
                 }
                </div>
            <br />
            <br />
            <div style={{textAlign: 'left', marginLeft: '90px'}}><h3>Peer B</h3></div>
            <div  style={{
                    marginLeft: 'auto', 
                    marginRight: 'auto',
                    // margin: '20px',
                    paddingLeft: "5%", 
                    paddingRight: "5%", 
                    display: 'flex', 
                    flexDirection: 'row', 
                    overflowX: 'auto',
                    // overflowY: 'hidden', 
                    boxSizing: 'border-box', 
                    width: '100%', 
                    height:'100vh',
                    whiteSpace: 'nowrap', 
                }}>
                 {loading?
                 <div style={{marginTop:"90px"}}>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                   
                </div>:
                <>   
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[1][0]} changeCurState={changeState} setLoading={setLoading} index={1} peer={2}/></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[1][1]} changeCurState={changeState} setLoading={setLoading} index={2} peer={2}/></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[1][2]} changeCurState={changeState} setLoading={setLoading} index={3} peer={2}/></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[1][3]} changeCurState={changeState} setLoading={setLoading} index={4} peer={2}/></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[1][4]} changeCurState={changeState} setLoading={setLoading} index={5} peer={2}/></div>
                 </>
                 }
                </div>
            <br />
            <br />
            <div style={{textAlign: 'left', marginLeft: '90px'}}><h3>Peer C</h3></div>
            <div  style={{
                    marginLeft: 'auto', 
                    marginRight: 'auto',
                    // margin: '20px',
                    paddingLeft: "5%", 
                    paddingRight: "5%", 
                    display: 'flex', 
                    flexDirection: 'row', 
                    overflowX: 'auto',
                    // overflowY: 'hidden', 
                    boxSizing: 'border-box', 
                    width: '100%', 
                    height:'100vh',
                    whiteSpace: 'nowrap', 
                }}>
                 {loading?
                 <div style={{marginTop:"90px"}}>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                   
                </div>:
                <>   
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[2][0]} changeCurState={changeState} setLoading={setLoading} index={1} peer={3} /></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[2][1]} changeCurState={changeState} setLoading={setLoading} index={2} peer={3}/></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[2][2]} changeCurState={changeState} setLoading={setLoading} index={3} peer={3}/></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[2][3]} changeCurState={changeState} setLoading={setLoading} index={4} peer={3}/></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[2][4]} changeCurState={changeState} setLoading={setLoading} index={5} peer={3}/></div>
                 </>
                 }
                </div>
            <br />
            <br />
            <div style={{textAlign: 'left', marginLeft: '90px'}}><h3>Peer D</h3></div>
            <div  style={{
                    marginLeft: 'auto', 
                    marginRight: 'auto',
                    // margin: '20px',
                    paddingLeft: "5%", 
                    paddingRight: "5%", 
                    display: 'flex', 
                    flexDirection: 'row', 
                    overflowX: 'auto',
                    // overflowY: 'hidden', 
                    boxSizing: 'border-box', 
                    width: '100%', 
                    height:'100vh',
                    whiteSpace: 'nowrap', 
                }}>
                 {loading?
                 <div style={{marginTop:"90px"}}>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                      <LoadingComponent/>
                   
                </div>:
                    <>   
                    <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[3][0]} changeCurState={changeState} setLoading={setLoading} index={1} peer={4} /></div>
                    <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[3][1]} changeCurState={changeState} setLoading={setLoading} index={2} peer={4}/></div>
                    <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[3][2]} changeCurState={changeState} setLoading={setLoading} index={3} peer={4}/></div>
                    <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[3][3]} changeCurState={changeState} setLoading={setLoading} index={4} peer={4}/></div>
                    <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockChainDistributedComp  config={cur_state[3][4]} changeCurState={changeState} setLoading={setLoading} index={5} peer={4}/></div>
                    </>
                 }
                </div>
        </div>
    )
}

export default Distributed