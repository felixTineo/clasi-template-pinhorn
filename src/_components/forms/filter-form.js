import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input } from '../inputs';
import { Button, IconButton } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';

const Form = styled.form`
  width: 100%;
  border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    width: 100%;
    padding: 0;
    padding-left: 5px;
    background-color: #fff;
    box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
    margin-bottom:0;
  }  
`

export default ({ block, shadow, onChange, onSubmit, values })=> {

  return(
    <Form onSubmit={onSubmit} block={block} shadow={shadow}>
      <Row gutterWidth={32} align="center">
        <Col xs={12} md={2}>
          <Input
            placeholder="Precio desde"
            id="priceMin"
            onChange={onChange}
            value={values.priceMin}
          />
        </Col>
        <Col xs={12} md={2}>
          <Input
            placeholder="Precio hasta"
            id="priceMax"
            onChange={onChange}
            value={values.priceMax}
          />
        </Col>
        <Col xs={12} md={2}>
          <Input
            placeholder="Habitaciones"
            min={0}
            id="bedrooms"
            type="number"
            onChange={onChange}
            value={values.bedrooms}
          />
        </Col>    
        <Col xs={12} md={2}>
          <Input
            placeholder="Baños"
            min={0}
            id="bathrooms"
            type="number"
            onChange={onChange}
            value={values.bathrooms}
          />
        </Col>    
        <Col xs={12} md={2}>
          <Select
            id="currency"
            default="Moneda"
            options={["CLP", "UF"]}
            primary
            onChange={onChange}
            value={values.currency}
          />
        </Col>                
        <Col xs={12} md={2}>
          <Hidden xs>
            <IconButton primary style={{ height: 60 }}>
              Aplicar
            </IconButton>
          </Hidden>
          <Visible xs>
            <Button primary block>              
              Aplicar
            </Button>
          </Visible>
        </Col>
      </Row>
    </Form>
  )
}