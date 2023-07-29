import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px 0 0;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Username = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 600;
`;

export const Town = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;

export const Description = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
`;
