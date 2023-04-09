import React from 'react';
import styles from "./HeaderNavLinks.module.scss";
import {clsx} from "clsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HeaderNavLinks(props){

    const pages = [ {title: "Home",
        href: "#",
        subPages: false},
        {title: "Features",
            href: "#",
            subPages: true},
        {title: "Blog",
            href: "#",
            subPages: false},
        {title: "Shop",
            href: "#",
            subPages: false},
        {title: "About",
            href: "#",
            subPages: false},
        {title: "Contact",
            href: "#",
            subPages: false}
    ];

    return(
        <div className={clsx(styles.wrap, props.className)}>
            {pages.map((page) => (

                <a href={page.href} key={page.title}>
                    <span>
                         {page.title}
                    </span>
                    {page.subPages ? <ExpandMoreIcon/> : null}
                </a>

            ))}
        </div>
    )
}