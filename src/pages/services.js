import React from 'react';
import Layout from '../_layout';
import Hero from '../_sections/services/hero';
import History from '../_sections/services/history';
import Description from '../_sections/services/description';
import Team from '../_sections/services/team';
import Ubication from '../_sections/about/contact';
import { graphql } from 'gatsby';

export default ({ data }) => {
  return(
    <Layout data={JSON.parse(data.initial.data)}>
    <Hero />
    <History />
    <Ubication />
  </Layout>
  )
}

export const query = graphql`
query{
  initial{
    data
  }
}
`