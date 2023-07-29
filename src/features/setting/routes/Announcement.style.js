import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 50px 15px;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 20px 0;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.lightGray}`};

  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  line-height: 20px;
`;

export const AnnouncedAt = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;

export const Content = styled.span`
  padding: 15px 0 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  white-space: pre-wrap;
`;
