import React, { useEffect, useState } from "react";
import "./Fetch.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setData(products));
  }, []);
  return (
    // <div className="container-fluid W-100">
    //   <div className="row">
    //     {data.map((product, index) => {
    //       return (
    //         <div className="backcontainer col-2" key={product.id}>
    //           <p>{product.title}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>

    <Container>
        <Row>
        {data.map((product, index) => {
          return (
            <Col lg={4} className="backcontainer" key={product.id}>
              <p>{product.title}</p>
            </Col>
          );
        })}
        </Row>
      </Container>
      
  );
};

export default Fetch;
