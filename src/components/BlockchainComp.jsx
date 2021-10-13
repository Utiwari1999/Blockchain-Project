import { FormControl } from 'react-bootstrap';
import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import {Button} from 'react-bootstrap';
import sha256 from 'simple-sha256/index';
import * as API from '../utils/apiUtils';
import * as CONSTANTS from '../utils/constants';
const BlockchainComp = (props) => {
    const [currBlock, setcurrBlock] = useState(props.config.block_number);
    const [currNonce, setcurrNonce] = useState(props.config.nonce);
    const [currData, setcurrData] = useState(props.config.data);
    const [hashvalue, sethashvalue] = useState(props.config.hash);
    const [prevvalue, setprevvalue] = useState(props.config.prev_hash);

    window.onkeyup = keyup;
    var inputTextValue,inputTextValue1, inputTextValue2;

    async function keyup(e) {
        if(typeof e.target.value !== "undefined"){
        inputTextValue = parseInt(e.target.value);
        setcurrBlock(inputTextValue);
        var toSend={
            block_number:inputTextValue,
            nonce: currNonce,
            data: inputTextValue2,
            hash: hashvalue,
            prev_hash: prevvalue
        }
        // alert(JSON.stringify(toSend))
        props.setLoading(true);
        await API.PostRequestApi(CONSTANTS.API_ENDPOINT.UPDATE_BLOCK +props.index+'/',toSend, CONSTANTS.API_TIMEOUT_TYPE.SLOW_TIMEOUT).then((data)=>{props.changeCurState(data)}).catch(err=>console.log(err));
        props.setLoading(false);
    }
        
    }

    function keyup1(e1) {
        if(typeof e1.target.value !== "undefined"){
        inputTextValue1 = e1.target.value;
        setcurrNonce(inputTextValue1);
        }
    }

    async function keyup2(e2) {
        inputTextValue2 = e2.target.value;
        setcurrData(inputTextValue2);
        var toSend={
            block_number: parseInt(currBlock),
            nonce: currNonce,
            data: inputTextValue2,
            hash: hashvalue,
            prev_hash: prevvalue
        }
        props.setLoading(true);
        await API.PostRequestApi(CONSTANTS.API_ENDPOINT.UPDATE_BLOCK +props.index+'/',toSend, CONSTANTS.API_TIMEOUT_TYPE.SLOW_TIMEOUT).then((data)=>{props.changeCurState(data)}).catch(err=>console.log(err));
        props.setLoading(false);
        
        // hashfind();
    }
    // async function hashfind () {
    //     const hash = await sha256(inputTextValue2);
    //     const newhash= await sha256(hash + (currBlock*currBlock + currNonce*currNonce).toString()+ '0'.repeat(64));
    //     console.log(newhash);
    //     sethashvalue(newhash);
    //     console.log(hashvalue.substring(0, 4));
    //   }

    async function mine(){
        var toSend={
            block_number: parseInt(currBlock),
            nonce: currNonce,
            data: currData,
            hash: hashvalue,
            prev_hash: prevvalue
        }
        props.setLoading(true);
        await API.PostRequestApi(CONSTANTS.API_ENDPOINT.MINE_BLOCK +props.index+'/',toSend, CONSTANTS.API_TIMEOUT_TYPE.SLOW_TIMEOUT).then((data)=>{props.changeCurState(data)}).catch(err=>console.log(err));
        props.setLoading(false);

    }

    return (
        <div>
        <br />
            <div style={{background: hashvalue.substring(0, 4) === '0000' ? 'rgb(223, 240, 216)' : 'rgb(250, 220, 220)', padding: '35px', borderRadius: '5px'}}>
                <InputGroup size="sm">
                    <InputGroup.Text>Block</InputGroup.Text>
                    <FormControl onChange={keyup} name="block" defaultValue={currBlock} as="textarea" aria-label="With textarea"  />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                    <InputGroup.Text>Nonce</InputGroup.Text>
                    <FormControl defaultValue={currNonce} onChange={keyup1} as="textarea" aria-label="With textarea" />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                    <InputGroup.Text>Data</InputGroup.Text>
                    <FormControl defaultValue={currData} onChange={keyup2} rows="8" as="textarea" aria-label="With textarea" />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                    <InputGroup.Text>Prev</InputGroup.Text>
                    <FormControl defaultValue={prevvalue} as="textarea" aria-label="With textarea" />
                </InputGroup>
                <br/>
                <InputGroup size="sm">
                    <InputGroup.Text>Hash</InputGroup.Text>
                    <FormControl defaultValue={hashvalue} as="textarea" aria-label="With textarea"  />
                </InputGroup>
                <br/>
                <Button variant="success" onClick={()=>{mine()}}>Mine</Button>
            </div>
        </div>
    )
}

export default BlockchainComp