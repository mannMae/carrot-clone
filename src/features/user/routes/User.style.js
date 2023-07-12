import { styled } from 'styled-components';

export const Wrapper = styled.section`
  max-width: 700px;
  margin: 0 auto;
`;

export const Box = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : '0')};
  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.theme.colors[props.borderColor]}`
      : null};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
  padding: ${(props) => (props.padding ? props.padding : '0')};
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
`;

export const PayIcon = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const PayDescription = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  padding: 20px;
`;

export const ListTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
`;

export const ListItem = styled.span`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: start;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
  gap: 5px;
  cursor: pointer;
`;

export const ListItemIcon = styled.img`
  height: 16px;
`;
