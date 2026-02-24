import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
	{ ignores: ['node_modules', 'packages/*/dist/**'] },
	eslint.configs.recommended,
	tseslint.configs.recommended
);
