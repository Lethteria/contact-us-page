import React from "react";
import styles from "./subscribeForm.module.scss";
import {Button, TextField} from "@mui/material";


export default function SubscribeForm(){
    return (
        <div className={styles.wrap}>
            <form action="">
                <TextField
                    type="textarea"
                    placeholder="Your email address"
                    variant="standard"
                    color="greyDark"
                    className={styles.input}

                />

                <Button variant="contained"
                        disableElevation
                        className={styles.button}>
                    Subscribe
                </Button>
                <p className={styles.message}>*  Will send you weekly updates for your better tool management.</p>
            </form>
        </div>
    )
}