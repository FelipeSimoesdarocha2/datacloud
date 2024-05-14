// Next
import { useRouter } from 'next/router';

// Styles
import * as S from './NotFound.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { ToLink } from 'components/link';

const NotFoundScreen = () => {
  const router = useRouter();
  const t = useTranslations();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Esta pagina não existe</S.Title>
        <S.Button>
          <ToLink href={'/'} label={'voltar'} className='back' />
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

export default NotFoundScreen;
