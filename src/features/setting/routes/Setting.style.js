import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h3`
  padding: 15px 0;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 600;
`;
