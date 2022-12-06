import React from 'react'
import { Container, Row, Col, FormGroup, Button, Form, Input } from 'reactstrap';
import classes from '../Message/Message.module.css';
import Image from 'next/image';
import message from '../../styles/Images/message.png';
import mobileImg from '../../styles/Images/mobile-msg-img.png';
const Message = () => {
    return (
        <Container >
            <div className={`${classes.message__box}`}>
                <Row>
                    <Col lg='6'>
                        <div className={`${classes.message__image}`}>
                            <Image src={message} alt='message' height='471px' width='524px'></Image>
                        </div>

                        <div className={`${classes.mobile__image}`}>
                            <Image src={mobileImg} alt='message'></Image>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className={`${classes.message__form}`}>
                            <h2>We would love to hear from you!</h2>
                            <Form>
                                <FormGroup className={`${classes.message__form}`}>
                                    <Input
                                        id='email'
                                        name='email'
                                        placeholder='Email address'
                                        type='email'
                                        required
                                    />
                                </FormGroup>
                                <FormGroup className={`${classes.message__form}`}>
                                    <Input
                                        id='message'
                                        name='message'
                                        placeholder='Message'
                                        type='text'
                                        required
                                    />
                                </FormGroup>
                                <div className={`${classes.messsage__sndMsg}`}>
                                    <Button color='primary' outline className={`${classes.message__button}`}>
                                        Send message
                                    </Button>
                                </div>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </div>

        </Container>
    )
}

export default Message