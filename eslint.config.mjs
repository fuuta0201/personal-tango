// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "next",
    "prettier", // 💡 prettier を最後に追加して競合ルールをオフ
  ),

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },

  {
    rules: {
      // 好みに応じて追加可能
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/react-in-jsx-scope": "off", // React 17+ 不要
    },
  },
];
