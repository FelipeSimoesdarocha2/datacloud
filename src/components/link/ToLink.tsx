// Next
import Link from 'next/link';

// React
import React from 'react';

// Styles
import * as S from './ToLink.styles';

// Models
import { ButtonProps } from './models';

const ToLink = ({ href, label, className }: ButtonProps) => {
    return (
        <S.Component className={` ${className} `}>
            <S.Content>
                <Link href={href} draggable="false">
                    {label}
                </Link>
            </S.Content>
        </S.Component>
    );
};

export default ToLink;
