import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { MainText } from 'shared/ui';
import {
  HoverablePopup,
  PopupContainer,
  LabelContainer,
} from 'shared/ui/popup';
import { ILanguage } from './types';

export const LanguageSwitcher: FC = () => {
  const [t] = useTranslation('common', { keyPrefix: 'header' });

  const { asPath, locale } = useRouter();

  const languages = t('languages', { returnObjects: true }) as ILanguage[];

  const currentLanguage =
    languages.find((language) => language.code === locale)?.text ??
    languages[0].text;

  return (
    <HoverablePopup
      offset={19}
      popup={({ onClose }) => (
        <PopupContainer>
          {languages.map(({ code, text }) => (
            <Link key={code} href={asPath} locale={code} onClick={onClose}>
              <MainText>{text}</MainText>
            </Link>
          ))}
        </PopupContainer>
      )}
    >
      {(isOpen) => (
        <LabelContainer $isOpen={isOpen}>
          <MainText>{currentLanguage}</MainText>

          <img src="/static/images/common/arrows/chevron.svg" alt="" />
        </LabelContainer>
      )}
    </HoverablePopup>
  );
};
