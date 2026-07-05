import { FC, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { setCookie } from 'cookies-next';
import { COOKIES_MAX_AGE, COOKIES_VARIABLES } from 'shared/constants';
import {
  HoverablePopup,
  PopupContainer,
  LabelContainer,
} from 'shared/ui/popup';
import { MainText } from 'shared/ui/typography';
import { ICurrency } from './types';

export const CurrencySwitcher: FC = () => {
  const [t] = useTranslation('common', { keyPrefix: 'header' });

  const currencies = t('currencies', { returnObjects: true }) as ICurrency[];

  const [currentCurrency, setCurrentCurrency] = useState(currencies[0].text);

  const onSelect = (currency: ICurrency) => {
    const host = typeof window === 'undefined' ? '' : window.location.hostname;

    setCookie(COOKIES_VARIABLES.CURRENCY_COOKIE, currency.code, {
      domain: `.${host}`,
      maxAge: COOKIES_MAX_AGE.ONE_YEAR,
    });

    setCurrentCurrency(currency.text);
  };

  return (
    <HoverablePopup
      offset={19}
      popup={({ onClose }) => (
        <PopupContainer>
          {currencies.map((currency) => (
            <MainText
              key={currency.code}
              onClick={() => {
                onSelect(currency);
                onClose();
              }}
            >
              {currency.text}
            </MainText>
          ))}
        </PopupContainer>
      )}
    >
      {(isOpen) => (
        <LabelContainer $isOpen={isOpen}>
          <MainText>{currentCurrency}</MainText>

          <img src="/static/images/common/arrows/chevron.svg" alt="" />
        </LabelContainer>
      )}
    </HoverablePopup>
  );
};
