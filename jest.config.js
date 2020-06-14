require("./config/env")

module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": `<rootDir>/testing/preprocess.js`,
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/testing/mocks/file-mock.js`,
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
    "ts-jest": {
      tsConfig: {
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        jsx: "react",
        importHelpers: true,
        typeRoots: ["./node_modules/@types/", "./typings"],
      },
    },
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/testing/loadershim.js`],
  setupFilesAfterEnv: ["<rootDir>/testing/setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*_stories.{js,jsx,ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      functions: 0,
      branches: 0,
      lines: 0,
    },
  },
}
