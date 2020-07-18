import Vue from 'vue';

const ComponentContext = require.context(
  '@/assets/icons/',
  true,
  /\.svg$/i,
  'lazy',
);
const icons = [];

ComponentContext.keys().forEach((componentFilePath) => {
  const componentName = `icon-${
    componentFilePath.split('/').pop().split('.')[0]
  }`;
  icons.push(componentName);
  Vue.component(componentName, () => ComponentContext(componentFilePath));
});

Vue.prototype.$icons = icons;
