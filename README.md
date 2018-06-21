### Purpose

This is a small webpack project intended to demonstrate a possible bug with webpack and/or html-webpack-plugin related to webpack's `--watch` mode.

### Possible bug

When caching the child compilation promise in html-webpack-plugin, webpack appears to stop watching the HTML template file.

### Steps to reproduce

Clone this repository and `cd` into it. Run:
```
npm install
cd html-webpack-plugin
npm install
cd ..
npx webpack --watch
```
While webpack is watching, edit and save `src/index.js` so that webpack recompiles the project a couple times. Each recompile, the plugin should log either "OK: watcher exists" (if the watcher for `template.html` exists) or "ERROR: missing watcher" (if the watcher for `template.html` doesn't exist).

The expected output is "OK: watcher exists" for each recompliation. When I follow these steps, every compilation after the first results in "ERROR: missing watcher" until the child compiler cache is cleared.

