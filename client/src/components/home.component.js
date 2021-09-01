import React from "react";
import axios from "axios";

import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faInfoCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Button, CardGroup, Row } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      id: [],
      showComponent: false,
      tutorials: [],
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/tutorial`).then((res) => {
      this.setState({ tutorials: res.data });
      // console.log(res);
      // console.log(res.data);
    });
  }

  deleteList = (t) => {
    const tut = { id: t._id, name: t.tName };
    console.log(tut);
    axios
      .delete(`http://localhost:8080/tutorial/${tut.id}`, {
        data: tut,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
        // let arr = this.state.tutorials;
        // console.log(arr);
        // let result = arr.filter((ele) => ele.name !== t.name);
        // this.setState({ tutorials: result });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <Row xs={1} md={2}>
          {/* {tutorials.tName} */}
          {this.state.tutorials.map((tutorial, index) => (
            <Card>
              <Card.Header>{tutorial.tName}</Card.Header>
              <Card.Body>
                <Card.Title>{tutorial.tDesc}</Card.Title>
                <Card.Text>{tutorial.tStatus}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to={`/viewmore/${tutorial._id}`}>
                  <Button variant="dark">
                    <FontAwesomeIcon icon={faInfoCircle} /> View more
                  </Button>
                </Link>{" "}
                <Link to={`/edittutorial/${tutorial._id}`}>
                  <Button id="delBtn" variant="primary">
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </Button>
                </Link>{" "}
                <Button
                  id="delBtn"
                  variant="danger"
                  onClick={() => {
                    this.deleteList(tutorial);
                  }}
                >
                  {/* <Button
                  id="delBtn"
                  variant="danger"
                  onClick={() => {
                    this.deleteList(tutorial);
                  }}
                ></Button> */}
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </Row>
        {/* <CardGroup>
          <Card>
            <Card.Header>HTML</Card.Header>
            <Card.Body>
              <Card.Title>Intoduction to HTML</Card.Title>
              <Card.Text>
                HTML is the standard markup language for Web pages{" "}
                <a href="#">view more...</a>
              </Card.Text>
            
            </Card.Body>
            <Card.Footer>
              <Button className="float-right" variant="danger">
                Delete
              </Button>
              <Button className="float-right" variant="primary">
                View more
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>CSS</Card.Header>
            <Card.Body>
              <Card.Title>Intoduction to CSS</Card.Title>
              <Card.Text>
                CSS is the language we use to style an HTML document. CSS
                describes how HTML elements should be displayed.
              </Card.Text>
              <a href="#">more</a>
            </Card.Body>
            <Card.Footer>
              <Button className="float-right" variant="danger">
                Delete
              </Button>
              <Button className="float-right" variant="primary">
                Edit
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>Javascript</Card.Header>
            <Card.Body>
              <Card.Title>Introduction to JavaScript</Card.Title>
              <Card.Text>
                JavaScript is the world's most popular programming language.
                JavaScript is the programming language of the Web. JavaScript is
                easy to learn.
              </Card.Text>
              <a href="#">more</a>
            </Card.Body>
            <Card.Footer>
              <Button className="float-right" variant="danger">
                Delete
              </Button>
              <Button className="float-right" variant="primary">
                Edit
              </Button>
            </Card.Footer>
          </Card>
        </CardGroup> */}
      </>
    );
  }
}
export default Cards;
