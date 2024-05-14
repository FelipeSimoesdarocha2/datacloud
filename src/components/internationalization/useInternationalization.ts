// Next
import { useRouter } from 'next/router';

// React
import { useState } from 'react';

// Constants
import { itens } from './Internationalization.constants';

export const useInternationalization = () => {
    const { locale } = useRouter();
    const [languageSelected, setLanguageSelected] = useState(locale);

    const onChangeLanguage = (value: string) => {
        setLanguageSelected(value);
    };

    return {
        itens,
        languageSelected,
        onChangeLanguage,
    };
};
