// src/types/global.d.ts
export {};

declare global {
  interface Window {
    appboyBridge: {
      logClick: (buttonId: string) => void;
      logCustomEvent: (eventName: string, props?: Record<string, unknown>) => void;
      closeMessage: () => void;
    };
  }
}