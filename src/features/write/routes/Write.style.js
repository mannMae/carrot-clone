import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px 30px 30px;
`;

export const BoxTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Description = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
  text-decoration: underline;
  cursor: pointer;
`;

export const Anchor = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
`;
