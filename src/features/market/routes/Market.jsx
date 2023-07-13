import { Wrapper } from './Market.style';
import { Head } from 'components/Head';
import { MarketList } from '../components/MarketList';

export const Market = () => {
  return (
    <>
      <Head title="홈" />
      <Wrapper>
        <MarketList />
      </Wrapper>
    </>
  );
};
