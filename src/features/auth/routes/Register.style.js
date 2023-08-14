import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 65px 10px 0;
`;

export const Towns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TownsTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
`;

export const TownsInner = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
`;

export const Town = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
  cursor: pointer;
`;
