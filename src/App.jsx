import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PollContent from "./components/main-content/PollContent";
import Sidebar from "./components/sidebar/Sidebar";

export default class App extends Component {
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Sidebar />
          </Col>
          <Col md={8}>
            <PollContent />
          </Col>
        </Row>
      </Container>
    );
  }
}
