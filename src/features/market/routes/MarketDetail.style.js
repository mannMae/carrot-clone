import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const PostImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const Box = styled.div`
  display: ${(props) => (props.display ? props.display : 'flex')};
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  gap: ${(props) => (props.gap ? props.gap : '5px')};

  grid-template-columns: ${(props) =>
    props.gridTemplateColumns ? props.gridTemplateColumns : null};

  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.theme.colors[props.borderColor]}`
      : null};
  border-bottom: ${(props) =>
    props.borderBottomColor
      ? `1px solid ${props.theme.colors[props.borderBottomColor]}`
      : null};

  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
  padding: ${(props) => (props.padding ? props.padding : null)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null};
  overflow: ${(props) => (props.overflow ? props.overflow : null)};
`;

export const UserProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Username = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
`;

export const UserLocation = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 400;
`;

export const MannerTemperatureNumber = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const MannerTemperatureBar = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  width: 30px;
  height: 3px;
  border-radius: 3px;
`;

export const MannerTemperatureBarGauge = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: ${(props) => (props.width ? props.width : null)};
  height: 3px;
  border-radius: 3px;
`;

export const MannerTemperatureIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const MannerTemperatureDescription = styled.button`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
  text-decoration: underline;
`;

export const Title = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 700;
`;

export const Infomation = styled.span`
  display: ${(props) => (props.display ? props.display : 'inline')};
  width: ${(props) =>
    props.width ? props.width : props.textOverflow ? '100%' : null};
  padding: ${(props) => (props.padding ? props.padding : null)};
  background-color: ${(props) =>
    props.backgroundColor ? props.theme.colors[props.backgroundColor] : null};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSizes[props.fontSize]
      : props.theme.fontSizes.medium};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  border-radius: ${(props) => (props.backgroundColor ? '3px' : null)};
  white-space: ${(props) => (props.whiteSpace ? props.whiteSpace : null)};
  overflow: ${(props) =>
    props.overflow ? props.overflow : props.textOverflow ? 'hidden' : null};
  text-overflow: ${(props) => (props.textOverflow ? props.textOverflow : null)};
  -webkit-line-clamp: ${(props) =>
    props.webkitLineClamp ? props.webkitLineClamp : null};
  -webkit-box-orient: ${(props) =>
    props.webkitBoxOrient ? props.webkitBoxOrient : null};
  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : null};
  cursor: ${(props) => (props.cursor ? props.cursor : null)};
`;

export const Description = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
  line-height: 18px;
  white-space: pre-wrap;
`;

export const SectionTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
`;

export const Sale = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  cursor: pointer;
`;

export const SaleImage = styled.img`
  width: 250px;
  border-radius: 10px;
  background-color: #000;
  aspect-ratio: 7/5;
  object-fit: cover;
`;

export const SaleTitle = styled.h4`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SalePrice = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
`;
