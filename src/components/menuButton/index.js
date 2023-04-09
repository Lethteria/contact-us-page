import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

export default function MenuButton(props){
    return (
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={props.onClickMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
    )
}