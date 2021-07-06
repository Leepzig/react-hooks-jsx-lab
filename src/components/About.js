import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>Right now I'm jamming to 80s pop!</p>
    <img src={image} alt="I made this"></img>
  </div>)
}

export default About;
