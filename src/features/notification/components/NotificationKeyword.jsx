import { useState } from 'react';

import { Box, Button } from 'components/Elements';
import {
  CheckCircle,
  CheckedCircle,
  Counts,
  Header,
  Heading,
  Label,
  SectionTitle,
  Wrapper,
} from './NotificationKeyword.style';

import { useBottomSheet } from 'hooks/useBottomSheet';
import { CheckboxField, InputField } from 'components/Form';
import { locations } from 'features/location/routes/Location';

import LeftArrowIcon from 'assets/icons/left-arrow.svg';
import XIcon from 'assets/icons/x.svg';
import CheckedCircleIcon from 'assets/icons/checked-circle.svg';

export const NotificationKeyword = () => {
  const bottomSheet = useBottomSheet(1);
  const [typedKeyword, setTypedKeyword] = useState('');
  const [keywords, setKeywords] = useState([]);

  const addKeyword = () => {
    if (typedKeyword === '') {
      return;
    }
    setKeywords([typedKeyword, ...keywords]);
  };

  const deleteKeyword = (index) => {
    setKeywords([...keywords.filter((v, i) => i !== index)]);
  };
  return (
    <Wrapper>
      <Header>
        <Button
          startIcon={LeftArrowIcon}
          onClick={() => bottomSheet.close()}
          size="xlarge"
          padding="0"
          variant="transparent"
        />
        <Heading>알림 키워드 설정</Heading>
        <Button variant="transparent" color="transparent"></Button>
      </Header>
      <Box padding="30px 10px" gap="30px">
        <Box
          flexDirection="row"
          alignItems="center"
          borderBottomColor="black"
          width="100%"
        >
          <InputField
            getValue={setTypedKeyword}
            autoFocus={true}
            border="none"
            outline="none"
            caretColor="primary"
            placeholder="키워드를 입력해주세요. (예: 자전거)"
          />
          <Button
            backgroundColor="transparent"
            fontWeight="500"
            color={typedKeyword !== '' ? 'primary' : 'lightGray'}
            disabeld={typedKeyword === ''}
            onClick={() => addKeyword()}
          >
            등록
          </Button>
        </Box>
        {keywords.length !== 0 && (
          <Box gap="10px">
            <Box flexDirection="row" alignItems="center">
              <SectionTitle>등록한 키워드</SectionTitle>
              <Counts>
                <Counts color="primary">{keywords.length}</Counts>/30
              </Counts>
            </Box>
            <Box flexDirection="row" flexWrap="wrap" gap="10px">
              {keywords.map((keyword, i) => (
                <Button
                  key={i}
                  endIcon={XIcon}
                  variant="transparent"
                  borderColor="lightGray"
                  onClick={() => deleteKeyword(i)}
                >
                  {keyword}
                </Button>
              ))}
            </Box>
          </Box>
        )}
        <Box gap="30px">
          <SectionTitle>알림 받을 동네</SectionTitle>
          <Box flexDirection="row" gap="50px">
            {locations.map((location, i) => (
              <Town key={i} data={location}></Town>
            ))}
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

const Town = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Label>
      {isSelected ? (
        <CheckedCircle src={CheckedCircleIcon} />
      ) : (
        <CheckCircle></CheckCircle>
      )}
      <CheckboxField
        isBoxVisible={false}
        getValue={setIsSelected}
        fontSize="medium"
      >
        {data}
      </CheckboxField>
    </Label>
  );
};
