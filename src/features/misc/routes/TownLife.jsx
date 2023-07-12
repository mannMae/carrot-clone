import { useState, useEffect, useRef } from 'react';

import { Button } from 'components/Elements';
import {
  Badge,
  Badges,
  Categories,
  Group,
  GroupImage,
  GroupName,
  Groups,
  Post,
  PostBottom,
  PostContent,
  PostIcon,
  PostInfomations,
  PostMark,
  PostTitle,
  Posts,
  Wrapper,
} from './TownLife.style';

import HamburgerIcon from 'assets/icons/hamburger.svg';

import LikeIcon from 'assets/icons/like.svg';
import CommentIcon from 'assets/icons/comment.svg';
import { useObserver } from 'hooks/useObserver';
import { Head } from 'components/Head';

export const TownLife = () => {
  const [postingList, setPostingList] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    setPostingList([...postingList, ...posts]);
  }, [page]);

  const { observe } = useObserver(() => setPage((page) => page + 1));
  const target = useRef(null);
  useEffect(() => {
    observe(target.current);
  }, []);

  return (
    <>
      <Head title="동네 생활" />
      <Wrapper>
        <Groups>
          <Group>
            <GroupImage src={groups[0].img} />
            <GroupName>모임</GroupName>
          </Group>
          {groups.map((group, i) => (
            <Group key={i}>
              <GroupImage src={group.img} />
              <GroupName>{group.name}</GroupName>
            </Group>
          ))}
        </Groups>

        <Posts>
          <Categories>
            <Button variant="gray" startIcon={HamburgerIcon}>
              주제
            </Button>
            {categories.map((category, i) => (
              <Button key={i} variant="gray">
                {category.content}
              </Button>
            ))}
          </Categories>
          {postingList.map((post, i) => (
            <Post key={i}>
              <Badges>
                {post.categories.map((badge, j) => (
                  <Badge key={j}>{badge}</Badge>
                ))}
              </Badges>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
              <PostBottom>
                <PostInfomations>
                  {post.location} ・ {post.postedAt} ・ 조회 {post.views}
                </PostInfomations>
                <PostMark>
                  {post.likes && (
                    <>
                      <PostIcon src={LikeIcon} />
                      {post.likes}
                    </>
                  )}{' '}
                  {post.comments && (
                    <>
                      <PostIcon src={CommentIcon} />
                      {post.comments}
                    </>
                  )}
                </PostMark>
              </PostBottom>
            </Post>
          ))}
          <div ref={target}></div>
        </Posts>
      </Wrapper>
    </>
  );
};

const groups = [
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
  {
    img: 'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '자연과 함께하는 동물탐구모임',
  },
];

const categories = [
  {
    content: '인기글',
    link: '',
  },
  {
    content: '같이해요',
    link: '',
  },
  {
    content: '동네맛집',
    link: '',
  },
  {
    content: '동네질문',
    link: '',
  },
  {
    content: '동네소식',
    link: '',
  },
  {
    content: '생활정보',
    link: '',
  },
  {
    content: '취미생활',
    link: '',
  },
  {
    content: '일상',
    link: '',
  },
  {
    content: '분실/실종센터',
    link: '',
  },
  {
    content: '동네사건사고',
    link: '',
  },
  {
    content: '해주세요',
    link: '',
  },
  {
    content: '동네사진전',
    link: '',
  },
];

const posts = [
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
  {
    categories: ['일상'],
    title: '노량진 장어구이집?',
    content: '추천해주세요? 어디가 제일 맛있고 유명한가요?',
    location: '노량진동',
    postedAt: '11시간 전',
    views: 266,
    likes: 3,
    comments: 5,
  },
];
