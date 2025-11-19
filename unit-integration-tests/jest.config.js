/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jsdom',

    verbose: true,
    reporters: [
        'default',
        ['@testomatio/reporter/lib/adapter/jest.js', {
            apiKey: process.env.TESTOMATIO
        }]
    ]
};

module.exports = config;