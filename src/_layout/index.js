import React from 'react';
import Context from '../_context';
import styled, { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import 'animate.css';
import { Helmet } from "react-helmet";

const Layout = styled.div`
  overflow: hidden;
`

const Body = styled.div`
  position: relative;
  //padding-top: 67px;
  min-height: 100vh;
  @media(min-width: 768px){
    //padding-top: 89px;
  }
`

export default ({ children, dark, data })=> {
  
  return(
    <Context.Provider value={data}>
      <ThemeProvider theme={data}>
        <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Vende, compra o arrienda tu propiedad con nosotros." />
            <title>Lav | Propiedades</title>
            <link rel="canonical" href="https://www.lavpropiedades.com" />
            <meta name="og:url" content="https://www.lavpropiedades.com" />
            <meta name="og:title" content="Lucia Arratia Valdebenito | Propiedades" />
            <meta name="og:description" content="Encuentra aquí la propiedad que estás buscando" />
            <meta name="og:image" content="https://www.lavpropiedades.com/og-meta.jpg" />
            <meta name="og:type" content="website" />            
          </Helmet>             
          <Header dark={dark} />
          <Body>
            {children}
          </Body>
          <Footer />
        </Layout>
      </ThemeProvider>
    </Context.Provider>
  )
}