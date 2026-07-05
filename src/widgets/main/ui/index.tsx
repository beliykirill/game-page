import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { HeadlineText, MainText } from 'shared/ui/typography';
import { Categories } from './categories';
import { Offers } from './offers';
import { SeoInformation } from './seo-information';
import {
  Layout,
  Container,
  Section,
  InformationContainer,
  TextContainer,
  BackgroundIcon,
} from './styled';

export const Main: FC = () => {
  const [t] = useTranslation('common', { keyPrefix: 'main' });

  return (
    <Layout>
      <Container>
        <Section>
          <InformationContainer>
            <TextContainer>
              <HeadlineText>{t('title')}</HeadlineText>

              <MainText>{t('description')}</MainText>
            </TextContainer>

            <Categories />
          </InformationContainer>

          <Offers />
        </Section>

        <SeoInformation />

        <BackgroundIcon
          src="/static/images/main/background-icon.webp"
          alt=""
          width={450}
          height={450}
        />
      </Container>
    </Layout>
  );
};
