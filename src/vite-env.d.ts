/// <reference types="vite/client" />

// Asset type declarations for Vite
declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
