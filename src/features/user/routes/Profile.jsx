import { Box, Button } from 'components/Elements';
import { Image, Nickname, Uid, Wrapper } from './Profile.style';

import UserIcon from 'assets/icons/user-filled.svg';
import { useNavigate } from 'react-router-dom';
import { storage } from 'utils/storage';

export const Profile = () => {
  const navigate = useNavigate();
  const uid = storage.getUser();
  return (
    <Wrapper>
      <Box gap="10px">
        <Box flexDirection="row" alignItems="center" gap="20px">
          <Image src={UserIcon} />
          <Nickname>
            오라형 <Uid>#{uid}</Uid>
          </Nickname>
        </Box>
        <Button
          width="100%"
          borderRadius="5px"
          padding="5px"
          variant="blackLightGray"
          size="medium"
          onClick={() => navigate('./edit')}
        >
          프로필 수정
        </Button>
      </Box>
    </Wrapper>
  );
};
