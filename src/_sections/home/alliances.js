import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { Container } from 'react-grid-system';

const items = [
  {
    href:"https://latampass.latam.com/es_cl/",
    src: "/latampass.jpg",
    alt: "latampass"
  },
  {
    href:"http://www.legalbroker.cl/",
    src: "/legal-broker.jpg",
    alt: "legal-broker"
  },
  {
    href:"http://www.altodecoraciones.cl/",
    src: "/altodecoraciones.jpg",
    alt: "altodecoraciones"
  },
  {
    href:"http://www.repisaseconomicas.cl/",
    src: "/repisas.jpg",
    alt: "repisas"
  },        
]
const VeryMainCont = styled.section`
  //margin-top: 6rem;  
`
const MainCont = styled.div`
  display: flex;
  position: relative;
  left: -500px;
  padding: 3rem 0;
`

const Box = styled.div`
  width: 500px;
  //height: 100px;
  background-color: transparent;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  font-size: 2rem;
  color: #fff;
  flex-grow: 1;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  border: 1px solid #fff;
  padding: 0 3rem;
  padding-top: 2rem;
`
const Logo = styled.img`
  width: 100%;
`
const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
`
const Link = styled.a`
  display: block;
  filter: grayscale(1);
  //transition: 250ms ease;
  &:hover{
    filter: grayscale(0);
  }
`

export default ()=> {
  let controller = null;

  useEffect(()=>{
    gsap.set(".box", {
      x: (i) => i * 500,
    });
    const mod = gsap.utils.wrap(0, 500 * 4);
    const tween = gsap.to(".box",{
      paused: true,
      duration: 20,
      x: "-=" + (500 * 4),
      ease: "linear",
      //paused: true,
      repeat: -1,
      modifiers:{
        x: x => mod(parseFloat(x)) + "px"
      },    
    });    
    tween.play();
    controller = tween;
  },[]);

  return(
    <VeryMainCont>
{/*      <Container>
        <Title>Nuestras alianzas</Title>
</Container>*/}
      <MainCont id="elm">
      {
        items.map((item, i) => (
          <Box className="box">
            <Link
              onMouseEnter={()=> controller.pause()} 
              onMouseLeave={()=> controller.resume()}
              rel="noopener"
              target="_blank"
              href={item.href}
            >
              <Logo src={item.src} alt={item.alt} />
            </Link>
          </Box>          
        ))
      }
    </MainCont>      
    </VeryMainCont>
  )
}