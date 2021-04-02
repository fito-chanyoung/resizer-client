import "./css/App.css";
import React from "react";
import { Nav } from "./components/nav";
import { ImageUploader } from "./components/imageUploader";

export const App: React.FC<{}> = () => {
  const [isLogin, isLoginSetstate] = React.useState<boolean>(false);
  const [isPixel, isPixelSetState] = React.useState<boolean>(false);
  const [option, optionSetStates] = React.useState<object>({});

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
