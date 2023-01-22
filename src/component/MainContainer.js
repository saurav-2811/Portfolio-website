import React from "react";
import SocialIcon from "./SocialIcon";
import sauravIcon from "../assets/images/sauravicon.png";
import useMedia from "../hooks/useMedia";
const MainContainer = () => {
  const media = useMedia("(max-width : 1150px )");
  return (
    <div className="row m-0 h-100">
      <div className="col-1 d-flex flex-column justify-content-end align-items-center">
        <SocialIcon />
        <div className="virtical-line mx-auto" />
      </div>
      <div className="col-10" style={{ overflowY: "scroll", height: "80vh" }}>
        <div className="d-flex justify-content-center align-items-center text-center text-white mt-4">
          <div>
            <img className="mx-auto" src={sauravIcon} alt="icon" height="150" />
          </div>
          <div>
            <h6 className="mx-3 mt-4">
              Looking for &nbsp;
              <span style={{ fontSize: "150%", color: "purple" }}>
                Developer
              </span>
              ,
              <br />
              who develop software and scale it ?
            </h6>
          </div>
        </div>
        <div className="row mt-4 text-center text-white">
          <h4>
            Hi my name is{" "}
            <span style={{ fontSize: "180%", color: "purple" }}>
              SauravDeep!
            </span>
          </h4>
        </div>
        <div className="row mt-3 text-center text-white px-2 ">
          <h5>
            I am passionate software engineer{" "}
            <span style={{ color: "purple" }}>(Backend Developer)</span>{" "}
            exploring and developing cool stuff for companies from approx last 2
            years.
            <br />
            <br />I love to develop and scale software products so it can make
            every one life easier and solve bigger problem.
          </h5>
        </div>
        <div className="text-center row  mt-3 text-white ">
          <h5>The technolodgies that I mainly worked on are:-</h5>
          <div
            className={`d-flex justify-content-between flex-wrap ${
              !media ? "w-50" : "w-100"
            } mx-auto mt-3 text-start`}
            style={{ color: "purple", overflowX: "scroll", fontSize: "120%" }}
          >
            <ul>
              <li>Mongo Db</li>
              <li>Express js</li>
              <li>React js</li>
              <li>Node js</li>
            </ul>
            <ul>
              <li>Nest js</li>
              <li>Postgres sql</li>
              <li>Redis</li>
              <li>jira</li>
            </ul>
            <ul>
              <li>AWS</li>
              <li>Graphql</li>
              <li>JavaScript</li>
              <li>Git/Github</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-1 d-flex flex-column justify-content-end">
        <div className="virtical-line mx-auto" style={{ height: "30vh" }} />
      </div>
    </div>
  );
};

export default MainContainer;
