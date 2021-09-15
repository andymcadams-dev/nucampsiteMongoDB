import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, List, ListGroupItemHeading } from 'reactstrap';

function Footer(props) { 
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <ListGroupItemHeading>Links</ListGroupItemHeading>
              <List>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/account'>Account</Link></li>
                <li><Link to='/map'>Map</Link></li>
              </List>
          </Col>
          <Col>
            <img src="/assets/images/CanWeListen.png" alt="cwl" width="90" height="90" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Footer;