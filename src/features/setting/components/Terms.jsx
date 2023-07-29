import { Box } from 'components/Elements';
import {
  Anchor,
  BoxTitle,
  Description,
  List,
  ListItem,
  SectionTitle,
  Table,
  TableItem,
  Title,
  Wrapper,
} from './Terms.style';
import { Link, useLocation } from 'react-router-dom';

export const Terms = () => {
  const location = useLocation();
  console.log(location.pathname.split('/')[5]);

  if (location.pathname.split('/')[5] === 'terms-of-use') {
    return <TermsOfService />;
  }

  if (location.pathname.split('/')[5] === 'privacy-policy') {
    return <PrivacyPolicy />;
  }

  if (location.pathname.split('/')[5] === 'location-service') {
    return <LocationService />;
  }

  return (
    <Wrapper>
      <Box padding="0 15px" gap="30px">
        <BoxTitle>공통</BoxTitle>
        <Link to="./terms/terms-of-use" style={{ width: '100%' }}>
          <Anchor>서비스 이용약관</Anchor>
        </Link>
        <Link to="./terms/privacy-policy" style={{ width: '100%' }}>
          <Anchor>개인정보 처리방침</Anchor>
        </Link>
        <Link to="./terms/location-service" style={{ width: '100%' }}>
          <Anchor>위치기반서비스 이용약관</Anchor>
        </Link>
      </Box>
    </Wrapper>
  );
};

