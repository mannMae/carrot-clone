import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ProfileImageEditButton = styled.label`
  position: relative;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 15px 0 0;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

export const Icon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 2px;
  border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  background-color: ${(props) => props.theme.colors.white};
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 600;
`;
