import { useState } from 'react';
import { Description, TooltipBubble, Wrapper } from './Tooltip.style';

export const Tooltip = ({ buttonContent, tooltipContent, direction }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Wrapper onClick={() => setIsShowing((prev) => !prev)}>
      {buttonContent}
      <TooltipBubble isShowing={isShowing}>
        ▲<Description direction={direction}>{tooltipContent}</Description>
      </TooltipBubble>
    </Wrapper>
  );
};
