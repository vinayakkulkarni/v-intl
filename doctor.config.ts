// Configuration for `@geoql/vue-doctor` (https://docs.the-doctor.report),
// run in CI by geoql/doctor-action.
//
// NOTE: `exclude` REPLACES the built-in default ignore list rather than
// extending it, so the defaults (node_modules, dist, .nuxt, .output, coverage)
// are re-listed here explicitly, as globs so nested workspaces (demo/) match.
//
// Authored as a plain default export (no `defineConfig` import): the CLI loads
// it via c12 and is not a local dependency, so an import would not resolve.
export default {
  exclude: [
    '**/node_modules/**',
    '**/dist/**',
    '**/.nuxt/**',
    '**/.output/**',
    '**/coverage/**',
    // Vendored agent skill packs (vue-best-practices), copied per agent. Their
    // build/validate scripts are run by hand, never imported, so knip flags
    // them as unused files. They are not library or demo code.
    'skills/**',
    '.agents/**',
    '.claude/**',
    '.cursor/**',
    '.goose/**',
    // This file itself: consumed by the CLI, never imported.
    'doctor.config.ts',
  ],
};
