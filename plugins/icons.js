import Vue from 'vue';

const outlineIcons = [];
const filledIcons = [];

const outlineIconsContextImporter = require.context(
  '@/assets/icons/outline',
  true,
  /\.svg$/i,
  'lazy',
);
const filledIconsContextImporter = require.context(
  '@/assets/icons/filled',
  true,
  /\.svg$/i,
  'lazy',
);

outlineIconsContextImporter.keys().forEach((componentFilePath) => {
  const componentName = `outline-${
    componentFilePath.split('/').pop().split('.')[0]
  }`;
  outlineIcons.push(componentName);
  Vue.component(componentName, () =>
    outlineIconsContextImporter(componentFilePath),
  );
});

filledIconsContextImporter.keys().forEach((componentFilePath) => {
  const componentName = `filled-${
    componentFilePath.split('/').pop().split('.')[0]
  }`;
  filledIcons.push(componentName);
  Vue.component(componentName, () =>
    filledIconsContextImporter(componentFilePath),
  );
});

Vue.prototype.$outlineIcons = outlineIcons;
Vue.prototype.$filledIcons = filledIcons;
