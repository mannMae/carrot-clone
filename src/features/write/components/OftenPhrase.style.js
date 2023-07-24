import { styled } from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  padding: 0 0 15px;
`;

export const Title = styled.h5`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
`;

export const PharseList = styled.ul`
  max-height: 700px;
  padding: 0 10px;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  padding: 10px 5px;
`;

export const Phrase = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;
