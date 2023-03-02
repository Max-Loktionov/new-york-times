import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  width: 100%;
  padding: 0 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 16px;
  border-radius: 4px;
  background-color: #6c696c7a;
  color: #00e5ff;
  box-shadow: rgb(6 24 44 / 40%) -1px 2px 0px -1px,
    rgb(6 24 44 / 65%) 0px 1px 2px -1px, rgb(255 255 255 / 8%) 0px 1px 0px inset;
`;
export const NavContainer = styled.nav`
  @media screen and (max-width: 900px) {
    display: grid;
    position: absolute;
    background-color: #6c696c7a;
    top: 86px;
  }
`;
export const NAVLink = styled(NavLink)`
  padding: 4px;
  margin: 4px;
  border-radius: 4px;
  text-decoration: none;
  color: #00e5ff;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    margin: 20px;
    font-weight: 700;
    font-size: 24px;
  }
  &.active {
    color: white;
    background-color: #6c696ca1;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
