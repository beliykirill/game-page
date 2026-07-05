import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { FormikContext, useFormik } from 'formik';
import { IOption } from 'shared/types/global';
import { ModalProps } from 'shared/types/modal';
import { Button, TextAreaField } from 'shared/ui';
import { SelectField } from 'shared/ui/select';
import { SectionText } from 'shared/ui/typography';
import { initialValues } from './constants';
import {
  ButtonsContainer,
  CloseBlock,
  Container,
  Layout,
  Section,
} from './styled';
import { UploadFile } from './upload-file';

const ReportModal: FC<ModalProps> = ({ onClose }) => {
  const [t] = useTranslation('common', { keyPrefix: 'main' });

  const onSubmit = async () => {};

  const formikValues = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <FormikContext.Provider value={formikValues}>
      <Layout>
        <CloseBlock onClick={onClose}>
          <img src="/static/images/common/icons/close.svg" alt="" />
        </CloseBlock>

        <SectionText>{t('report_modal.title')}</SectionText>

        <Container>
          <Section>
            <SelectField
              name="reason"
              options={
                t('report_modal.reason_options', {
                  returnObjects: true,
                }) as IOption[]
              }
              selectSize="secondary"
              label={t('report_modal.reason_label')}
              placeholder={t('report_modal.reason_placeholder')}
            />

            <TextAreaField
              name="problem"
              label={t('report_modal.problem_label')}
              placeholder={t('report_modal.problem_placeholder')}
            />

            <UploadFile
              name="file"
              label={t('report_modal.upload_file_label')}
            />
          </Section>

          <ButtonsContainer>
            <Button onClick={onClose}>
              {t('report_modal.button_secondary')}
            </Button>

            <Button buttonTheme="primary" onClick={onClose}>
              {t('report_modal.button_main')}
            </Button>
          </ButtonsContainer>
        </Container>
      </Layout>
    </FormikContext.Provider>
  );
};

export default ReportModal;
