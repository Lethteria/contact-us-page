import React from 'react';
import styles from "./headerNavBar.module.scss";
import HeaderNavLinksDesktop from "../headerNavLinksDesktop";
import HeaderNavMenu from "../headerNavMenu";
import HeaderNavDrawer from "../headerNavDrawer";
import MenuButton from "../menuButton";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';

export default function HeaderNavBar() {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const toggleDrawer = (bool) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setShowDrawer(bool);
    };

    return (
        <AppBar position="static"
                className={styles.wrap}
        >
            <Container>
                <Toolbar disableGutters>

                    <Typography variant="h3"
                                color="black">
                        Logo here
                    </Typography>


                    <Box className={styles.drawerWrap}>
                         <MenuButton onClickMenu={toggleDrawer(true)}/>

                         <Drawer anchor='right'
                                 open={showDrawer}
                                 onClose={toggleDrawer(false)}
                         >
                             <HeaderNavDrawer onClick={toggleDrawer(false)}
                                              onKeyDown={toggleDrawer(false)}
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
