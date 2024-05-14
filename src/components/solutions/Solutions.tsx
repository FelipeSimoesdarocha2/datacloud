// Next
import Image from 'next/image';

// Assets
import bg_girl from 'assets/bg_girl.webp';
import phone from 'assets/phone.webp';

// Styles
import * as S from './Solutions.styles';

// i18n
import useTranslations from 'i18n';

const Solutions = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Inner>
          <S.Typography>
            <S.Title>Soluções sob medida, atendimento ágil, humanizado e eficaz.</S.Title>
            <S.Sub_Title>
              <p>
                Através de uma única e abrangente ferramenta, sua empresa pode receber atendimento completo, superando
                limitações de sistemas operacionais, arquiteturas e ambientes diversos, garantindo uma solução integrada
                e eficaz para todas as suas necessidades.
              </p>
            </S.Sub_Title>
          </S.Typography>
          <S.Componente_Image>
            <Image src={bg_girl} alt="bg_girl" />
          </S.Componente_Image>
        </S.Inner>
        <S.Componente_Phone>
          <Image src={phone} alt="phone" />
        </S.Componente_Phone>
      </S.Content>
    </S.Container>
  );
};

export default Solutions;
