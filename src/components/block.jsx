import { FormControl } from 'react-bootstrap';
import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import {Button} from 'react-bootstrap';
import sha256 from 'simple-sha256/index';
import * as API from '../utils/apiUtils';
import * as CONSTANTS from '../utils/constants';
const Block = () => {
    const [currBlock, setcurrBlock] = useState(1);
    const [currNonce, setcurrNonce] = useState(74154);
    const [currData, setcurrData] = useState('');
    const [hashvalue, sethashvalue] = useState('000009615279ef698fe2d12b34f480d027be49770aa9081b665b2b4b7890c7fea');

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

      }

    async function mine(){
        var toSend=
        {
        block_number : 1,
		data : currData,
       };
       console.log(toSend);
      var data = await API.PostRequestApi(CONSTANTS.API_ENDPOINT.GET_NONCE, toSend, CONSTANTS.API_TIMEOUT_TYPE.SLOW_TIMEOUT);
    //   alert(JSON.stringify(data));
      setcurrNonce(data.nonce);
      sethashvalue(data.hash);

    }

    return (
        <div className="App" style={{paddingLeft: "25%", paddingRight: "25%"}}>
        <br />
            <h1>Block</h1>
            <br />
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
    )
}

export default Block