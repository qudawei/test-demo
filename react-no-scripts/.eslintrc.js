/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-04-29 14:44:29
 * @LastEditors: David Qu
 * @LastEditTime: 2021-04-29 14:46:39
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
};
