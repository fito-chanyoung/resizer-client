import "./css/App.css";
import React from "react";
import { Nav } from "./components/nav";
import { ImageUploader } from "./components/imageUploader";
import { option } from "./components/options";

export const App: React.FC<{}> = () => {
  const [isLogin, isLoginSetstate] = React.useState<boolean>(false);
  const [isPixel, isPixelSetState] = React.useState<boolean>(true);
  const [option, optionSetStates] = React.useState<option>({
    width: 0,
    height: 0,
    aspectRatio: true,
    doNotEnglare: true,
    percentage: 75,
    manualPercentage: false,
    multiple: false,
  });

  return (
    <div className="App">
      <Nav isLogin={isLogin} />
      <ImageUploader
        isPixel={isPixel}
        option={option}
        optionHandler={optionSetStates}
        methodToggler={isPixelSetState}
      />
    </div>
  );
};
