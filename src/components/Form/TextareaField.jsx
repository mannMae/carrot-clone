import { Textarea } from './TextareaField.style';

export const TextareaField = ({ placeholder, registration }) => {
  return (
    <Textarea
      placeholder={`노량진동에 올릴 게시글 내용을 작성해 주세요.\n(판매 금지 물품은 게시가 제한될 수 있어요.)\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요.\n과학기술정보통신부, 한국 인터넷진흥원과 함께해요.`}
      {...registration}
    />
  );
};
