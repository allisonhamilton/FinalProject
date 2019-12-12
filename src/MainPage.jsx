import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class UnconnectedMainPage extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.props.allTasks.map(task => {
              return <li>{task}</li>;
            })}
          </ul>
        </div>
        <div>
          <ul>{this.user}</ul>
        </div>
        <div className="container-icon">
          <Link className="checklist-link" to="/checklist">
            <div className="mainpage-icon">
              Create a checklist for your wedding
            </div>
            <div>
              <img src="/uploads/clipboard.png" height="75px" />
            </div>
          </Link>
          <Link className="checklist-link">
            <div className="mainpage-icon">
              Join our community of wedding planners, brides and grooms
            </div>
            <div>
              <img src="/uploads/community.png" height="80px" />
            </div>
          </Link>
          <Link className="checklist-link">
            <div>Create a wedding budget</div>
            <div>
              <img src="/uploads/calculator.png" height="75px" />
            </div>
          </Link>
          <Link className="checklist-link">
            <div>Need some wedding ideas</div>
            <div>
              <img src="/uploads/idea.png" height="75px" />
            </div>
          </Link>
          <Link className="checklist-link">
            <div>Fashion ideas for the big day</div>
            <div>
              <img src="/uploads/dress.png" height="75px" />
            </div>
          </Link>
        </div>
        <Carousel>
          <div>
            <img src="/uploads/mainpage-photo1.jpg" />
          </div>
          <div>
            <img src="/uploads/mainpage-photo2.jpg" />
          </div>
          <div>
            <img src="/uploads/mainpage-photo3.jpg" />
          </div>
          <div>
            <img src="/uploads/mainpage-photo4.jpg" />
          </div>
          <div>
            <img src="/uploads/mainpage-photo5.jpg" />
          </div>
          <div>
            <img src="/uploads/mainpage-photo6.jpg" />
          </div>
        </Carousel>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.users,
    allTasks: state.allTasks
  };
};

let MainPage = connect(mapStateToProps)(UnconnectedMainPage);

export default MainPage;
