# Contributing

## Development

1. Run `yarn` to install dependencies
3. `yarn start` this will start a webpack-dev-server

Note that we have two directories:
1. [`example`](../example), in case you first want to showcase features.
2. [`src`](../src), where we can export our components / utilities / configurations

## Building
Run `yarn build` to build packages, this will create two directories: `es` - for es2015 modules and `lib` for CommonJS modules.
When building this (`yarn build:example`), it will output it to the `dist` directory, which is used to upload to github pages is needed.

## Deploy to gihub pages
Run `yarn deploy`

## Troubleshooting

Sometimes you either can't build the project or run tests properly. Usually this is due to the fact
that a package is updated or you're not using the right node version. Please check if this is the
case. Otherwise just run this command (if you are using nvm):
`rm -Rf node_modules && nvm install --lts && nvm alias default --lts && yarn cache clean && yarn`

Still having trouble? Contact one of our [core maintainers](./MAINTAINERS.md)
