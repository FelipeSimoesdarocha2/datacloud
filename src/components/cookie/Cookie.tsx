// Next
import Image from 'next/image';
import Link from 'next/link';

// React
import { useState, useEffect } from 'react';

// Assets
import exit from 'assets/icons/exit.svg';

// Styles
import * as S from './Cookie.styles';

// i18n
import useTranslations from 'i18n';

// Universal-cookie
import Cookie from 'universal-cookie';

const ICookie = () => {
  const [showCookie, setShowCookie] = useState(false);

  const t = useTranslations();

  const accept = () => {
    const cookies = new Cookie();
    cookies.set('cookies', 'true');
    setShowCookie(false);
  };

  useEffect(() => {
    const cookies = new Cookie();
    const userCookie = cookies.get('cookies');

    if (!userCookie) {
      setShowCookie(true);
    }
  }, []);

  return (
    showCookie && (
      <S.Container>
        <S.Typography>
          <p>{t('cookie.menu.typography.paragraph')}</p>
          <Link href="/privacy-policy" draggable="false">
            {t('cookie.menu.typography.link')}
          </Link>
        </S.Typography>
        <S.Actions>
          <button onClick={accept} className="settings">
            <p>{t('cookie.menu.actions.settings')}</p>
          </button>
          <button onClick={accept} className="acept">
            <p>{t('cookie.menu.actions.acept')}</p>
          </button>
          <button onClick={() => setShowCookie(false)} className="exit">
            <Image src={exit} alt="exit" />
          </button>
        </S.Actions>
      </S.Container>
    )
  );
};

export default ICookie;
