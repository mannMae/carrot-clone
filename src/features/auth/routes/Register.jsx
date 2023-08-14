import { useQuery } from 'react-query';
import { Town, Towns, TownsInner, TownsTitle, Wrapper } from './Register.style';
import { useEffect } from 'react';
import { Button } from 'components/Elements';

import targetIcon from 'assets/icons/target-white.svg';

export const Register = () => {
  const { data, isLoading } = useQuery(['search', 'town']);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const filteredTowns = towns.filter(
    (town) => town.substring(0, data?.keyword.length) === data?.keyword
  );

  return (
    <Wrapper>
      <Button
        startIcon={targetIcon}
        size="medium"
        width="100%"
        gap="5px"
        alignItems="center"
        borderRadius="5px"
        padding="10px"
      >
        현재위치로 찾기
      </Button>
      <Towns>
        <TownsTitle>
          {data?.keyword ? `'${data?.keyword}' 검색 결과` : '근처 동네'}
        </TownsTitle>
        <TownsInner>
          {data?.keyword
            ? filteredTowns.map((town, i) => <Town key={i}>{town}</Town>)
            : towns.map((town, i) => <Town key={i}>{town}</Town>)}
        </TownsInner>
      </Towns>
    </Wrapper>
  );
};

const towns = [
  '서울 동작구 노량진제1동',
  '서울 동작구 노량진제2동',
  '서울 동작구 노량진동',
  '서울 동작구 본동',
  '서울 동작구 상도1동',
  '서울 동작구 상도2동',
  '서울 동작구 상도제1동',
  '서울 동작구 상도제4동',
  '서울 영등포구 여의동',
  '서울 동작구 노량진제1동',
  '서울 동작구 노량진제2동',
  '서울 동작구 노량진동',
  '서울 동작구 본동',
  '서울 동작구 상도1동',
  '서울 동작구 상도2동',
  '서울 동작구 상도제1동',
  '서울 동작구 상도제4동',
  '서울 영등포구 여의동',
  '서울 동작구 노량진제1동',
  '서울 동작구 노량진제2동',
  '서울 동작구 노량진동',
  '서울 동작구 본동',
  '서울 동작구 상도1동',
  '서울 동작구 상도2동',
  '서울 동작구 상도제1동',
  '서울 동작구 상도제4동',
  '서울 영등포구 여의동',
  '서울 동작구 노량진제1동',
  '서울 동작구 노량진제2동',
  '서울 동작구 노량진동',
  '서울 동작구 본동',
  '서울 동작구 상도1동',
  '서울 동작구 상도2동',
  '서울 동작구 상도제1동',
  '서울 동작구 상도제4동',
  '서울 영등포구 여의동',
  '서울 동작구 노량진제1동',
  '서울 동작구 노량진제2동',
  '서울 동작구 노량진동',
  '서울 동작구 본동',
  '서울 동작구 상도1동',
  '서울 동작구 상도2동',
  '서울 동작구 상도제1동',
  '서울 동작구 상도제4동',
  '서울 영등포구 여의동',
  '서울 동작구 노량진제1동',
  '서울 동작구 노량진제2동',
  '서울 동작구 노량진동',
  '서울 동작구 본동',
  '서울 동작구 상도1동',
  '서울 동작구 상도2동',
  '서울 동작구 상도제1동',
  '서울 동작구 상도제4동',
  '서울 영등포구 여의동',
  '서울 동작구 노량진제1동',
  '서울 동작구 노량진제2동',
  '서울 동작구 노량진동',
  '서울 동작구 본동',
  '서울 동작구 상도1동',
  '서울 동작구 상도2동',
  '서울 동작구 상도제1동',
  '서울 동작구 상도제4동',
  '서울 영등포구 여의동',
];
