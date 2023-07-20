import { Wrapper } from './Box.style';

export const Box = (props) => {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
};
