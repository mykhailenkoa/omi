webpackJsonp([33],{91:function(n,c){n.exports="## Chips\n\nChips \u662f\u7d27\u51d1\u7684\u5143\u7d20\uff0c\u5141\u8bb8\u7528\u6237\u8f93\u5165\u4fe1\u606f\u3001\u9009\u62e9\u3001\u8fc7\u6ee4\u5185\u5bb9\u6216\u89e6\u53d1\u64cd\u4f5c\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-chips choice chips=\"[\n  { text: 'Chip1' },\n  {\n    text: 'Chip2',\n    selected: true,\n    leading: {\n      icon: {\n        path: 'M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z',\n        color: '#333',\n        scale: 1\n      }\n    }\n  },\n  {\n    text: 'Chip3',\n    trailing: {\n      icon: {\n        path: 'M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z',\n        color: '#333',\n        scale: 1\n      }\n    }\n  }\n]\">\n</m-chips>\n```\n\n## Omi \u4e2d\u4f7f\u7528\n\nJSX:\n\n```html\n<m-chips filter chips={[\n  {\n    text: 'checkmark with selected',\n    checkmark: true,\n    selected: true,\n    leading: {\n      icon: {\n        path: 'M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z',\n        color: '#333',\n        scale: 1\n      }\n    }\n  },\n  {\n    text: 'Chip3-checkmark',\n    checkmark: true\n  },\n  {\n    text: 'Chip4-checkmark-selected',\n    checkmark: true,\n    selected: true\n  }\n]}></m-chips>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| ripple | boolean | -- | \u5355\u51fb\u6807\u7b7e\u5f62\u6210\u6ce2\u7eb9 |\n| filter | boolean | -- | \u8fc7\u6ee4\u6a21\u5f0f |\n| choice | boolean | -- | \u9009\u62e9\u6a21\u5f0f |\n| input | boolean | -- | \u8868\u793a\u8be5\u7ec4\u4e2d\u7684\u82af\u7247\u662f\u8f93\u5165\u82af\u7247\uff0c\u901a\u8fc7\u5c06\u6587\u672c\u8f6c\u6362\u4e3a\u82af\u7247\u6765\u5b9e\u73b0\u7528\u6237\u8f93\u5165\u3002 |\n| chips | object | -- | \u81ea\u5b9a\u4e49\u6807\u7b7e\u5185\u5bb9 |\n"}});
//# sourceMappingURL=33.63dc7031.chunk.js.map