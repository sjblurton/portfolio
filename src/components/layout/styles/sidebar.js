import styled from "styled-components"

export const Container = styled.nav`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  z-index: 100;
  transform: ${props => (props.sidebarOpen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: bottom;
  transition: transform 250ms;
`

export const Name = styled.h1`
  cursor: pointer;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;
`

export const ListItem = styled.li`
  position: relative;
  & h2 {
    text-transform: uppercase;
  }
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 350ms ease;
    background-color: ${props => props.theme.white};
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`
