import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 15px;
`;

export const SectionTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px 0;
  background-color: ${(props) => props.theme.colors.white};
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
