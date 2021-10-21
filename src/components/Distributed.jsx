import React from 'react';
import BlockChainDistributedComp from './BlockChainDistributedComp';
import * as API from '../utils/apiUtils';
import * as CONSTANTS from '../utils/constants';
import {DISTRIBUTED_BLOCKCHAIN_STATE,DISTRIBUTED_STYLES_1} from './InitialStates';
import LoadComponent from './LoadComponent';


const Distributed = () => {
    const initial_state=DISTRIBUTED_BLOCKCHAIN_STATE;

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
            <div  style={DISTRIBUTED_STYLES_1}>
                 {loading?
                 <div style={{marginTop:"90px"}}>
                      <LoadComponent/>

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
            <div   style={DISTRIBUTED_STYLES_1}>
                 {loading?
                 <div style={{marginTop:"90px"}}>
                           <LoadComponent/>
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
            <div   style={DISTRIBUTED_STYLES_1}>
                 {loading?
                 <div style={{marginTop:"90px"}}>
                           <LoadComponent/>
                   
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
            <div   style={DISTRIBUTED_STYLES_1}>
                 {loading?
                 <div style={{marginTop:"90px"}}>
                            <LoadComponent/>
                   
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