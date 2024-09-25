import baseConfig, {
  TailwindConfig,
} from "@tealfeed-builder/config/tailwind.config";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tealfeed-builder/ui/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
    },
  },
  plugins: [],
} satisfies TailwindConfig;

export default config;
