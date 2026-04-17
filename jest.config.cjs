/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // 讓 Jest 知道 @/ 代表 src/ 或專案根目錄，這取決於你的 tsconfig.json
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', 
        // 如果你的根目錄不是 src，請改為 '<rootDir>/$1'
    },
    // 告訴 Jest 哪些檔案是測試檔
    testMatch: [
        "**/__tests__/**/*.test.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ]
};