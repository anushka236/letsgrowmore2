import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to='/' activeStyle>
                    <h3><b>LetsGrowMore</b></h3>
                </NavLink>

            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/get'>Get Users</NavBtnLink>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;