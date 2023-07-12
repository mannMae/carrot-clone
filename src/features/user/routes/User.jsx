import { Button } from 'components/Elements';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListTitle,
  PayDescription,
  PayIcon,
  ProfileImage,
  UserName,
  Wrapper,
} from './User.style';

import PlusIcon from 'assets/icons/plus-black.svg';
import WonIcon from 'assets/icons/won.svg';
import HeartIcon from 'assets/icons/heart-outlined.svg';
import BillIcon from 'assets/icons/bill.svg';
import HandbagIcon from 'assets/icons/handbag.svg';
import BookIcon from 'assets/icons/book.svg';
import WrittingIcon from 'assets/icons/writting.svg';
import ReviewIcon from 'assets/icons/chat-bubble-with-content.svg';
import HomeIcon from 'assets/icons/home-with-round-roof.svg';
import MagaphoneIcon from 'assets/icons/megaphone.svg';
import ArticleIcon from 'assets/icons/article.svg';
import LocationIcon from 'assets/icons/location.svg';
import TargetIcon from 'assets/icons/target.svg';
import FaderIcon from 'assets/icons/fader.svg';
import TagIcon from 'assets/icons/tag.svg';
import TelemarketerIcon from 'assets/icons/telemarketer.svg';
import MailIcon from 'assets/icons/mail.svg';

export const User = () => {
  return (
    <Wrapper>
      <Box padding="20px" gap="15px">
        <Box flexDirection="row">
          <Box flexDirection="row" gap="10px" justifyContent="start">
            <ProfileImage src={user.profileImage} />
            <UserName>{user.name}</UserName>
          </Box>
          <Button
            variant="blackLightGray"
            borderRadius="3px"
            padding="4px"
            size="small"
            fontWeight="500"
          >
            프로필 보기
          </Button>
        </Box>
        <Box
          borderColor="lightGray"
          padding="15px"
          gap="20px"
          borderRadius="5px"
        >
          <Box flexDirection="row" justifyContent="space-between">
            <PayIcon>pay</PayIcon>
            <PayDescription>당근하는 새로운 방법, 당근페이! 〉</PayDescription>
          </Box>
          <Box flexDirection="row" gap="10px">
            <Button
              variant="blackLightGray"
              startIcon={PlusIcon}
              width="100%"
              borderRadius="3px"
              padding="5px"
              gap="5px"
            >
              충전
            </Button>
            <Button
              variant="blackLightGray"
              startIcon={WonIcon}
              width="100%"
              borderRadius="3px"
              padding="5px"
              gap="5px"
            >
              계좌송금
            </Button>
          </Box>
        </Box>
      </Box>
      <List>
        <ListTitle>나의 거래</ListTitle>
        <ListItem>
          <ListItemIcon src={HeartIcon} />
          관심목록
        </ListItem>
        <ListItem>
          <ListItemIcon src={BillIcon} />
          판매내역
        </ListItem>
        <ListItem>
          <ListItemIcon src={HandbagIcon} />
          구매내역
        </ListItem>
        <ListItem>
          <ListItemIcon src={BookIcon} />
          중고거래 가계부
        </ListItem>
      </List>
      <List>
        <ListTitle>나의 동네생활</ListTitle>
        <ListItem>
          <ListItemIcon src={WrittingIcon} />
          동네생활 글/댓글
        </ListItem>
      </List>
      <List>
        <ListTitle>동네 가게</ListTitle>
        <ListItem>
          <ListItemIcon src={ReviewIcon} />
          동네 가게 후기
        </ListItem>
      </List>
      <List>
        <ListTitle>나의 비즈니스</ListTitle>
        <ListItem>
          <ListItemIcon src={HomeIcon} />
          비즈프로필 관리
        </ListItem>
        <ListItem>
          <ListItemIcon src={MagaphoneIcon} />
          광고
        </ListItem>
        <ListItem>
          <ListItemIcon src={ArticleIcon} />
          동네홍보 글
        </ListItem>
      </List>
      <List>
        <ListTitle>기타</ListTitle>
        <ListItem>
          <ListItemIcon src={LocationIcon} />내 동네 설정
        </ListItem>
        <ListItem>
          <ListItemIcon src={TargetIcon} />
          동네 인증하기
        </ListItem>
        <ListItem>
          <ListItemIcon src={FaderIcon} />
          중고거래 카테고리 설정
        </ListItem>
        <ListItem>
          <ListItemIcon src={TagIcon} />
          알림 키워드 설정
        </ListItem>
        <ListItem>
          <ListItemIcon src={TelemarketerIcon} />
          자주 묻는 질문
        </ListItem>
        <ListItem>
          <ListItemIcon src={MailIcon} />
          친구초대
        </ListItem>
      </List>
    </Wrapper>
  );
};

