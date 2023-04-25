import React from 'react';
import styles from "./headerNavLinksTablet.module.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";

export default function HeaderNavLinksTablet(){

    const pages = [ {title: "Home",
        href: "#",
        subPages: false},
        {title: "Features",
            href: "#",
            subPages: [{title: 'item1', href: "#"},{title: 'item2', href: "#"}]},
        {title: "Blog",
            href: "#",
            subPages: false},
        {title: "Shop",
            href: "#",
            subPages: false},
        {title: "About",
            href: "#",
            subPages: [{title: 'item4', href: "#"},{title: 'item5', href: "#"},{title: 'item6', href: "#"}]},
        {title: "Contact",
            href: "#",
            subPages: false}
    ];

    function drowSubpages(arr){
        return arr.map((subpage, index) => (
                    <a href={subpage.href} key={index}>
                        <span>
                            {subpage.title}
                        </span>
                    </a>
              ))
    }

    return(
        <ul className={styles.links}>
            {pages.map((page) => {
                return (
                    <li key={page.title}>
                        {( page.subPages && page.subPages !== 0
                        )?(
                            <>
                                <Accordion className={styles.submenu}>

                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={styles.submenuTitle}
                                    >
                                        <Typography>{page.title}</Typography>
                                    </AccordionSummary>

                                    <AccordionDetails className={styles.submenuLinks}>
                                        {drowSubpages(page.subPages)}
                                    </AccordionDetails>

                                </Accordion>
                            </>
                        ):(
                            <a href={page.href} >
                                <span>
                                    {page.title}
                                </span>
                            </a>
                        )}
                    </li>
                )}
            )}
        </ul>
    )
}