import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
export const Chat = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: ${(props) => `0.5px solid ${props.theme.colors.gray}`};
  margin: 0 auto;
  padding: 15px;
  gap: 20px;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
`;

export const UserName = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 700;
`;

export const ChatInfo = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => props.theme.colors.gray};
`;

export const RecentMessage = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const PostImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 3px;
`;
