import React from 'react'
import { Button, Container } from 'reactstrap';
import hclasses from '../components/UI/Home.module.css';
import contact from '../styles/Images/career-page.png';
import classes from '../styles/Contact.module.css';
import Message from '../components/Message/Message';

const Contact = () => {
    const styling = {
        backgroundImage: `url('${contact.src}')`,
        width: '100%',
        layout: 'responsive',
    }
    const bcolor = {
        background: " linear-gradient(269deg, #f6f9ff 0%, #000000 100%)",
    }
    return (
        <div>
            <div style={bcolor}>
                <div className={`${classes.contact__image}`}>
                    <div className={`${hclasses.home__webSite}`}>
                        <div className={`${hclasses.home__textOverImage}`}>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                        <div className={`${hclasses.home__smallText}`}>
                            <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non in
                                sollicitudin nibh volutpat urna tellus. Diam, mattis imperdiet orci senectus dignissim pharetra, lobortis.</span>
                        </div>

                        <div className={`${hclasses.home__talkUs}`}>
                            <Button color='primary' outline className={`${hclasses.home__button}`} href='/'>Talk to us</Button>
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
            <Container>
                <div className={`${classes.contact__responsive}`}>
                    <div className={`${hclasses.home__fulltxt}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non in sollicitudin nibh volutpat urna tellus.</p>
                    </div>
                </div>

                <div className={`${classes.contact__content}`}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida odio nisl amet consectetur dolor.
                        Suspendisse congue adipiscing in et, ornare. Tincidunt nisl molestie morbi viverra.
                        Egestas enim nunc aliquet curabitur mus.</span>
                </div>
            </Container>
            <Message />
        </div>
    )
}

export default Contact