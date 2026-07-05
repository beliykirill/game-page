import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { color } from 'shared/lib/themes';
import { MainText } from 'shared/ui/typography';

export const Container = styled.label`
  height: 36px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${color('surfaceBorder')};
  border-radius: 8px;
  color: ${color('textLabel')};
  cursor: pointer;
  transition: background 0.3s;
  user-select: none;
  white-space: nowrap;

  @media (hover: hover) {
    &:hover {
      background: ${color('surfaceBackground')};
    }
  }

  & > ${MainText} {
    color: ${color('textPrimary')};
  }

  & > :last-child {
    margin-left: auto;
  }
`;

export const ThumbIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: #fff;
  transform: translateY(-50%);
  transition:
    left 0.2s,
    background 0.2s;
`;

export const Section = styled.span<{ $isChecked: boolean }>`
  width: 28px;
  height: 16px;
  flex-shrink: 0;
  position: relative;
  border-radius: 50px;
  background: ${color('surfaceBorder')};
  transition: background 0.2s;

  ${ifProp(
    '$isChecked',
    css`
      background: ${color('surfaceBrand')};

      ${ThumbIcon} {
        left: calc(28px - 12px - 2px);
      }
    `,
  )}
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const Icon = styled.img`
  width: 12px;
  height: 12px;
`;
