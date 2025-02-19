import baseConfig, { TailwindConfig } from '@tealfeed-builder/config/tailwind.config'

const config = {
  ...baseConfig,
  content: ['./src/**/*.{js,jsx,tsx,ts}', ...baseConfig.content],
} satisfies TailwindConfig

export default config
