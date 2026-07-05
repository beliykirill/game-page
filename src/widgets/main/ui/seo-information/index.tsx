import { FC } from 'react';
import { Trans, useTranslation } from 'next-i18next';
import { SecondaryText } from 'shared/ui/typography';
import { InformationText, InfoList } from './styled';

export const SeoInformation: FC = () => {
  const [t] = useTranslation('common', { keyPrefix: 'main' });

  return (
    <InformationText>
      {t('intro')}

      <InfoList>
        {(t('benefits', { returnObjects: true }) as string[]).map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </InfoList>

      <Trans
        t={t}
        i18nKey="information"
        components={[<SecondaryText key="title" />]}
      />

      <InfoList>
        {(t('principles', { returnObjects: true }) as string[]).map(
          (principle) => (
            <li key={principle}>{principle}</li>
          ),
        )}
      </InfoList>

      {t('outro')}
    </InformationText>
  );
};
