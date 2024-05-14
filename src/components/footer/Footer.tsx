// Next
import Image from 'next/image';
import Link from 'next/link';

// Assets
import logo from 'assets/logo.png';

// Styles
import * as S from './Footer.styles';

// i18n
import useTranslation from 'i18n';

const Footer = () => {
    const t = useTranslation();

    return (
        <S.Component>
            <S.Content>
                <Image src={logo} alt="logo" draggable="false" />
                <Link
                    draggable="false"
                    href="/privacy-policy"
                >
                    {t('pages.privacy_policy')}
                </Link>
            </S.Content>
        </S.Component>
    );
};

export default Footer;
