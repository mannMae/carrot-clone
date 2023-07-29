import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  padding: 60px 15px 0;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
`;

export const SubDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
  font-weight: 400;
`;

export const Tip = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 20px;
  border-radius: 10px;
`;

export const Content = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 20px;
`;

export const Icon = styled.img`
  width: 15px;
`;
