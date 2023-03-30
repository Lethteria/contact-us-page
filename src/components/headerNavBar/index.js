import React from 'react';
import styles from "./headerNavBar.module.scss";
import HeaderNavLinksDesktop from "../headerNavLinksDesktop";
import HeaderNavMenu from "../headerNavMenu";
import HeaderNavDrawer from "../headerNavDrawer";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';




export default function HeaderNavBar() {

    const [state, setState] = React.useState({right: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, 'right': open });
    };

    return (
        <AppBar position="static"
                className={styles.wrap}>
            <Container>
                <Toolbar disableGutters>

                    <Typography variant="h3"
                                color="black">
                        Logo here
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                         className={styles.drawerWrap}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer('right', true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>


                        <Drawer
                            anchor='right'
                            open={state['right']}
                            onClose={toggleDrawer('right', false)}
                        >
                            <HeaderNavDrawer onClick={toggleDrawer('right', false)}
                                             onKeyDown={toggleDrawer('right', false)}
                            />
                        </Drawer>
                    </Box>


                    <div className={styles.menu}>
                        <HeaderNavLinksDesktop/>
                        <HeaderNavMenu/>
                    </div>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
