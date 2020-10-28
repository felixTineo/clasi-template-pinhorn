import React, { Fragment, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input } from '../inputs';
import { Button, IconButton } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';
import FilterForm from './filter-form';

const Form = styled.form`
  width: 100%;
  border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    //width: ${props => props.block ? "100%" : "80%"};
    padding: 0;
    padding-left: 5px;
    background-color: #fff;
    box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
    margin-bottom:2;
  }  
`

export default ({ block, shadow, filter })=> {
  const [byCode, setByCode] = useState(false);
  const onChangeByCode = useCallback(e => {
    if(e.target.value === "Código"){
      setByCode(true);
    } else {
      setByCode(false);
    }
  })
  return(
    <Fragment>
    <Form onSubmit={(e) => e.preventDefault()} block={block} shadow={shadow}>
      <Row gutterWidth={32} align="center">
        <Col xs={12} md={2}>
          <Select
            onChange={onChangeByCode}
            default="Buscar por"
            options={["Propiedad", "Código"]}
            primary
          />
        </Col>        
        {
          byCode
          ?(
            <Col xs={12} md={8}>
              <Input placeholder="Ingrese el código de la propiedad" />
            </Col>        
          )
          :(
            <Fragment>
              <Col xs={12} md={2}>
                <Select
                  default="Propiedad"
                  options={["opcion 1", "opcion 2", "opcion 3"]}
                  primary
                />
              </Col>
              <Col xs={12} md={2}>
                <Select
                  default="Operación"
                  options={["opcion 1", "opcion 2", "opcion 3"]}
                  primary
                />
              </Col>    
              <Col xs={12} md={4}>
                <Input placeholder="Comuna" />
              </Col>        
            </Fragment>
          )
        }
        <Col xs={12} md={2}>
          <Hidden xs>
            <IconButton primary  style={{ height: 60 }}>
              Buscar
            </IconButton>
          </Hidden>
          <Visible xs>
            <Button primary block shadow>
              Buscar
            </Button>
          </Visible>
        </Col>
      </Row>
    </Form>
    {
      filter && <FilterForm />
    }
    </Fragment>
  )
}