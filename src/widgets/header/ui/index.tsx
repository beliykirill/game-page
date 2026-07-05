import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Formik } from 'formik';
import { CurrencySwitcher } from 'features/currency-switcher';
import { LanguageSwitcher } from 'features/language-switcher';
import { Button, InputField } from 'shared/ui';
import {
  HoverablePopup,
  PopupContainer,
  LabelContainer,
} from 'shared/ui/popup';
import { MainText } from 'shared/ui/typography';
import { initialValues } from './constants';
import {
  Layout,
  Container,
  Logo,
  Section,
  InformationContainer,
  ButtonsContainer,
  LabelsContainer,
} from './styled';

export const Header: FC = () => {
  const [t] = useTranslation('common', { keyPrefix: 'header' });

  const onSubmit = async () => {};

  return (
    <Layout>
      <Container>
        <Section>
          <Logo href="/">
            <img src="/static/images/logo.svg" alt="Starvell" />
          </Logo>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
              <InputField
                name="search"
                placeholder={t('search_placeholder')}
                prefixIcon="/static/images/common/icons/search.svg"
              />
            )}
          </Formik>
        </Section>

        <InformationContainer>
          <LabelsContainer>
            <HoverablePopup
              offset={19}
              popup={() => (
                <PopupContainer>
                  {(
                    t('support.items', { returnObjects: true }) as {
                      text: string;
                      link: string;
                    }[]
                  ).map(({ text, link }) => (
                    <Link key={link} href={link}>
                      <MainText>{text}</MainText>
                    </Link>
                  ))}
                </PopupContainer>
              )}
            >
              {(isOpen) => (
                <LabelContainer $isOpen={isOpen}>
                  <MainText>{t('support.title')}</MainText>

                  <img src="/static/images/common/arrows/chevron.svg" alt="" />
                </LabelContainer>
              )}
            </HoverablePopup>

            <LanguageSwitcher />

            <CurrencySwitcher />
          </LabelsContainer>

          <ButtonsContainer>
            <Link href="/login">
              <Button>{t('button_login')}</Button>
            </Link>

            <Link href="/registration">
              <Button buttonTheme="primary">{t('button_registration')}</Button>
            </Link>
          </ButtonsContainer>
        </InformationContainer>
      </Container>
    </Layout>
  );
};
