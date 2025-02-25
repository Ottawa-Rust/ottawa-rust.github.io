# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Pre requisites

- Install Node JS LTS
- Static web server (https://github.com/static-web-server/static-web-server)

Example: 

```shell
node --version

v20.18.0
```

```shell
brew install static-web-server
```

### Installation

```
$ npm install 
```

### Local Development

```
$ npm start
```

or 

```shell
npm run start -- --locale fr
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Adding content

#### Blogs

Add Markdown blogs in blog/ folder

#### Content

Add Markdown content in docs/ folder

Add Standalone pages in src/pages/ folder

#### YouTube

#### Meetup

#### Zulip

### Adding translations

```shell
docusaurus write-translations
docusaurus write-translations --locale fr
```

Any blog, docs updated should be translated and put into the corresponding locale

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Test

```shell
cd build
npm run serve
```

or 

```shell
static-web-server --port 3000 --root ./build
```

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
