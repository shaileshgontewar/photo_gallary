import React from "react";
import { Button, Col } from "reactstrap";
import { useGallary } from "../../Context/StoreGallary";
import { NavLink } from "react-router-dom";

const ImageGallary = () => {
  const { items } = useGallary();

  return (
    <div>
      <Col className="mt-5 ms-5">
        <NavLink to="/upload">
          <Button color="success">Add Image</Button>
        </NavLink>
      </Col>

      <div className="mt-5">
        <div className="d-flex flex-wrap align-item-center justify-content-center gap-1">
          {items?.length === 0 ? (
            <div
              style={{ height: "310px" }}
              className="align-center text-center"
            >
              <h2 className="text-primary mt-5 ">Image Not Found !</h2>
            </div>
          ) : (
            <div className="grid-wrapper">
              {items?.map((im, index) => (
                <div>
                  {" "}
                  <img src={im} alt="pic" key={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallary;
