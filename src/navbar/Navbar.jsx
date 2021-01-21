import React from 'react';
import {Button, Container, Menu, MenuItem} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <MenuItem as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="" style={{marginRight:15}} />
                    Re-vents
                </MenuItem>
                <MenuItem as={NavLink} to='/events' name='Events' />
                <MenuItem as={NavLink} to='/sandbox' name='Sandbox' />

                <MenuItem as={NavLink} to='/adduser' >
                    <Button positive inverted content='Add User' />
                </MenuItem>
                <MenuItem as={NavLink} to='/login' name='Login' position='right' />
                <MenuItem as={NavLink} to='/register' name='Register' />
            </Container>
        </Menu>
    );
};

export default NavBar;