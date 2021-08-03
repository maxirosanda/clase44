import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

const ButtonLink = ({texto, link}) => {
  return (
    <React.Fragment>
      <Col
        xs={12}
        md={12}
        lg={12}
        xl={12}
        className=' my-4 row justify-content-center align-self-center'
      >
        <Link to={link}> <Button className=' row justify-content-center align-self-center'>
          {texto}
        </Button></Link>
      </Col>
      
    </React.Fragment>
  )
}

export default ButtonLink
