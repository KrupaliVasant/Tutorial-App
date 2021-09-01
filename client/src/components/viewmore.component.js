import React from "react";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import { Card } from "react-bootstrap";

export default class Viewmore extends React.Component {
  constructor({ location }) {
    super({ location });
    this.state = {
      id: [],
      players: [],
      value: "",
      tutorials: [],
    };
  }

  componentDidMount() {
    let path = window.location.pathname.split("/")[2];
    console.log(path);
    axios.get(`http://localhost:8080/tutorial/${path}`).then((res) => {
      this.setState({ tutorial: res.data });
      console.log(res);
      console.log(res.data);
    });
  }

  render() {
    return (
      <>
        {
          <Card>
            <Card.Header>{this.state.tutorial?.tName}</Card.Header>
            <Card.Body>
              <Card.Title>{this.state.tutorial?.tDesc}</Card.Title>
              <Card.Text>{this.state.tutorial?.tStatus}</Card.Text>
            </Card.Body>
          </Card>
        }

        {/* <footer class="footer mt-auto py-3">
          <div class="container">
            <span class="text-muted">lorem</span>
          </div>
        </footer> */}
      </>
    );
  }
}
