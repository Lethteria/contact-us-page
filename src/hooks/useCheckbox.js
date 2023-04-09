import React from "react";
import {useState} from "react";

export function UseCheckbox(labels){

    const initialState = labels.map(item => ({value: item, check: false}));

    const [isChecked, setIsChecked] = useState(initialState);

    function onChangeChecked(i){
        return function (){
            const updateIsChecked = [...isChecked];
            updateIsChecked[i].check = !isChecked[i].check;
            setIsChecked([...updateIsChecked]);
        }
    }

    return [isChecked, onChangeChecked];
}