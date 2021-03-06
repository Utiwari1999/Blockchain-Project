import { Button, FormControl } from 'react-bootstrap';
import React, { useState } from 'react'
import sha256 from 'simple-sha256/index';
import InputGroup from 'react-bootstrap/InputGroup'

const Hash = () => {

    const [currvalue, setcurrvalue] = useState('');
    const [hashvalue, sethashvalue] = useState('');

    window.onkeyup = keyup;
    var inputTextValue;

    function keyup(e) {
        inputTextValue = e.target.value;
        setcurrvalue(inputTextValue);
        hashfind();
    }
    async function hashfind () {
        const hash = await sha256(inputTextValue)
        sethashvalue(hash);
      }

    return (
        <div className="App" style={{paddingLeft: "25%", paddingRight: "25%"}}>
        <br />
            <h1>SHA256 Hash</h1>
            <br />
            <InputGroup>
                <InputGroup.Text>Data</InputGroup.Text>
                <FormControl value={currvalue} name="hash256" onChange={keyup} rows="8" as="textarea" aria-label="With textarea" />
            </InputGroup>
            <br />
            <br />
            <InputGroup>
                <InputGroup.Text>Hash</InputGroup.Text>
                <FormControl value={hashvalue}  as="textarea" aria-label="With textarea" readonly />
            </InputGroup>
        </div>
    )
}

export default Hash;