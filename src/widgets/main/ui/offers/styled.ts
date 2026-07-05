import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { color, media } from 'shared/lib/themes';
import { MainText } from 'shared/ui/typography';

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  ${media.tablet} {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  flex-direction: column;
`;

export const OptionsSection = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  flex-wrap: wrap;

  .input-container {
    max-width: 317px;
    width: 100%;

    ${media.mobile} {
      max-width: 100%;
    }
  }
`;

export const OptionButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  height: 36px;
  border: none;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
  background: rgba(92, 128, 253, 0.08);
  transition:
    background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  ${MainText} {
    color: ${color('textBrand')};
    transition: color 0.2s ease-in-out;
  }

  &:focus-visible {
    outline: 2px solid ${color('surfaceBrand')};
    outline-offset: 2px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: rgba(92, 128, 253, 0.2);
    }
  }

  &:active {
    background-color: rgba(92, 128, 253, 0.28);
    transform: translateY(1px);
  }

  ${ifProp(
    '$isActive',
    css`
      background-color: ${color('surfaceBrand')};

      ${MainText} {
        color: ${color('textMain')};
      }

      @media (hover: hover) {
        &:hover {
          background-color: #4d6fe8;
        }
      }
    `,
  )}
`;

export const OffersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  text-align: center;
  color: ${color('textLabel')};
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
