import { Box } from 'components/Elements';
import { Description, Label, Phrase, Wrapper } from './DeleteAccount.style';
import { useState } from 'react';
import { Dropdown } from '..';

export const DeleteAccount = () => {
  const [reason, setReason] = useState('선택해주세요.');
  return (
    <Wrapper>
      <Box gap="20px">
        <Phrase>..오라형님과 이별인가요? 너무 아쉬워요.</Phrase>
        <Description>
          계정을 삭제하면 매너온도, 게시글, 관심, 채팅 등 모든 활동 정보가
          삭제됩니다. 계정 삭제 후 7일간 다시 가입할 수 없어요.
        </Description>
      </Box>
      <Box gap="20px">
        <Phrase>오라형님이 계정을 삭제하려는 이유가 궁금해요.</Phrase>
      </Box>
      <Label>
        게시글 옮길 동네 (동네인증된 지역)
        <Dropdown
          defaultValue={reason}
          getValue={setReason}
          options={[
            '선택해주세요.',
            '너무 많이 이용해요.',
            '사고 싶은 물품이 없어요.',
            '물품이 안팔려요.',
            '비매너 사용자를 만났어요.',
            '억울하게 이용이 제한됐어요.',
            '알림이 너무 많이 와요',
            '새 계정을 만들고 싶어요.',
            '기타',
          ]}
        />
      </Label>
    </Wrapper>
  );
};
