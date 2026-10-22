---
name: shopping-demo-review
description: >-
  Reviews shopping-demo changes to cart totals, product rendering, image
  uploads, and this repository's JavaScript style. Use when a pull request
  changes src/app.js, src/index.html, src/styles.css, or shopping-cart behavior.
---

# Shopping demo review

Use this skill for change types that touch cart behavior, product rendering, image upload, page styles, or other JavaScript in `src/`.

## Repository facts

- The app is a browser shopping demo: a product list, a cart count, and DOM updates in `src/app.js`, `src/index.html`, and `src/styles.css`.
- Code is vanilla JavaScript ES modules, HTML, and CSS. There is no TypeScript, Vue, or test runner.
- Commands that exist are `npm start` and `npm run lint`.
- `.eslintrc.json` requires 2-space indent, single quotes, and no semicolons.
- Product and cart copy is Chinese.

## Review the changed lines

1. Cart math: `addToCart` must resolve the product by `id` before pushing it. `updateCartCount` must equal `cart.length`. `calculateTotal` must sum item prices and apply the 10% tax once.
2. Rendering: do not interpolate product names or other data into `innerHTML` without escaping. Prefer `textContent`, or escape the value before building markup.
3. Upload: check file type and size before the request. Call the success callback only after a successful response. Handle a failed `fetch`. Encode `productId` instead of concatenating it into the query string.
4. Style: comment on indent, quotes, or semicolons only when a changed line breaks `.eslintrc.json` and that break is part of a larger correctness issue. Do not restate ESLint or SonarQube style findings.

## Comment shape

Prefix each finding with `shopping-demo-review`. Name the changed file and line, state the concrete failure, and give one fix that fits the code already in `src/`.

## Skip

- Unchanged lines, lockfiles, and generated workflow output.
- A request to add a test framework. Flag broken price or cart math on the changed line instead.
- Feedback already present on the same changed line.
