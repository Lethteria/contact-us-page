import React from "react";
import styles from "./contactItem.module.scss";

import {clsx} from "clsx";

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';

export default function ContactItem(props){
    return (
        <>
            <div className={clsx(styles.wrap, props.itemClassName)}>
                <a href="tel:+10123456789">
                    <PhoneInTalkIcon/>
                    <span className={styles.text}>+1012 3456 789</span>
                </a>
            </div>
            <div className={clsx(styles.wrap, props.itemClassName)}>
                <a href="mailto:demo@gmail.comil">
                    <EmailIcon></EmailIcon>
                    <span className={styles.text}>demo@gmail.comil</span>
                </a>
            </div>
            <div className={clsx(styles.wrap, props.itemClassName)}>
                <a href="#">
                    <RoomIcon></RoomIcon>
                    <span className={styles.text}>
                        132 Dartmouth Street Boston, Massachusetts 02156 United States
                    </span>
                </a>
            </div>

        </>

    )
}