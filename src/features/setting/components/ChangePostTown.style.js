import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 70px 15px 0;
`;

export const Description = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;

  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;

export const GuideToServiceCenter = styled.span`
  display: flex;
  justify-content: center;

  font-size: ${(props) => props.theme.fontSizes.small};
  a {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  display: ${(props) => (props.isActive ? 'block' : null)};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow: hidden;
`;
