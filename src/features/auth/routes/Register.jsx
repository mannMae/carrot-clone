import { useQuery } from 'react-query';
import {
  RegistGuide,
  SearchByEmail,
  SubGuide,
  Town,
  Towns,
  TownsInner,
  TownsTitle,
  Wrapper,
} from './Register.style';
import { useEffect, useState } from 'react';
import { Button } from 'components/Elements';

import targetIcon from 'assets/icons/target-white.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PhoneAuth } from '..';
import { ProfileSetting } from 'features/user';
import { queryClient } from 'library/react-query';
import { child, ref, set } from 'firebase/database';
import { firebaseDatabase } from 'library/firebase';

export const Register = () => {
  const { data, isLoading } = useQuery(['search', 'town']);
  const user = useQuery(['user']);
  const navigate = useNavigate();
  const location = useLocation();
  const [town, setTown] = useState();
  const [uid, setUid] = useState('');

  useEffect(() => {
    console.log(data);
    console.log(user.data);
  }, [data, user]);

  const filteredTowns = towns.filter(
    (town) => town.substring(0, data?.keyword.length) === data?.keyword
  );

  const handleClickTown = (town) => {
    setTown(town);
    navigate('./phone-auth');
  };

  const [confirmation, setConfirmation] = useState();

  useEffect(() => {
    if (!uid) {
      return;
    }
    queryClient.setQueryData(['user'], {
      town,
      uid,
      image: '',
      nickname: '',
    });
  }, [uid]);

  if (location.pathname === '/register/phone-auth') {
    return (
      <Wrapper>
        {!confirmation && (
          <>
            <RegistGuide>
              {'안녕하세요!\n휴대폰 번호로 가입해주세요.'}
            </RegistGuide>
            <SubGuide>
              휴대폰 번호는 안전하게 보관되며 이웃들에게 공개되지 않아요.
            </SubGuide>
          </>
        )}
        <PhoneAuth getConfirmation={setConfirmation} getUid={setUid} />
        {!confirmation && (
          <>
            <SearchByEmail>
              휴대폰 번호가 변경되었나요? <Link to=".">이메일로 계정 찾기</Link>
            </SearchByEmail>
          </>
        )}
      </Wrapper>
    );
  }

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
            ? filteredTowns.map((town, i) => (
                <Town key={i} onClick={() => handleClickTown(town)}>
                  {town}
                </Town>
              ))
            : towns.map((town, i) => (
                <Town key={i} onClick={() => handleClickTown(town)}>
                  {town}
                </Town>
              ))}
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
