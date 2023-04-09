import React from "react";
import {Checkbox, FormControlLabel} from "@mui/material";
import {CheckCircle, Circle} from "@mui/icons-material";
import styles from "./checkboxBlock.module.scss";

export default function CheckboxBlock(props){
    const {labels, isChecked, onChangeChecked} = props;

    const checkboxList = labels.map((item,index) => (
        <FormControlLabel control={<Checkbox checked={isChecked[index].check}
                                             color="default"
                                             size="small"
                                             icon={<Circle className={styles.unchecked}/>}
                                             checkedIcon={<CheckCircle className={styles.checked}/>}
                                             value={item}
                                             onChange={onChangeChecked(index)}
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