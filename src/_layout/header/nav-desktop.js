import React, { Fragment, useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { Button } from '../../_components/buttons';
//import RateBar from './rate-bar';

const MainCont = styled.nav`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #212121;
`
const NavBar = styled.ul`
  display: flex;
`
const NavItem = styled.li`
  margin-left: ${props => props.noMargin ? 0 : "1.5rem"};
`
const NavLink = styled.span`
  color: ${props => props.dark ? "rgba(255, 255, 255, .7)" : "#fff"};
  transition: 250ms ease;
  text-decoration: none !important;
  &:hover{
    color: ${props => props.dark ? "#fff" : props.theme.main.primaryColor};
  }
  &:visited{
    color: #fff;
  }
`
/*const Button = styled.button`
  border: none;
  background: transparent;
  transition: 250ms ease;
  display: flex;
  align-items: center;
  color: #fff;
  &:hover{
    color: #fff;
    text-decoration: underline;
  }
`*/
const SvgCont = styled.svg`
  fill: #fff;
  margin-right: .5rem;
  transition: 250ms ease;
  ${Button}:hover & {
    fill: ${props => props.dark ? props.theme.main.primaryColor : "#fff"};
  }
`
const LoginButton = styled.a`
  min-width: 160px;
  min-height: 44px;
  border: 1px solid #b79c4e;
  //border-color: ${props => props.theme.main.primaryColor};
  border-color: #fff;
  transition: 250ms ease;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  //color: ${props => props.theme.main.primaryColor};
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  &:visited{
    //color: ${props => props.theme.main.primaryColor};
    color: #fff;
  }  
  &:hover{
    background-color: #fff;
    color: ${props => props.theme.main.primaryColor};
  }
`

export default ({ dark })=> {
  const office = useContext(Context).office;
  const state = useContext(Context);
  const builderId = useContext(Context).builderId;
  return(
    <Fragment>
      {/*<RateBar />*/}
    <MainCont>
      <Logo dark={dark} />
      <NavBar>
        <NavItem noMargin>
          <Link to={`/about`}>
            <NavLink dark={dark}>
              Nosotros
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={`/properties`}>
            <NavLink dark={dark}>
              Propiedades
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={`/services`}>
            <NavLink dark={dark}>
              Servicios
            </NavLink>
          </Link>
        </NavItem>        
{/*        <NavItem>
          <Link to="/news">
            <NavLink dark={dark}>
              Noticias
            </NavLink>
          </Link>
</NavItem>*/}
        <NavItem>
          <Link to={`/contact`}>
            <NavLink dark={dark}>
              Contacto
            </NavLink>
          </Link>
        </NavItem>         
{/*        <NavItem>
          <Link href={`http://app.clasihome.com/login?logo=${state.main.logo.value}&primaryColor=${state.main.primaryColor.substring(1)}`} target="_blank" rel="noopener">
            <NavLink dark={dark}>
              Login
            </NavLink>
          </Link>
</NavItem>   */}                               
      </NavBar>
  </MainCont>
  </Fragment>
  )
}