import React from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const Story = (props) => {
  let url = "";
  if (props.url) {
    url = (
      <Card.Link href={props.url} style={{ color: "grey" }}>
        ({props.url})
      </Card.Link>
    );
  }
  const style = { color: "grey", fontSize: 12 };

  return (
    <div align="left" style={{ backgroundColor: "#F6F6EF" }}>
      <Card>
        <Card.Body>
          {props.title} {url}
          <footer style={{ fontSize: 12 }}>
            <ButtonGroup>
              <Button href="#" style={style} variant="link" size="sm">
                {props.points} points
              </Button>
              <Button href="#" style={style} variant="link" size="sm">
                {props.author}
              </Button>
              <Button href="#" style={style} variant="link" size="sm">
                {props.displayTime} ago
              </Button>
              <Button href="#" style={style} variant="link" size="sm">
                {props.num_comments} comments
              </Button>
            </ButtonGroup>
          </footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Story;
