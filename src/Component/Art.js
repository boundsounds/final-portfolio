import React, { Component } from "react";
import { Card, CardColumns } from "react-bootstrap";
import Navigation from "./Navbar";
import pic1 from "../Art/boundsav6.png";
import pic2 from "../Art/boundsav1.png";
import pic3 from "../Art/boundsav2.png";
import pic4 from "../Art/boundsav3.png";
import pic5 from "../Art/boundsav4.png";
import pic6 from "../Art/boundsav5.png";
import pic7 from "../Art/boundsav7.png";
import pic8 from "../Art/boundsav8.png";
import pic9 from "../Art/boundsav9.png";
export class Art extends Component {
  render() {
    return (
      <div>
        <CardColumns>
          <Card>
            <Card.Img variant="top" src={pic1} />
            <Card.Body>
              <Card.Title>LET ME KNOW</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={pic2} />
            <Card.Body>
              <Card.Title>LOEV</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={pic3} />
            <Card.Body>
              <Card.Title>ALTIMETER</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={pic4} />
            <Card.Body>
              <Card.Title>THE INFINITE ROOM</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={pic5} />
            <Card.Body>
              <Card.Title>THROUGH THE LOOKING GLASS</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={pic6} />
            <Card.Body>
              <Card.Title>ANNA HOODS</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={pic7} />
            <Card.Body>
              <Card.Title>HINDSIGHT</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={pic8} />
            <Card.Body>
              <Card.Title>ENZYMATIC</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={pic9} />
            <Card.Body>
              <Card.Title>BERGAMOT</Card.Title>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Art;
