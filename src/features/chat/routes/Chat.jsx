import { Box } from 'components/Elements';
import { Date, Text, Time, UserProfile, Wrapper } from './Chat.style';

import UserIcon from 'assets/icons/user-filled.svg';

export const Chat = () => {
  return (
    <Wrapper>
      {chat.map((message, i) => {
        const prev = i === 0 ? chat[i] : chat[i - 1];
        const next = i === message.length ? chat[i] : chat[i + 1];
        const isShowingTime =
          message.isMine !== next?.isMine ||
          message.time !== next?.time ||
          message.date !== next?.date;
        return (
          <>
            {i === 0 ? (
              <Date>{message.date}</Date>
            ) : message.date !== chat[i - 1].date ? (
              <Date>{message.date}</Date>
            ) : null}
            <Box flexDirection="row">
              <Box height="30px" width="30px">
                {!message.isMine && prev?.isMine ? (
                  <UserProfile src={UserIcon} />
                ) : !message.isMine && i === 0 ? (
                  <UserProfile src={UserIcon} />
                ) : null}
              </Box>
              <Message
                message={message}
                key={i}
                isShowingTime={isShowingTime}
              />
            </Box>
          </>
        );
      })}
    </Wrapper>
  );
};

const Message = ({ message, isShowingTime }) => {
  return (
    <Box
      flexDirection={message.isMine ? 'row-reverse' : 'row'}
      justifyContent={message.isMine ? 'end' : 'start'}
      alignItems="end"
      gap="5px"
      width="100%"
    >
      <Text
        backgroundColor={message.isMine ? 'primary' : 'lightGray'}
        color={message.isMine ? 'white' : 'black'}
      >
        {message.content}
      </Text>
      {isShowingTime && <Time>{message.time}</Time>}
    </Box>
  );
};

const chat = [
  {
    isMine: false,
    content:
      '안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)',
    date: '2023년 7월 23일',
    time: '오전 10:11',
  },
  {
    isMine: true,
    content:
      '안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)',
    date: '2023년 7월 23일',
    time: '오전 10:11',
  },
  {
    isMine: true,
    content:
      '안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)',
    date: '2023년 7월 24일',
    time: '오전 10:11',
  },
  {
    isMine: true,
    content:
      '안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)',
    date: '2023년 7월 24일',
    time: '오전 10:11',
  },
  {
    isMine: false,
    content:
      '안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)',
    date: '2023년 7월 25일',
    time: '오전 10:11',
  },
  {
    isMine: true,
    content:
      '안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)안녕하세요 :)',
    date: '2023년 7월 26일',
    time: '오전 10:11',
  },
  {
    isMine: false,
    content: '안녕하세요 :)',
    date: '2023년 7월 26일',
    time: '오전 10:11',
  },
  {
    isMine: false,
    content: '안녕하세요 :)',
    date: '2023년 7월 26일',
    time: '오전 10:11',
  },
  {
    isMine: false,
    content: '안녕하세요 :)',
    date: '2023년 7월 26일',
    time: '오전 10:11',
  },
  {
    isMine: false,
    content: '안녕하세요 :)',
    date: '2023년 7월 26일',
    time: '오전 10:11',
  },
  {
    isMine: true,
    content: '안녕하세요 :)',
    date: '2023년 7월 26일',
    time: '오전 10:11',
  },
  {
    isMine: false,
    content: '안녕하세요 :)',
    date: '2023년 7월 26일',
    time: '오전 10:11',
  },
  {
    isMine: false,
    content: '안녕하세요 :)',
    date: '2023년 7월 26일',
    time: '오전 10:12',
  },
  {
    isMine: true,
    content: '안녕하세요 :)',
    date: '2023년 7월 26일',
    time: '오전 10:12',
  },
];
