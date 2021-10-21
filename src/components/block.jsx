import { FormControl } from 'react-bootstrap';
import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import {Button} from 'react-bootstrap';
import sha256 from 'simple-sha256/index';
import * as API from '../utils/apiUtils';
import * as CONSTANTS from '../utils/constants';
import {BLOCK_STATE} from './InitialStates'
const Block = () => {
    const [currBlock, setcurrBlock] = useState(1);
    const [currNonce, setcurrNonce] = useState(74154);
    const [currData, setcurrData] = useState('');
    const [hashvalue, sethashvalue] = useState(BLOCK_STATE);

    window.onkeyup = keyup;
    var inputTextValue,inputTextValue1, inputTextValue2;

    function keyup(e) {
        inputTextValue = e.target.value;
        // setcurrBlock(inputTextValue);
    }

    function keyup1(e1) {
        inputTextValue1 = e1.target.value;
        setcurrNonce(inputTextValue1);
    }

    function keyup2(e2) {
        inputTextValue2 = e2.target.value;
        setcurrData(inputTextValue2);
        hashfind();
    }
    async function hashfind () {
        const hash = await sha256(inputTextValue2);
        const newhash= await sha256(hash + (currBlock*currBlock + currNonce*currNonce).toString()+ '0'.repeat(64));
        console.log(newhash);
        sethashvalue(newhash);
        console.log(hashvalue.substring(0, 4));
      }

    async function mine(){
        var toSend=
        {
        block_number : 1,
		data : currData,
       };
       console.log(toSend);
      var data = await API.PostRequestApi(CONSTANTS.API_ENDPOINT.GET_NONCE, toSend, CONSTANTS.API_TIMEOUT_TYPE.SLOW_TIMEOUT);
      setcurrNonce(data.nonce);
      sethashvalue(data.hash);

    }

    return (
        <div className="App" style={{paddingLeft: "25%", paddingRight: "25%"}}>
        <br />
            <h1>Block</h1>
            <br />
            <div style={{background: hashvalue.substring(0, 4) === '0000' ? 'rgb(223, 240, 216)' : 'rgb(250, 220, 220)', padding: '35px', borderRadius: '5px'}}>
                <InputGroup size="sm">
                    <InputGroup.Text>Block</InputGroup.Text>
                    <FormControl onChange={keyup} name="block" value={currBlock} as="textarea" aria-label="With textarea" readonly />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                    <InputGroup.Text>Nonce</InputGroup.Text>
                    <FormControl value={currNonce} onChange={keyup1} as="textarea" aria-label="With textarea" />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                    <InputGroup.Text>Data</InputGroup.Text>
                    <FormControl value={currData} onChange={keyup2} rows="8" as="textarea" aria-label="With textarea" />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                    <InputGroup.Text>Hash</InputGroup.Text>
                    <FormControl value={hashvalue} as="textarea" aria-label="With textarea" readonly />
                </InputGroup>
                <br/>
                <Button variant="success" onClick={()=>{mine()}}>Mine</Button>
            </div>
        </div>
    )
}

export default Block