NODE_BIN = node_modules/.bin
PROD_ENV = PROD
DEV_ENV = DEV

runDev:
	@echo - Starting Webpack dev-server, please wait...
	@node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --hot --inline

clean:
	@echo - Cleaning dirs...
	@rm -rf dist
	@rm -f stats.json
	@mkdir dist

build:
	@make clean
	@echo - Building application for production...
	@WEBPACK_ENV=$(PROD_ENV) $(NODE_BIN)/webpack -p --progress
