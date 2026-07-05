import styled from 'styled-components';
import { color } from 'shared/lib/themes';
import { MainText, SecondaryText, SmallText } from 'shared/ui/typography';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${MainText} {
    color: ${color('textLabel')};
  }
`;

export const Container = styled.label<{
  $hasError?: boolean;
  $isDragging?: boolean;
}>`
  width: 100%;
  padding: 16px 27px;
  border-radius: 8px;
  border: 1px dashed
    ${({ $hasError, $isDragging }) =>
      $hasError
        ? color('surfaceError')
        : $isDragging
          ? color('surfaceBrand')
          : color('surfacePlaceholder')};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  gap: 12px;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: ${color('surfaceBrand')};
  }

  & > img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4px;

  & > ${SecondaryText} {
    color: ${color('textPrimary')};
  }

  & > ${MainText} {
    color: ${color('textLabel')};
  }
`;

export const PreviewRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
`;

export const Preview = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const FileName = styled(SecondaryText)`
  flex: 1;
  color: ${color('textPrimary')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;

  & > img {
    width: 16px;
    height: 16px;
  }
`;

export const ErrorText = styled(SmallText)`
  color: ${color('textError')};
`;
