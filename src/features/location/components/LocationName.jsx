import { InputField } from 'components/Form';
import { Description, Example, Wrapper } from './LocationName.style';
import { Box, Button } from 'components/Elements';
import { useState } from 'react';
import { useBottomSheet } from 'hooks/useBottomSheet';

export const LocationName = ({ getValue }) => {
  const [name, setName] = useState('');
  const bottomSheet = useBottomSheet(1);

  const updateLocationName = () => {
    if (name.length === 0) {
      return;
    }
    getValue(name);
    bottomSheet.close();
  };

  return (
    <Wrapper>
      <Box gap="15px">
        <Description>선택한 곳의 장소명을 입력해주세요</Description>
        <Example>{'예) 강남역 1번 출구, 교보타워 앞'}</Example>
        <InputField
          placeholder="예) 강남역 1번 출구, 교보타워 앞"
          getValue={setName}
        />
      </Box>
      <Button
        width="100%"
        size="large"
        borderRadius="5px"
        padding="10px"
        backgroundColor={name.length === 0 ? 'lightGray' : 'primary'}
        onClick={updateLocationName}
      >
        거래 장소 등록
      </Button>
    </Wrapper>
  );
};
