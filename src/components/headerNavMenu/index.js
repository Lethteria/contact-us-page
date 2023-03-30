import React from 'react';
import styles from "./headerNavMenu.module.scss";
import Icon from "../icon";
import {clsx} from "clsx";

export default function HeaderNavMenu(props){
    return (
        <div className={clsx(styles.wrap, props.className)}>
            <a href="#"
               className={styles.link}
            >
                <Icon iconType="user"></Icon>
            </a>
            <a href="#"
               className={styles.link}
            >
                <Icon iconType="shoppingCard"></Icon>
            </a>
        </div>
    )
}