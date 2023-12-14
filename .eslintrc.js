module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
      rules: {
        "node/no-unsupported-features/es-builtins": [
          "error",
          { version: ">=14.0.0" },
        ], // Règle pour reconnaître __dirname
        "node/no-unsupported-features/es-syntax": [
          "error",
          { version: ">=14.0.0" },
        ], // Règle pour reconnaître __dirname
        // Vous pouvez ajouter d'autres règles spécifiques à Node.js si nécessaire
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "node"],
  rules: {
    "prettier/prettier": "error",
    semi: ["error", "always"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
