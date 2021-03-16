import React, {FunctionComponent} from 'react'
import {AppBar,Container} from '@material-ui/core';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import {NavbarProps} from '../componentsTypes/componentTypes'

const Navbar:FunctionComponent<NavbarProps> = ({items},) => {
    return (
        <AppBar position="static">
             <Container maxWidth='xl' style={{display: 'flex', alignItems: 'center'}}>
            <DesktopMenu items={items} className="hideOnMobile"/>
            <MobileMenu items={items} className="hideOnMobile"/>
            </Container>
        </AppBar>
    )
}

export default React.memo(Navbar);
