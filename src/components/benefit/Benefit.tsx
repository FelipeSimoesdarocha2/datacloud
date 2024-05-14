// Next
import Image from 'next/image';

// Assets
import chat from 'assets/icons/chat.svg';

// Styles
import * as S from './Benefit.styles';

// i18n
import useTranslations from 'i18n';

const Benefit = () => {
  const t = useTranslations();

  const linkContact = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Benefícios da WorkDataCloud para minha Empresa</S.Title>
        <S.Sub_Title>
          <p>
            Embarque em uma jornada de confiança e tranquilidade com nossa equipe especializada ao seu lado. Trabalhando
            em estreita colaboração com sua empresa, adaptamos a frequência e a capacidade do serviço de backup de
            segurança para atender precisamente às suas necessidades em constante evolução. Com uma abordagem de
            cobrança flexível, você só paga pelo que realmente utiliza, proporcionando um investimento eficiente em
            proteção de dados.
          </p>
          <p>
            Além disso, ao precisar expandir o espaço de armazenamento, nossa equipe técnica está pronta para atender
            sua solicitação prontamente e sem custos adicionais para você, garantindo uma gestão sem complicações do seu
            ambiente de armazenamento de dados.
          </p>
        </S.Sub_Title>
        <S.Action
          onClick={() =>
            linkContact('https://api.whatsapp.com/send/?phone=5547999536024&text&type=phone_number&app_absent=0')
          }
        >
          <p>Especialista MultiCloud</p>
          <Image src={chat} alt="chat" width={34} />
        </S.Action>
      </S.Content>
      <div className="bg" />
    </S.Container>
  );
};

export default Benefit;
