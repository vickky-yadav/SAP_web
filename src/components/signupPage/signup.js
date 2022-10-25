import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import facebook from "./../../images/facebook.png";
import mail from "./../../images/mail.png";
import github from "./../../images/github.png";

const SignupPage = () => {
  const EMPTY_STRING = "";

  const [apiData, setApiData] = useState([]);
  const [name, setName] = useState(EMPTY_STRING);
  const [password, setPassword] = useState(EMPTY_STRING);
  const [reEnterPassword, setReEnterPassword] = useState(EMPTY_STRING);
  const [email, setEmail] = useState(EMPTY_STRING);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((dataNew) => {
      setApiData(dataNew.data);
    });
  }, []);

  const newData = apiData.map((country) => {
    return country.name.common;
  });

  return (
    <>
      <div className="mainDiv">
        <div className="leftDiv">
          <div className="internalLeftDiv">
            <div className="mainTag">
              <h1>Please Sign Up</h1>
            </div>
            <div className="inputFields">
              <input
                type="text"
                id="fname"
                name="fname"
                className="data"
                placeholder="Enter Full Name"
                autoComplete="off"
                value={name}
                onChange={(event) => setName(event.target.value)}
              ></input>
            </div>
            <div className="inputFields">
              <input
                type="email"
                id="email"
                name="email"
                className="data"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div className="inputFields">
              <input
                type="password"
                id="password"
                name="password"
                className="data"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </div>
            <div className="inputFields">
              <input
                type="reEnterPassword"
                id="reEnterPassword"
                name="reEnterPassword"
                className="data"
                placeholder="Re-enter Password"
                autoComplete="off"
                value={reEnterPassword}
                onChange={(event) => setReEnterPassword(event.target.value)}
              ></input>
            </div>
            <div className="inputFields">
              <select name="cars" id="cars" className="data">
                {newData.map((data) => {
                  return <option>{data}</option>;
                })}
              </select>
              <div className="inputFields">
                <button type="button" className="buttonData">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        <div className="rightDiv">
          <div className="signUpTag">
            <h1 className="mainTag2">SIGNUP WITH</h1>
            <div className="imagesBox">
              <img src={facebook} alt="" height="180px"></img>
              <img src={mail} alt="" height="190px" className="mail"></img>
              <img src={github} alt="" className="images"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
