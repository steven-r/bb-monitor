/* eslint-disable */
export default {
  displayName: 'bb-monitor',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/bb-monitor',
  moduleNameMapper: {
    'react-markdown': '<rootDir>/__test__/__mocks__/react-markdown.tsx',
  },
};
