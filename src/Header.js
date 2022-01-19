import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
    return ( 
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" /> 
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder='Search mail' type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header__right">

            </div>
        </div>
    )
}

export default Header

