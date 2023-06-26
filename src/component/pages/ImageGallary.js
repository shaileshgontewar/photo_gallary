import React, { useState, useEffect } from "react";
import { Button, Form, Col, Input, Row } from "reactstrap";
// import pic1 from "../../image/p3.jpg";
// import pic2 from "../../image/p2.jpg";
// import pic3 from "../../image/p1.jpg";
// import pic4 from "../../image/p4.jpg";

const ImageGallary = () => {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || [];
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("items"));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);

  console.log(items);
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const addImg = () => {
    if (file) {
      setItems([...items, file]);
      setFile("");
    }
  };
  return (
    <div>
      <Form>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col>
            <Input
              id="exampleFile"
              name="file"
              type="file"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Button color="success" onClick={addImg}>
              + ADD
            </Button>
          </Col>
        </Row>
      </Form>

      <div className="mt-5">
        <div className="d-flex flex-wrap align-item-center justify-content-center">
          {items.map((im, index) => (
            <img src={im} alt="pic" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallary;
