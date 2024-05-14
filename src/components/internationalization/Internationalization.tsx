// Next
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

// React
import React, { useState, useRef, useEffect } from 'react';

// Assets
import arrow from 'assets/icons/arrow.svg';
import pt from 'assets/icons/br.png';
import en from 'assets/icons/en.png';

// Styles
import * as S from './Internationalization.styles';

// Hooks
import { useInternationalization } from './useInternationalization';

const Internationalization = () => {
  const { itens, languageSelected, onChangeLanguage } = useInternationalization();
  const [openList, setOpenList] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState(languageSelected ?? '');

  const router = useRouter();
  const pathname = usePathname();
  const componentRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (optionValue: string) => {
    setSelectedOption(optionValue);
    onChangeValue({ target: { value: optionValue } });
    router.push(pathname, undefined, { locale: optionValue });
  };

  const toggleSelectVisibility = () => {
    setIsFocused(!isFocused);
    setOpenList(!openList);
  };

  const onChangeValue = (event: { target: { value: string } }) => {
    const value = event.target.value;
    onChangeLanguage(value);
  };

  let flagSrc;
  switch (languageSelected) {
    case 'pt':
      flagSrc = pt;
      break;
    case 'en':
      flagSrc = en;
      break;
    default:
      flagSrc = pt;
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (componentRef.current && !componentRef.current.contains(event.target as HTMLElement)) {
      setOpenList(false);
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Component onClick={toggleSelectVisibility} ref={componentRef} className={`${isFocused ? 'focused' : null}`}>
      <S.Content>
        <S.Wrapper>
          <S.Value>
            <Image src={flagSrc} alt="Flag" draggable="false" />
            <S.Label>{itens.find(e => e.value === languageSelected)?.label}</S.Label>
          </S.Value>
          <span className={`${isFocused ? 'focused-arrow' : null}`}>
            <Image src={arrow} alt="arrow" draggable="false" />
          </span>
        </S.Wrapper>
        {openList && (
          <S.Inner className={`${isFocused ? 'focused' : null}`}>
            <S.List>
              {itens
                .filter(e => e.value !== selectedOption)
                .map((option, key) => (
                  <S.Item
                    key={key}
                    onClick={() => handleOptionClick(option.value)}
                    className={`${selectedOption === option.label ? `${'selected'}` : null}`}
                  >
                    <Image src={option.value === 'en' ? en : pt} alt="Flag" width={22} draggable="false" />
                    <S.Label>{option.label}</S.Label>
                  </S.Item>
                ))}
            </S.List>
          </S.Inner>
        )}
      </S.Content>
    </S.Component>
  );
};

export default Internationalization;
