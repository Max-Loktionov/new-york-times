import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NAVLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  border-radius: 4px;
  font-weight: 700;
  color: black;
  margin-right: 24px;
  &.active {
    color: white;
    background-color: #6c696ca1;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const BoxGreet = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 24px;
  }
`;

export const Ava = styled.img`
  display: flex;
  align-items: center;
  margin-right: 12px;
  border-radius: 50%;
`;
export const Name = styled.span`
  padding-left: 12px;
  font-weight: 700;
  font-style: italic;
`;
