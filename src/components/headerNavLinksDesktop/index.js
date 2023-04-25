import React from 'react';
import styles from "./HeaderNavLinksDesktop.module.scss";
import {clsx} from "clsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Menu, MenuItem} from "@mui/material";

export default function HeaderNavLinksDesktop(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openIndex, setOpenIndex] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleClick(e){
        let el = e.currentTarget;
        setAnchorEl(() => el);
        setOpenIndex(() => el.getAttribute("data-open"))
    }

    function handleCloseNavMenu(){
        setAnchorEl(null);
    }

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

    function drownSubpages(arr){
      return  arr.map((subpage, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <a href={subpage.href}>
                        <span>{subpage.title}</span>
                    </a>
                </MenuItem>
            ))
    }

    return(
        <ul className={styles.wrap}>
            {pages.map((page,index) => {
                return (
                    <li key={page.title}>
                        {( page.subPages && page.subPages !== 0
                         )?(
                                <>
                                    <a href="#" role="button"
                                       aria-controls={open ? `menu-appbar${index}` : undefined}
                                       aria-haspopup="true"
                                       aria-expanded={open ? 'true' : undefined}
                                       onClick={handleClick}
                                       data-open={`${index}`}
                                    >
                                        {page.title}
                                        <ExpandMoreIcon className={clsx({[styles.opened]: open && openIndex === `${index}`})}/>
                                    </a>

                                <Menu
                                    id={`menu-appbar${index}`}
                                    anchorEl={anchorEl}
                                    open={(open && openIndex === `${index}`)}
                                    onClose={handleCloseNavMenu}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    sx={{
                                         '& .MuiPaper-root': {
                                                boxShadow:
                                                    `0 1px 1px -1px rgba(0,0,0,0.2),
                                                     0 1px 1px 1px rgba(0,0,0,0.14),
                                                     0 1px 1px 1px rgba(0,0,0,0.12);`,
                                         }
                                    }}
                                    className={styles.submenu}
                                >
                                    {drownSubpages(page.subPages)}
                                </Menu>
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