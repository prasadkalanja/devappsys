import React, { useEffect, useRef, } from 'react'
import Image from 'next/image';
import { Container, Button, Navbar } from 'reactstrap';
import classes from '../Header/Header.module.css';
import Link from 'next/link';
import logo from '../../styles/Images/Devlogo.png'


const NAV__LINK = [
    {
        path: '/About',
        display: 'Who we are',
    },
    {
        path: '/Events',
        display: 'What we do',
    },
    {
        path: '/Careers',
        display: 'Career',
    },

]

const Header = () => {
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle(`${classes.menu__active}`);

    return (
        <header className={`${classes.header__sticky}`}>
            <div className={`${classes.header}`}>
                <div className={`${classes.header__start}`}>
                    <span>We’re looking for talented individuals. If that’s you, contact us!
                        {/* <div className={classes.header__hiring}> */}
                        <i className="ri-flashlight-fill"></i>
                        <Link href='/Careers'>We’re hiring!</Link>
                        {/* </div> */}
                    </span>
                </div>
                <Container>
                    <div className={`${classes.nav__wrapper}`}>
                        {/* -----Navigation logo---- */}
                        <div className={`${classes.logo}`}>

                            <Link href='/'>
                                <Image src={logo} alt='Devlogo'></Image>
                            </Link>

                        </div>
                        {/* ------Nav Menu----- */}
                        <div className={`${classes.navigation}`} ref={menuRef} onClick={toggleMenu}>
                            <div className={`${classes.nav__menu}`}>
                                {
                                    NAV__LINK.map((item, index) => (
                                        <Link href={item.path} key={index}>{item.display}</Link>
                                    ))
                                }

                                <Button color='primary' outline className={`${classes.header__Navbtn}`} href='/Contact'>Contact us</Button>
                            </div>
                        </div>
                        <span className={`${classes.mobile__menu}`}>
                            <i className="ri-menu-line" onClick={toggleMenu}></i>
                        </span>
                    </div>
                </Container>
            </div>
        </header>
    )
};

export default Header