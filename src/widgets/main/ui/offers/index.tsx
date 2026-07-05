import { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { FormikContext, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { mainModals } from 'widgets/main/lib/modals';
import { FiltersValues } from 'widgets/main/ui/offers/types';
import { showModal } from 'entities/modal';
import { SubmitOnChange } from 'shared/lib/helpers';
import { IOption } from 'shared/types/global';
import { Button, InputField, SwitchField } from 'shared/ui';
import { SelectField } from 'shared/ui/select';
import { BaseTable } from 'shared/ui/table';
import { MainText } from 'shared/ui/typography';
import { data, PAGE_SIZE, initialValues } from './constants';
import {
  DotsLoader,
  EmptyState,
  FiltersContainer,
  OffersContainer,
  OptionButton,
  OptionsContainer,
  OptionsSection,
} from './styled';
import { useOffersColumns } from './use-offers-columns';

export const Offers: FC = () => {
  const [t] = useTranslation('common', { keyPrefix: 'main' });

  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  const [appliedFilters, setAppliedFilters] = useState<FiltersValues>({
    category: 'all',
    search: '',
    delivery_status: 'global',
    is_instant_delivery: false,
    is_online: false,
  });

  const columns = useOffersColumns(t);

  const formikValues = useFormik<FiltersValues>({
    initialValues,
    onSubmit: setAppliedFilters,
  });

  const { values, setFieldValue } = formikValues;

  const filteredOffers = useMemo(() => {
    const {
      category,
      delivery_status,
      is_instant_delivery,
      is_online,
      search,
    } = appliedFilters;

    const query = search.trim().toLowerCase();

    return data.filter(
      (offer) =>
        (category === 'all' || offer.category === category) &&
        (delivery_status === 'global' ||
          offer.delivery_status === delivery_status) &&
        (!is_instant_delivery || offer.is_instant_delivery) &&
        (!is_online || offer.user.is_online) &&
        offer.text.toLowerCase().includes(query),
    );
  }, [appliedFilters]);

  const offers = filteredOffers.slice(0, pageSize);

  const hasMore = pageSize < filteredOffers.length;

  const onLoadMore = () => {
    if (!hasMore || isLoading) return;

    setLoading(true);

    setTimeout(() => {
      setPageSize((count) => count + PAGE_SIZE);

      setLoading(false);
    }, 500);
  };

  useEffect(() => setPageSize(PAGE_SIZE), [appliedFilters]);

  return (
    <FormikContext.Provider value={formikValues}>
      <SubmitOnChange />

      <OffersContainer>
        <FiltersContainer>
          <OptionsContainer>
            <OptionsSection>
              {(
                t('categories', { returnObjects: true }) as {
                  value: string;
                  label: string;
                }[]
              ).map(({ value, label }) => (
                <OptionButton
                  key={value}
                  $isActive={value === values.category}
                  type="button"
                  onClick={() => setFieldValue('category', value)}
                >
                  <MainText>{label}</MainText>
                </OptionButton>
              ))}

              <SelectField
                name="delivery_status"
                options={
                  t('delivery_statuses', { returnObjects: true }) as IOption[]
                }
              />
            </OptionsSection>

            <OptionsSection>
              <SwitchField name="is_online">{t('online_seller')}</SwitchField>

              <SwitchField
                name="is_instant_delivery"
                prefixIcon="/static/images/common/icons/instant.svg"
              >
                {t('instant_delivery')}
              </SwitchField>

              <InputField
                name="search"
                placeholder={t('input_search')}
                suffixIcon="/static/images/common/icons/search.svg"
              />
            </OptionsSection>
          </OptionsContainer>

          <Button
            buttonTheme="primary"
            buttonSize="medium"
            onClick={() =>
              dispatch(
                showModal({
                  modalCtor: mainModals.report,
                }),
              )
            }
          >
            {t('button_sale')}
          </Button>
        </FiltersContainer>

        {offers.length === 0 ? (
          <EmptyState>{t('empty')}</EmptyState>
        ) : (
          <>
            <BaseTable data={offers} columns={columns} />

            {hasMore && (
              <Button disabled={isLoading} onClick={onLoadMore}>
                {isLoading ? (
                  <DotsLoader>
                    <span />
                    <span />
                    <span />
                  </DotsLoader>
                ) : (
                  t('button_more')
                )}
              </Button>
            )}
          </>
        )}
      </OffersContainer>
    </FormikContext.Provider>
  );
};
