import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const GallaryContext = createContext();

const GallaryProvider = (props) => {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || [];
  });

  console.log(items)

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const [file, setFile] = useState();
  const navigate = useNavigate();
  const handleChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    setFile(base64);
  };
  const addImg = () => {
    if (file) {
      setItems([...items, file]);
      setFile("");
    }
    navigate("/image");
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <GallaryContext.Provider value={{ addImg, handleChange, items, setItems }}>
      {props.children}
    </GallaryContext.Provider>
  );
};
export const useGallary = () => {
  return useContext(GallaryContext);
};
export default GallaryProvider;
