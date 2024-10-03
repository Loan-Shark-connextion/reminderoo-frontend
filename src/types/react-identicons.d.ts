// File: src/types/react-identicons.d.ts

declare module 'react-identicons' {
  import { FC } from 'react';

  interface IdenticonProps {
    string: string;
    size?: number;
    padding?: number;
    background?: string;
    foreground?: string;
    count?: number;
    digest?: string;
    saturation?: number;
    brightness?: number;
  }

  const Identicon: FC<IdenticonProps>;

  export default Identicon;
}
