import Vue from 'vue';

const outlineIcons = [];
const solidIcons = [];

const outlineIconsContextImporter = require.context(
  '@/node_modules/teenyicons/outline',
  true,
  /\.svg$/i,
  'lazy',
);
const solidIconsContextImporter = require.context(
  '@/node_modules/teenyicons/solid',
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

solidIconsContextImporter.keys().forEach((componentFilePath) => {
  const componentName = `solid-${
    componentFilePath.split('/').pop().split('.')[0]
  }`;
  solidIcons.push(componentName);
  Vue.component(componentName, () =>
    solidIconsContextImporter(componentFilePath),
  );
});

Vue.prototype.$outlineIcons = outlineIcons;
Vue.prototype.$solidIcons = solidIcons;
