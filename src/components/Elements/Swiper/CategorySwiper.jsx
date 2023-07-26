import { useEffect, useState } from 'react';
import {
  Wrapper,
  Categories,
  Category,
  Indicator,
  Navigation,
} from './CategorySwiper.style';
import { Swiper } from './Swiper';
import { Box } from '..';

export const CategorySwiper = ({
  items,
  itemsPerSlide,
  type,
  isContentScrollY,
  toggleActiveDelete,
}) => {
  const [categories, setCategories] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const newCategories = [];
    const newItems = [];
    for (let i in items) {
      newCategories.push(items[i].category);
      newItems.push(items[i].contents);
    }
    setCategories(newCategories);
    setCategoryItems(newItems);
  }, []);

  return (
    <Wrapper>
      <Navigation>
        <Categories>
          {categories.map((item, i) => (
            <Category isSelected={index === i} onClick={() => setIndex(i)}>
              {item}
            </Category>
          ))}
        </Categories>
        <Indicator
          width={`${100 / categories.length}%`}
          position={`${(100 / categories.length) * index}%`}
        />
      </Navigation>
      <Swiper
        categoryItems={categoryItems}
        itemsPerSlide={itemsPerSlide ? itemsPerSlide : 1}
        type={type}
        setIndex={setIndex}
        index={index}
        categories={categories}
        isContentScrollY={isContentScrollY}
        toggleActiveDelete={toggleActiveDelete}
      />
    </Wrapper>
  );
};
