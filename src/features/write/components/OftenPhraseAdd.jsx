import { Box, Button } from 'components/Elements';
import { Header, Title, Wrapper } from './OftenPhraseAdd.style';

import XIcon from 'assets/icons/x.svg';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { TextareaField } from 'components/Form';
import { useState } from 'react';
import { useCreateOftenPhrase } from '../api/createOftenPhrase';
import { useUpdateOftenPhrase } from '../api/updateOftenPhrase';

export const OftenPhraseAdd = ({ method, index, prevPhrase }) => {
  const bottomSheet = useBottomSheet(1);
  const [phrase, setPhrase] = useState(prevPhrase ? prevPhrase : '');
  const { create } = useCreateOftenPhrase();
  const { update } = useUpdateOftenPhrase();

  const updateOftenPhrase = () => {
    if (phrase.length === 0) {
      return;
    }
    if (method === 'create') {
      console.log('create');
      create(phrase);
      bottomSheet.close();
    } else if (method === 'update') {
      update(index, phrase);
      bottomSheet.close();
    }
  };

  return (
    <Wrapper>
      <Header>
        <Button
          startIcon={XIcon}
          size="large"
          backgroundColor="transparent"
          onClick={() => bottomSheet.close()}
        />
        <Title>자주 쓰는 문구 추가</Title>
        <Button backgroundColor="transparent" />
      </Header>
      <Box
        height="100%"
        flexDirection="column"
        justifyContent="space-between"
        padding="20px 0 10px"
      >
        <TextareaField
          getValue={setPhrase}
          placeholder="자주 쓰는 문구를 입력해 주세요."
          limit={300}
          count={true}
          defaultValue={prevPhrase}
        />
        <Button
          position=""
          width="100%"
          size="large"
          borderRadius="5px"
          backgroundColor={phrase.length === 0 ? 'lightGray' : 'primary'}
          onClick={updateOftenPhrase}
        >
          저장
        </Button>
      </Box>
    </Wrapper>
  );
};