const TermsOfService = () => {
  return (
    <Wrapper>
      <Title>이용약관</Title>
      <Box>
        <Description>
          {
            '안녕하세요?\n\n(주)당근마켓 서비스를 이용해 주셔서 감사합니다. 지역 정보 모바일 서비스를 제공하는 당근마켓이 아래 준비한 약관을 읽어주시면 감사드리겠습니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>계정 관련</SectionTitle>
        <Description>
          {
            '당근마켓은 모바일 서비스 특성상 별다른 비밀번호 없이 휴대전화 번호만으로 계정을 생성하실 수 있습니다. 다만, 실제 휴대전화의 소유주임을 확인하기 위해서 가입 당시 인증 절차를 거치게 됩니다. 또한, 다른 모바일 기기에서 서비스 사용을 연속하기 위해서는 기존에 가입하고 인증했던 휴대전화 번호로 재인증을 해야 합니다. 아래의 경우에는 계정 생성을 승인하지 않을 수 있습니다.\n\n1. 다른 사람의 명의나 휴대전화 번호 등 개인정보를 이용하여 계정을 생성하려 한 경우\n\n2. 동일인이 다수의 계정을 생성하려 한 경우\n\n3. 계정 생성시 필요한 정보를 입력하지 않거나 허위 정보를 입력한 경우\n\n4. 당근마켓이 과거에 운영원칙 또는 법률 위반 등의 정당한 사유로 해당 계정을 삭제 또는 징계한 경우\n\n5. 사기 정보 모음 사이트나 정부기관 사이트 등에서 거래 사기 이력이 있는 휴대전화 번호로 확인된 경우\n\n계정은 본인만 이용할 수 있고, 다른 사람에게 이용을 허락하거나 양도할 수 없습니다. 사용자는 계정과 관련된 정보, 즉 프로필 사진이나 별명 등을 수정할 수 있습니다. 휴대폰 번호가 바뀐 경우에는 서비스 내 설정 메뉴나 고객센터 문의를 통해 새 휴대폰 번호로 인증절차를 걸쳐 수정할 수 있습니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>사용시 주의해야 할 점</SectionTitle>
        <Description>
          {
            '당근마켓은 사용자가 아래와 같이 잘못된 방법이나 행위로 서비스를 이용할 경우 사용에 대한 제재(이용정지, 강제탈퇴 등)를 가할 수 있습니다.\n\n1. 잘못된 방법으로 서비스의 제공을 방해하거나 당근마켓이 안내하는 방법 이외의 다른 방법을 사용하여 당근마켓 서비스에 접근하는 행위\n\n2. 다른 이용자의 정보를 무단으로 수집, 이용하거나 다른 사람들에게 제공하는 행위\n\n3. 서비스를 영리나 홍보 목적으로 이용하는 행위\n\n4. 음란 정보나 저작권 침해 정보 등 공서양속 및 법령에 위반되는 내용의 정보 등을 발송하거나 게시하는 행위\n\n5. 당근마켓의 동의 없이 당근마켓 서비스 또는 이에 포함된 소프트웨어의 일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하는 행위\n\n6. 소프트웨어를 역설계하거나 소스 코드의 추출을 시도하는 등 당근마켓 서비스를 복제, 분해 또는 모방하거나 기타 변형하는 행위\n\n7. 관련 법령, 당근마켓의 모든 약관 또는 '
          }
          <Link to=".">운영정책</Link>
          {'을 준수하지 않는 행위'}
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>개인정보 보호 관련</SectionTitle>
        <Description>
          {
            '개인정보는 당근마켓 서비스의 원활한 제공을 위하여 사용자가 동의한 목적과 범위 내에서만 이용됩니다. 개인정보 보호 관련 기타 상세한 사항은 당근마켓 '
          }
          <Link to=".">개인정보처리방침</Link>
          {'을 참고하시기 바랍니다.'}
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>게시물의 저작권 보호</SectionTitle>
        <Description>
          {
            '1. 당근마켓 서비스 사용자가 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다.\n\n2. 사용자가 서비스 내에 게시하는 게시물은 검색결과 내지 서비스 및 관련 프로모션, 광고 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우, 당근마켓은 저작권법 규정을 준수하며, 사용자는 언제든지 고객센터 또는 운영자 문의 기능을 통해 해당 게시물에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 요청할 수 있습니다.\n\n3. 위 2항 이외의 방법으로 사용자의 게시물을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 사용자의 동의를 얻어야 합니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>게시물의 관리</SectionTitle>
        <Description>
          {
            '1. 사용자의 게시물이 "정보통신망법" 및 "저작권법"등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 당근마켓은 관련법에 따라 조치를 취하여야 합니다.\n\n2.당근마켓은 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 게시물에 대해 임시조치(삭제, 노출제한, 게시중단) 등을 취할 수 있습니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>사용권리</SectionTitle>
        <Description>
          {
            '당근마켓은 서비스 이용을 위하여 양도불가능하고 무상의 라이선스를 사용자분들에게 제공합니다. 다만,당근마켓 상표 및 로고를 사용할 권리를 사용자분들에게 부여하는 것은 아닙니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>서비스 고지 및 홍보내용 표시</SectionTitle>
        <Description>
          {
            '당근마켓은 서비스 사용자분의 편의를 위해 서비스 이용과 관련된 각종 고지 및 기타 당근마켓 서비스 홍보를 포함한 다양한 정보를 당근마켓 서비스에 표시하거나 사용자의 휴대폰 문자, 알림 메시지(Push Notification) 등으로 발송할 수 있으며 서비스 사용자분은 이에 동의합니다. 이 경우 서비스 사용자분의 통신환경 또는 요금구조에 따라 서비스 사용자분이 데이터 요금 등을 부담할 수 있습니다. 한편 당근마켓은 서비스 사용자분이 수집에 동의한 서비스 내 활동 정보를 기초로 당근마켓에게 직접적인 수익이 발생하지 않거나 당근마켓이 판매하는 상품과 직접적인 관련성이 없는 한도에서 다른 서비스 사용자분 등이 판매하는 상품 또는 서비스에 관한 정보를 위와 같은 방법으로 서비스 사용자분에게 보낼 수 있으며 서비스 사용자분은 이에 동의합니다. 물론 서비스 사용자분은 관련 법령상 필요한 내용을 제외하고 언제든지 이러한 정보에 대한 수신 거절을 할 수 있으며, 이 경우 당근마켓은 즉시 위와 같은 정보를 보내는 것을 중단합니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>위치기반서비스 관련</SectionTitle>
        <Description>
          {
            '당근마켓은 사용자의 실생활에 더욱 보탬이 되는 유용한 서비스를 제공하기 위하여 당근마켓 서비스에 위치기반서비스를 포함시킬 수 있습니다. 당근마켓의 위치기반서비스는 사용자의 단말기기의 위치정보를 수집하는 위치정보사업자로부터 위치정보를 전달받아 제공하는 무료서비스이며, 구체적으로는 사용자의 현재 위치를 기준으로 특정 지역커뮤니티에 가입자격을 부여하고 다른 이용자와 해당 지역과 관련된 게시물을 작성할 수 있도록 하는 서비스(지역커뮤니티서비스), 사용자의 현재 위치를 이용한 생활 정보나 광고성 정보를 제공하는 서비스(정보제공서비스)가 있습니다. 특히, 사용자가 14세 미만 이용자로서 개인위치정보를 활용한 위치기반 서비스를 이용하기 위해서는 당근마켓은 사용자의 개인위치정보를 이용 또는 제공하게 되며, 이 경우 부모님 등 법정대리인의 동의가 먼저 있어야 합니다. 만약 법정대리인의 동의 없이 위치기반서비스가 이용된 것으로 판명된 때에는 당근마켓은 즉시 사용자의 위치기반서비스 이용을 중단하는 등 적절한 제한을 할 수 있습니다.\n\n사용자(14세 미만 이용자의 법정대리인 포함)는 당근마켓 서비스와 관련된 개인위치정보의 이용, 제공 목적, 제공받는 자의 범위 및 위치기반서비스의 일부에 대하여 동의를 유보하거나, 이용∙제공에 대한 동의의 전부 또는 일부 철회할 수 있으며, 일시적인 중지를 요구할 수 있습니다. 당근마켓은 위치정보의 보호 및 이용 등에 관한 법률의 규정에 따라 개인위치정보 및 위치정보 이용∙제공사실 확인자료를 6개월 이상 보관하며, 사용자가 동의의 전부 또는 일부를 철회한 때에는 당근마켓은 철회한 부분에 해당하는 개인위치정보 및 위치정보 이용∙제공사실 확인자료를 지체 없이 파기하겠습니다.\n\n사용자(14세 미만 이용자의 법정대리인 포함)는 당근마켓에 대하여 사용자에 대한 위치정보 이용∙제공사실 확인자료나, 사용자의 개인위치정보가 법령에 의하여 제3자에게 제공되었을 때에는 그 이유 및 내용의 열람 또는 고지를 요구할 수 있고, 오류가 있는 때에는 정정을 요구할 수 있습니다. 만약, 당근마켓이 사용자의 개인위치정보를 사용자가 지정하는 제3자에게 직접 제공하는 때에는 법령에 따라 개인위치정보를 수집한 스마트폰 등으로 사용자에게 개인위치정보를 제공받는 자, 제공 일시 및 제공 목적을 즉시 통보하겠습니다.\n\n당근마켓은 8세 이하의 아동 등(금치산자, 중증 정신장애인 포함)의 보호의무자가 개인위치정보의 이용 또는 제공에 서면으로 동의하는 경우에는 해당 본인의 동의가 있는 것으로 보며, 이 경우 보호의무자는 개인위치정보주체의 권리를 모두 행사할 수 있습니다.\n\n당근마켓은 사용자의 위치정보를 안전하게 보호하기 위하여 위치정보관리책임자(정창훈 이사, privacy@daangnservice.com)를 지정하고 있습니다.당근마켓은 사용자의 위치정보를 안전하게 보호하기 위하여 위치정보관리책임자(정창훈 이사, privacy@daangnservice.com)를 지정하고 있습니다.\n\n만약 사용자와 당근마켓 간의 위치정보와 관련한 분쟁에 대하여 협의가 어려운 때에는 사용자은 위치정보의 보호 및 이용 등에 관한 법률 제 28조 2항 및 개인정보보호법 제43조의 규정에 따라 개인정보 분쟁조정위원회에 조정을 신청할 수 있습니다.\n\n'
          }
          <Link to=".">위치기반서비스 이용약관 전문보기</Link>
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>오프라인 서비스 관련</SectionTitle>
        <Description>
          {
            '당근마켓은 서비스 사용자의 편의를 위해 사용자로부터 배송 등 온라인 커뮤니티 이외의 서비스(이하 “오프라인 서비스”)를 요청 받아 이를 직접 또는 다른 사람에게 맡겨 수행할 수 있고, 이러한 서비스와 관련하여 회사와 사용자가 지켜야 할 사항은 '
          }
          <Link to=".">
            오프라인 서비스 이용약관 및 배송 서비스 수행자(당근버디) 이용약관
          </Link>
          {' 등에 따릅니다.'}
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>유료서비스 관련</SectionTitle>
        <Description>
          {
            '당근마켓은 이용자의 편의성을 높이기 위해 일부 서비스 내지 기능에 대하여 유상으로 서비스를 제공할 수 있습니다. 해당 서비스의 구체적인 이용 조건 및 절차 등에 관한 사항은 '
          }
          <Link to=".">유료서비스 이용약관</Link>
          {'에 따릅니다.'}
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>당근알바 서비스 관련</SectionTitle>
        <Description>
          {
            '당근마켓은 직업안정법에 근거하여 지역 내 구인구직 정보가 효과적으로 제공될 수 있도록 하기 위하여 당근알바 서비스를 제공하며, 이러한 서비스와 관련하여 회사와 사용자가 지켜야 할 사항은 '
          }
          <Link to=".">당근알바 서비스 이용약관</Link>
          {'에 따릅니다.'}
        </Description>
      </Box>
    </Wrapper>
  );
};

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <SectionTitle>당근마켓 개인정보처리방침</SectionTitle>
      <Box>
        <Description>
          {
            '“주식회사 당근마켓”(이하 “회사” 또는 “당근마켓” 이라 함)은 개인정보보호법, 정보통신망 이용촉진 및 정보보호에 관한 법률, 통신비밀보호법 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 규정을 준수하며, 관련 법령에 의거한 개인정보 처리방침을 정하여 이용자의 권익 보호에 최선을 다하고 있습니다. 본 개인정보 처리방침은 회사가 제공하는 서비스 이용에 적용되고 다음과 같은 내용을 담고 있습니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>01 개인정보 수집 및 이용 현황</SectionTitle>
        <Description>
          {
            '당근마켓은 원활한 서비스 제공을 위해 다음과 같은 이용자의 개인정보를 처리하고 있습니다.'
          }
        </Description>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>수집 및 이용 현황</ListItem>
          </List>
        </Box>
        <Table
          gridTemplateColumns="5"
          gridTemplateRows="32"
          width="600px"
          height="2000px"
        >
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            서비스
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            수집 및 이용목적
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            구분
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            수집 및 이용 항목
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            보유 및 이용기간
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="3">
            회원 가입
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            서비스 이용을 위한 이용자 식별 이용자 개별적 통지 및 고지
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            휴대폰 번호, 위치정보, 닉네임, 관심 카테고리, User ID
          </TableItem>
          <TableItem gridColumn="1" gridRow="17">
            {
              '회원탈퇴시 까지\n\n※ 단, 관계 법령 위반에 따른 수사, 조사 등이 진행중인 경우에는 해당 수사, 조사 종료 시 까지 보관 하며 내부규정 혹은 관련법령에 따라 일정기간 보관됨.'
            }
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            선택
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            프로필사진, 이메일
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="2">
            당근알바
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            당근 알바 프로필 작성
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            연락처, 성별, 나이
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            선택
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            사진, 이름, 경력, 자기소개
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="1">
            중고차
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            내 차량 조회 및 판매글 등록
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            차량번호, 소유자 이름
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="3">
            채팅
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            이용자간 채팅 서비스 제공, 중고걸래 분쟁 조정, 법령이나 이용약관에
            반하여 이용자에게 피해를 줄 수 있는 잘못된 이용행위의 방지
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            앱 내 채팅 기능을 사용한 채팅 내용
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="1">
            안심번호
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            안심번호 서비스 제공
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            안심번호 맵핑정보
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="2">
            당근라이브
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            당근라이브 서비스 시청 지역 확인 및 서비스 제공
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            닉네임, 위칮정보, 채팅내역, 구매내역
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="2">
            당근커머스
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            상품의 배송 및 구매이력 관리
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            구매자정보(닉네임, USERID), 배송지정보(이름, 휴대폰번호, 주소)
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="3">
            서비스 이용 시 생성되어 수집되는 정보
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            이상행위 탐지, 부정이용 방지 및 서비스 개선을 위한 분석, 이용자의
            관심, 성향에 기밚한개인 맞춤형 상품추천서비스(광고포함)를 제공
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            검색이력/거래기록/방문기록 등 서비스 이용기록, IP주소, 단말기
            정보(OS, 화면사이즈, 기기식별값, 광고ID)
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="4">
            부동산
          </TableItem>
          <TableItem gridColumn="1" gridRow="4">
            부동산 직거래 전자계약 서비스 제공
          </TableItem>
          <TableItem gridColumn="1" gridRow="4">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="4">
            임대인정보(이름, 연락처), 임차인정보(이름, 연락처), 소재지,
            계약내용, 특약사항
          </TableItem>
          <TableItem gridColumn="1" gridRow="4">
            {
              '5년(계약 또는 청약철회 등에 관한 기록)\n\n※ 단, 관계 법령 위반에 따른 수사, 조사 등이 진행중인 경우에는 해당 수사, 조사 종료 시 까지 보관 하며 내부규정 혹은 관련법령에 따라 일정기간 보관됨.'
            }
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="4">
            본인인증
          </TableItem>
          <TableItem gridColumn="1" gridRow="4">
            앱 내 본인인증 서비스 제공
          </TableItem>
          <TableItem gridColumn="1" gridRow="4">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="4">
            이름, CI, DI, 휴대폰번호, 생년월일, 성별, 통신사, 내/외국인 정보
          </TableItem>
          <TableItem gridColumn="1" gridRow="4">
            {
              '회원탈퇴시 혹은 동의 철회시 까지\n\n※ 단, 관계 법령 위반에 따른 수사, 조사 등이 진행중인 경우에는 해당 수사, 조사 종료 시 까지 보관 하며 내부규정 혹은 관련법령에 따라 일정기간 보관됨.'
            }
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="2">
            마케팅
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            서비스에서 제공하는 혜택, 이벤트, 상품정보, 신규 서비스 안내
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            선택
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            앱 내 알림
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            {'회원탈퇴시 혹은 동의 철회시 까지'}
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="4">
            고객문의
          </TableItem>
          <TableItem gridColumn="1" gridRow="4">
            본인확인 및 고객 요청사항 처리 및 처리결과에 대한 회신
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            필수
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            휴대폰번호, 이메일, 상담내역
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            3년
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            선택
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            생년월일, 성명
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            신분증사본(주민벊호 뒷자리 마스킹처리)
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            본인확인 후 즉시 파기
          </TableItem>
        </Table>

        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>개인정보 수집 방법</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해
                  동의하고 직접 정보를 입력하는 경우
                </ListItem>
                <ListItem>
                  제휴 서비스 및 단체로부터 개인정보를 제공받은 경우
                </ListItem>
                <ListItem>
                  고객센터를 통한 상담과정에서 앱, 메일, 전화, 팩스 등을 통해
                  개인정보를 수집하는 경우
                </ListItem>
                <ListItem>
                  서비스 이용과정에서 이용자로부터 수집하는 경우
                </ListItem>
              </List>
            </Box>
          </List>
        </Box>
        <Description>
          당근마켓은 원칙적으로 정해진 보유 및 이용기간에 따라 개인정보를
          처리하고 있으나, 다음의 정보에 대해서는 아래의 보존 사유에 의해 명시한
          기간 동안 보존합니다.
        </Description>
        <Description>(1)회사 내부 방침에 의한 사유</Description>
        <Table
          gridTemplateColumns="3"
          gridTemplateRows="7"
          width="400px"
          height="400px"
        >
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            보존항목
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            보존사유
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            보유기간
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            부정이용기록이 있는 사용자의 휴대전화번호, DI, 계좌정보(금융기관명,
            계좌번호, 명의자), 기기식별값, 부정이용기록
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            동일인 식별 및 부정이용방지
          </TableItem>
          <TableItem gridColumn="1" gridRow="3">
            5년
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            휴대전화번호, 기기식별값, 거래기록(판매 게시물 및 채팅내용), DI
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            동일인 식별 및 중복가입방지, 휴대전화번호 변경에 따른 탈퇴처리로인한
            계정 복구요청
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            6개월
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            거래기록(판매 게시물 및 채팅내용)
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            거래 관련 사기 방지 및 분쟁 해결
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            5년
          </TableItem>
        </Table>
        <Description>(2)관련법령에 의한 사유</Description>
        <Table
          gridTemplateColumns="3"
          gridTemplateRows="14"
          width="400px"
          height="400px"
        >
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            보존항목
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            근거법령
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            보유기간
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            계약 또는 청약철회 등에 관한 기록
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            전자상거래 등에서의 소비자보호에 관한 법률
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            5년
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            대금결제 및 재화 등의 공급에 관한 기록
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            전자상거래 등에서의 소비자보호에 관한 법률
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            5년
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            소비자의 불만 또는 분쟁처리 기록
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            전자상거래 등에서의 소비자보호에 관한 법률
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            3년
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            표시/광고에 관한 기록
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            전자상거래 등에서의 소비자보호에 관한 법률
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            6개월
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            세법이 규정하는 모든 거래에 관한 장부 및 증빙서류
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            국세기본법
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            5년
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            전자금융 거래에 관한 기록
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            전자금융거래법
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            5년
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            서비스 방문기록
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            통신비밀보호법
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            3개월
          </TableItem>
        </Table>
      </Box>
      <Box gap="10px">
        <SectionTitle>02 만 14세 미만 아동의 개인정보 처리</SectionTitle>
        <Description>
          당근마켓은 법정대리인의 동의가 필요한 만14세 미만 아동에 대한 정보를
          수집 및 이용하지 않습니다.
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>03 개인정보 처리업무의 위탁에 관한 사항</SectionTitle>
        <Description>
          당근마켓은 서비스의 원활한 제공을 위해 필요한 때에는 개인정보의 처리를
          일부 위탁하고 있으며, 수탁 받은 업체가 관계 법령을 준수하도록
          관리・감독하고 있습니다.
        </Description>
        <Table
          gridTemplateColumns="3"
          gridTemplateRows="19"
          width="400px"
          height="600px"
        >
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            수탁업체
          </TableItem>
          <TableItem gridColumn="2" gridRow="1" fontWeight="600">
            위탁업무
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            주식회사 당근페이
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            결제 및 환불처리, 결제 도용 방지, 간편결제 서비스 제공 및 운영,
            부정행위 방지
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            나이스페이먼츠(주)
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            전자 결제 서비스
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            (주)당근서비스
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            고객센터 운영, 응대, 상담을 위해 활용되는 개인정보
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            Amazon Web Services, Inc.
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            정보 보관
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            Google Cloud Platform
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            정보 보관 및 분석
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            NHN
          </TableItem>
          <TableItem gridColumn="2" gridRow="1">
            문자, 알림톡 발송
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            Infobip Itd.
          </TableItem>
          <TableItem gridColumn="2" gridRow="1">
            문자발송
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            (주)모두싸인
          </TableItem>
          <TableItem gridColumn="2" gridRow="1">
            부동산서비스 계약서 생성
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            롯데글로벌로지스
          </TableItem>
          <TableItem gridColumn="2" gridRow="1">
            상품배송
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            Nice D&R
          </TableItem>
          <TableItem gridColumn="2" gridRow="1">
            차량 관련 정보 확인
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            (주)원큐브마케팅
          </TableItem>
          <TableItem gridColumn="2" gridRow="1">
            이벤트 쿠폰 문자 발송
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            카히스토리
          </TableItem>
          <TableItem gridColumn="2" gridRow="1">
            사고 내역 조회
          </TableItem>
          <TableItem gridColumn="1" gridRow="1">
            오토업
          </TableItem>
          <TableItem gridColumn="2" gridRow="1">
            차량 정보 조회
          </TableItem>
        </Table>
      </Box>
      <Box gap="10px">
        <SectionTitle>04 개인정보의 국외 이전에 관한 사항</SectionTitle>
        <Table
          gridTemplateColumns="13"
          gridTemplateRows="5"
          width="1200px"
          height="300px"
        >
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            회사명
          </TableItem>
          <TableItem gridColumn="3" gridRow="1" fontWeight="600">
            이전목적
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            연락처
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            개인정보 이전국가
          </TableItem>
          <TableItem gridColumn="2" gridRow="1" fontWeight="600">
            이전되는 항목
          </TableItem>
          <TableItem gridColumn="3" gridRow="1" fontWeight="600">
            이전 일시 및 방법
          </TableItem>
          <TableItem gridColumn="2" gridRow="1" fontWeight="600">
            보유 및 이용 기간
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="2">
            Google Cloud Platform
          </TableItem>
          <TableItem gridColumn="3" gridRow="2">
            Google Cloud Storage에 데이터 저장 및 Google BigQuery를 통한 데이터
            분석
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            080-822-1422
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            미국
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            수집하는 모든 개인정보
          </TableItem>
          <TableItem gridColumn="3" gridRow="2">
            데이터 수집 후 수분 이내 Google 클라우드 컴퓨팅 환경에 개인정보 보관
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            회원탈퇴 또는 위탁계약 종료시
          </TableItem>
          {/*  */}
          <TableItem gridColumn="1" gridRow="2">
            Google Cloud Platform
          </TableItem>
          <TableItem gridColumn="3" gridRow="2">
            Google Cloud Storage에 데이터 저장 및 Google BigQuery를 통한 데이터
            분석
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            080-822-1422
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            미국
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            수집하는 모든 개인정보
          </TableItem>
          <TableItem gridColumn="3" gridRow="2">
            데이터 수집 후 수분 이내 Google 클라우드 컴퓨팅 환경에 개인정보 보관
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            회원탈퇴 또는 위탁계약 종료시
          </TableItem>
        </Table>
      </Box>
      <Box gap="10px">
        <SectionTitle>05 개인정보 제3자 제공에 관한 사항</SectionTitle>
        <Description>
          당근마켓은 이용자들의 개인정보를 "개인정보의 수집목적 및 이용목적"에서
          고지한 범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를
          초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지
          않습니다. 다만, 아래의 경우에는 예외로 합니다.
        </Description>
        <Description>(1) 이용자의 동의가 있는 경우</Description>
        <Description>
          - <Link to=".">당근미니 개인정보 제3자 제공 현황</Link>
        </Description>
        <Description>- 당근마켓 개인정보 제3자 제공 현황</Description>
        <Table
          gridTemplateColumns="7"
          gridTemplateRows="15"
          width="1200px"
          height="400px"
        >
          <TableItem gridColumn="2" gridRow="1" fontWeight="600">
            제공받는자
          </TableItem>
          <TableItem gridColumn="3" gridRow="1" fontWeight="600">
            제공 목적
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            제공 항목
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            보유 및 이용기간
          </TableItem>
          <TableItem gridColumn="2" gridRow="10">
            주식회사 당근페이
          </TableItem>
          <TableItem gridColumn="3" gridRow="10">
            {
              '이용자에게 유용한 콘텐츠 제공과 기존 서비스에 더하여, 인구통계학적 분석, 서비스 방문 및 이용기록의 분석, 지인 및 관심사에 기반한 이용자간 관계의 형성, 개인정보 및 관심사 등에 기반한 맞춤형 서비스 제공과 같이 기존 서비스를 개선하고, AI 기술 등을 결합한 신규 서비스 요소를 발굴\n법령 및 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 계정 도용 및 부정거래 방지, 약관 개정 등 고지사항 전달, 이용자 문의 사항 또는 민원 처리,분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영\n보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축'
            }
          </TableItem>
          <TableItem gridColumn="1" gridRow="10">
            당근마켓 User ID, 휴대폰번호, 프로필 사진, 닉네임, 고객 상담 내역,
            검색이력/거래기록/방문기록 등 서비스이용기록, 부정이용기록 , IP주소,
            단말기 정보(OS, 화면사이즈, 기기식별값)
          </TableItem>
          <TableItem gridColumn="1" gridRow="10">
            {
              '회원탈퇴시 혹은 제3자제공 철회시 까지\n\n※ 단, 관계 법령 위반에 따른 수사, 조사 등이 진행중인 경우에는 해당 수사, 조사 종료 시 까지 보관 하며 내부규정 혹은 관련법령에 따라 일정기간 보관됨.'
            }
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            동네 장보기 배달 판매자
          </TableItem>
          <TableItem gridColumn="3" gridRow="2">
            상품의 배송
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            이름, 휴대폰 번호, 주소
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            처리목적 달성시 즉시 파기
          </TableItem>
          <TableItem gridColumn="2" gridRow="2">
            당근알바 사장님
          </TableItem>
          <TableItem gridColumn="3" gridRow="2">
            당근알바 채용
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            {'(필수) 연락처, 성별, 나이\n(선택) 사진, 이름, 경력, 자기소개'}
          </TableItem>
          <TableItem gridColumn="1" gridRow="2">
            처리목적 달성시 즉시 파기
          </TableItem>
        </Table>
        <Description>(2) 관련법령에 따른 제공</Description>
        <Description>
          - 회사는 개인정보보호법 등 관계 법령이 정하는 경우, 그 밖에 정부
          관계부처가 합동으로 발표한 「긴급상황 시 개인정보 처리 및 보호수칙」에
          따라 재난, 감염병, 급박한 생명·신체 위험을 초래하는 사건·사고, 급박한
          재산 손실 등의 긴급상황이 발생하는 경우, 정보주체의 동의 없이
          관계기관에 개인정보를 제공할 수 있습니다.
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>06 개인정보 파기 절차 및 방법</SectionTitle>
        <Description>
          {
            '이용자의 개인정보는 수집 및 이용목적이 달성되면 지체없이 파기합니다.(여기서 ‘이용목적이 달성된 때’란 철회요청, 서비스계약 만료, 탈퇴 시를 의미.) 다만, 회사 내부 방침 또는 관계 법령에서 정한 보관기간이 있을 경우 일정 기간동안 보관 후 파기 됩니다.\n종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기하고, 전자적 파일 형태로 저장된 기록은 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>07 장기 미이용 회원에 대한 조치</SectionTitle>
        <Description>
          장기 미이용회원은 당근마켓의 서비스를 1년간 이용하지 않은 이용자를
          말합니다. 당근마켓은 이 회원의 개인정보를 별도로 분리 보관 또는
          삭제하고 있으며, 분리 보관된 개인정보는 9년간 보관 후 지체없이
          파기합니다.
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>
          08 정보주체와 법정대리인의 권리 의무 및 행사 방법
        </SectionTitle>
        <Description>
          {
            '이용자는 언제든지 개인정보를 조회하거나 수정할 수 있고 수집/이용에 대한 동의 철회 또는 가입 해지를 요청 할 수 있습니다.\n서비스 내 설정 기능을 통한 변경, 가입해지(동의철회)를 위해서 아래의 경로를 따를 수 있습니다.'
          }
        </Description>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>
              {'개인정보 조회 : 나의당근 > 앱설정 > 계정/정보 관리'}
            </ListItem>
            <ListItem>
              {'개인정보 변경 : 나의당근 > 앱설정 > 계정/정보 관리'}
            </ListItem>
            <ListItem>{'동의철회 : 나의당근 > 설정 > 탈퇴하기'}</ListItem>
          </List>
        </Box>
        <Description>
          혹은 운영자에게 이메일이나 별도게시판으로 문의주시면 찌체없이 조치 해
          드리도록 하겠습니다.
        </Description>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>{'개인정보 관련 고객상담 접수 연락처'}</ListItem>
            <ListItem>{'이메일 : privacy@daangnservice.com'}</ListItem>
            <ListItem>
              {'고객센터 문의 : 나의 당근 > 자주묻는 질문 > 고객센터 문의하기'}
            </ListItem>
          </List>
        </Box>
        <Description>
          {
            '이용자는 법정대리인이나 위임을 받은 자 등 대리인을 통해서도 권리행사를 하실 수 있으며, 이 경우 『개인정보 처리 방법에 관한 고시』 별지 제11호 서식에 따른 위임장을 제출하여야 합니다.\n개인정보 열람 및 처리정지 요구는 「개인정보보호법」 제 35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있으며, 개인정보의 정정 및 삭제 요구 시 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 삭제 해 드릴 수 없습니다.\n당근마켓은 정보주체 권리에 따른 열람의 요구 정정 삭제의 요구 처리정지의 요구 시 요구를 한 이용자가 본인이거나 대리인인지 확인합니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>09 개인정보의 안전성 확보조치에 관한 사항</SectionTitle>
        <Description>
          당근마켓은 「개인정보보호법」 제29조에 따라 다음과 같이 안전성 확보에
          필요한 기술적, 관리적, 물리적 보호대책을 수립하여 운영하고 있습니다.
        </Description>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>{'개인정보 취급자의 최소화 및 교육'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {
                    '개인정보를 처리하는 직원을 최소화 하며, 개인정보를 처리하는 모든 임직원들을 대상으로 개인정보보호 의무와 보안에 대한 정기적인 교육과 캠페인을 실시'
                  }
                </ListItem>
              </List>
            </Box>
            <ListItem>{'개인정보에 대한 접근 제한'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {
                    '개인정보를 처리하는 시스템에 대한 접근권한의 부여, 변경, 말소 절차 수립 및 운영'
                  }
                </ListItem>
                <ListItem>
                  {'침입탐지시스템을 이용하여 외부로부터의 무단 접근 통제'}
                </ListItem>
              </List>
            </Box>
            <ListItem>{'접속기록의 보관 및 위변조 방지'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {
                    '개인정보처리시스템에 접속한 기록(웹 로그, 요약정보 등)을 최소 2년 이상 보관 및 관리'
                  }
                </ListItem>
                <ListItem>
                  {'접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용'}
                </ListItem>
              </List>
            </Box>
            <ListItem>{'개인정보의 암호화'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {'신용카드 번호 등 중요정보는 암호화 되어 저장 및 관리'}
                </ListItem>
                <ListItem>
                  {
                    '중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의 별도 보안기능을 사용'
                  }
                </ListItem>
              </List>
            </Box>
            <ListItem>{'해킹 등에 대비한 기술적 대책'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {
                    '해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신・점검'
                  }
                </ListItem>
                <ListItem>
                  {
                    '외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단'
                  }
                </ListItem>
                <ListItem>
                  {
                    '네트워크 트래픽의 통제(Monitoring)는 물론 불법적으로 정보를 변경하는 등의 시도를 탐지'
                  }
                </ListItem>
              </List>
            </Box>
          </List>
        </Box>
      </Box>
      <Box gap="10px">
        <SectionTitle>
          10 개인정보를 자동으로 수집하는 장치의 설치 운영 및 거부
        </SectionTitle>
        <Description>
          {
            '당근마켓은 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.\n쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 브라우저에게 보내는 소량의 정보이며 이용자들의 PC컴퓨터 내의 하드디스크에 저장되기도 합니다.\n쿠키는 이용자들이 방문한 당근마켓의 각 서비스와 웹 사이트 들의 대한 방문 및 이용형태, 인기검색어, 보안접속 여부, 이용자 규모 등을 파악하여 이용자에게 광고를 포함한 최적화된 맞춤형 정보를 제공하기 위해 사용합니다.\n이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 일부 서비스는 이용이 어려움이 있을 수 있습니다.'
          }
        </Description>
        <Description>쿠키 설치 허용 여부를 지정하는 방법</Description>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>{'Internet Explorer'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {
                    '웹 브라우저 상단의 톱니바퀴 아이콘 선택 > [인터넷 옵션] 선택 > [개인정보 탭] 선택 > [설정]에서 [고급] 선택 > [쿠키] 섹션에서 설정'
                  }
                </ListItem>
              </List>
            </Box>
          </List>
        </Box>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>{'Microsoft Edge'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {
                    '웹 브라우저 상단의 점 아이콘 선택 > [설정] 선택 > [쿠키 및 사이트 권한] 선택 > [쿠키 및 사이트 데이트 관리 및 삭제] 선택하여 설정'
                  }
                </ListItem>
              </List>
            </Box>
          </List>
        </Box>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>{'Chrome'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {
                    '웹 브라우저 우측 상단의 점 아이콘 선택 > [설정] 선택 > [보안 및 개인정보 보호] 선택 > [쿠키 및 기타 사이트 데이터] 선택 > [일반설정] 섹션에서 설정'
                  }
                </ListItem>
              </List>
            </Box>
          </List>
        </Box>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>{'Whale'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {
                    '웹 브라우저 상단의 점 아이콘 선택 > [설정] 선택 > [개인정보 보호] 선택 > [쿠키 및 기타 사이트 데이터] 선택 > [일반설정] 섹션에서 설정'
                  }
                </ListItem>
              </List>
            </Box>
          </List>
        </Box>
      </Box>
      <Box gap="10px">
        <SectionTitle>
          11 행태정보 수집 이용 제공 및 거부 등에 관한 사항
        </SectionTitle>
        <Description>
          당근마켓은 서비스 이용과정에서 정보주체에게 최적화된 맞춤형 서비스 및
          혜택 온라인 맞춤형 광고 등을 제공하기 위하여 다음과 같은 행태정보를
          수집합니다.
        </Description>
        <Table
          gridTemplateColumns="4"
          gridTemplateRows="7"
          width="500px"
          height="300px"
        >
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            수집하는 형태정보의 항목
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            수집방법
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            수집 목적
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            보유 이용기간 및 정보 처리 방법
          </TableItem>
          <TableItem gridColumn="1" gridRow="6">
            검색이력/거래기록/방문기록 등 서비스이용기록, IP주소, 단말기정보(OS,
            화면사이즈, 기기식별값), 광고ID
          </TableItem>
          <TableItem gridColumn="1" gridRow="6">
            당근마켓 웹/모바일 앱 이용 시 자동 수집
          </TableItem>
          <TableItem gridColumn="1" gridRow="6">
            이용자의 관심, 성향에 기반한 개인 맞춤형 삼품추천서비스(광고포함)를
            제공
          </TableItem>
          <TableItem gridColumn="1" gridRow="6">
            {
              '회원탈퇴시 까지\n\n※ 단, 관계 법령 위반에 따른 수사, 조사 등이 진행중인 경우에는 해당 수사, 조사 종료 시 까지 보관 하며 내부규정 혹은 관련법령에 따라 일정기간 보관됨.'
            }
          </TableItem>
        </Table>
        <Description>
          {
            '당근마켓은 온라인 맞춤형 광고 등에 필요한 최소한의 행태정보만을 수집하며, 사상, 신념, 가족 및 친인척관계, 학력 병력, 기타 사회활동 경력 등 개인의 권리 이익이나 사생활을 뚜렷하게 침해할 우려가 있는 민감한 행태정보를 수집하지 않습니다.\n당근마켓은 모바일 앱에서 온라인 맞춤형 광고를 위하여 광고식별자를 수집/이용 합니다. 정보주체는 아래와 같이 모바일 단말기의 설정 변경을 통해 앱의 맞춤형 광고를 차단허용 할 수 있습니다.'
          }
        </Description>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>{'안드로이드 단말기'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {'설정 > 개인정보보호 > 광고ID 재설정 또는 광고ID 삭제'}
                </ListItem>
              </List>
            </Box>
          </List>
        </Box>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>{'아이폰 단말기'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {
                    '설정 > 개인정보보호 > 추적 > 앱이 추적을 요청하도록 허용 끔'
                  }
                </ListItem>
              </List>
            </Box>
          </List>
        </Box>
        <Box padding="0 10px">
          <List listStyle="inherit">
            <ListItem>{'앱 내 설정'}</ListItem>
            <Box padding="0 10px">
              <List listStyle="revert">
                <ListItem>
                  {
                    '나의 당근 > 설정(우측 상단 톱니바퀴모양) > 기타설정 > 맞춤형 광고 허용하기 끔'
                  }
                </ListItem>
              </List>
            </Box>
          </List>
        </Box>
      </Box>
      <Box gap="10px">
        <SectionTitle>12 개인정보 보호책임자에 관한 사항</SectionTitle>
        <Description>
          사용자가 서비스를 이용하면서 발생하는 모든 개인정보보호 관련 문의,
          불만, 조언이나 기타 사항은 개인정보 보호책임자 및 담당부서로 연락해
          주시기 바랍니다. 당근마켓은 사용자 목소리에 귀 기울이고 신속하고
          충분한 답변을 드릴 수 있도록 최선을 다하겠습니다
        </Description>
        <Description>
          {
            '- 이름 : 이동현\n- 직위 : 개인정보보호책임자\n- 부서 : 보안팀\n- 연락처 : privacy@daangnservice.com'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>13 정보주체의 권익침해에 대한 구제방법</SectionTitle>
        <Description>
          {
            '이용자는 아래의 기관에 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다\n- 개인정보 침해신고센터 (한국인터넷진흥원 운영)\n- 소관업무 : 개인정보 침해사실 신고, 상담 신청\n- 홈페이지 : privacy.kisa.or.kr\n- 전화 : (국번없이) 118\n- 주소 : 전라남도 나주시 진흥길 9 한국인터넷진흥원\n- 개인정보 분쟁조정위원회\n- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)\n- 홈페이지 : www.kopico.go.kr\n- 전화 : 1833-6972\n- 주소 : 서울특별시 종로구 세종대로 209 정부서울청사 12층\n- 대검찰청 사이버수사과: (국번없이) 1301, privacy@spo.go.kr (www.spo.go.kr)\n- 경찰청 사이버수사국: (국번없이) 182 (ecrm.cyber.go.kr)'
          }
        </Description>
        <Description>
          {
            '당근마켓은 정보주체의 개인정보자기결정권을 보장하고, 개인정보침해로 인한 상담 및 피해구제를 위해 노력하고 있으며, 신고나 상담이 필요한 경우 개인정보관련 고객상담 접수 부서 (08 정보주체와 법정대리인의 권리 의무 및 행사 방법 참고) 로 연락 해 주시기 바랍니다.\n『개인정보보호법』 제25조(개인정보의 열람), 제26조(개인정보의 정정 삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에따라 행정심판을 청구할 수 있습니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>
          14 개인정보처리방침의 시행 및 변경에 관한 사항
        </SectionTitle>
        <Description>
          {
            '이 개인정보 처리방침은 2023년 3월 20일부터 시행되며 당근마켓은 법률이나 서비스의 변경사항을 반영하기 위한 목적 등으로 개인정보처리방침이 변경되는 경우 최소 7일 전부터 공지사항을 통해 변경 사항을 고지 해드리도록 하겠습니다. \n이전개인정보처리방침은 아래에서 확인 하실 수 있습니다.\n'
          }
          <Link to=".">이전 개인정보처리방침(시행일자-23.01.19)</Link>
        </Description>
      </Box>
    </Wrapper>
  );
};

const LocationService = () => {
  return (
    <Wrapper>
      <Title>위치기반서비스 이용약관</Title>
      <Box gap="10px">
        <SectionTitle>제1조 (목적)</SectionTitle>
        <Description>
          본 약관은 회원(본 약관에 동의한 자를 말합니다. 이하 “회원”이라고
          합니다)이 주식회사 당근마켓(이하 “회사”라고 합니다)가 제공하는
          위치기반서비스(이하 “서비스”라고 합니다)를 이용함에 있어 회사와 회원의
          권리・의무 및 책임사항을 규정함을 목적으로 합니다.
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>제2조 (약관의 효력 및 변경)</SectionTitle>
        <Description>
          {
            '1. 본 약관은 서비스를 신청한 고객 또는 개인위치정보주체가 본 약관에 동의하고 회사가 정한 소정의 절차에 따라 서비스의 이용자로 등록함으로써 효력이 발생합니다.\n\n2. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시하거나 기타의 방법으로 공지합니다.\n\n3. 회사는 필요하다고 인정되면 본 약관을 변경할 수 있으며, 회사가 약관을 개정할 경우에는 기존약관과 개정약관 및 개정약관의 적용일자와 개정사유를 명시하여 현행약관과 함께 그 적용일자 7일 전부터 적용일 이후 상당한 기간 동안 공지합니다. 다만, 개정 내용이 회원에게 불리한 경우에는 그 적용일자 30일 전부터 적용일 이후 상당한 기간 동안 각각 이를 서비스 홈페이지에 게시하여 고지합니다.\n\n4. 회사가 전항에 따라 회원에게 공지하거나 통지하면서 공지 또는 통지ㆍ고지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 불구하고 거부의 의사표시가 없는 경우에는 변경된 약관에 승인한 것으로 봅니다. 회원이 개정약관에 동의하지 않을 경우 회원은 이용계약을 해지할 수 있습니다.'
          }
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>제3조 (약관 외 준칙)</SectionTitle>
        <Description>
          본 약관에 규정되지 않은 사항에 대해서는 위치정보의 보호 및 이용 등에
          관한 법률(이하 “위치정보법”이라고 합니다), 전기통신사업법, 정보통신망
          이용촉진 및 보호 등에 관한 법률(이하 “정보통신망법”이라고 합니다),
          개인정보보호법 등 관련법령 또는 회사가 정한 서비스의 운영정책 및 규칙
          등(이하 “세부지침”이라고 합니다)의 규정에 따릅니다.
        </Description>
      </Box>
      <Box>
        <SectionTitle>제4조 (서비스의 가입)</SectionTitle>
        <Description>
          {
            '1. 회원은 본 약관에 동의하고 서비스에 가입신청함으로써 서비스의 이용자가 될 수 있습니다.\n\n2. 회사는 아래와 같은 경우 회원의 서비스 가입신청에 대한 승낙을 유보할 수 있습니다.'
          }
        </Description>
        <Box padding="0 20px">
          <List listStyle="inherit">
            <ListItem>
              실명이 아니거나 다른 사람의 명의를 사용하는 등 허위로 신청하는
              경우
            </ListItem>
            <ListItem>
              회원 등록 사항을 빠뜨리거나 잘못 기재하여 신청하는 경우
            </ListItem>
            <ListItem>
              기타 회사가 정한 이용신청 요건을 충족하지 않았을 경우
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box>
        <SectionTitle>제5조 (서비스의 해지)</SectionTitle>
        <Description>
          회원이 서비스 이용을 해지하고자 할 경우 회원은 회사가 정한 절차(서비스
          홈페이지 등을 통해 공지합니다)를 통해 서비스 해지를 신청할 수 있으며,
          회사는 법령이 정하는 바에 따라 신속히 처리합니다.
        </Description>
      </Box>
      <Box>
        <SectionTitle>제6조 (서비스의 내용)</SectionTitle>
        <Description>
          1. 서비스의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 단, 회사의
          업무 또는 기술상의 이유로 서비스가 일시 중지될 수 있으며, 운영상의
          목적으로 회사가 정한 기간에도 서비스는 일시 중지될 수 있습니다. 이때
          회사는 사전 또는 사후에 이를 공지합니다.
        </Description>
        <Description>
          2. 회사는 단말기의 설정 상태에 따라, 회원이 앱을 구동 내지 사용하는
          특정 시점 혹은 회원이 앱 내 특정 서비스를 활성화하거나 동네인증 등의
          액션을 하는 시점에, 위치정보사업자로부터 위치정보를 위경도 좌표의
          형식으로 전달받게 됩니다. 회사는 해당 위치정보를 사전에 정의된 특정
          구역 단위 혹은 특정 행정동 단위에 속하는지 여부에 대한 값으로 변환할
          수 있습니다.
        </Description>
        <Description>
          3. 회사가 이러한 위치정보를 토대로 제공하는 서비스의 종류와 내용은
          아래와 같습니다. 다만 회사는 경영상, 사업상 이유 등으로 아래 예시한
          서비스 중 일부를 중단 내지 변경할 수 있으며, 이에 대해서는 관련 법령
          및 본 약관이 정하는 바에 따라 조치하겠습니다.
        </Description>
        <Table
          gridTemplateColumns="4"
          gridTemplateRows="20"
          width="500px"
          height="800px"
        >
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            서비스명
          </TableItem>
          <TableItem gridColumn="2" gridRow="1" fontWeight="600">
            서비스 목적 및 내용
          </TableItem>
          <TableItem gridColumn="1" gridRow="1" fontWeight="600">
            보유기간
          </TableItem>
          <TableItem gridColumn="1" gridRow="5">
            동네 인증
          </TableItem>
          <TableItem gridColumn="2" gridRow="5">
            <Box padding="0 10px">
              <List listStyle="inherit">
                <ListItem>
                  회원의 위치가 특정 구역 내지 행정동 단위에 속하는지 여부를
                  확인하여 '내 동네' 인증
                </ListItem>
                <ListItem>
                  예시: 인증된 '내 동네'를 바탕으로 중고물품 거래, 동네 정보
                  공유 서비스 제공 등
                </ListItem>
              </List>
            </Box>
          </TableItem>
          <TableItem gridColumn="1" gridRow="19">
            관련 법령 및 제5항이 정하는 바에 의함
          </TableItem>
          <TableItem gridColumn="1" gridRow="5">
            서비스 이용 편의 제공
          </TableItem>
          <TableItem gridColumn="2" gridRow="5">
            <Box padding="0 10px">
              <List listStyle="inherit">
                <ListItem>
                  회원의 위치정보를 지도 서비스에 표시하여, 서비스 이용의 편의성
                  증진
                </ListItem>
                <ListItem>
                  예시: 중고거래 희망장소 표시, 동네가게 거리 및 정보 확인, 기타
                  지도 연동 서비스 이용 시, 회원의 위치정보에 기반한 서비스 편의
                  제공 등
                </ListItem>
              </List>
            </Box>
          </TableItem>
          <TableItem gridColumn="1" gridRow="5">
            서비스 내 콘텐츠 제공 내지 추천
          </TableItem>
          <TableItem gridColumn="2" gridRow="5">
            <Box padding="0 10px">
              <List listStyle="inherit">
                <ListItem>
                  회원의 위치정보 혹은 이것이 특정 구역 내지 행정동 단위에
                  속하는 지 여부를 기반으로, 앱 내 다양한 콘텐츠 제공 내지
                  추천에 활용
                </ListItem>
                <ListItem>
                  예시: 중고거래 내지 직거래 관련 근거리 매물 추천, 구인구직
                  관련 근거리 게시글 추천, 동네 생활 및 커뮤니티 관련 근거리
                  콘텐츠 추천, 기타 검색결과 내지 광고성 소재 추천에 활용 등
                </ListItem>
              </List>
            </Box>
          </TableItem>
          <TableItem gridColumn="1" gridRow="4">
            서비스 제공 내용 고도화
          </TableItem>
          <TableItem gridColumn="2" gridRow="4">
            <Box padding="0 10px">
              <List listStyle="inherit">
                <ListItem>
                  회원의 위치정보에 대한 통계적 분석을 통해, 관심 지역, 활동
                  구역, 추정 경로 등을 정의하고, 이를 토대로 검색, 추천, 콘텐츠
                  표시 등 각종 응용 서비스 제공 및 고도화
                </ListItem>
              </List>
            </Box>
          </TableItem>
        </Table>
        <Description>
          4. 회사는 위치정보의 보호 및 이용 등에 관한 법률 제16조 제2항에 따라
          위치정보 수집∙이용∙제공 사실 확인자료를 위치정보시스템에 자동으로
          기록, 보존하여, 해당 자료는 6개월 이상 보관합니다.
        </Description>
        <Description>
          5. 회사는 개인위치정보의 수집, 이용 또는 제공 목적을 달성하거나,
          서비스를 종료하거나, 고객이 회원 탈퇴 등의 방법으로 개인위치정보의
          이용에 대한 동의를 철회하는 때에는 당해 개인위치정보를 지체 없이
          파기합니다. 다만, 위치정보의 보호 및 이용 등에 관한 법률에 달리 정함이
          있거나 다른 법률에 의한 보관이 필요한 경우 해당 기간만큼 보관합니다.
        </Description>
      </Box>
      <Box>
        <SectionTitle>제7조 (서비스 이용요금)</SectionTitle>
        <Description>
          1. 회사가 제공하는 서비스는 기본적으로 유료 또는 무료입니다. 단,
          별도의 유료서비스의 경우 해당 서비스에 명시된 요금을 지불하여야 사용
          가능합니다.
        </Description>
        <Description>
          2. 회사는 유료서비스 이용요금을 회사와 계약한 전자지불업체에서 정한
          방법에 의하거나 회사가 정한 청구서에 합산하여 청구할 수 있습니다.
        </Description>
        <Description>
          3. 유료서비스 이용을 통하여 결제된 대금에 대한 취소 및 환불은 회사의
          결제 이용약관 등 관련법령에 따릅니다.
        </Description>
        <Description>
          4. 회원의 개인정보도용 및 결제사기로 인한 환불요청 또는 결제자의
          개인정보 요구는 법률이 정한 경우 외에는 거절될 수 있습니다.
        </Description>
        <Description>
          5. 무선서비스 이용 시 발생하는 데이터 통신료는 별도이며, 회원이 가입한
          각 이동통신사의 정책에 따릅니다.
        </Description>
        <Description>
          6. MMS 등으로 게시물을 등록할 경우 발생하는 요금은 회원이 가입한 각
          이동통신사의 정책에 따릅니다.
        </Description>
      </Box>
      <Box>
        <SectionTitle>제8조 (서비스의 이용제한 및 중지)</SectionTitle>
        <Description>
          1. 회사는 아래 각 호의 경우에는 회원의 서비스 이용을 제한하거나
          중지시킬 수 있습니다.
          <Box padding="0 10px" gap="10px">
            <Description>
              a. 회원이 회사 서비스의 운영을 고의 또는 중과실로 방해하는 경우
            </Description>
            <Description>
              b. 서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우
            </Description>
            <Description>
              c. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를
              중지했을 경우
            </Description>
            <Description>
              d. 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로
              서비스 이용에 지장이 있는 때
            </Description>
            <Description>
              e. 기타 중대한 사유로 인하여 회사가 서비스 제공을 지속하는 것이
              부적당하다고 인정하는 경우
            </Description>
          </Box>
        </Description>
        <Description>
          2. 회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한
          때에는 그 사유 및 제한기간 등을 회원에게 알려야 합니다.
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>제9조 (서비스내용변경 통지 등)</SectionTitle>
        <Description>
          1. 회사가 서비스 내용을 변경하거나 종료하는 경우 회사는 회원의 등록된
          휴대폰 번호 문자 방식으로 서비스 내용의 변경 사항 또는 종료를 통지할
          수 있습니다.
        </Description>
        <Description>
          2. 전항의 경우 불특정 다수인을 상대로 통지를 함에 있어서는 서비스
          홈페이지 등 기타 회사의 공지사항 페이지를 통하여 회원들에게 통지할 수
          있습니다. 단, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항은
          상당한 기간 동안 서비스 홈페이지에 게시하거나 회원에게 전자적
          형태(전자우편, SMS 등)로 개별통지 합니다.
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>제10조 (개인위치정보의 이용 또는 제공)</SectionTitle>
        <Description>
          1. 회사는 개인위치정보를 이용하여 서비슬를 제공하고자 하는 경우에는
          미리 약관에 명시한 후 개인위치정보주체의 동의를 얻어야 합니다.
        </Description>
        <Description>
          2. 회사는 개인위치정보를 회원이 지정하는 제3자에게 제공하는 경우에는
          제공받는 자 및 제공목적을 사전에 회원에게 고지하고 동의를 받습니다.
        </Description>
        <Description>
          3. 제2항에 따라 개인위치정보를 회원이 지정하는 제3자에게 제공하는
          경우에는 개인위치정보를 수집한 해당 통신 단말장치 또는 전자우편주소
          등으로 매회 회원에게 제공받는 자, 제공일시 및 제공목적(이하
          “정보제공내역”이라 합니다)을 즉시 통보합니다.
        </Description>
        <Description>
          4.단, 아래 각 호에 해당하는 경우에는 회원이 미리 특정하여 지정한
          통신단말장치 또는 전자우편주소 등으로 통보합니다.
          <Box padding="0 10px" gap="10px">
            <Description>
              a. 개인위치정보를 수집한 해당 통신단말장치가 문자, 음성 또는
              영상의 수신기능을 갖추지 아니한 경우
            </Description>
            <Description>
              b. 회원이 개인위치정보를 수집한 해당 통신단말장치 외의
              통신단말장치 또는 전자우편주소 등으로 통보할 것을 미리 요청한 경우
            </Description>
          </Box>
        </Description>
        <Description>
          5. 제3항에도 불구하고 회원은 위치정보법 시행령 제24조에 따라
          정보제공내역을 30일씩 모아서 통보받는 방법을 선택할 수 있으며, 회원이
          회사의 절차에 따라 요청할 경우 전항에 따른 즉시 통보 방법으로 변경할
          수 있습니다.
        </Description>
        <Description>
          6. 회원은 제1항, 제2항 및 제5항에 따른 동의를 하는 경우 이용∙제공목적,
          제공받는 자의 범위 및 위치기반서비스 이용약관의 내용 중 일부와 회원의
          개인위치정보에 대한 제3자 제공의 경우 통보방법에 대하여 동의를 유보할
          수 있습니다.
        </Description>
        <Description>
          7. 회사는 회원의 동의가 있거나 다음 각 호의 어느 하나에 해당하는
          경우를 제외하고는 개인위치정보 또는 위치정보 이용∙제공사실 확인자료를
          이용약관에 명시 또는 고지한 범위를 넘어 이용하거나 제3자에게 제공할 수
          없습니다.
          <Box padding="0 10px" gap="10px">
            <Description>
              a. 위치기반서비스의 제공에 따른 요금정산을 위하여 위치정보
              이용∙제공사실 확인자료가 필요한 경우
            </Description>
            <Description>
              b. 통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수
              없는 형태로 가공하여 제공하는 경우
            </Description>
          </Box>
        </Description>
      </Box>
      <Box gap="10px">
        <SectionTitle>제11조 (개인위치정보주체의 권리)</SectionTitle>
        <Description>
          1. 회원은 회사에 대하여 언제든지 개인위치정보를 이용한 위치기반서비스
          제공 및 개인위치정보의 제3자 제공에 대한 동의의 전부 또는 일부를
          철회할 수 있습니다. 이 경우 회사는 수집한 개인위치정보 및 위치정보
          이용, 제공사실 확인자료를 파기합니다.
        </Description>
        <Description>
          2. 회원은 회사에 대하여 언제든지 개인위치정보의 수집, 이용 또는 제공의
          일시적인 중지를 요구할 수 있으며, 회사는 이를 거절할 수 없고 이를 위한
          기술적 수단을 갖추고 있습니다.
        </Description>
        <Description>
          3. 회원은 회사에 대하여 아래 각 호의 자료에 대한 열람 또는 고지를
          요구할 수 있고, 당해 자료에 오류가 있는 경우에는 그 정정을 요구할 수
          있습니다. 이 경우 회사는 정당한 사유 없이 회원의 요구를 거절할 수
          없습니다.
          <Box padding="0 10px" gap="10px">
            <Description>
              a. 본인에 대한 위치정보 수집, 이용, 제공사실 확인자료
            </Description>
            <Description>
              b. 본인의 개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률
              또는 다른 법률 규정에 의하여 제3자에게 제공된 이유 및 내용
            </Description>
          </Box>
        </Description>
        <Description>
          4. 회원은 제1항 내지 제3항의 권리행사를 위해 회사의 소정의 절차를 통해
          요구할 수 있습니다.
        </Description>
      </Box>
      <Box>
        <SectionTitle>제12조 (법정대리인의 권리)</SectionTitle>
        <Description>
          1. 회사는 14세 미만의 회원에 대해서는 개인위치정보를 이용한
          위치기반서비스 제공 및 개인위치정보의 제3자 제공에 대한 동의를 당해
          회원과 당해 회원의 법정대리인으로부터 동의를 받아야 합니다. 이 경우
          법정대리인은 제11조에 의한 회원의 권리를 모두 가집니다.
        </Description>
        <Description>
          2. 회사는 14세 미만의 아동의 개인위치정보 또는 위치정보 이용, 제공사실
          확인자료를 이용약관에 명시 또는 고지한 범위를 넘어 이용하거나
          제3자에게 제공하고자 하는 경우에는 14세 미만의 아동과 그 법정대리인의
          동의를 받아야 합니다. 단, 아래의 경우는 제외합니다.
          <Box padding="0 10px" gap="10px">
            <Description>
              a. 위치정보 및 위치기반서비스 제공에 따른 요금정산을 위하여
              위치정보 이용, 제공사실 확인자료가 필요한 경우
            </Description>
            <Description>
              b. 통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수
              없는 형태로 가공하여 제공하는 경우
            </Description>
          </Box>
        </Description>
      </Box>
      <Box>
        <SectionTitle>
          제13조 (8세 이하의 아동 등의 보호의무자의 권리)
        </SectionTitle>
        <Description>
          1. 전 조에도 불구하고, 아래의 경우에 해당하는 자(이하 “8세 이하 아동
          등”)의 보호의무자가 8세 이하의 아동 등의 생명 또는 신체보호를 위하여
          개인위치정보의 이용 또는 제공에 동의하는 경우에는 본인의 동의가 있는
          것으로 봅니다.
          <Box padding="0 10px">
            <List listStyle="inherit">
              <ListItem>8세 이하의 아동</ListItem>
              <ListItem>피성년후견인</ListItem>
              <ListItem>
                장애인복지법 제2조 제2항 제2호의 규정에 따른 정신적 장애를 가진
                자로서 장애인 고용촉진 및 직업재활법 제2조 제2호의 규정에 따라
                중증장애인에 해당하는 자(장애인복지법 제32조의 규정에 따라
                장애인등록을 한 자에 한합니다)장애인복지법 제2조 제2항 제2호의
                규정에 따른 정신적 장애를 가진 자로서 장애인 고용촉진 및
                직업재활법 제2조 제2호의 규정에 따라 중증장애인에 해당하는
                자(장애인복지법 제32조의 규정에 따라 장애인등록을 한 자에
                한합니다)
              </ListItem>
            </List>
          </Box>
        </Description>
        <Description>
          2. 전항의 규정에 따른 8세 이하 아동 등의 보호의무자는 해당 아동을
          사실상 보호하는 자로서 다음 각 호에 해당하는 자를 말합니다.
          <Box padding="0 10px">
            <List listStyle="inherit">
              <ListItem>
                8세 이하의 아동의 법정대리인 또는 보호시설에 있는 미성년자의
                후견 직무에 관한 법률 제3조의 규정에 따른 후견인
              </ListItem>
              <ListItem>피성년후견인의 법정대리인</ListItem>
              <ListItem>
                본 조 제1항 제3호의 자의 법정대리인 또는 장애인복지법 제58조
                제1항 제1호의 규정에 따른 장애인생활시설(국가 또는
                지방자치단체가 설치·운영하는 시설에 한합니다)의 장, 정신보건법
                제3조 제4호의 규정에 따른 정신질환자 사회복귀시설(국가 또는
                지방자치단체가 설치·운영하는 시설에 한합니다)의 장, 동법 동조
                제5호의 규정에 따른 정신요양시설의 장
              </ListItem>
            </List>
          </Box>
        </Description>
        <Description>
          3. 8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의
          이용 또는 제공에 동의를 하고자 하는 보호의무자는 서면동의서에
          보호의무자임을 증명하는 서면을 첨부하여 회사에 제출하여야 합니다.
        </Description>
        <Description>
          4. 보호의무자는 8세 이하의 아동 등의 개인위치정보 이용 또는 제공에
          동의하는 경우 개인위치정보주체 권리의 전부를 행사할 수 있습니다.
        </Description>
      </Box>
      <Box>
        <SectionTitle>제14조 (회사의 주소 및 연락처 등)</SectionTitle>
        <Description>
          1. 회사의 상호, 주소 및 연락처는 아래와 같습니다.
          <Box padding="0 10px">
            <List listStyle="inherit">
              <ListItem>상호 : 주식회사 당근마켓</ListItem>
              <ListItem>대표 : 김용현, 황도연</ListItem>
              <ListItem>
                주소 : 서울특별시 구로구 디지털로30길 28, 609호 (당근서비스)
              </ListItem>
              <ListItem>대표전화 : 1644-9736</ListItem>
            </List>
          </Box>
        </Description>
        <Description>
          2. 회사는 개인위치정보를 적절히 관리·보호하고, 개인위치정보주체의
          불만을 원활히 처리할 수 있도록 실질적인 책임을 질 수 있는 지위에 있는
          자를 위치정보관리책임자로 지정해 운영하고 있으며, 위치정보관리책임자의
          성명과 연락처는 아래와 같습니다.
          <Box padding="0 10px">
            <List listStyle="inherit">
              <ListItem>성명 : 정창훈</ListItem>
              <ListItem>대표전화 : 1644-9736</ListItem>
              <ListItem>이메일주소 : contact@daangn.com</ListItem>
            </List>
          </Box>
        </Description>
      </Box>
      <Box>
        <SectionTitle>제15조 (양도금지)</SectionTitle>
        <Description>
          회원의 서비스 받을 권리는 이를 양도 내지 증여하거나 담보제공 등의
          목적으로 처분할 수 없습니다.
        </Description>
      </Box>
      <Box>
        <SectionTitle>제16조 (손해배상)</SectionTitle>
        <Description>
          1. 회사가 위치정보법 제15조 내지 제26조의 규정을 위반한 행위로
          회원에게 손해가 발생한 경우 회원은 회사에 대하여 손해배상 청구를 할 수
          있습니다. 이 경우 회사는 고의, 과실이 없음을 입증하지 못하는 경우
          책임을 면할 수 없습니다.
        </Description>
        <Description>
          2. 회사가 위치정보법 제15조 내지 제26조의 규정을 위반한 행위로
          회원에게 손해가 발생한 경우 회원은 회사에 대하여 손해배상 청구를 할 수
          있습니다. 이 경우 회사는 고의, 과실이 없음을 입증하지 못하는 경우
          책임을 면할 수 없습니다.
        </Description>
      </Box>
      <Box>
        <SectionTitle>제17조 (면책)</SectionTitle>
        <Description>
          1. 회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여
          회원에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.
          <Box padding="0 10px">
            <List>
              <ListItem>
                a. 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우
              </ListItem>
              <ListItem>
                b. 서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의
                고의적인 서비스 방해가 있는 경우
              </ListItem>
              <ListItem>
                c. 회원의 귀책사유로 서비스 이용에 장애가 있는 경우4) 제1호 내지
                제3호를 제외한 기타 회사의 고의ㆍ과실이 없는 사유로 인한 경우
              </ListItem>
            </List>
          </Box>
        </Description>
        <Description>
          2. 회사는 서비스 및 서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성
          등에 대해서는 보증을 하지 않으며 이로 인해 발생한 회원의 손해에
          대하여는 책임을 부담하지 아니합니다.
        </Description>
      </Box>
      <Box>
        <SectionTitle>제18조 (분쟁의 조정 및 기타)</SectionTitle>
        <Description>
          1. 서비스 이용과 관련하여 회사와 회원 간에 분쟁이 발생하면, 회사는
          분쟁의 해결을 위해 회원과 성실히 협의합니다.
        </Description>
        <Description>
          2. 전항의 협의에서 분쟁이 해결되지 않은 경우 회사와 회원은 위치정보법
          제28조에 의한 방송통신위원회에 재정을 신청하거나, 개인정보보호법
          제43조에 의한 방송통신위원회 또는 개인정보분쟁조정위원회에 재정 또는
          분쟁조정을 신청할 수 있습니다.
        </Description>
        <Description>
          3. 전항으로도 분쟁이 해결되지 않으면 회사와 회원 양 당사자는
          민사소송법상의 관할법원에 소를 제기할 수 있습니다.
        </Description>
      </Box>
      <Box>
        <SectionTitle>부칙</SectionTitle>
        <Description>
          제1조 (시행일) 본 약관은 2022년 12월 5일부터 시행합니다.
        </Description>
      </Box>
    </Wrapper>
  );
};
