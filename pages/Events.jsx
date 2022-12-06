import React, { useState } from 'react';
import { Button, Container, Row, Col, NavItem, NavLink, Nav, TabContent, TabPane } from 'reactstrap';
import hclasses from '../components/UI/Home.module.css';
import classes from '../styles/Events.module.css';
import event from '../styles/Images/event-page.png';
import project from '../styles/Images/profile.png';
import Image from 'next/image';
import Message from '../components/Message/Message';
import classnames from 'classnames';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBTabsItem, MDBTabsLink, MDBTabs, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';

const Events = () => {
    const bcolor = {
        background: " linear-gradient(269deg, #f6f9ff 0%, #000000 100%)",
    }
    const navlink = {
        fontFamily: 'Kanit',
        fontSize: '18px',
        fontWeight: '400',
        borderRadius: '33px',
        padding: '5% 5%',
        // color: 'black'
    }

    const [currentActiveTab, setCurrentActiveTab] = useState('1')

    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    //MDBTabPills

    const [basicActive, setBasicActive] = useState('tab1');
    const handleBasicClick = (value) => {
        if (value == basicActive) {
            return;
        }
        setBasicActive(value);
    };


    return (
        <div>
            <div style={bcolor}>
                <div className={`${classes.event__image}`}>
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

                <div className={`${classes.event__talkUs}`}>
                    <Button color='primary' outline className={`${classes.event__talkButton}`} href='/Contact'>Talk to us</Button>
                </div>
            </div>
            <Container>
                <div className={`${classes.event__responsive}`}>
                    <div className={`${hclasses.home__fulltxt}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non in<br /> sollicitudin nibh volutpat urna tellus.</p>
                    </div>
                </div>

                <div className={`${classes.event__content}`}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida odio nisl amet consectetur dolor.
                        Suspendisse congue adipiscing in et, ornare. Tincidunt nisl molestie morbi viverra.
                        Egestas enim nunc aliquet curabitur mus.</span>
                </div>

                <div className={`${classes.event__nav}`}>
                    <Nav pills fill>
                        <NavItem >
                            <NavLink className={classnames({
                                active:
                                    currentActiveTab === '1'
                            })}
                                onClick={() => { toggle('1'); }}
                                style={navlink}
                            >
                                All project

                            </NavLink>
                        </NavItem>

                        <NavItem >
                            <NavLink
                                className={classnames({
                                    active:
                                        currentActiveTab === '2'
                                })}
                                onClick={() => { toggle('2') }}
                                style={navlink}
                            >
                                Mobile Application
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={classnames({
                                    active:
                                        currentActiveTab === '3'
                                })}
                                onClick={() => { toggle('3') }}
                                style={navlink} >

                                ERP Solutions
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={classnames({
                                    active:
                                        currentActiveTab === '4'
                                })}
                                onClick={() => { toggle('4') }}
                                style={navlink}
                            >
                                E-Commerce Websites
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <br /><br />
                    <TabContent activeTab={currentActiveTab}>
                        <TabPane tabId="1">
                            <div className={`${classes.event__projectList}`}>
                                <Row>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3> Application Title</h3>
                                            <p>E-Commerce Website</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3> Application Title</h3>
                                            <p>ERP Solutions</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Application Title</h3>
                                            <p>E-commerce Websites</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </TabPane>

                        <TabPane tabId="2">
                            {/* <h4>Mobile Application</h4> */}
                            <div className={`${classes.event__projectList}`}>
                                <Row>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Mobile Application Title</h3>
                                            <p>Mobile Application</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </TabPane>

                        <TabPane tabId="3">
                            {/* <h4>ERP Solutions</h4> */}

                            <div className={`${classes.event__projectList}`}>
                                <Row>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Application Title</h3>
                                            <p>ERP Solution</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Application Title</h3>
                                            <p>ERP solution</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Application Title</h3>
                                            <p>ERP solution</p>
                                        </div>
                                    </Col>
                                </Row>


                            </div>
                        </TabPane>

                        <TabPane tabId='4'>
                            {/* <h4>E-Commerce Websites</h4> */}
                            <div className={`${classes.event__projectList}`}>
                                <Row>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3> Application Title</h3>
                                            <p>E-commerce website</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3> Application Title</h3>
                                            <p>E-commerce website</p>
                                        </div>
                                    </Col>
                                    <Col lg='4'>
                                        <div className={`${classes.event__projectImg}`}>
                                            <Image src={project} alt='project_title'></Image>
                                            <h3>Application Title</h3>
                                            <p>E-commerce website</p>
                                        </div>
                                    </Col>
                                </Row>



                            </div>
                        </TabPane>
                    </TabContent>

                </div>


                {/* <MDBTabs pills className='mb-3'>

                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            All Project
                        </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            Mobile Application
                        </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            ERP-Solutions
                        </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                            E-Commerce Websites
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane show={basicActive === 'tab1'}> </MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab2'}> </MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab3'}> </MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab4'}> </MDBTabsPane>
                </MDBTabsContent> */}




                {/* <div className={`${classes.event__button}`}>
                    <button className={classnames({
                        active:
                            currentActiveTab === '1'
                    })}
                        onClick={() => { toggle('1') }} style={btnlink}>All project</button>

                    <button className={classnames({
                        active:
                            currentActiveTab === '2'
                    })}
                        onClick={() => { toggle('2') }}>Mobile Application</button>

                    <button className={`${classes.event__btnList}`}>ERP Solutions</button>
                    <button className={`${classes.event__btnList}`}>E-commerce websites</button>
                </div> */}

                {/* <div className={`${classes.event__projectList}`} activeTab={currentActiveTab}>
                    <div tabId='1'>
                        <Row>
                            <Col lg='4'>
                                <div className={`${classes.event__projectImg}`}>
                                    <Image src={project} alt='project_title'></Image>
                                    <h3>Mobile Application Title</h3>
                                    <p>Mobile Application</p>
                                </div>
                            </Col>
                            <Col lg='4'>
                                <div className={`${classes.event__projectImg}`}>
                                    <Image src={project} alt='project_title'></Image>
                                    <h3>Mobile Application Title</h3>
                                    <p>Mobile Application</p>
                                </div>
                            </Col>
                            <Col lg='4'>
                                <div className={`${classes.event__projectImg}`}>
                                    <Image src={project} alt='project_title'></Image>
                                    <h3>Mobile Application Title</h3>
                                    <p>Mobile Application</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg='4'>
                                <div className={`${classes.event__projectImg}`}>
                                    <Image src={project} alt='project_title'></Image>
                                    <h3>Mobile Application Title</h3>
                                    <p>Mobile Application</p>
                                </div>
                            </Col>
                            <Col lg='4'>
                                <div className={`${classes.event__projectImg}`}>
                                    <Image src={project} alt='project_title'></Image>
                                    <h3>Mobile Application Title</h3>
                                    <p>Mobile Application</p>
                                </div>
                            </Col>
                            <Col lg='4'>
                                <div className={`${classes.event__projectImg}`}>
                                    <Image src={project} alt='project_title'></Image>
                                    <h3>Mobile Application Title</h3>
                                    <p>Mobile Application</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg='4'>
                                <div className={`${classes.event__projectImg}`}>
                                    <Image src={project} alt='project_title'></Image>
                                    <h3>Mobile Application Title</h3>
                                    <p>Mobile Application</p>
                                </div>
                            </Col>
                            <Col lg='4'>
                                <div className={`${classes.event__projectImg}`}>
                                    <Image src={project} alt='project_title'></Image>
                                    <h3>Mobile Application Title</h3>
                                    <p>Mobile Application</p>
                                </div>
                            </Col>
                            <Col lg='4'>
                                <div className={`${classes.event__projectImg}`}>
                                    <Image src={project} alt='project_title'></Image>
                                    <h3>Mobile Application Title</h3>
                                    <p>Mobile Application</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div> */}

                {/* <div className={`${classes.event__projectList}`} activeTab={currentActiveTab}>
                    <div tabId='2'>
                        <h4>jfhssbskkf</h4>
                    </div>
                </div> */}

            </Container>
            <Message />
        </div>
    )
}

export default Events