import { useEffect, useState } from 'react';
import {
  Icon,
  Image,
  ImageWrapper,
  Input,
  InputWrapper,
  Label,
  MainPhotoLabel,
  Text,
  Wrapper,
} from './ImageInputField.style';

import CameraIcon from 'assets/icons/camera.svg';
import { Button } from 'components/Elements';

import XIcon from 'assets/icons/x.svg';

let newFiles = [];

export const ImageInputField = () => {
  const [images, setImages] = useState([]);
  const [isEncoding, setIsEncoding] = useState(false);
  const addImage = (e) => {
    newFiles = [];
    for (let file of e.target.files) {
      encodeFileToBase64(file);
    }
  };
  const encodeFileToBase64 = (file) => {
    setIsEncoding(true);
    console.log('encoding', images);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    new Promise((resolve) => {
      reader.onload = () => {
        newFiles.push(reader.result);
        console.log(newFiles);
        setIsEncoding(false);
        // setImages([...images, reader.result]);
      };
      resolve();
    });
  };
  useEffect(() => {
    if (isEncoding === false) {
      console.log(newFiles);
      setImages([...images, ...newFiles]);
    }
  }, [isEncoding]);

  useEffect(() => {
    if (images.length > 10) {
      setImages(images.slice(0, 10));
    }
  }, [images]);

  const deleteImage = (index) => {
    setImages(images.filter((p, i) => i !== index));
  };
  return (
    <Wrapper>
      <InputWrapper>
        {images.length <= 9 ? (
          <Label onChange={addImage}>
            <Icon src={CameraIcon} />
            <Text>
              <Text disabled={false}>{images.length}</Text>/10
            </Text>
            <Input
              type="file"
              multiple="multiple"
              accept="image/jpeg, image/png"
            />
          </Label>
        ) : (
          <Label onChange={addImage} disabled={true}>
            <Icon src={CameraIcon} />
            <Text>
              <Text disabled={true}>{images.length}</Text>/10
            </Text>
            <Input type="file" multiple="multiple" disabled />
          </Label>
        )}
      </InputWrapper>
      {images.map((image, i) => (
        <ImageWrapper>
          <Image src={image} key={i} />
          {i === 0 && <MainPhotoLabel>대표 사진</MainPhotoLabel>}
          <Button
            position="absolute"
            top="-10%"
            right="-10%"
            startIcon={XIcon}
            variant="dark"
            iconColor="invert(100%)"
            padding="2px"
            onClick={() => deleteImage(i)}
          />
        </ImageWrapper>
      ))}
    </Wrapper>
  );
};