const user = {
  profileImage:
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxUPEBIVDxIVFQ8PFRUPDQ8PEhYSFRUWFhUaFRUYHSggGB0lHRUVIT0hJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFS0fIB8rKy0tLS0tLSsrKy0tLS0tLS0tLS0tNystLS0tKy0tLS0rLSstLS0rOC0tNy0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIFBgQDB//EAD4QAQABAQQHBQUFBgcBAAAAAAABAgMRcfAEBRIhMUFRBhMiYYFykbHB0SNCUqHCMjOCg7LxJDRDU2KS4Rb/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EAB8RAQEBAQEBAAIDAQAAAAAAAAABAhExAxIyEyFRQf/aAAwDAQACEQMRAD8A3gDuYgZxUBFAQUziAAAAAi5xAQUBBTOIIsLFLKIBjFLJUARc4oAkgCAucQLkS8AXOIAZwM4mcQAW4BM4rnAAM4goJcZxFBjnAzioCCsopBjEZ6s4pz0W4ziBnFFQBM4qSCZwM4mcQElGSAmcSc+Ssc4gIoACgAoIoACgIKAj66PotpaTdZ0zXhHxnk6DVHZ6Lort484o4f8Ab6Ois6Ipi6mIpiOURdDLX0k8WmXIWXZvSKuOzR7VV/wveinsrXztaYwomfm6kU/k0t+Mcx/8tV/uxP8ABMfN8rXs3bxwmirCZj4w6wP5NH4xwek6vtrLfXRMR14x6zDyv0Zq9Y6jsrXfTHd19aY3TjC0+v8AqLlxqPvpei12VU0VxdMe6Y6xPR8WyqACEFQAAElisgIKAKGcQM4qZwM4gAAGcTOJnAB0HZfV0VT39Ubom6iJ/FzqaCmmZmIjjMxER1mX6FolhFnZ02ccKYiPqz+muTi2Y+oDnXAAAAAAeDXGr4t7O778b6J6T0wlxMxdumLvKeN79Fcb2j0fu9ImY3RXEV+s3xP5xPvbfLX/ABXUatFGyiBdnoZxAYyyljIITnzCc+QIADJQAziCgiiAqZxGVNOfoD2ajstvSbOOW1tT/DE1fJ3TkOzVP+Ijyprn8rvm69h9fV8+ADJYAAAAAAc52vo/d1e3T8JdG5/tf+xZ+1X8IXx+0RfHMio6WZnEEkERQETOKkggqAyFQFQziABDOmkCmlkM7Gjarpp61U0++bgbjszotfed7NMxRs1RfN0XzPR1CUURTERG6IiIjCFcutdvWsnABUAAAAAAGk7U6PXXRRNNM1bM1zN3KJiOXo3YmXl6V+dD2a2sYot66Y3RE3xhMRN35vI6pes0lisiUJci3FwIZ/usyxziC3iAKZxADOCxnzIh9Ii4EppUAGVnVszFUcpifdLEB+gWNpFdMVxwqiKo9WblNTa57mO7riaqOMTHGn05w6mzriqIqjhMRMerl1m5rWXrIBUAAAAAAAaHWuvKdiaLK+apvpmZi6Ijnd5pkt8OtHrK27y2rrjhNU3YRuifdDyzOeqyjqjNM4F2epKSlBf/AHYyoCZxM4EkRnqCeoz2QGKxBEPpEXfMCIuAAAAAAd5oFV9jRP8Awo+EODdd2c0jbsIp50TNPpxjPky+vi2W1AYLgAAAAAD8/tKr5mfOZdtrPSO6sa6+kXR7U7o+LhZlt8p6romUmRGygAAlygIyiCIAQVQWIuAAFECKKDFblAS57tUad3FptT+zPhqjy6xg8Qi/2l+gUVRMRMTfE74mJviYVyOqdbVWHhq8Vn050+cfR1llaRVTFUb4mImMJc+s8Xl6yAVSAAA5rXOvdqJs7HdG+Kq+EzHSI5QtnNvhbx8e0esYtK+6om+miZvmJ3TV9IaUHTJycZ29AEoJRQEWIGUQCIpOfIEVFBVFQAAACEgAA+2i6LXa1bNFO1P5RHnLpNXaios/FafaVdPuR6c/VXWpEydanVWpqra6qu+iz686sPLzdXZ0RTEUxF0REREeTIY61avJwAVAABymt9R1WczXZxNdG+buNVP1h1YtnVyizr87HY6w1LZ23ij7OvrTG6cY5ua0/VlrYftRfT+KnfH/AI3zuVWzjxgLqoKAtMC3IgJRZRImeSpcoMwFUgAANtq/UdpaeKv7OnDxTGHJFsnqWrs7OqqdmmJqmeVMXt9q/s9wqtp/hpn4z9G60TQ7Oyi6im7rPGZxl92Wvpb4tIwsbKminZpiKYjlEXMwZpAAAAAAAACYAGm1h2fs699n9nV0+5Ppy9Pc5vS9EtLGrZtKdnz5ThPN3rC2sqa6ZpqiKonlMNM/Sz1Fy/PmVMN7rLs9MX1WPij8E8fSebSTExN07pjdvi6YxhtNS+KcRFEjEuZB0Y3SMgQDFYEq+2iaLXa1bFEXz+UR1mTQ9Gqta4ooi+Z90RzmXZaBoVFjRs0xjPOZU1r8UydebVup7Ox8U+Ov8Uxuj2Y5NkDC3q4AgAAAAAAAAAAAAAAHh1jquzt4vnw1fiiN/r1e4TLwcNpuh12NWzXGExwmPJ53daZotFtTsVxfHKecT1hxun6HVY17FWMTymG2ddUs484C6AM8hKEVIe/Umj95b0xO+I8c9PDw/O5FvP7S6LUmgdzZ748dV01eXSGxBzW9vWgAgAAAAAAAAAAAAAAAAAAHj1roMW9ns/ejfTPSfpL2CR+f1UzE3TumJmN/G/zRtu0mj7FttRwrja9Y3T8ve1Lpl7Os6AJQNv2X/fz7FX9VLUNv2X/fz7FX9VKu/KmeuqAc7QAAAAAAAAAAAAAAAAAAAAABz3a3jZfzP0OfdB2t/wBL+b+hz7f5/qpr0EvF1VbXsz/mafZr+EgrvyrR2IDlaAAAAAAAAAAAAAAAAAAAAAAOb7YcbL+Z+lzoOn5/rGevWADRV//Z',
  name: '오라형',
};
