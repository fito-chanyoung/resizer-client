import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Route";
import { option } from "./options";
import { ImageProps } from "./imageEntryItems";

import "../css/Nav.css";

export const Nav: React.FC<{}> = ({}) => {
  const [isLogin, isLoginSetstate] = React.useState<boolean>(false);
  const [isUpload, isUploadSetstate] = React.useState<boolean>(false);
  const [isUploadEnd, isUploadEndSetstate] = React.useState<boolean>(false);
  const [isPixel, isPixelSetState] = React.useState<boolean>(true);
  const [images, imageSetstates] = React.useState<Array<ImageProps>>([]);
  const [transformedImages, transformedImagesSetstates] = React.useState<
    Array<any>
  >([]);
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
    <nav className="navbar">
      <Router>
        <div id="navigator" className="box-shadow">
          <Link to="/" className="logo align-center">
            logo
          </Link>
          <div className="menu right align-center height100 ">
            {isLogin ? (
              <Link to="/logout" className="right order0 width20 desktop">
                <div>로그아웃</div>
              </Link>
            ) : (
              <Link to="/login" className="right order0 width20 desktop ">
                <div>로그인</div>
              </Link>
            )}
            <Link to="/signup" className="right order1 width20 desktop ">
              <div>가입하기</div>
            </Link>
            <div className="modal mobile box-shadow">
              <div>모달창</div>
            </div>
          </div>
        </div>
      </Router>
      <Routes
        isLogin={isLogin}
        images={images}
        imageSetstates={imageSetstates}
        isPixel={isPixel}
        option={option}
        optionHandler={optionSetStates}
        uploadToggler={isUploadSetstate}
        transformedImagesSetstates={transformedImagesSetstates}
        isUploadEndSetstate={isUploadEndSetstate}
      />
    </nav>
  );
};
