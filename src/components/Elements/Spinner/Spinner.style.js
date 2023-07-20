import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    animation: rotate 2s linear infinite;
    // margin: -25px 0 0 -25px;
    width: ${(props) => (props.size ? props.size : '8px')};
    height: ${(props) => (props.size ? props.size : '8px')};
    color: ${(props) => (props.variant ? props.theme[props.variant] : '#000')};
    & path {
      stroke: hsl(210, 70, 75);
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
