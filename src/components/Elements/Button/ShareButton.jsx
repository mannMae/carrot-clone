import { Icon } from './ShareButton.style';

import ShareIcon from 'assets/icons/share.svg';

export const ShareButton = ({ title = '', text = '', url = '' }) => {
  const share = () => {
    console.log(navigator.share);
    if (navigator.share) {
      navigator
        .share({
          title,
          text,
          url,
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return <Icon src={ShareIcon} onClick={() => share()} />;
};
