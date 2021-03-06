import styled from "styled-components"

export const Nav = styled.nav`
  width: 100%;
  background: ${props => props.theme.header};
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px clamp(8px, 15%, 200px) 8px clamp(8px, 15%, 200px);
`

export const Name = styled.h3`
  color: ${props => props.theme.white};
  cursor: pointer;
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: clamp(250px, 50%, 400px);
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ListItem = styled.li`
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 19px;
  letter-spacing: -0.04em;
  text-transform: uppercase;
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

export const Burger = styled.div`
  position: relative;
  height: 16px;
  width: 28px;
  border-bottom: 3px solid ${props => props.theme.white};
  border-top: 3px solid ${props => props.theme.white};
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background: ${props => props.theme.white};
  }
  @media (min-width: 768px) {
    display: none;
  }
`
