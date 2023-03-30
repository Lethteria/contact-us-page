import React from "react";
import styles from "./contacts.module.scss";
import { clsx } from 'clsx';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';


import ContactItem from "../contactItem";

export default function Contacts(props){
    const {className, itemClassName} = props;

    let contactsData = [{href: "tel:+10123456789",
                         text: "+1012 3456 789",
                         icon: <PhoneInTalkIcon/>},
                        {href: "mailto:demo@gmail.comil",
                         text: "demo@gmail.comil",
                         icon: <EmailIcon/>},
                        {href: "https://goo.gl/maps/D6L8e9qUUHUaG1fS8",
                         text: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
                         icon: <RoomIcon/>}
                        ]
    const contactList = contactsData.map((item) =>
                            <ContactItem itemClassName={itemClassName}
                                         text={item.text}
                                         icon={item.icon}
                                         href={item.href}
                                         key={item.text}
                            />
                        )

    return(
        <div className={clsx(styles.wrap, className)}>
            {contactList}
        </div>
    )
}