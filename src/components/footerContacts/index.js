import React from "react";
import styles from "./footerContacts.module.scss";
import Contacts from "../contacts";
import {Typography} from "@mui/material";


export default function FooterContacts(){
    return (
        <>
            <Typography variant="h4">
                title
            </Typography>

            <Contacts className={styles.contacts}
                      itemClassName={styles.item}
            />
        </>
    )
}