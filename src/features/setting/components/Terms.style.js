import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 70px 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 600;
`;

export const BoxTitle = styled.h3`
  padding: 15px 0 0;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 600;
`;

export const SectionTitle = styled.h3`
  padding: 15px 0 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
`;

export const Anchor = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  white-space: pre-wrap;
  line-height: 22px;
  a {
    font-size: ${(props) => props.theme.fontSizes.medium};
    white-space: pre-wrap;
    line-height: 22px;
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: ${(props) => props.listStyle};
`;

export const ListItem = styled.li`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Table = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.gridTemplateColumns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.gridTemplateRows}, 1fr)`};
  gap: 1px;

  padding: 1px;
  background-color: ${(props) => props.theme.colors.gray};
`;

export const TableItem = styled.div`
  grid-column: ${(props) => `span ${props.gridColumn}`};
  grid-row: ${(props) => `span ${props.gridRow}`};

  display: flex;
  align-items: center;
  padding: 10px;

  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.theme.colors.white};
  white-space: pre-wrap;
`;
