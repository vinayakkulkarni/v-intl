export interface LocaleOption {
  value: string;
  label: string;
}

/** Locales picked to show visibly different grouping, scripts and order. */
export const LOCALES: LocaleOption[] = [
  { value: 'en-US', label: 'en-US' },
  { value: 'en-IN', label: 'en-IN' },
  { value: 'de-DE', label: 'de-DE' },
  { value: 'fr-FR', label: 'fr-FR' },
  { value: 'ja-JP', label: 'ja-JP' },
  { value: 'hi-IN', label: 'hi-IN' },
  { value: 'ar-EG', label: 'ar-EG' },
];

/** The payload attribute as a user would write it in a template. */
export function payloadAttr(payload: unknown): string {
  if (typeof payload === 'string') return `payload="${payload}"`;
  return `:payload='${JSON.stringify(payload)}'`;
}

/** Render a component call the way a user would write it. */
export function snippet(
  tag: string,
  payload: string,
  locales: string,
  options: Record<string, unknown>,
): string {
  const opts = JSON.stringify(options, null, 2).replace(/\n/g, '\n    ');
  return [
    `<${tag}`,
    `  ${payload}`,
    `  :format='{`,
    `    "locales": "${locales}",`,
    `    "options": ${opts}`,
    `  }'`,
    `/>`,
  ].join('\n');
}
