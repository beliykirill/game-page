import Link from 'next/link';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { color } from 'shared/lib/themes';
import { MainText, TinyText } from 'shared/ui/typography';

export const CategoriesContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Category = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  height: 32px;
  border: none;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;
  border-radius: 6px;
  background: rgba(92, 128, 253, 0.08);
  transition:
    background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  &:focus-visible {
    outline: 2px solid ${color('surfaceBrand')};
    outline-offset: 2px;
  }

  ${MainText}, ${TinyText} {
    color: ${color('textBrand')};
    transition: color 0.2s ease-in-out;
  }

  @media (hover: hover) {
    &:hover {
      background-color: rgba(92, 128, 253, 0.16);
      transform: translateY(-1px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  ${ifProp(
    '$isActive',
    css`
      background-color: ${color('surfaceBrand')};

      ${MainText}, ${TinyText} {
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
