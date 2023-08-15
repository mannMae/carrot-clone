import { Button } from 'components/Elements';
import {
  Icon,
  Input,
  Label,
  ProfileImage,
  ProfileImageEditButton,
  Wrapper,
} from './ProfileSetting.style';

import UserIcon from 'assets/icons/user-filled.svg';
import CameraIcon from 'assets/icons/camera.svg';
import { ImageInputField, InputField } from 'components/Form';

export const ProfileSetting = () => {
  return (
    <Wrapper>
      <ProfileImageEditButton>
        <ProfileImage src={UserIcon} />
        <Icon src={CameraIcon} />
        <Input type="file" multiple="multiple" accept="image/jpeg, image/png" />
      </ProfileImageEditButton>
      <Label>
        닉네임
        <InputField
          width="100%"
          borderRadius="5px"
          placeholder="닉네임을 입력해주세요"
        />
      </Label>
    </Wrapper>
  );
};
