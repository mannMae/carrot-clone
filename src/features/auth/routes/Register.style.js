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

export const RegistGuide = styled.h5`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 600;
  line-height: 30px;
  white-space: pre-wrap;
`;

export const SubGuide = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 400;
`;

export const SearchByEmail = styled.p`
  align-self: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 400;

  a {
    font-size: ${(props) => props.theme.fontSizes.small};
    text-decoration: underline;
    cursor: pointer;
    font-weight: 400;
  }
`;
