import React from "react";
import styles from "./contactItem.module.scss";

import {clsx} from "clsx";

export default function ContactItem(props){
    const {text, icon, href, itemClassName} = props;

    return (
            <div className={clsx(styles.wrap, itemClassName)}>
                <a href={href} target="_blank">
                    {icon}
                    <span className={styles.text}>
                        {text}
                    </span>
                </a>
            </div>
    )
}