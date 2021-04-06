import React from "react";
import "../css/optionToggler.css";

let toggleOption: React.MouseEventHandler<HTMLImageElement> = function () {
  let target: HTMLElement = document.querySelector(".option") as HTMLElement;

  target.style.width === "0px"
    ? (target.style.width = "300px")
    : (target.style.width = "0px");
};
export const OptionToggler: React.FC<{}> = () => {
  return (
    <div className="option-toggler">
      <img
        src="../public/plus.png"
        className="img-container"
        onClick={toggleOption}
      />
    </div>
  );
};
