import React, {FunctionComponent} from 'react'
import {AppBar,Toolbar,Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Button from '../Button';

type NavbarProps={
    items:{
        content: string,
    to: string,
    }[]
    
}

const Navbar:FunctionComponent<NavbarProps> = ({items},) => {
    return (
        <AppBar position="static">
            <Container maxWidth='xl' style={{display: 'flex', alignItems: 'center'}}>
            <h1 style={{fontSize: '16px'}}>Accountant System</h1>
            <Toolbar>
                {items.map(({content,to})=><Link key={to} to={to}><Button>{content}</Button></Link>)}
                
            </Toolbar>
            </Container>
        </AppBar>
    )
}

export default React.memo(Navbar);
