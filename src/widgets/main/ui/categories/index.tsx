import { FC } from 'react';
import { useRouter } from 'next/router';
import { MainText, TinyText } from 'shared/ui/typography';
import { categories } from './constants';
import { CategoriesContainer, Category } from './styled';

export const Categories: FC = () => {
  const { asPath } = useRouter();

  const currentPath = asPath.split('?')[0];

  return (
    <CategoriesContainer>
      {categories.map(({ text, count, link }) => (
        <Category key={link} href={link} $isActive={currentPath === link}>
          <MainText $textTheme="medium">{text}</MainText>

          <TinyText>{count}</TinyText>
        </Category>
      ))}
    </CategoriesContainer>
  );
};
