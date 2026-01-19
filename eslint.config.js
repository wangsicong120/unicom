import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        __APP_BRANCH__: 'readonly',
        __APP_COMMIT__: 'readonly',
        __APP_BUILD_TIME__: 'readonly',
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  ...pluginOxlint.configs['flat/recommended'],
])
