import { FC } from 'react';
import Link from 'next/link';
import { Trans, useTranslation } from 'next-i18next';
import { MainText, SecondaryText } from 'shared/ui/typography';
import {
  Container,
  Layout,
  LogoContainer,
  Section,
  Logo,
  TextContainer,
  LinksContainer,
  SupportContainer,
  SocialsContainer,
  SocialIcon,
} from './styled';

const year = new Date().getFullYear();

export const Footer: FC = () => {
  const [t] = useTranslation('common', { keyPrefix: 'footer' });

  return (
    <Layout>
      <Container>
        <Section>
          <LogoContainer>
            <Logo href="/">
              <img src="/static/images/logo.svg" alt="Starvell" />
            </Logo>

            <TextContainer>
              <MainText>{t('rights', { year })}</MainText>
              <MainText>
                <Trans
                  t={t}
                  i18nKey="design"
                  components={[<a key="design" href="https://0xhearts.com/" />]}
                />
              </MainText>
            </TextContainer>
          </LogoContainer>

          <SupportContainer>
            <SecondaryText>{t('support.title')}</SecondaryText>

            <LinksContainer>
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
            </LinksContainer>
          </SupportContainer>
        </Section>

        <SocialsContainer>
          <a href="https://t.me/starvell" target="_blank">
            <SocialIcon
              src="/static/images/common/socials/telegram.png"
              alt="Telegram"
              width={44}
              height={44}
            />
          </a>

          <a href="https://discord.gg/CREbyMAdBn" target="_blank">
            <SocialIcon
              src="/static/images/common/socials/discord.png"
              alt="Discord"
              width={44}
              height={44}
            />
          </a>

          <a href="https://vk.com/starvell" target="_blank">
            <SocialIcon
              src="/static/images/common/socials/vkontakte.png"
              alt="VKontakte"
              width={44}
              height={44}
            />
          </a>

          <a href="https://www.youtube.com/@STARVELL_COM" target="_blank">
            <SocialIcon
              src="/static/images/common/socials/youtube.png"
              alt="YouTube"
              width={44}
              height={44}
            />
          </a>
        </SocialsContainer>
      </Container>
    </Layout>
  );
};
