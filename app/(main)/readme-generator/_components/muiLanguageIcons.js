// Use devicons and simple-icons for real language icons
import { 
  DiPython, DiJavascript1, DiJava, DiGo, DiRuby, DiPhp, DiSwift, DiRust
} from 'react-icons/di';
import { SiC, SiCplusplus, SiTypescript } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

export const languageIcons = {
  Python: DiPython,
  JavaScript: DiJavascript1,
  Java: DiJava,
  C: SiC,
  'C++': SiCplusplus,
  'C#': FaCode,
  TypeScript: SiTypescript,
  'Go (Golang)': DiGo,
  Ruby: DiRuby,
  PHP: DiPhp,
  Swift: DiSwift,
  Rust: DiRust,
};

export const fallbackLanguageIcon = FaCode;
