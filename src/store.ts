import { persistentMap } from '@nanostores/persistent'

export type SettingsValue = {
    darkModeEnabled: string
  }

let prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

export const settings = persistentMap<SettingsValue>('settings',{darkModeEnabled: prefersDark ? "true" : "false"});
