import { Spinner } from 'components/Elements/Spinner';
import { Content, Wrapper } from './Button.style';

export const Button = ({
  isLoading,
  startIcon,
  endIcon,
  children,
  variant,
  size,
  isShowingText,
  contentWidth,
  ...props
}) => {
  return (
    <Wrapper variant={variants[variant]} size={sizes[size]} {...props}>
      {isLoading ? <Spinner /> : startIcon}
      <Content contentWidth={contentWidth}>{children}</Content>
      {!isLoading && endIcon}
    </Wrapper>
  );
};

const variants = {
  primary: {
    backgroundColor: 'primary',
    color: 'white',
  },
  inverse: {
    backgroundColor: 'white',
    color: 'primary',
  },
  danger: {
    backgroundColor: 'danger',
    color: 'white',
  },
};

const sizes = {
  small: {
    padding: '2px 4px',
    fontSize: 'small',
  },
  medium: {
    padding: '4px 6px',
    fontSize: 'medium',
  },
  large: {
    padding: '6px 8px',
    fontSize: 'large',
  },
};
