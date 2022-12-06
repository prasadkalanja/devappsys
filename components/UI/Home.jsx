import React from 'react';
import classes from '../UI/Home.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import grid1 from '../../styles/Images/gride-img1.png';
import grid2 from '../../styles/Images/gride-img2.png';
import grid3 from '../../styles/Images/gride-img3.png';
import grid4 from '../../styles/Images/gride-img4.png';
import ellipse2 from '../../styles/Images/Ellipse3.png';
import Message from '../Message/Message';
import logo1 from '../../styles/Images/Client-logo/client-logo1.png';
import logo2 from '../../styles/Images/Client-logo/client-logo2.png';
import logo3 from '../../styles/Images/Client-logo/client-logo3.png';
import logo4 from '../../styles/Images/Client-logo/client-logo4.png';
import 'react-multi-carousel/lib/styles.css';
import dynamic from 'next/dynamic';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//for react-owl-carousel
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");

}


const responsive = {
    0: {
        items: 2.5,
        margin: 5
    },
    580: {
        items: 2.5,
        margin: 10
    },
    768: {
        items: 2.5,
        margin: 10
    },
    900: {
        items: 2.5,
        margin: 10
    },
    1200: {
        items: 3.5,
        margin: 20
    },
    1400: {
        items: 3.5,
        margin: 20
    },
};

const Responsive = {
    0: {
        items: 1,
        margin: 3,

    },
    580: {
        items: 1,
        margin: 3,

    },
    768: {
        items: 1,
        margin: 3,

    },
    900: {
        items: 1,
        margin: 3,

    },
}


const Home = () => {
    return (
        <div>
            <div className={`${classes.bg__color}`}>
                <div className={`${classes.home__image}`}>
                    <div className={`${classes.home__webSite}`}>
                        <div className={`${classes.home__textOverImage}`}>
                            <span>Lorem ipsum dolor sit  amet, consectetur adipiscing elit.</span> <br />
                        </div>

                        <div className={`${classes.home__smallText}`}>
                            <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non in
                                sollicitudin nibh volutpat urna tellus. Diam, mattis imperdiet orci senectus dignissim pharetra, lobortis.</span>
                        </div>

                        <div className={`${classes.home__talkUs}`}>
                            <Button color='primary' outline className={`${classes.home__button}`} href='/Contact'>Talk to us</Button>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`${classes.home__responsive}`}>
                <div className={`${classes.home__textOverImage}`}>
                    <span>Lorem ipsum dolor sit  amet, consectetur adipiscing elit.</span> <br />
                </div>

                <div className={`${classes.home__smallText}`}>
                    <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non in
                        sollicitudin nibh volutpat urna tellus. Diam, mattis imperdiet orci senectus dignissim pharetra, lobortis.</span>
                </div>

                <div className={`${classes.home__talkUs}`}>
                    <Button color='primary' outline className={`${classes.home__button}`} href='/Contact'>Talk to us</Button>
                </div>
            </div>

            <div className={`${classes.home__carousel}`}>
                <Row>
                    <Col lg='5'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                            non in sollicitudin nibh volutpat urna tellus. Diam, mattis
                            imperdiet orci senectus dignissim pharetra, lobortis.</span> <br /><br />
                        <Link href='#'>Learn More </Link>
                        {/* <a href='#'><i class="ri-arrow-right-line" /></a> */}

                    </Col>
                    <Col lg='7' className={`${classes.gradient}`} >
                        <div>
                            <ReactOwlCarousel
                                loop
                                nav={false}
                                responsive={responsive}
                                autoplay={true}
                                dots={false}
                                autoplayTimeout={2000}
                                autoplaySpeed={2000}
                                autoplayHoverPause={false}
                                mouseDrag={false}

                            >
                                <div className={`${classes.logo__carousel}`}>
                                    <Image src={logo1.src} alt='' layout='fill'></Image>
                                </div>
                                <div className={`${classes.logo__carousel}`}>
                                    <Image src={logo2.src} alt='' layout='fill' />
                                </div>
                                <div className={`${classes.logo__carousel}`}>
                                    <Image src={logo3.src} alt='' layout='fill' />
                                </div>
                                <div className={`${classes.logo__carousel}`}>
                                    <Image src={logo4.src} alt='' layout='fill' />
                                </div>
                                <div className={`${classes.logo__carousel}`}>
                                    <Image src={logo4.src} alt='' layout='fill' />
                                </div>
                            </ReactOwlCarousel>
                        </div>

                    </Col>
                </Row>
            </div>

            <div className={`${classes.home__gridimg}`}>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className={`${classes.home__gridAlign}`}>
                                <div className={`${classes.home__gridRow}`}>
                                    <Image src={grid1} alt='grid-img1' />
                                    <Image src={grid3} alt='grid-img2' />
                                </div>
                                <div className={`${classes.home__gridRow}`}>
                                    <Image src={grid2} alt='grid-img3' />
                                    <Image src={grid4} alt='grid-img4' />
                                </div>

                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className={`${classes.home__gridtxt}`}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                                    non in sollicitudin nibh volutpat urna tellus.</span>
                            </div>
                            <div className={`${classes.home__list}`}>
                                <ul>
                                    <li><i className="ri-checkbox-blank-circle-line" /><span>Lorem Ipsum</span></li>
                                    <li><i className="ri-checkbox-blank-circle-line" /><span>Lorem Ipsum</span></li>
                                    <li><i className="ri-checkbox-blank-circle-line" /><span>Lorem Ipsum</span></li>
                                </ul>

                            </div>
                        </Col>
                    </Row>
                    <div className={`${classes.home__fulltxt}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non in sollicitudin nibh volutpat urna tellus.</p>
                    </div>
                    <div className={`${classes.home__circle}`}>
                        <Row>
                            <Col lg='3'>
                                <Image src={ellipse2} alt='rounded-img1'></Image><br />
                                <span>Lorem Ipsum</span>
                            </Col>
                            <Col lg='3'>
                                <Image src={ellipse2} alt='rounded-img1'></Image><br />
                                <span>Lorem Ipsum</span>
                            </Col>
                            <Col lg='3'>
                                <Image src={ellipse2} alt='rounded-img1'></Image><br />
                                <span>Lorem Ipsum</span>
                            </Col>
                            <Col lg='3'>
                                <Image src={ellipse2} alt='rounded-img1'></Image><br />
                                <span>Lorem Ipsum</span>
                            </Col>
                        </Row>
                    </div>

                    <div className={`${classes.home__circleCarousel}`}>
                        <Row>
                            <div>
                                <ReactOwlCarousel
                                    loop
                                    autoplay={true}
                                    responsive={Responsive}
                                    autoplayTimeout={2000}
                                    autoplaySpeed={1000}
                                    autoplayHoverPause={false}
                                >

                                    <div className={`${classes.home__circlepPadding}`}>
                                        <Image src={ellipse2.src} alt='' layout='fill' objectFit='contain'></Image>

                                    </div>
                                    <div className={`${classes.home__circlepPadding}`}>
                                        <Image src={ellipse2.src} alt='' layout='fill' objectFit='contain'></Image>

                                    </div>
                                    <div className={`${classes.home__circlepPadding}`}>
                                        <Image src={ellipse2.src} alt='' layout='fill' objectFit='contain'></Image>
                                    </div>
                                </ReactOwlCarousel>
                            </div>
                        </Row>
                        <h4>Lorem ipsum</h4>
                    </div>
                </Container>
            </div>
            <Message />

        </div>


    )
}

export default Home