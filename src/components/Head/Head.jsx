import { Helmet } from 'react-helmet-async';

export const Head = ({ title, description }) => {
  return (
    <Helmet
      title={title ? `${title} | CARROT MARKET` : undefined}
      defaultTitle="CARROT MARKET"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
