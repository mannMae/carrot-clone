import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  padding: 60px 15px 0;
`;

export const Description = styled.p`
  width: 80%;
  padding-top: 10px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 20px;
`;

export const Image = styled.img`
  width: 90px;
`;

export const Anchor = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => props.theme.fontSizes.small};
  text-decoration: underline;
  cursor: pointer;
`;
