# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Pre requisites

- Install Node JS LTS
- Static web server (https://github.com/static-web-server/static-web-server)

Example: 

```shell
node --version

v24.11.0
```

```shell
brew install static-web-server
```

Alternatively, if you have [devbox](https://www.jetify.com/devbox) installed, you can run `devbox install`.

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

`npm run start` serves one locale at a time; `--locale fr` serves French at `/fr/`.

Do not run `npm run build` while `npm run start` is running. Both use the shared `.docusaurus/` directory, and a full build leaves it set to the last locale built (fr). The dev server picks that up and every link on it breaks until you restart it.

### Adding content

#### Blogs

Add Markdown blogs in blog/ folder

#### Content

Add Markdown content in docs/ folder

Add Standalone pages in src/pages/ folder

#### YouTube

#### Events

Add a Markdown file to `docs/events/`, named `YYYY-MM-DD-slug.md`. The date prefix keeps the sidebar in chronological order. Link it from the Upcoming or Past list in `docs/events/index.md`.

Open an issue titled `YYYY-MM-DD: <event name>`, label it `rsvp`, and link it from the event page. RSVPs also come in by email to rsvp@ottawa-rust.ca, and via Meetup when the event is listed there — note the free Meetup tier only seats 10, which is fewer than most of our venues hold.

#### Mailing list

Three groups.io lists, reached through forwards on ottawa-rust.ca: `join@` (discussion), `join-meta@` (event planning), `join-announcements@` (announcements). See `docs/MailingList.md`.

### Adding translations

```shell
docusaurus write-translations
docusaurus write-translations --locale fr
```

Any blog, docs updated should be translated and put into the corresponding locale

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Test

```shell
npm run serve
```

or 

```shell
static-web-server --port 3000 --root ./build
```

### Deployment

Pushing to `main` builds and publishes the site. There is nothing to run by hand. The workflow is `.github/workflows/deploy.yml`; Pages is set to Settings → Pages → Source: GitHub Actions, with the custom domain `www.ottawa-rust.ca`.

`npm run deploy` no longer publishes anything. It used to build locally and force-push `build/` to the `deployment` branch, which GitHub Pages then served. That branch and the `deploymentBranch` entry in `docusaurus.config.ts` are left in place but dead; going back to them means switching the Pages source back to branch builds.
