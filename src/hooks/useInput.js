import React from "react";
import {useState} from "react";

export function UseInput(initialState){
    const [inputData, setInputData] = useState(initialState);

    function onChangeInput(e, clear){
        if(clear) {
            setInputData(initialState);
        } else {
            setInputData({...inputData, [e.target.name]:e.target.value});
        }
    }

    return [inputData, onChangeInput];
}