import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import classes from '../Footer/Footer.module.css';

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
        display: 'Careers',
    },
    {
        path: '/Contact',
        display: 'Contact us',
    },
]

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div >
            <footer className={`${classes.footer}`}>

                <Container>
                    <Row>
                        <Col lg='4' >
                            <div className={`${classes.footer__contact}`} >
                                <h2>Contact us</h2>
                                <span>
                                    #206, Kushe Sadan,<br />
                                    Near PVS circle, <br />
                                    PVS, Mangalore- 575003
                                </span>

                                <h2>Follow us</h2>
                                <span>
                                    <a href='https://in.linkedin.com/company/devappsys' aria-label='linkedIn'><i className="ri-linkedin-box-fill" ></i></a>
                                    <a href='#' aria-label='Twiter'><i className="ri-twitter-fill" ></i></a>
                                    <a href='#' aria-label='Instagram'><i className="ri-instagram-fill"></i></a>
                                </span>

                            </div>
                        </Col>
                        <Col lg='4'>
                            <div className={`${classes.nav__menu}`}>
                                <h2>Links</h2>
                                {
                                    NAV__LINK.map((item, index) => (
                                        <Link href={item.path} key={index}>{item.display}</Link>
                                    ))
                                }
                            </div>
                        </Col>
                        <Col lg='4'>
                            <div className={`${classes.footer__link}`}>
                                <h2>Links</h2>
                                <Link href=''>Link1</Link>
                                <Link href=''>Link2</Link>
                                <Link href=''>Link3</Link>
                                <Link href=''>Link4</Link>

                            </div>
                        </Col>
                        {/* <Col lg='3'>
                            <div className={`${classes.footer__resContact}`}>
                                <h2>Contact us</h2>
                                <span>
                                    #206, Kushe Sadan,<br />
                                    Near PVS circle, <br />
                                    PVS, Mangalore- 575003
                                </span>

                                <h2>Follow us</h2>
                                <span>
                                    <a href='https://in.linkedin.com/company/devappsys' aria-label='linkedIn'><i className="ri-linkedin-box-fill" ></i></a>
                                    <a href='#' aria-label='Twiter'><i className="ri-twitter-fill" ></i></a>
                                    <a href='#' aria-label='Instagram'><i className="ri-instagram-fill"></i></a>
                                </span>

                            </div>

                        </Col> */}

                        {/* <Col lg='12' className={`${classes.footer}`}>
                    <div className={`${classes.footer__copyright}`}>
                        <p>@Copyright {year}-Develeped by Prasad. All right reserved.{" "} </p>
                    </div>
                </Col> */}
                    </Row>

                </Container>

            </footer>
            <div className={`${classes.footer__end}`}></div>
        </div>


    )

}

export default Footer