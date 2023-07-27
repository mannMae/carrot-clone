import { default as dayjs } from 'dayjs';

export const getWorkedAtByTimestamp = (timestamp) => {
  const now = dayjs(Date.now());
  const day = dayjs(timestamp);

  const gapYears = now.diff(day, 'year');
  if (gapYears !== 0) {
    return `${gapYears}년 전`;
  }

  const gapMonths = now.diff(day, 'month');
  if (gapMonths !== 0) {
    return `${gapMonths}달 전`;
  }

  const gapDays = now.diff(day, 'day');
  if (gapDays !== 0) {
    return `${gapDays}일 전`;
  }

  const gapHours = now.diff(day, 'Hour');
  if (gapHours !== 0) {
    return `${gapHours}시간 전`;
  }

  const gapMinutes = now.diff(day, 'minute');
  if (gapMinutes !== 0) {
    return `${gapMinutes}분 전`;
  }

  return `방금 전`;
};
