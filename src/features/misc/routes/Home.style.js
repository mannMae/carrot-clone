import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Posting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => `0.5px solid ${props.theme.colors.gray}`};
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Infomation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: start;
  width: 300px;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const TimeAndPlace = styled.span``;

export const Price = styled.span``;

export const Likes = styled.span`
  text-align: right;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const Icon = styled.img`
  height: 10px;
  width: 10px;
  margin-right: 5px;
`;
