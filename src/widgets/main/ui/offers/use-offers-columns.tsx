import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TFunction } from 'next-i18next';
import { createColumnHelper } from '@tanstack/table-core';
import { differenceInYears } from 'date-fns';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import { formatNumber } from 'shared/lib/helpers';
import { color } from 'shared/lib/themes';
import { CellLeftContainer, CellRightContainer } from 'shared/ui/table';
import { MainText, SecondaryText, SmallText } from 'shared/ui/typography';
import { IOffer } from './types';

const columnHelper = createColumnHelper<IOffer>();

type RateState = 'success' | 'warning' | 'medium' | 'error';

const getRateState = (rate: number): RateState => {
  if (rate >= 4.0) return 'success';

  if (rate >= 3.0) return 'warning';

  if (rate >= 2.0) return 'medium';

  return 'error';
};

export const useOffersColumns = (t: TFunction) => {
  return useMemo(
    () => [
      columnHelper.accessor('text', {
        meta: { style: { width: '54.61%' } },
        enableSorting: false,
        header: () => (
          <CellLeftContainer>
            <MainText>{t('columns.text')}</MainText>
          </CellLeftContainer>
        ),
        cell: ({ row, getValue }) => (
          <OfferLink href={`/offers/${row.original.id}`}>
            <CellLeftContainer>
              <SecondaryText $textTheme="regular">{getValue()}</SecondaryText>
            </CellLeftContainer>
          </OfferLink>
        ),
      }),
      columnHelper.accessor('user', {
        meta: { style: { width: '20.57%' } },
        enableSorting: false,
        header: () => (
          <CellLeftContainer>
            <MainText>{t('columns.user')}</MainText>
          </CellLeftContainer>
        ),
        cell: ({ row }) => {
          const {
            id,
            created_at,
            reviews,
            avatar,
            name,
            is_online: isOnline,
            rate,
          } = row.original.user;

          const years = differenceInYears(
            new Date(),
            new Date(created_at * 1000),
          );

          return (
            <UserLink href={`/users/${id}`}>
              <UserContainer>
                <UserAvatarContainer>
                  <Image width={28} height={28} src={avatar} alt={name} />

                  <OnlineIndicator
                    $isOnline={isOnline}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6"
                      cy="6"
                      r="5"
                      fill="currentColor"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </OnlineIndicator>
                </UserAvatarContainer>

                <UserInformationContainer>
                  <UserTextContainer>
                    <UserNameText $textTheme="medium" $isOnline={isOnline}>
                      {name}
                    </UserNameText>

                    <RateContainer $state={getRateState(rate)}>
                      <SmallText>{rate.toFixed(1)}</SmallText>

                      <StarIcon />
                    </RateContainer>
                  </UserTextContainer>

                  <UserStatusText>
                    {t('user_status.summary', {
                      years: t('user_status.years_on_site', { count: years }),
                      reviews: t('user_status.reviews', { count: reviews }),
                    })}
                  </UserStatusText>
                </UserInformationContainer>
              </UserContainer>
            </UserLink>
          );
        },
      }),
      columnHelper.accessor('count', {
        meta: { style: { width: '9.22%' } },
        header: ({ column }) => (
          <CellRightContainer>
            <SortContainer>
              <MainText>{t('columns.count')}</MainText>

              <SortIcon
                src="/static/images/common/icons/sort.svg"
                alt=""
                $direction={column.getIsSorted()}
              />
            </SortContainer>
          </CellRightContainer>
        ),
        cell: ({ getValue }) => {
          const value = getValue();

          return (
            <CellRightContainer>
              <SecondaryText $textTheme="regular">
                {value ? formatNumber(value) : '∞'}
              </SecondaryText>
            </CellRightContainer>
          );
        },
      }),
      columnHelper.accessor('price', {
        meta: { style: { width: '9.22%' } },
        header: ({ column }) => (
          <CellRightContainer>
            <SortContainer>
              <MainText>{t('columns.price')}</MainText>

              <SortIcon
                src="/static/images/common/icons/sort.svg"
                alt=""
                $direction={column.getIsSorted()}
              />
            </SortContainer>
          </CellRightContainer>
        ),
        cell: ({ row, getValue }) => {
          const {
            is_pinned: isPinned,
            is_instant_delivery: isInstantDelivery,
          } = row.original;

          return (
            <CellRightContainer>
              <PriceContainer>
                <SecondaryText $textTheme="semi">{getValue()}</SecondaryText>

                <PriceIconsContainer>
                  {isInstantDelivery && (
                    <PriceIcon
                      src="/static/images/common/icons/instant.svg"
                      alt=""
                    />
                  )}

                  {isPinned && (
                    <PriceIcon
                      src="/static/images/common/icons/pin.svg"
                      alt=""
                    />
                  )}
                </PriceIconsContainer>
              </PriceContainer>
            </CellRightContainer>
          );
        },
      }),
    ],
    [t],
  );
};

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SortIcon = styled.img<{ $direction?: false | 'asc' | 'desc' }>`
  width: 12px;
  height: 12px;
  transition: transform 0.15s ease-in-out;
  opacity: ${ifProp('$direction', 1, 0.5)};
  transform: ${ifProp({ $direction: 'asc' }, 'rotate(180deg)', 'none')};
`;

const UserNameText = styled(SecondaryText)<{ $isOnline: boolean }>`
  color: ${ifProp('$isOnline', color('textPrimary'), color('textLabel'))} !important;
`;

const OfferLink = styled(Link)`
  ${SecondaryText} {
    color: ${color('textPrimary')};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }
`;

const UserLink = styled(Link)`
  position: relative;
  z-index: 1;
`;

const UserContainer = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

const OnlineIndicator = styled.svg<{ $isOnline: boolean }>`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${ifProp(
    '$isOnline',
    color('surfaceSuccess'),
    color('surfacePlaceholder'),
  )};
`;

const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const UserTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const UserStatusText = styled(SmallText)`
  font-weight: 400;
  color: ${color('textLabel')};
`;

const UserAvatarContainer = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  flex-shrink: 0;

  img {
    border-radius: 14px;
  }
`;

const StarIcon = styled.img`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  mask: url(/static/images/common/icons/star.svg) no-repeat center;
  mask-size: contain;
`;

const RateContainer = styled.div<{ $state: RateState }>`
  border-radius: 6px;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  gap: 2px;

  ${switchProp('$state', {
    success: css`
      background: ${(p) => rgba(color('surfaceSuccess')(p), 0.08)};

      ${StarIcon} {
        background-color: ${color('surfaceSuccess')};
      }

      ${SmallText} {
        color: ${color('textSuccess')};
      }
    `,
    warning: css`
      background: ${(p) => rgba(color('surfaceWarning')(p), 0.08)};

      ${StarIcon} {
        background-color: ${color('surfaceWarning')};
      }

      ${SmallText} {
        color: ${color('textWarning')};
      }
    `,
    medium: css`
      background: ${(p) => rgba(color('surfaceMedium')(p), 0.08)};

      ${StarIcon} {
        background-color: ${color('surfaceMedium')};
      }

      ${SmallText} {
        color: ${color('textMedium')};
      }
    `,
    error: css`
      background: ${(p) => rgba(color('surfaceError')(p), 0.08)};

      ${StarIcon} {
        background-color: ${color('surfaceError')};
      }

      ${SmallText} {
        color: ${color('textError')};
      }
    `,
  })}
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PriceIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`;

const PriceIcon = styled.img`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
`;
