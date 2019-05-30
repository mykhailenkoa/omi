webpackJsonp([60],{64:function(n,e){n.exports="## Nav\n\nMenu list of Navigation.\n\n## Usage\n\n```html\n<m-nav id='myNav' nodes=\"[{\n  title: 'p-0',\n  id: 1,\n  icon: 'account_balance_wallet',\n  children: [\n    {\n      title: 'p-1',\n      id: 2,\n      icon: 'assignment_ind',\n      children: [\n        { title: 'p-2', id: 3, icon: 'chrome_reader_mode', checked: true },\n        { title: 'p-2.5', id: 13, icon: 'chrome_reader_mode' }\n      ]\n    },\n    {\n      title: 'p-4',\n      id: 4,\n      icon: 'extension',\n\n      children: [\n        {\n          title: 'p-5', id: 5, selected: true, icon: 'dashboard', checked: true,\n          disabled: true\n        },\n        { title: '\u9879\u76ee\u516d', id: 6, icon: 'favorite' },\n        { title: '\u9879\u76ee7', id: 7 }\n      ]\n    }\n  ]\n},\n{\n  title: 'p-11',\n  id: 14,\n  icon: 'group_work',\n\n  children: [\n    {\n      title: 'p-12', id: 12, icon: 'fingerprint', checked: true\n    }\n  ]\n}]\">\n</m-nav>\n```\n\n## Javascript\n\n```js\nvar myNav = document.querySelector('#myNav')\nvar nodeData = myNav.props.nodes\n\nmyNav.addEventListener('toggle', (evt) => {\n  const node = getNodeById(evt.detail.id, nodeData)\n  node.close = !node.close\n  myNav.setAttribute('nodes', nodeData)\n})\n\nmyNav.addEventListener('nodeclick', (evt) => {\n  const pre = getNodeById(evt.detail.pre, nodeData)\n  pre.selected = false\n  const node = getNodeById(evt.detail.id, nodeData)\n  node.selected = true\n  myNav.setAttribute('nodes', nodeData)\n})\n\nfunction getNodeById(id, nodes) {\n  for (let i = 0, len = nodes.length; i < len; i++) {\n    let child = nodes[i]\n    let target = this._getNodeById(id, child)\n    if (target) {\n      return target\n    }\n  }\n}\n\nfunction _getNodeById(id, node) {\n  if (node.id === id) return node\n  if (node.children) {\n    for (let i = 0, len = node.children.length; i < len; i++) {\n      let child = node.children[i]\n      let target = _getNodeById(id, child)\n      if (target) {\n        return target\n      }\n    }\n  }\n}\n```\n\n## API\n\n### Props\n\n```jsx\n{\n\tnodes: obj\n}\n```\n\n### Event\n\n```jsx\n{\n\ttoggle: function, \n\tnodeclick: function\n}\n```\n"}});
//# sourceMappingURL=60.a1e7a528.chunk.js.map