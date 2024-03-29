/* eslint-disable no-unused-vars */
/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    REACT_APP_SERVER: 'string';
    REACT_APP_ALBUM_BUCKET_NAME: 'string';
    REACT_APP_BUCKET_REGION: 'string';
    REACT_APP_IDENTITY_POOL_ID: 'string';
  }
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.otf';
