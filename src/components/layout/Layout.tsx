// Next
import Image from 'next/image';
import Link from 'next/link';

// Assets
import logo from 'assets/logomarca.webp';

// Styles
import * as S from './Layout.styles';

// Models
import { LayoutProps } from './models';

// Components
import { Cookie } from 'components/cookie';
import { Footer } from 'components/footer';
import { Header } from 'components/header';

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Header>
        <Link href="/" draggable="false">
          <Image src={logo} alt="logo" draggable="false" />
        </Link>
      </Header>
      <S.Content>{children}</S.Content>
      <Footer />
      <Cookie />
    </S.Container>
  );
};

export default Layout;
