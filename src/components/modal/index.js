import React from "react";
import styles from "./modal.module.scss";
import Dialog from '@mui/material/Dialog';
import {Alert} from "@mui/material";

export default function Modal(props){
    const {onCloseModal, openModal, userData} = props;

    return (
        <Dialog onClose={onCloseModal}
                open={openModal}
        >
            <Alert onClose={onCloseModal}>
                Your data was send
            </Alert>

            <div className={styles.wrap}>
                {Object.entries(userData).map( (item,index) => (
                        item[1].length ? <p key={index}> {item[0]} : {item[1]}</p> : null
                    )
                )}
            </div>

        </Dialog>
    )
}