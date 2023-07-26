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
  iconColor,
  clickEvent,
  ...props
}) => {
  return (
    <Wrapper variant={variants[variant]} size={sizes[size]} {...props}>
      {isLoading ? (
        <Spinner size={size} variant={variant} />
      ) : startIcon ? (
        <Icon size={sizes[size]?.iconSize} src={startIcon} filter={iconColor} />
      ) : null}
      <Content size={sizes[size]} contentWidth={contentWidth}>
        {children}
      </Content>
      {!isLoading && endIcon ? (
        <Icon size={sizes[size]?.iconSize} src={endIcon} filter={iconColor} />
      ) : null}
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
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  blackLightGray: {
    backgroundColor: 'lightGray',
    color: 'black',
  },
  transparent: {
    backgroundColor: 'transparent',
    color: 'black',
  },
  transparentGray: {
    backgroundColor: 'transparent',
    color: 'gray',
  },
};

const sizes = {
  small: {
    padding: '2px 4px',
    fontSize: 'small',
    iconSize: '12px',
  },
  medium: {
    padding: '4px 6px',
    fontSize: 'medium',
    iconSize: '14px',
  },
  large: {
    padding: '6px 8px',
    fontSize: 'large',
    iconSize: '18px',
  },
  xlarge: {
    padding: '6px 8px',
    fontSize: 'xlarge',
    iconSize: '24px',
  },
};
