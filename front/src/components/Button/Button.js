import React from 'react'
import { Button, Col } from 'react-bootstrap'


const ButtonFuncion = ({texto , funcionClick}) => {
  return (
    <React.Fragment>
      <Col
        xs={3}
        md={3}
        lg={3}
        xl={3}
        className=' my-4 row justify-content-center align-self-center'
      >
         <Button onClick={funcionClick}  className=' row justify-content-center align-self-center'>
         {texto}
        </Button>
      </Col>
      
    </React.Fragment>
  )

}

export default ButtonFuncion