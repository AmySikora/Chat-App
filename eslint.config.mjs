import globals from "globals";
import pluginReact from "eslint-plugin-react";
import parser from "@babel/eslint-parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Specifies the file extensions to lint
    languageOptions: {
      parser, // Use Babel parser for JSX
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
      globals: {
        ...globals.browser, // Include browser globals
        ...globals.node,    // Include Node.js globals
      },
    },
    plugins: {
      react: pluginReact, // Properly define the React plugin
    },
    rules: {
      "react/react-in-jsx-scope": "off", // No need to import React in JSX files
      "react/prop-types": "off", // Disable prop-types validation
      "react/jsx-uses-react": "off", // Prevent marking React as unused
      "react/jsx-uses-vars": "error", // Prevent variables used in JSX from being marked as unused
    },
  },
];
