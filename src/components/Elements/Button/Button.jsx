import { Spinner } from 'components/Elements/Spinner';
import { Content, Icon, Wrapper } from './Button.style';

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
      {isLoading ? (
        <Spinner size={size} variant={variant} />
      ) : startIcon ? (
        <Icon src={startIcon} />
      ) : null}
      <Content size={sizes[size]} contentWidth={contentWidth}>
        {children}
      </Content>
      {!isLoading && endIcon ? <Icon src={endIcon} /> : null}
    </Wrapper>
  );
};

const variants = {
  primary: {
    backgroundColor: 'primary',
    color: 'white',
  },
  primaryLight: {
    backgroundColor: 'primaryLight',
    color: 'primary',
  },
  inverse: {
    backgroundColor: 'white',
    color: 'primary',
  },
  danger: {
    backgroundColor: 'danger',
    color: 'white',
  },
  gray: {
    backgroundColor: 'white',
    color: 'gray',
  },
  blackLightGray: {
    backgroundColor: 'lightGray',
    color: 'black',
  },
  transparent: {
    backgroundColor: 'transparent',
    color: 'gray',
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
  xlarge: {
    padding: '6px 8px',
    fontSize: 'xlarge',
  },
};
