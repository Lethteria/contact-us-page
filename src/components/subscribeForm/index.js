import React, {useRef} from "react";
import styles from "./subscribeForm.module.scss";
import {Button, TextField} from "@mui/material";


export default function SubscribeForm(){
    const textareaRef = useRef();

    function onSubmitForm(e){
        e.preventDefault();
        let value = textareaRef.current.value;

        console.log(value);
    }

    return (
        <div className={styles.wrap}>
            <form action="" onSubmit={onSubmitForm}>
                <TextField
                    type="textarea"
                    placeholder="Your email address"
                    variant="standard"
                    color="greyDark"
                    className={styles.input}
                    ref={textareaRef}
                />

                <Button variant="contained"
                        disableElevation
                        type="submit"
                        className={styles.button}>
                    Subscribe
                </Button>
                <p className={styles.message}>*  Will send you weekly updates for your better tool management.</p>
            </form>
        </div>
    )
}