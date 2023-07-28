import { Box, Button } from 'components/Elements';
import { Header, Wrapper } from './SetTime.style';
import { useEffect, useState } from 'react';

export const SetTime = ({ getValue, defaultValue, close }) => {
  const [dayOrNightIndex, setDayOrNightIndex] = useState(0);
  const [hourIndex, setHourIndex] = useState(0);
  const [minuteIndex, setMinuteIndex] = useState(0);

  useEffect(() => {
    const defaultValues = defaultValue.split(' ');
    const defaultDayOrNight = defaultValues[0];
    const defaultTime = defaultValues[1].split(':');
    const defaultHour = defaultTime[0];
    const defaultMinute = defaultTime[1];

    setDayOrNightIndex(dayAndNight.indexOf(defaultDayOrNight));
    setHourIndex(hours.indexOf(defaultHour));
    setMinuteIndex(minutes.indexOf(defaultMinute));
  }, []);

  return (
    <Wrapper>
      <Header>
        <Button
          backgroundColor="transparent"
          color="gray"
          onClick={() => close()}
        >
          취소
        </Button>
        <Button
          backgroundColor="transparent"
          color="primary"
          onClick={() => {
            getValue(
              `${dayAndNight[dayOrNightIndex]} ${hours[hourIndex]}:${minutes[minuteIndex]}`
            );
            close();
          }}
        >
          확인
        </Button>
      </Header>
      <Box
        position="relative"
        flexDirection="row"
        justifyContent="center"
        gap="40px"
        width="100%"
        height="150px"
        onTouchMove={(e) => e.stopPropagation()}
      >
        <Box height="100%">
          {dayAndNight.map((value, i) => (
            <Button
              key={i}
              color={i === dayOrNightIndex ? 'black' : 'gray'}
              backgroundColor="transparent"
              size="large"
              transform={`translateY(${60 - 38 * dayOrNightIndex}px)`}
              onClick={() => setDayOrNightIndex(i)}
            >
              {value}
            </Button>
          ))}
        </Box>
        <Box height="100%">
          {hours.map((value, i) => (
            <Button
              key={i}
              color={i === hourIndex ? 'black' : 'gray'}
              backgroundColor="transparent"
              size="large"
              transform={`translateY(${60 - 38 * hourIndex}px)`}
              onClick={() => setHourIndex(i)}
            >
              {value}
            </Button>
          ))}
        </Box>
        <Box height="100%" justifyContent="center">
          {minutes.map((value, i) => (
            <Button
              key={i}
              color={i === minuteIndex ? 'black' : 'gray'}
              backgroundColor="transparent"
              size="large"
              transform={`translateY(${210 - 38 * minuteIndex}px)`}
              onClick={() => setMinuteIndex(i)}
            >
              {value}
            </Button>
          ))}
        </Box>
        <Box
          position="absolute"
          top="50%"
          zIndex="1"
          height="30px"
          width="100%"
          backgroundColor="lightGray"
          opacity="0.3"
          margint="0 40px"
          transform="translateY(-50%)"
        ></Box>
      </Box>
    </Wrapper>
  );
};

const dayAndNight = ['오전', '오후'];

const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

const minutes = [
  '00',
  '05',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
];
