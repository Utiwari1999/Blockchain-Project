import React from 'react';
import BlockchainComp from './BlockchainComp';
import * as API from '../utils/apiUtils';
import * as CONSTANTS from '../utils/constants';
import {BLOCKCHAIN_STATE} from './InitialStates'
import LoadComponent from './LoadComponent';

const Blockchain = () => {
    const initial_state=BLOCKCHAIN_STATE;

    const [cur_state,changeCurState]= React.useState(initial_state);
    const [loading,setLoading]= React.useState(false);
    React.useEffect(() => {
       getState();
      },[]);

     
    
      async function getState(){
        setLoading(true);
        await API.GetRequestApi(CONSTANTS.API_ENDPOINT.GET_BLOCKCHAIN, CONSTANTS.API_TIMEOUT_TYPE.SLOW_TIMEOUT).then((data)=>{changeCurState(data) ;  setLoading(false);}).catch(err=>console.log(err));
      
        }

     
    return (
        <div>
        <br />
            <div  className="App">
                <h1>Blockchain</h1>
            </div>
            <br />
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
                      <LoadComponent/>
                   
                </div>:
                <>   
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockchainComp  config={cur_state[0]} changeCurState={changeCurState} setLoading={setLoading} index={1} /></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockchainComp  config={cur_state[1]} changeCurState={changeCurState} setLoading={setLoading} index={2}/></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockchainComp  config={cur_state[2]} changeCurState={changeCurState} setLoading={setLoading} index={3}/></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockchainComp  config={cur_state[3]} changeCurState={changeCurState} setLoading={setLoading} index={4}/></div>
                <div style={{marginRight: '30px', minWidth: '75vh'}}><BlockchainComp  config={cur_state[4]} changeCurState={changeCurState} setLoading={setLoading} index={5}/></div>
                 </>
                 }
                </div>
            <br />
            <br />
        </div>
    )
}

export default Blockchain