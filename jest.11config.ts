module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/*.test.ts',
  ],
};


// module.exports = {
//     preset: 'ts-jest',
//     transform: {
//       '^.+\\.(ts|tsx)?$': 'ts-jest',
//       '^.+\\.(js|jsx)$': 'babel-jest',
//     }
//   };