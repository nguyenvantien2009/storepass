# Dependencies

Use dependencies in npm.

```shell
+-- @aws-sdk/client-s3@3.110.0
+-- @types/yargs@17.0.10
+-- axios@0.27.2
+-- boxen@7.0.0
+-- chalk@5.0.1
+-- crypto-js@4.1.1
+-- dotenv@16.0.1
+-- google-auth-library@8.0.2
+-- googleapis@103.0.0
+-- querystring@0.2.1
+-- sequelize@6.20.1
+-- uuid@8.3.2
`-- yargs@17.5.1
```

## Console Application

- `inquirer` Its an inquirer (asker) the user. Its a tool display on console UI to ask questions to probe user's intention. To use the console application, users have 3 options
	1. Remember command line to type.
	2. In the Console UI show button options to choose.
	3. The system will ask some question to users. Its same decision tree.
  And inquirer is a set of libraries of type 3. [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)
- `yargs`
- `chalk`
- `boxen`
- `prompts`
- `progress`
- `configstore`
- `clui` Command line user interface. Use to show user interface console with Gauges, Progress Bar, Sparkline, Spinner... Link to [https://www.npmjs.com/package/clui](https://www.npmjs.com/package/clui)

## Crypto Libraries

- `crypto-js`

## Files Storages

- `client-s3`
- `google-auth-library`
- `googleapi`

## Database Storages

- `sequelize`
- `sqlite3`

## Background Supports

- `envinfo` use for check require enviroments.

## References

- https://yvonnickfrin.dev/seven-libraries-to-build-nodejs-cli
