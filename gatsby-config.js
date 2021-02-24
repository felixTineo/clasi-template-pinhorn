/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Nilo Zucco - Negocios Inmobiliarios",
    author: "Clasihome",
    //imageUrl: "https://clasihome.com/properties/back.png",
    description:"Nilo Zucco Negocios Inmobiliarios, Venta y Arriendo de propiedades en Las Condes, Venta y Arriendo de departamentos y casas en la Region Metropolitana",
    keywords: `nilo zucco, nilo zucco propiedades, nilo zucco propiedades las condes, departamentos las condes, propiedades las condes, arriendos las condes, casas las condes`,
    facebook: "https://www.facebook.com/LAV-Propiedades-112024710667025/",
    instagram: "https://instagram.com/lavpropiedades?r=nametag",
    siteUrl: "https://www.lavpropiedades.com/",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: 'jpg', // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lucia Arratia Valdebenito | Propiedades`,
        short_name: "lavpropiedades",
        lang: `es`,
        start_url: "/",
        //icon: `static/favicon.png`,
      },
    },    
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },     
    /*{
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: [`300`]
            //subsets: [`latin`]
          },
        ],
      },
    },*/    
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /_icons/
        }
      }
    }    
  ],
}
