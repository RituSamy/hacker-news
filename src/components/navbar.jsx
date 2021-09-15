import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavBar extends Component {
  state = {
    search: "",
  };

  handleSearch = (event) => {
    this.props.search(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <Navbar
          align="left"
          style={{ backgroundColor: "#FF742B", fontSize: 20, height: 50 }}
        >
          <Image
            src="https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"
            style={{ width: 50, height: 50 }}
          />
          <Navbar.Brand>Search Hacker News </Navbar.Brand>
          <Image
            src="https://static.thenounproject.com/png/14173-200.png"
            style={{ width: 20, height: 20 }}
          />
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleSearch}
            style={{
              width: 750,
              height: 40,
              display: "inline",
              borderRadius: 10,
              border: 0,
            }}
            placeholder="Search stories by title, url, or author"
          />
        </Navbar>

        <Navbar
          align="left"
          style={{ backgroundColor: "#F6F6EF", fontSize: 20, height: 50 }}
        >
          <Navbar.Text>Search by</Navbar.Text>
          <NavDropdown title={this.props.order} style={{ fontSize: 15 }}>
            {["Popularity", "Date"].map((order) => (
              <NavDropdown.Item
                onClick={() => this.props.sort(order)} // set the order to "Popularity" or "Date" and sort accordingly.
                key={order}
              >
                {order}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Navbar.Text>for</Navbar.Text>
          <NavDropdown title={this.props.timeScope} style={{ fontSize: 15 }}>
            {[
              "All time",
              "Last 24 h",
              "Past Week",
              "Past Month",
              "Past Year",
            ].map((timeScope) => (
              <NavDropdown.Item
                onClick={() => this.props.filter(timeScope)}
                key={timeScope}
              >
                {timeScope}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
