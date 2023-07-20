import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const SectionTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
`;

export const Infomation = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  text-decoration: underline;
`;

export const Description = styled.span`
  border-radius: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.fontSizes.small};
`;
