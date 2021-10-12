import React from 'react';
import BlockchainComp from './BlockchainComp';

const Blockchain = () => {

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
                    paddingLeft: "5%", 
                    paddingRight: "5%", 
                    display: 'flex', 
                    flexDirection: 'row', 
                    overflowX: 'auto',
                    // overflowY: 'hidden', 
                    boxSizing: 'unset', 
                    width: '200%', 
                    whiteSpace: 'nowrap', 
                }}>
                <div style={{marginRight: '30px', width: '60%'}}><BlockchainComp /></div>
                <div style={{marginRight: '30px', width: '65%'}}><BlockchainComp /></div>
                <div style={{marginRight: '30px', width: '65%'}}><BlockchainComp /></div>
                <div style={{marginRight: '30px', width: '65%'}}><BlockchainComp /></div>
                <div style={{marginRight: '30px', width: '65%'}}><BlockchainComp /></div>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Blockchain