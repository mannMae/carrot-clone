import { Button } from 'components/Elements';
import {
  Header,
  ListItem,
  PharseList,
  Phrase,
  Title,
  Wrapper,
} from './OftenPhrase.style';

import PlusIcon from 'assets/icons/plus-primary.svg';
import KebabIcon from 'assets/icons/kebab.svg';
import { useDialog } from 'hooks/useDialog';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { OftenPhraseAdd } from '..';
import { useQuery } from 'react-query';
import { useRemoveOftenPhrase } from '../api/removeOftenPhrase';

export const OftenPhrase = ({ getValue }) => {
  const dialog = useDialog();
  const { remove } = useRemoveOftenPhrase();
  const handleKebabButton = (i, phrase) => {
    const buttons = [
      {
        clickEvent: () => {
          bottomSheet.open({
            type: 'content',
            content: (
              <OftenPhraseAdd method="update" index={i} prevPhrase={phrase} />
            ),
          });
          dialog.close();
        },
        content: '수정',
      },
      {
        clickEvent: () => {
          remove(i);
          dialog.close();
        },
        content: '삭제',
        color: 'danger',
      },
    ];
    dialog.open({ type: 'select', buttons });
  };
  const bottomSheet = useBottomSheet();

  const { data, isLoading } = useQuery(['oftenPhrase']);
  // if (isLoading) {
  //   return;
  // }
  const phraseList = data?.phraseList;

  const handleClickPhrase = (phrase) => {
    getValue(phrase);
    bottomSheet.close();
  };
  return (
    <Wrapper>
      <Header>
        <Title>자주 쓰는 문구</Title>
        <Button
          startIcon={PlusIcon}
          color="primary"
          backgroundColor="transparent"
          size="large"
          fontWeight="600"
          onClick={() =>
            bottomSheet.open({
              type: 'content',
              content: <OftenPhraseAdd method="create" />,
            })
          }
        >
          추가
        </Button>
      </Header>
      <PharseList>
        {phraseList &&
          phraseList.map((phrase, i) => (
            <ListItem
              key={i}
              onClick={() => {
                handleClickPhrase(phrase);
              }}
            >
              <Phrase>{phrase}</Phrase>
              <Button
                startIcon={KebabIcon}
                size="large"
                backgroundColor="transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  handleKebabButton(i, phrase);
                }}
              />
            </ListItem>
          ))}
      </PharseList>
    </Wrapper>
  );
};
