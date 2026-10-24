import { createSSRApp, h, type Component } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { describe, expect, it } from 'vite-plus/test';
import VIntl, {
  VIntlDateTimeFormat,
  VIntlDisplayNames,
  VIntlDurationFormat,
  VIntlListFormat,
  VIntlNumberFormat,
  VIntlRelativeTimeFormat,
} from '../src/index';

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** The exact markup every component renders: one wrapper div around the text. */
function wrapped(text: string, wrapper = ''): string {
  const escaped = text.replace(/[&<>"']/g, (c) => ESCAPES[c] ?? c);
  return `<div class="${wrapper}">${escaped}</div>`;
}

function render(
  component: Component,
  props: Record<string, unknown>,
): Promise<string> {
  return renderToString(createSSRApp({ render: () => h(component, props) }));
}

describe('VIntlNumberFormat', () => {
  it('formats currency for the given locale', async () => {
    const html = await render(VIntlNumberFormat, {
      payload: 123456.789,
      format: {
        locales: 'de-DE',
        options: { style: 'currency', currency: 'EUR' },
      },
    });
    expect(html).toBe(
      wrapped(
        new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(123456.789),
      ),
    );
  });

  it('applies the wrapper class', async () => {
    const html = await render(VIntlNumberFormat, {
      payload: 1,
      wrapper: 'figure',
    });
    expect(html).toBe(wrapped('1', 'figure'));
  });
});

describe('VIntlDateTimeFormat', () => {
  it('formats a date with options', async () => {
    const date = new Date(Date.UTC(2026, 9, 24, 12));
    const options: Intl.DateTimeFormatOptions = {
      dateStyle: 'long',
      timeZone: 'UTC',
    };
    const html = await render(VIntlDateTimeFormat, {
      payload: date,
      format: { locales: 'fr-FR', options },
    });
    expect(html).toBe(
      wrapped(new Intl.DateTimeFormat('fr-FR', options).format(date)),
    );
  });
});

describe('VIntlRelativeTimeFormat', () => {
  it('formats a relative value with any unit', async () => {
    const html = await render(VIntlRelativeTimeFormat, {
      payload: { number: -3, time: 'hours' },
      format: { locales: 'en-US', options: { numeric: 'auto' } },
    });
    expect(html).toBe(wrapped('3 hours ago'));
  });
});

describe('VIntlListFormat', () => {
  it('joins an array of items', async () => {
    const html = await render(VIntlListFormat, {
      payload: ['Motorcycle', 'Bus', 'Car'],
      format: {
        locales: 'en-GB',
        options: { style: 'long', type: 'conjunction' },
      },
    });
    expect(html).toBe(wrapped('Motorcycle, Bus and Car'));
  });
});

describe('VIntlDisplayNames', () => {
  it('translates a region code', async () => {
    const html = await render(VIntlDisplayNames, {
      payload: 'IN',
      format: { locales: 'en', options: { type: 'region' } },
    });
    expect(html).toBe(wrapped('India'));
  });
});

describe('VIntlDurationFormat', () => {
  it('formats a duration', async () => {
    const html = await render(VIntlDurationFormat, {
      payload: { hours: 1, minutes: 46, seconds: 40 },
      format: { locales: 'en', options: { style: 'long' } },
    });
    expect(html).toBe(wrapped('1 hour, 46 minutes, 40 seconds'));
  });
});

describe('plugin install', () => {
  it('registers every component globally', () => {
    const app = createSSRApp({ render: () => null });
    app.use(VIntl);
    for (const name of [
      'VIntlNumberFormat',
      'VIntlListFormat',
      'VIntlDateTimeFormat',
      'VIntlDisplayNames',
      'VIntlDurationFormat',
      'VIntlRelativeTimeFormat',
    ]) {
      expect(app.component(name)).toBeDefined();
    }
  });
});
