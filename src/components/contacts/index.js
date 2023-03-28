import React from "react";
import styles from "./contacts.module.scss";
import { clsx } from 'clsx';


import ContactItem from "../contactItem";

export default function Contacts(props){
    const {className, itemClassName} = props;
    return(
        <div className={clsx(styles.wrap, className)}>
            <ContactItem itemClassName={itemClassName}/>
        </div>
    )
}