import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://reqres.in/api',
    headless: true,
  },
});