import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "../css/Nav.css";

export interface navProps {
  isLogin: boolean;
}

export const Nav: React.FC<navProps> = ({ isLogin }) => {
  return (
    <Router>
      <div id="navigator">
        <Link to="/" className="logo align-center">
          logo
        </Link>
        <div className="menu right align-center height100">
          {isLogin ? (
            <Link to="/logout" className="right order0 width20 desktop">
              <div>로그아웃</div>
            </Link>
          ) : (
            <Link to="/login" className="right order0 width20 desktop">
              <div>로그인</div>
            </Link>
          )}
          <Link to="/signup" className="right order1 width20 desktop">
            <div>가입하기</div>
          </Link>
          <div className="modal mobile">
            <div>모달창</div>
          </div>
        </div>
      </div>
    </Router>
  );
};
