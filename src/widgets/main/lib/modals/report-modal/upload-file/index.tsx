import {
  ChangeEvent,
  DragEvent,
  FC,
  MouseEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'next-i18next';
import { useField } from 'formik';
import { MainText, SecondaryText } from 'shared/ui/typography';
import {
  Container,
  ErrorText,
  FileName,
  HiddenInput,
  Layout,
  Preview,
  PreviewRow,
  RemoveButton,
  TextContainer,
} from './styled';

interface UploadFileProps {
  name: string;
  label?: string;
}

const ACCEPTED_TYPES = ['image/jpeg', 'image/png'];
const MAX_SIZE = 5 * 1024 * 1024;

export const UploadFile: FC<UploadFileProps> = ({ name, label }) => {
  const [t] = useTranslation('common', { keyPrefix: 'main' });

  const [field, meta, helpers] = useField<File | null>(name);

  const [isDragging, setDragging] = useState(false);

  const preview = useMemo(
    () => (field.value ? URL.createObjectURL(field.value) : null),
    [field.value],
  );

  const applyFile = (file: File | null) => {
    helpers.setTouched(true);

    if (!file) {
      return;
    }

    if (!ACCEPTED_TYPES.includes(file.type)) {
      helpers.setError(t('report_modal.upload_file_error_type'));
      return;
    }

    if (file.size > MAX_SIZE) {
      helpers.setError(t('report_modal.upload_file_error_size'));
      return;
    }

    helpers.setError(undefined);
    helpers.setValue(file);
  };

  const handleChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    applyFile(changeEvent.target.files?.[0] ?? null);

    changeEvent.target.value = '';
  };

  const handleDrop = (dropEvent: DragEvent<HTMLLabelElement>) => {
    dropEvent.preventDefault();

    setDragging(false);
    applyFile(dropEvent.dataTransfer.files?.[0] ?? null);
  };

  const handleDragOver = (dragEvent: DragEvent<HTMLLabelElement>) => {
    dragEvent.preventDefault();

    setDragging(true);
  };

  const handleRemove = (clickEvent: MouseEvent<HTMLButtonElement>) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();

    helpers.setValue(null);
    helpers.setError(undefined);
  };

  useEffect(
    () => () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    },
    [preview],
  );

  return (
    <Layout>
      {label && <MainText>{label}</MainText>}

      <Container
        htmlFor={name}
        $hasError={Boolean(meta.error)}
        $isDragging={isDragging}
        onDragOver={handleDragOver}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <HiddenInput
          id={name}
          type="file"
          accept={ACCEPTED_TYPES.join(',')}
          onChange={handleChange}
        />

        {field.value && preview ? (
          <PreviewRow>
            <Preview src={preview} alt={field.value.name} />

            <FileName>{field.value.name}</FileName>

            <RemoveButton type="button" onClick={handleRemove}>
              <img src="/static/images/common/icons/close.svg" alt="remove" />
            </RemoveButton>
          </PreviewRow>
        ) : (
          <>
            <img src="/static/images/common/icons/upload.svg" alt="upload" />

            <TextContainer>
              <SecondaryText>
                {t('report_modal.upload_file_title')}
              </SecondaryText>

              <MainText>{t('report_modal.upload_file_description')}</MainText>
            </TextContainer>
          </>
        )}
      </Container>

      {meta.error && <ErrorText>{meta.error}</ErrorText>}
    </Layout>
  );
};
