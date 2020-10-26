import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';

const MainCont = styled.div`
  //background-color: ${props => props.theme.main.primaryColor};
  color: ${props => props.theme.main.primaryColor};
  padding: .5rem 0 !important;
  font-size: 12px;
  user-select: none;
`
const RatesCont = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #FFFFFF;
  margin: 0;
  padding: 0 !important;  
  @media(min-width: 768px){
    font-weight: normal;
    justify-content: flex-start;
    color: #FFFFFF;
    margin: 0;
    padding: 0 !important;
  }
`
const RateItem = styled.li`
  margin-left: ${props => props.first ? "0" : ".30rem"};
  &::after{
    content: " -"
  }
  @media(min-width: 768px){
    margin-left: ${props => props.first ? "0" : ".5rem"};
    &::after{
      content: " /"
    } 
  }
`
const RateItemNoAfter = styled(RateItem)`
  &::after{
    content: ""
  }
  @media(min-width: 768px){
    &::after{
      content: ""
    } 
  }
`

export default ()=> {

  return(
    <MainCont>
        <RatesCont>
          <RateItem first>
            UF $75875987
          </RateItem>
          <RateItem>
            UTM $75875987
          </RateItem>
          <RateItemNoAfter>
            Dólar $75875987
          </RateItemNoAfter>                    
        </RatesCont>
    </MainCont>
  )
}