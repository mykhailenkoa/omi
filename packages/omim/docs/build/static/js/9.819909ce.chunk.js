webpackJsonp([9],{115:function(e,n){e.exports='## Slider\n\nSlider\u63d0\u4f9b\u4e86\u201c\u6750\u8d28\u8bbe\u8ba1\u201d\u6ed1\u5757\u7ec4\u4ef6\u7684\u5b9e\u73b0\u3002 \u6ed1\u5757\u5b8c\u5168\u652f\u6301RTL\uff0c\u5e76\u7b26\u5408WAI-ARIA\u6ed1\u5757\u521b\u4f5c\u5b9e\u8df5\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-slider onchange=\'change(event)\'> </m-slider>\n<m-slider value="10" discrete> </m-slider>\n<m-slider disabled > </m-slider>\n<m-slider discrete display-markers step="2"> </m-slider>\n```\n\n## Omi \u4e2d\u4f7f\u7528\n\nJSX:\n\n```jsx\n<m-slider onChange={(evt) => {\n  console.log(evt.detail.value)\n}}> </m-slider>\n<m-slider value={10} onChange={(evt) => {\n  console.log(evt.detail.value)\n}} discrete> </m-slider>\n<m-slider disabled > </m-slider>\n<m-slider discrete displayMarkers step={2}> </m-slider>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| discrete | boolean | -- | \u4e0e display-markers \u4e00\u8d77\u4f7f\u7528\u663e\u793a\u6807\u8bb0 |\n| value | number | 0 | \u6ed1\u5757\u521d\u59cb\u503c |\n| disabled | boolean | -- | \u7981\u7528\u6ed1\u5757 |\n| min | number | 0 | \u6700\u5c0f\u503c |\n| max | number | 100 | \u6700\u5927\u503c |\n| step | number | 1 | \u8de8\u5ea6 |\n| display-markers | boolean | -- | \u4e0e discrete \u4e00\u8d77\u4f7f\u7528\u663e\u793a\u6807\u8bb0 |\n| onChange | function | -- | \u9009\u62e9\u89e6\u53d1 |\n'}});
//# sourceMappingURL=9.819909ce.chunk.js.map