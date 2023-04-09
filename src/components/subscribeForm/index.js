import React from "react";
import styles from "./subscribeForm.module.scss";
import {UseInput} from "../../hooks/useInput";
import {Button, TextField} from "@mui/material";

export default function SubscribeForm(){

    const [inputData, onChangeInput] = UseInput({email: ""})

    function onSubmitForm(e){
        e.preventDefault();
        console.log(inputData);
        onChangeInput(e, true);
    }

    return (
        <div className={styles.wrap}>
            <form action="" onSubmit={onSubmitForm}>
                <TextField
                    type="textarea"
                    placeholder="Your email address"
                    variant="standard"
                    color="greyDark"
                    name="email"
                    value={inputData.email}
                    onChange={onChangeInput}
                    className={styles.input}
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