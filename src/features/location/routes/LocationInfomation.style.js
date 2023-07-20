import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
`;

export const BoxTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
`;

export const BoxContent = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 20px;
`;
