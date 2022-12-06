import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Image from 'next/image';
import hclasses from '../components/UI/Home.module.css';
import image from '../styles/Images/About-page.png'
import ellipse2 from '../styles/Images/Ellipse3.png';
import classes from '../styles/About.module.css';
import profile from '../styles/Images/profile.png';
import Message from '../components/Message/Message';
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




const About = () => {

    const styling = {
        backgroundImage: ` url('${image.src}')`,
        width: '100%',
        layout: 'responsive',
    }

    const bcolor = {
        background: " linear-gradient(269deg, #f6f9ff 0%, #000000 100%)",
        width: '100%',
        height: '100%',
    }

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

    return (
        <div>
            <div style={bcolor} >
                <div className={`${classes.about__image}`}>
                    <div className={`${hclasses.home__webSite}`}>
                        <div className={`${hclasses.home__textOverImage}`}>
                            <span>Lorem ipsum dolor sit amet, consectetur  adipiscing elit.</span>
                        </div>
                        <div className={`${hclasses.home__smallText}`}>
                            <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non in
                                sollicitudin nibh volutpat urna tellus. Diam, mattis imperdiet orci senectus dignissim pharetra, lobortis.</span>
                        </div>

                        <div className={`${hclasses.home__talkUs}`}>
                            <Button color='primary' outline className={`${hclasses.home__button}`} href='/Contact'>Talk to us</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${hclasses.home__responsive}`}>
                <div className={`${hclasses.home__textOverImage}`}>
                    <span>Lorem ipsum dolor sit  amet, consectetur adipiscing elit.</span> <br />
                </div>

                <div className={`${hclasses.home__smallText}`}>
                    <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non in
                        sollicitudin nibh volutpat urna tellus. Diam, mattis imperdiet orci senectus dignissim pharetra, lobortis.</span>
                </div>

                <div className={`${hclasses.home__talkUs}`}>
                    <Button color='primary' outline className={`${hclasses.home__button}`} href='/Contact'>Talk to us</Button>
                </div>
            </div>

            {/* </div> */}
            <Container>
                <div className={`${classes.about__responsive}`}>
                    <div className={`${hclasses.home__fulltxt}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non in<br /> sollicitudin nibh volutpat urna tellus.</p>
                    </div>
                </div>

                <div className={`${hclasses.home__circle}`}>
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

                <div className={`${hclasses.home__circleCarousel}`}>
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
                                <div className={`${hclasses.home__circlepPadding}`}>
                                    <Image src={ellipse2.src} alt='' layout='fill' objectFit='contain'></Image>

                                </div>
                                <div className={`${hclasses.home__circlepPadding}`}>
                                    <Image src={ellipse2.src} alt='' layout='fill' objectFit='contain'></Image>

                                </div>
                                <div className={`${hclasses.home__circlepPadding}`}>
                                    <Image src={ellipse2.src} alt='' layout='fill' objectFit='contain'></Image>
                                </div>
                            </ReactOwlCarousel>
                        </div>
                    </Row>
                    <h4>Lorem ipsum</h4>
                </div>

                <div className={`${classes.about__text}`}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non in sollicitudin nibh volutpat urna tellus.</span>
                </div>
                <div className={`${hclasses.home__list}`}>
                    <ul>
                        <li><i className="ri-checkbox-blank-circle-line"><span>Lorem Ipsum</span></i></li>
                        <li> <i className="ri-checkbox-blank-circle-line"><span>Lorem Ipsum</span></i></li>
                        <li><i className="ri-checkbox-blank-circle-line"><span>Lorem Ipsum</span></i></li>
                    </ul>

                </div>
                <div className={`${classes.about__grid}`}>
                    <Row>
                        <Col lg='3'>
                            <div className={`${classes.about__profileCeo}`}>
                                <Image src={profile} alt='profile'></Image>
                            </div>
                        </Col>
                        <Col lg='9'>
                            <div className={`${classes.about__gridText}`}>
                                <h2>Suhas Shetty, CEO</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices facilisis in rhoncus, egestas
                                    lacus. Sem porttitor sagittis, cras platea volutpat nunc pulvinar a. Aenean feugiat volutpat, diam
                                    dapibus. Adipiscing tempus purus penatibus in amet aliquet mi erat egestas.</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={`${classes.profile__container}`}>
                    <Row>

                        {/* <div className={`${classes.about__profileImg}`}>
                            <Image src={profile} alt='single-profile'></Image>

                            <Image src={profile} alt='single-profile'></Image>

                            <Image src={profile} alt='single-profile'></Image>

                            <Image src={profile} alt='single-profile'></Image>

                        </div>
                        <div className={`${classes.profile__name}`}>
                            <h3>Varun Rao</h3>

                            <p>Developer</p>

                        </div> */}

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Varun Rao</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Shashanth</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Wilson Pinto</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Om Prasad</h3>
                                <p>Developer</p>
                            </div>
                        </Col>
                    </Row>
                </div>


                <div className={`${classes.profile__container}`}>
                    <Row>
                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Mahesh gouda</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Siddant Nayak</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Chinnmaya H Rao</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Suneetha</h3>
                                <p>Developer</p>
                            </div>
                        </Col>
                    </Row>
                </div>


                <div className={`${classes.profile__container}`}>
                    <Row>
                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Koushik</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Nideesh</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Rakshitha</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Nikil</h3>
                                <p>Developer</p>
                            </div>
                        </Col>
                    </Row>
                </div>


                <div className={`${classes.profile__container}`}>
                    <Row>
                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Anusha</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Fazeena</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3> Avinash</h3>
                                <p>Developer</p>
                            </div>
                        </Col>

                        <Col lg='3'>
                            <div className={`${classes.about__profile}`}>
                                <Image src={profile} alt='single-profile'></Image>
                            </div>
                            <div className={`${classes.profile__name}`}>
                                <h3>Dheeraj</h3>
                                <p>Developer</p>
                            </div>
                        </Col>
                    </Row>
                </div>


            </Container>
            <Message />
        </div>
    )
}

export default About