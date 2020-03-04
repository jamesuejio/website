import React from "react";
import "./App.css";

const CircleSlider = ({ moveLeft, moveRight }) => {
  const addListeners = () => {
    document
      .getElementById("slider")
      .addEventListener("mousedown", mouseDown, false);
    document
      .getElementById("slider")
      .addEventListener("touchstart", mouseDown, false);
    window.addEventListener("mouseup", mouseUp, false);
    window.addEventListener("touchend", mouseUp, false);
  };

  const divMove = e => {
    const sliderDiv = document.getElementById("slider");
    const titleDiv = document.getElementById("james");
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    sliderDiv.style.left = clientX - 23 + "px";
    titleDiv.style.left = clientX - 62 + "px";
    if (clientX > window.innerWidth / 2) {
      document.getElementsByClassName("left")[0].style.zIndex = 2;
      document.getElementsByClassName("right")[0].style.zIndex = 1;
      moveLeft(clientX + "px");
    } else {
      document.getElementsByClassName("right")[0].style.zIndex = 2;
      document.getElementsByClassName("left")[0].style.zIndex = 1;
      moveRight(window.innerWidth - clientX + "px");
    }
  };
  const mouseUp = () => {
    const appDown = document.getElementsByClassName("Appdown")[0];
    if (appDown !== undefined) {
      appDown.className = "App";
    }
    window.removeEventListener("mousemove", divMove, true);
    window.removeEventListener("touchmove", divMove, true);
  };
  const mouseDown = () => {
    document.getElementsByClassName("App")[0].className = "Appdown";
    window.addEventListener("mousemove", divMove, true);
    window.addEventListener("touchmove", divMove, true);
  };
  window.onload = addListeners;

  return (
    <div className="circle-slider" id="slider">
      <div className="circle-inner">&#10234;</div>
    </div>
  );
};

export default CircleSlider;
