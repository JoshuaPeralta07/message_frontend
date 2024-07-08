import React, {useState} from 'react';
import {BaseUrl} from "../consistents";
import axios from "axios";

function NumberSumUp(props) {
    const [startNum, setStartNum] = useState(0)
    const [endNum, setEndNum] = useState(0)
    const [result, setResult] = useState(0)

    function startNumHandler(e) {
        setStartNum(e.target.value)
    }

    function endNumHandler(e) {
        setEndNum(e.target.value)
    }

    function calculateHandler() {
          let data = JSON.stringify({
            "start_num": Number(startNum),
            "end_num": Number(endNum)
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'chat/sum_numbers/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <p>Start Number: <input type={"number"} id={"startNum"} onChange={startNumHandler}/></p>
            <p>End Number: <input type={"number"} id={"endNum"} onChange={endNumHandler}/></p>
            <p>
                <button id={"calculate"} onClick={calculateHandler}>Calculate</button>
            </p>
            <p>Result: {result}</p>
        </div>
    );
}

export default NumberSumUp;