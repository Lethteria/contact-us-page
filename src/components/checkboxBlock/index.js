import React from "react";
import {Checkbox, FormControlLabel} from "@mui/material";
import {CheckCircle, Circle} from "@mui/icons-material";
import styles from "./checkboxBlock.module.scss";

export default function CheckboxBlock(props){
    const {labels, onChange, checkedArr} = props;

    const checkboxList = labels.map((item,index) => (
        <FormControlLabel control={<Checkbox
                                    color="default"
                                    size="small"
                                    icon={<Circle className={styles.unchecked}/>}
                                    checkedIcon={<CheckCircle className={styles.checked}/>}
                                    name='checked'
                                    value={item}
                                    checked={checkedArr.includes(item)}
                                    onChange={onChange}
                                    />}
                          label={item}
                          className={styles.checkbox}
                          key={index}
        />
    ))

    return (
        <div>
            {checkboxList}
        </div>
    )
}