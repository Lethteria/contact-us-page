import React from 'react';
import styles from "./headerNavDrawer.module.scss";
import Box from "@mui/material/Box";
import HeaderNavMenu from "../headerNavMenu";
import HeaderNavLinksDesktop from "../headerNavLinksDesktop";
import {Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';


export default function HeaderNavDrawer(props){

    const {onClick, onKeyDown} = props;

    return(
        <Box className={styles.wrap}
            role="presentation"
            onClick={onClick}
            onKeyDown={onKeyDown}
        >
            <div className={styles.header}>
                <Typography variant="h3"
                            color="white">
                    Logo here
                </Typography>

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={onClick}
                    color="white"
                    className={styles.button}
                >
                    <CloseIcon />
                </IconButton>
            </div>

            <HeaderNavLinksDesktop className={styles.link}/>

            <HeaderNavMenu className={styles.menu}/>
        </Box>
    )
}
