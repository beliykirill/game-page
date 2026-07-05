import { FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { MainText, TinyText } from 'shared/ui/typography';
import { categories } from './constants';
import { CategoriesContainer, Category } from './styled';

export const Categories: FC = () => {
  const { asPath } = useRouter();

  const [t] = useTranslation('common', { keyPrefix: 'main' });

  const currentPath = asPath.split('?')[0];

  return (
    <nav>
      <CategoriesContainer>
        {categories.map(({ text, count, link }) => {
          const isActive = currentPath === link;

          return (
            <li key={link}>
              <Category href={link} $isActive={isActive}>
                <MainText $textTheme="medium">{text}</MainText>

                <TinyText>{count}</TinyText>
              </Category>
            </li>
          );
        })}
      </CategoriesContainer>
    </nav>
  );
};
