export const shouldRenderForBot = import.meta.env.SSR
  ? false
  : !globalThis.window?.__wcBootGate || !globalThis.document?.getElementById('contact')
