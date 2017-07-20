install:
	npm install

start:
	npm run babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	npm run eslint

build:
	rm -rf dist
	npm run build
