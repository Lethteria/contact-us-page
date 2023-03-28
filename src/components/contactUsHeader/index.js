import React from "react";
import styles from "./contactUsHeader.module.scss"
import {Typography} from "@mui/material";

export default function ContactUsHeader(){
    return(
        <div className={styles.header}>
            <Typography variant="h1" color="black">
                Contact Us
            </Typography>
            <p>Any question or remarks? Just write us a message!</p>
        </div>
    )
}