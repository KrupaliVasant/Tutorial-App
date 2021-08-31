import React from "react";

import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Card, Button, CardGroup } from "react-bootstrap";

export default class Viewmore extends React.Component {
  constructor({ location }) {
    super({ location });
    this.state = {
      id: [],
      players: [],
      value: "",
    };
  }

  componentDidMount() {
    let path = window.location.pathname.split("/")[2];
    console.log(path);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${path}`)
      .then((res) => {
        this.setState({ player: res.data });
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    return (
      <>
        {
          <Card>
            <Card.Header>{this.state.player?.id}</Card.Header>
            <Card.Body>
              <Card.Title>{this.state.player?.name}</Card.Title>
              <Card.Text>{this.state.player?.username}</Card.Text>
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
