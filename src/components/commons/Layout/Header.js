import React from 'react';
import {useLocation} from 'react-router-dom';
import unplashLogo from "../../../assets/images/logo_unplash.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import '../../../assets/css/Header.css';

const Header = () => {

    const location = useLocation();

    return (
        <header className="header">
        <Link to="/">
            <div className="header-logo">
                <img src={unplashLogo} alt ="unsplash-log" />
            </div>
        </Link>
            <nav className="header-nav">
            {
                location.pathname !=='/user-zone' ?
                    <Button  variant="outlined" component={Link} to="/user-zone">
                        <FontAwesomeIcon 
                            icon={ faUserAlt } 
                        />
                    </Button>
                :
                    <Button variant="outlined" component={Link} to="/">
                        <FontAwesomeIcon 
                            icon={ faHome } 
                        />
                    </Button>
            }
            </nav>
        </header>
    )
}

export default Header;