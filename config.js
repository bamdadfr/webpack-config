'use strict'

module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "sourceType": "module"
    },
    "extends": [
        "eslint:recommended",
        "airbnb",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react"
    ],
    "plugins": [
        "jsx-a11y",
        "prettier",
        "@typescript-eslint"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "rules": {
        // .ts & .tsx rules
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "import/extensions": "off",
        "@typescript-eslint/indent": ["error"],
        "@typescript-eslint/type-annotation-spacing": ["error", { "before": false, "after": true }],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/init-declarations": ["warn"],
        // .jsx rules
        "react/jsx-indent": ["error", 4],
        "react/prop-types": "off",
        // .js rules
        "strict": "off",
        "semi": [
            "error",
            "never"
        ],
        "indent": [
            "error",
            4,
            {
                "ignoredNodes": ["JSXElement"],
                "SwitchCase": 1
            }
        ],
        "init-declarations": "warn",
        "no-undef-init": "off",
        "comma-dangle": [ "error", "always-multiline" ],
        "brace-style": ["error", "1tbs"],
        "multiline-comment-style": ["error", "separate-lines"],
        "dot-notation": "off",
        "quote-props": ["error", "always"],
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
        "no-whitespace-before-property": "error",
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "no-spaced-func": "off",
        "func-call-spacing": ["error", "always"],
        "block-spacing": ["error", "always"],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
        "object-curly-newline": ["error", { "consistent": true }],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "space-in-parens": "error",
        "no-nested-ternary": "error",
        "eqeqeq": "error",
        "quotes": ["error", "single", { "avoidEscape": true }],
        "no-unused-vars": ["error", { "argsIgnorePattern": "^(symbol|price|tag|since|limit|params|market|timeframe|api|path|code|currency|response|requestHeaders|requestBody|bidsKey|asksKey)" }],
        "new-parens": "error",
        "new-cap": ["error"],
        "no-var": "error",
        "prefer-const": ["error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false
        }],
        "no-warning-comments": ["warn", { "terms": ["fixme"] }],
        "padded-blocks": [
            "error",
        "always"
        ],
        "lines-between-class-members": "error",
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "padding-line-between-statements": [
          "error",
          { "blankLine": "always", "prev": "*", "next": "*"},
          { "blankLine": "always", "prev": "*", "next": "cjs-export" },
          { 
              "blankLine": "never", 
              "prev": [
                  "singleline-const", "singleline-let", "singleline-var"
              ],
              "next": [
                  "singleline-const", "singleline-let", "singleline-var"
              ]
          },
          { "blankLine": "never", "prev": "import", "next": "import" }
        ],
        "import/newline-after-import": ["off", { "count": 1 }],
        "prefer-template": "off",
        "curly": "error",
        "no-plusplus": "off",
        "no-restricted-properties": "off",
        "prefer-destructuring": "off",
        "class-methods-use-this": "off",
        "no-param-reassign": "off",
        "max-len": "off",
        "no-return-await": "off",
        "array-bracket-spacing": "off",
        "radix": "off",
        "camelcase": "off",
        "no-lonely-if": "off",
        "no-mixed-operators": "off",
        "no-shadow": "off",
        "no-useless-concat": "off",
        "no-continue": "off",
        "no-else-return": "off",
        "no-unneeded-ternary": "off",
        "operator-assignment": "off",
        "no-underscore-dangle": "off",
        "consistent-return": "off",
        "no-await-in-loop": "off",
        "jsx-a11y/click-events-have-key-events": "warn",
        "jsx-a11y/no-static-element-interactions": "warn",
        "arrow-spacing": [ "warn", { "before": true, "after": true } ],
        "key-spacing": [
            "error",
            { "beforeColon": false, "afterColon": true }
        ],
        "comma-spacing": [
            "warn",
            { "before": false, "after": true }
        ],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    },
    "overrides": [
        {
            // enable the rule specifically for TypeScript files
            "files": ["*.ts", "*.tsx"],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": ["warn"]
            }
        }
    ]
}