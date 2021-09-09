/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  
  Button,
  Card,
  CardBody,
 
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>


              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        ASAC-LTUC is powerful place to get knowlege{" "}
                        <span>software development</span>
                      </h1>
                      <p className="lead text-white">
                       My Ambitious and my deep belief in the necessity of making it suitable for my 
                       personality and my enthusiasm is the thing that encouraged me to enter this experience
                        and gain as much knowledge and knowledge as possible. I trust this course to do this. 
  I'm Always enthusiastic to gain scientific and practical experience that makes me a better person 
  This course encourages me every day to get up early and start new and interesting challenges
 
                      </p>
                      <div className="btn-wrapper">
                        
                       
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                                                    <p className="description mt-3">
                             <div className="shape shape-style-1 shape-default alpha-4">
              <span> CSS, Amman— Trainee (June 2013 - August 2013) : Network, cyber security
              </span>
              <span>MEMR, Amman — Trainee(April 2015 - Sep 2015): Trainee at Jordan Ministry of Energy and Mineral Resources(MEMR) in IT department
              </span>
              <span> NITC, Amman — Trainee(Sep 2014 - March 2015) : Trainee at National Information Technology Center (NITC) in system department and SQL (database), ADCL services , DNS services

              </span>
              <span>Alawneh Exchange , Amman — Teller(Oct 2015 - May 2019):Customer service in exchange and transfer many such as personal & commercial transfer (SWIFT, Internal & External ) , AML

              </span>
              <span>Tazkeya International Academy , Amman — Teacher(June 2020- June 2021):Teaching ICT cambridge & handling all IT issues (maintenance) created a platform for online learning and monitored it and solved for all users any problem faced by them .

              </span>
              <span>LTUC- ASAC scholarship  , Amman — Trainee(July 2021- present):Training about software development and programming (CSS, HTML, JS..etc) .
              </span>
            </div>
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
                      </Row>
                    </Col>
                    
                    
              </Row>
          
          
          
              
               
                
               
                
            </Container>
          </section>
         
         
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
