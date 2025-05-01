import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
      globals: globals.browser,
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Next.jsなので不要
      "react/jsx-uses-react": "off", // 同上
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // あなたの追加ルール
      "no-unused-vars": ["error"],
      "no-undef": ["error"],
      eqeqeq: ["error", "always"],
      "no-console": ["warn"],
      indent: ["error", 4],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "brace-style": ["error", "1tbs"],
      camelcase: ["error", { properties: "always" }],
      "no-magic-numbers": ["warn", { ignore: [0, 1] }],
      "consistent-return": ["error"],
      "no-var": ["error"],
      complexity: ["warn", { max: 10 }],
      "prefer-const": ["error"],
    },
  },
];
