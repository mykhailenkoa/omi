webpackJsonp([16],{37:function(n,i){n.exports='## Installation  \n\nSimply download and include with `<script>`. Omi will be registered as a global variable.\n\n* [Omi Development Version](https://unpkg.com/omi@latest/dist/omi.js)\n* [Omi Production Version](https://unpkg.com/omi@latest/dist/omi.min.js)\n\nInstall via npm:\n\n```\nnpm i omi\n```\n\nIf you need to be compatible with IE8+, you can choose omio, which has almost the same API as omi, and Omi will be registered as a global variable.\n\n* [Omio Development Version](https://unpkg.com/omio@latest/dist/omi.js)\n* [Omio Production Version](https://unpkg.com/omi@latest/dist/omi.min.js)\n\nInstall via npm:\n\n```\nnpm i omio\n```\n\n## CLI\n\nOmi provides the official CLI. You don\'t need to learn how to configure webpack, Babel or TypeScript. CLI helps you configure everything and provides various templates for different project types.\n\n```bash\n$ npm i omi-cli -g     # install cli\n$ omi init my-app      # init project\n$ cd my-app            \n$ npm start            # develop\n$ npm run build        # release\n```\n\n> `npx omi-cli init my-app` is also supported(npm v5.2.0+).\n\nDirectory description:\n\n```\n\u251c\u2500 config\n\u251c\u2500 public\n\u251c\u2500 scripts\n\u251c\u2500 src\n\u2502  \u251c\u2500 assets\n\u2502  \u251c\u2500 elements    //Store all custom elements\n\u2502  \u251c\u2500 store       //Store all this store of pages\n\u2502  \u251c\u2500 admin.js    //Entry js of compiler\uff0cwill build to admin.html\n\u2502  \u2514\u2500 index.js    //Entry js of compiler\uff0cwill build to index.html\n```\n\n\n### Scripts\n\n```json\n"scripts": {\n    "start": "node scripts/start.js",\n    "build": "PUBLIC_URL=. node scripts/build.js",\n    "build-windows": "set PUBLIC_URL=.&& node scripts/build.js",\n    "fix": "eslint src --fix"\n}\n```\n\nYou can set up the PUBLIC_URL, such as\uff1a\n\n```json\n...\n"build": "PUBLIC_URL=https://your.url.com/sub node scripts/build.js",\n"build-windows": "set PUBLIC_URL=https://your.url.com/sub&& node scripts/build.js",\n...\n```\n\n### Switch omi and omio\n\nAdd or remove the alias config in package.json to switch omi and omio\uff1a\n\n```js\n ...\n "alias": {\n    "omi": "omio"\n  }\n  ...\n```\n\n## Project Template\n\n| **Template Type**|  **Command**|  **Describe**|\n| ------------ |  -----------|  ----------------- |\n|Base Template(v3.3.0+)|`omi init my-app`| Basic omi or omio(IE8+) project template.|\n|\u5c0f\u7a0b\u5e8f\u6a21\u677f(v3.3.5+)|`omi init-p my-app`| Omi \u5f00\u53d1\u5c0f\u7a0b\u5e8f |\n|Base Template with snapshoot|`omi init-snap my-app`| Basic omi or omio(IE8+) project template with snapshoot prerendering.|\n|TypeScript Template(omi-cli v3.3.0+)|`omi init-ts my-app`|Basic template with typescript.|\n|Mobile Template|`omi init-weui my-app`| Mobile web app template with weui and omi-router.|\n|MVVM Template(omi-cli v3.0.22+)|`omi init-mvvm my-app`  |MVVM template.|\n\nCLI\'s auto-created project scaffolding is based on a single-page create-react-app to be converted into a multi-page one, with configuration issues to see [create-react-app user guide](https://facebook.github.io/create-react-app/docs/getting-started)'}});
//# sourceMappingURL=16.61ad2a56.chunk.js.map