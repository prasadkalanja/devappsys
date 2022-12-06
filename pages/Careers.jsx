import Image from 'next/image';
import React from 'react';
import hclasses from '../components/UI/Home.module.css';
import classes from '../styles/Careers.module.css';
import image from '../styles/Images/career-page.png';
import { Button, Col, Container, Row } from 'reactstrap';
import gridImage from '../styles/Images/gride-img1.png';

const Careers = () => {
    const styling = {
        backgroundImage: `url('${image.src}')`,
        backgroundColor: 'black',
        width: '100%',
        layout: 'responsive',

    }
    const bcolor = {
        background: " linear-gradient(269deg, #f6f9ff 0%, #000000 100%)",
    }
    return (
        <>
            <div>
                <div style={bcolor}>
                    <div className={`${classes.career__image}`}>

                        <div className={`${hclasses.home__webSite}`}>
                            <div className={`${hclasses.home__textOverImage}`}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
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
                        <Button color='primary' className={`${hclasses.home__button}`} href='/Contact'>Talk to us</Button>
                    </div>
                </div>
                <Container>
                    <div className={`${classes.career__grid}`}>
                        <Row>
                            <Col lg='2'>
                                <div className={`${classes.career__singleGrid}`}>
                                    <Image src={gridImage} alt='grid'></Image>
                                </div>
                            </Col>
                            <Col lg='10 '>
                                <div className={`${classes.careers__gridText}`}>
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tellus non in sollicitudin nibh
                                        volutpat urna tellus.</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices facilisis in rhoncus, egestas
                                        lacus. Sem porttitor sagittis, cras platea volutpat nunc pulvinar a. Aenean feugiat volutpat, diam
                                        dapibus. Adipiscing tempus purus penatibus in amet aliquet mi erat egestas.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={`${classes.open__position}`}>
                        <h2> Open positions</h2>
                    </div >
                    <div className={`${classes.position__container}`}>
                        <div className={`${classes.position__title}`}>
                            <h2>Position title</h2>
                        </div>
                        <div className={`${classes.position__summary}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, sit lorem in faucibus amet, vestibulum.
                                Ut id proin mattis at in facilisis turpis. Vestibulum non blandit elementum quisque.
                                Lectus sed at et non. Ipsum nisl morbi purus, in. Venenatis volutpat ac volutpat arcu ac vel ac odio.
                                Mauris augue gravida mattis posuere magna. Suscipit diam orci ac, magna ut morbi praesent. Porttitor id commodo,
                                tellus at rutrum gravida. Non lobortis fermentum, in tincidunt. Ipsum, ullamcorper congue mauris interdum orci.
                                In nunc venenatis quis diam imperdiet aliquam tortor. Arcu aenean fermentum porttitor at in ultricies purus.
                                Est mauris nullam ac lectus fusce cras porta tincidunt amet.</p>
                        </div>
                        <div>
                            <Button color='primary' className={`${classes.apply__button}`} href=''>Apply</Button>
                        </div>
                    </div>
                    <br />
                    <div className={`${classes.position__container}`}>
                        <div className={`${classes.position__title}`}>
                            <h2>Position title</h2>
                        </div>
                        <div className={`${classes.position__summary}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, sit lorem in faucibus amet, vestibulum.
                                Ut id proin mattis at in facilisis turpis. Vestibulum non blandit elementum quisque.
                                Lectus sed at et non. Ipsum nisl morbi purus, in. Venenatis volutpat ac volutpat arcu ac vel ac odio.
                                Mauris augue gravida mattis posuere magna. Suscipit diam orci ac, magna ut morbi praesent. Porttitor id commodo,
                                tellus at rutrum gravida. Non lobortis fermentum, in tincidunt. Ipsum, ullamcorper congue mauris interdum orci.
                                In nunc venenatis quis diam imperdiet aliquam tortor. Arcu aenean fermentum porttitor at in ultricies purus.
                                Est mauris nullam ac lectus fusce cras porta tincidunt amet.</p>
                        </div>
                        <div>
                            <Button color='primary' className={`${classes.apply__button}`} href=''>Apply</Button>
                        </div>
                    </div>
                    <br />
                </Container>
            </div>
        </>
    )
}

export default Careers