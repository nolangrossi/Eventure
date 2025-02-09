/// <reference types="vite/client" />

declare interface ImportMetaEnv {
    VITE_NYLAS_API_KEY: string;
    VITE_NYLAS_CLIENT_ID: string;
    VITE_NYLAS_API_URI: string;
  }
  
  declare interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  