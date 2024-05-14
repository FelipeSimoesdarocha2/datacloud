// Styles
import * as S from './Security.styles';

// i18n
import useTranslations from 'i18n';

const Security = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Title>Segurança sempre</S.Title>
        <S.Sub_Title>
          Embrace a confiança inabalável com nossa solução de nuvem, onde a segurança é o alicerce. Com protocolos de
          criptografia avançados e monitoramento contínuo, garantimos a salvaguarda dos seus dados sensíveis. Nossa
          infraestrutura robusta e práticas de segurança proativas asseguram que sua jornada na nuvem seja sinônimo de
          proteção inigualável. Conte conosco para manter seus ativos digitais seguros, promovendo um ambiente virtual
          onde a tranquilidade e a segurança são prioridades absolutas. Transforme sua experiência na nuvem com a
          certeza de que sua segurança está em mãos dedicadas e especializadas.
        </S.Sub_Title>
        <S.List>
          <S.Item>
            <p>Proteção dos Dados Sensíveis</p>
          </S.Item>
          <S.Item>
            <p>Conformidade com Regulamentações</p>
          </S.Item>
          <S.Item>
            <p>Disponibilidade Contínua</p>
          </S.Item>
          <S.Item>
            <p>Prevenção de Ataques Cibernético</p>
          </S.Item>
        </S.List>
      </S.Content>
    </S.Container>
  );
};

export default Security;
