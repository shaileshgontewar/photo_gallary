import React from "react";
import { Button, Form, Col, Input, Row,  } from "reactstrap";
import { useGallary } from "../../Context/StoreGallary";

function UploadImg() {
  const { addImg, handleChange} = useGallary();

  return (
    <div className="d-flex flex-wrap align-item-center justify-content-center mt-5" >
      <Form>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col>
            <Input
              id="exampleFile"
              name="file"
              type="file"
              required
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
    </div>
  );
}

export default UploadImg;
