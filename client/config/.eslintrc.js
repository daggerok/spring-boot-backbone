module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "commonjs": true,
  },
  "parser": "babel-eslint",
  "extends": [
    "plugin:backbone/recommended",
    "eslint:recommended",
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": false,
      "esversion": 6,
      "modules": true,
    },
  },
  "rules": {
    "indent": [
      "error",
      2,
    ],
    "linebreak-style": [
      "error",
      "unix",
    ],
    "quotes": [
      "error",
      "single",
    ],
    "semi": [
      "error",
      "always",
    ],
    "max-len": [
      1,
      120,
      2,
      { ignoreComments: true }
    ],
    "no-console": 0,
    "no-unused-vars": 1,
    "backbone/collection-model": 1,
    "backbone/defaults-on-top": 1,
    "backbone/model-defaults": 1,
    "backbone/no-constructor": 1,
    "backbone/no-native-jquery": 1,
  },
  "plugins": [
    "backbone",
  ],
  /*
  // if you are using custom models/view/collection bases you also have to specify each on in the settings section
  "settings": {
    "backbone": {
      "Collection": ["Backbone.NestedCollection", "MyCollection"],
      "Model": ["MyBaseModel"],
      "View": ["MyBaseView"],
    },
  },
  */
};
