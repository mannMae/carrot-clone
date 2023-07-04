import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

export const Categories = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 20px;
  width: 100%;
  height: ${(props) => (props.isFoldedCategories ? '380px' : '590px')};
  padding: 10px;
  background-color: ${(props) => props.theme.colors.white};
  transition: all ease 1s 0s;
  padding-bottom: 120px;
`;
export const Category = styled.button`
  grid-row: span 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CategoryIcon = styled.img`
  height: 40px;
  width: 40px;
  over-fit: cover;
  border-radius: 10px;
`;

export const FoldButton = styled.button`
  grid-column: span 4;
  margin: 0 auto;
  cursor: pointer;
`;

export const AdBanner = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  width: 400px;
  grid-column: span 4;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;

export const AdBannerContent = styled.p`
  width: 60%;
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const AdBannerAnchor = styled.a`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  background-color: ${(props) => props.theme.colors.white};
`;

export const SectionTitle = styled.h2`
  margin-left: 20px;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
`;

export const SectionSubtitle = styled.p`
  margin: 20px 0 0 20px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ReadMore = styled.button`
  border-top: ${(props) =>
    props.borderTop
      ? props.borderTop
      : `1px solid ${props.theme.colors.lightGray}`};
  padding-top: 10px;
  font-weight: 500;
  cursor: pointer;
`;

export const SectionDescriptionWrapper = styled.button`
  position: relative;
  padding: 0 0 0 5px;
`;

export const DescriptionBubble = styled.div`
  position: absolute;
  right: -20%;
  display: ${(props) => (props.isShowing ? 'block' : 'none')};
  text-align: right;
  font-size: 20px;
`;

export const Description = styled.p`
  position: absolute;
  top: 70%;
  left: ${(props) => (props.direction === 'right' ? '-30%' : null)};
  right: ${(props) => (props.direction === 'right' ? null : '-30%')};
  width: 200px;
  border-radius: 5px;
  padding: 5px;
  text-align: left;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const Icon = styled.img`
  width: 12px;
  height: 12px;
`;
