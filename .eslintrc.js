module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "simple-import-sort", "import"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:jsx-a11y/recommended",
      "plugin:react-hooks/recommended",
      "airbnb-typescript-prettier",
    ],
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true, // TODO: Add jest
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      project: "./tsconfig.json",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "import/extensions": 0,
      "react/prop-types": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
      "sort-imports": "off",
      "import/first": "error",
      "import/order": "off",
      "simple-import-sort/imports": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "off",
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "react/jsx-props-no-spreading": [
        2,
        {
          html: "enforce",
          custom: "ignore",
          explicitSpread: "enforce",
          exceptions: [],
        },
      ],
      "import/prefer-default-export": 0,
      camelcase: "off",
      "import/no-cycle": 0,
    },
  };
  