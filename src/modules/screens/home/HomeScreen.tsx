// Next
import Image from 'next/image';

// Assets
import whatsapp from 'assets/icons/whatsapp.svg';

// Styles
import * as S from './Home.styles';

// Formik
import { FormikProvider } from 'formik';

// Components
import { Benefit } from 'components/benefit';
import { Input } from 'components/input';
import { Security } from 'components/security';
import { Solutions } from 'components/solutions';

// Hook
import { useHome } from './useHome';

const HomeScreen = () => {
  const { t, formik, loading, disabled, onSubmit } = useHome();

  const linkContact = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <S.Container>
      <S.Content>
        <S.Typography>
          <S.Title>Infraestrutura Cloud</S.Title>
          <S.Sub_Title>
            Inovação, agilidade e excelência. Facilitamos a inclusão digital de sua empresa na nuvem, proporcionando
            desempenho superior e uma relação custo-benefício exemplar.
          </S.Sub_Title>
        </S.Typography>
        <S.Form>
          <S.Label>Fale com um Especialista MultiCloud</S.Label>
          <S.Fields>
            <FormikProvider value={formik}>
              <Input
                id="name"
                key="name"
                type="text"
                title={t('form.name')}
                placeholder=""
                required={true}
                data-testid="name"
                autocomplete="name"
                value={formik.values.name}
                onBlur={formik.handleBlur('name')}
                onChange={formik.handleChange('name')}
              />
              <Input
                id="email"
                key="email"
                type="email"
                title={t('form.email')}
                placeholder=""
                required={true}
                data-testid="email"
                autocomplete="email"
                value={formik.values.email}
                onBlur={formik.handleBlur('email')}
                onChange={formik.handleChange('email')}
              />
              <Input
                id="phone"
                key="phone"
                type="tel"
                title={t('form.phone')}
                placeholder=""
                required={true}
                data-testid="phone"
                autocomplete="phone"
                value={formik.values.phone}
                onBlur={formik.handleBlur('phone')}
                onChange={formik.handleChange('phone')}
              />
            </FormikProvider>
          </S.Fields>
          <S.Actions>
            <S.Button onClick={onSubmit} disabled={disabled}>
              {loading ? (
                <p>carregando</p>
              ) : (
                <>
                  <p>{t('form.send')}</p>
                </>
              )}
            </S.Button>
            <S.Button
              onClick={() =>
                linkContact('https://api.whatsapp.com/send/?phone=5547999536024&text&type=phone_number&app_absent=0')
              }
            >
              <p>Especialista MultiCloud</p>
              <Image src={whatsapp} alt="whatsapp" width={23} />
            </S.Button>
          </S.Actions>
        </S.Form>
      </S.Content>
      <Security />
      <Solutions />
      <Benefit />
    </S.Container>
  );
};

export default HomeScreen;
