// Styles
import * as S from './Header.styles';

// Models
import { SiderProps } from './models';

// Hook
import { useHeader } from './useHeader';

const Header = ({ children }: SiderProps) => {
    const { isActive } = useHeader();

    return (
        <S.Component className={` ${isActive ? 'active' : ''}`}>
            <S.Content>{children}</S.Content>
        </S.Component>
    );
};

export default Header;
