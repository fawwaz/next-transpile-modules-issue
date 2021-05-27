How to Repro :

1. `cd packages/web-ui`
2. Make modification on `packages/web-ui/components/Button.tsx` (change the color of component)
3. `cd packages/web-app`
4. Import the button inside `packages/web-app/pages/index.tsx`
5. Run `yarn dev` the tailwind styling is applied there
6. Run `yarn build && yarn start` the tailwind styling is missing (only normalize.css is applied)
