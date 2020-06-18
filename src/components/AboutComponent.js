import React from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media} from "reactstrap";
import { Link } from "react-router-dom";
import { Fade, Stagger } from "react-animation-components";

import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderLeader(props) {
  return (
    <Media>
      <Media left middle href="#">
        <Media object src={baseUrl + props.leader.image} alt={props.leader.name} />
      </Media>
      <Media body className="pl-5">
        <Media heading>{props.leader.name}</Media>
        <p>{props.leader.designation}</p>
        <p>{props.leader.description}</p>
      </Media>
    </Media>
  );
}

function About(props) {
  let leaders = "";
  if (props.leaders.isLoading) {
    leaders = (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } 
  else if (props.leaders.errMess) {
    leaders = (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } 
  else if (props.leaders.leaders) {
    leaders = props.leaders.leaders.map((leader, i) => {
      return (
        <Fade in>
          <li className="list-unstyled">
            <RenderLeader key={i} leader={leader}></RenderLeader>
          </li>
        </Fade>
      );
    });
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Started in 2017, Chen's House quickly established itself as
            a culinary icon par excellence in United State. With its unique brand
            of taiwanese traditional cuisine that can be found nowhere else, it enjoys
            patronage from the A-list clientele in United Stated. Featuring four of
            the best three-star Michelin chefs in the world, you never know what
            will arrive on your plate the next time you visit us.
          </p>
          <p>
            The restaurant traces its humble beginnings to{" "}
            <em>The Frying Pan</em>, a successful chain started by our CEO, Mr.
            Stanley Chen, that featured for the first time the world's best
            cuisines in a pan.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">31 Nov. 2017</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">TW Foods Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">4</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  If a tomato is a fruit, is ketchup a tomato smoothie?
                </p>
                <footer className="blockquote-footer">
                  Ketchup,
                  <cite title="Source Title">
                    Unsolve questions?, T. Name, Books,
                    2000
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2 className="text-left">Corporate Leadership</h2>
        </div>
        <div className="col-12">
          <Media list>
            <Stagger in>{leaders}</Stagger>
          </Media>
        </div>
      </div>
    </div>
  );
}

export default About;