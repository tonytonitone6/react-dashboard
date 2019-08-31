module.exports = {
  "verbose": true,
  "roots": ["src"],
  "transform": {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  "moduleDirectories": ["node_modules", 'src'],
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json"],
  "setupFilesAfterEnv": ['<rootDir>/src/tests/setDefault.js']
};
