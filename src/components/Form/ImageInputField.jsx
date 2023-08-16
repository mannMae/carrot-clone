import { useEffect, useState } from 'react';
import { Input } from './ImageInputField.style';

let newFiles = [];

export const ImageInputField = (props) => {
  const getValue = props.getValue;
  const isMultiple = props.multiple === 'multiple';
  const [image, setImage] = useState();
  const [images, setImages] = useState([]);
  const [isEncoding, setIsEncoding] = useState(false);

  const handleChangeInput = (e) => {
    if (!e.target.files[0]) {
      return;
    }
    if (isMultiple) {
      newFiles = [];
      for (let file of e.target.files) {
        encodeFileToBase64(file);
      }
    } else {
      encodeFileToBase64(e.target.files[0]);
    }
  };

  const encodeFileToBase64 = (file) => {
    setIsEncoding(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    new Promise((resolve) => {
      reader.onload = () => {
        if (isMultiple) {
          newFiles.push(reader.result);
        } else {
          setImage(reader.result);
        }
        setIsEncoding(false);
      };
      resolve();
    });
  };

  useEffect(() => {
    if (getValue) {
      if (isMultiple) {
        getValue(images);
      } else {
        getValue(image);
      }
    }
  }, [image]);

  useEffect(() => {
    if (isEncoding === false) {
      setImages([...images, ...newFiles]);
    }
  }, [isEncoding]);

  return (
    <Input
      onChange={handleChangeInput}
      {...props}
      type="file"
      accept="image/jpeg, image/png"
    />
  );
};
