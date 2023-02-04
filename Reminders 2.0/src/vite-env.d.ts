/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_KEYVAL: number
    readonly VITE_KEY: number
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }