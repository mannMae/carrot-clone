import { styled } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  padding: 40px 0 0;
`;

export const Header = styled.header`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  padding: 10px 0 20px;
`;

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 500;
`;

export const SectionTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
`;

export const Counts = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors[props.color]};
`;

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  gap: 10px;
`;

export const CheckCircle = styled.span`
  width: 25px;
  height: 25px;
  border: ${(props) => `2px solid ${props.theme.colors.lightGray}`};
  border-radius: 50%;
`;

export const CheckedCircle = styled.img`
  width: 25px;
  height: 25px;
`;
