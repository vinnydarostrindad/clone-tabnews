import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,

  {
    ignores: [".next/"],
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
