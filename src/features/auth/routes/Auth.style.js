import { styled } from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 30px 10px;
`;

export const Icon = styled.img`
  width: 150px;
  height: 150px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 20px;
  text-align: center;
  white-space: pre-wrap;
`;

export const LoginGuide = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
`;

export const Anchor = styled.a`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  text-decoration: none;
`;
