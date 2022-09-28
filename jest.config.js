const isTsx = process.env.SKILLERWHALE_LANG === "ts"
const lang = isTsx ? "ts" : "js"

const config = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: "http://localhost/",
  },

  moduleFileExtensions: isTsx ? ["ts", "tsx", "js"] : ["js", "jsx"],
  moduleDirectories: ["node_modules"],

  moduleNameMapper: {
    "\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
  },

  transform: {
    ...(isTsx ? { "^.+\\.tsx?$": "ts-jest" } : { "^.+\\.jsx?$": "babel-jest" }),
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/src${
      isTsx ? "_tsx" : ""
    }/testing/__mock__/fileTransformer.${lang}`,
  },

  collectCoverageFrom: [
    `src${isTsx ? "_tsx" : ""}/testing/drive-safe-app/**/*.{${lang},${lang}x}`,
    `!src${isTsx ? "_tsx" : ""}/testing/drive-safe-app/api.${lang}`,
    "!**/node_modules/**",
  ],
  coverageReporters: ["json", "lcovonly", "text", "clover"],
}

module.exports = config
