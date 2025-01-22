// eslint-disable-next-line import/no-anonymous-default-export
export default {
  plugins: {
    tailwindcss: {},
    pixrem: {},
    "postcss-will-change": {},
    "postcss-vmin": {},
    "postcss-pseudoelements": {},
    "postcss-opacity": {},
    "postcss-color-rgba-fallback": {},
    "postcss-preset-env": {
      preserve: false,
      stage: 4,
      enableClientSidePolyfills: true,
    },
  },
};
