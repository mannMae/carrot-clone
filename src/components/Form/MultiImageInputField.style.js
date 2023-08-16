import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px 0;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InputWrapper = styled.div``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.lightGray : props.theme.colors.white};
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

export const Text = styled.span`
  color: ${(props) =>
    props.disabled === false
      ? props.theme.colors.primary
      : props.theme.colors.gray};
`;

export const Input = styled.input`
  display: none;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  object-fit: cover;
`;

export const MainPhotoLabel = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  border-radius: 0 0 5px 5px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;
