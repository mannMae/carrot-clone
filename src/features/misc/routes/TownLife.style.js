import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray};
`;

export const Groups = styled.ul`
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.white};
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Group = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const GroupImage = styled.img`
  height: 40px;
  width: 40px;
  over-fit: cover;
  border-radius: 10px;
`;

export const GroupName = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  width: 50px;
  text-align: center;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Categories = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  border-bottom: ${(props) => `0.5px solid ${props.theme.colors.gray}`};
  padding: 10px;
  background-color: ${(props) => props.theme.colors.white};
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: start;
  width: 300px;
  cursor: pointer;
  border-bottom: ${(props) => `0.5px solid ${props.theme.colors.gray}`};
  padding: 15px;
`;

export const Badges = styled.div``;

export const Badge = styled.span`
  padding: 2px 4px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

export const PostTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const PostContent = styled.p`
  color: ${(props) => props.theme.colors.gray};
`;

export const PostBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostInfomations = styled.span`
  color: ${(props) => props.theme.colors.lightGray};
`;

export const PostMark = styled.span`
  text-align: right;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const PostIcon = styled.img`
  height: 10px;
  width: 10px;
  margin-right: 5px;
`;
