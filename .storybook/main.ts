const config = {
  staticDirs: ['../public'],
  stories: [
    '../src/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../src/**/stories.@(ts|tsx|js|jsx|mdx)'
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
export default config
