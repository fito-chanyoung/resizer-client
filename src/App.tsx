import "./css/App.css";
import React from "react";
import { Nav } from "./components/nav";

export const App: React.FC<{}> = () => {
  // let test: React.MouseEventHandler<HTMLDivElement> = function (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) {
  //   e.preventDefault();
  //   let target: string[] = ["2020.jpg", "egg.png"];
  //   target.forEach((index) => {
  //     fetch(
  //       `https://testuploadcli.s3.ap-northeast-2.amazonaws.com/images/${index}`
  //     )
  //       .then((response) => response.blob())
  //       .then((blob) => {
  //         const url = window.URL.createObjectURL(new Blob([blob]));

  //         const link = document.createElement("a");
  //         link.href = url;
  //         console.log(blob);
  //         link.setAttribute("download", `${index}`);

  //         // Append to html link element page

  //         // Start download
  //         link.click();

  //         // Clean up and remove the link
  //       });
  //   });
  //};

  return (
    <div className="App">
      <Nav />
    </div>
  );
};
