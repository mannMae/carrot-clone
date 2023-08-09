import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 70px 15px 0;
`;

export const Phrase = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
`;

export const Description = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;

  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;
