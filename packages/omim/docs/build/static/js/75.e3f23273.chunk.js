webpackJsonp([75],{49:function(n,t){n.exports="## Dialog\n\nDialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.\n\n## Usage\n\n```html\n<m-dialog\n  show='true'\n  title='Omim'\n  cancel-button=\"{ text: 'Cancel' }\"\n  confirm-button=\"{ text: 'Discard' }\"\n>\n  <p>Discard draft?</p>\n</m-dialog>\n```\n\n## Usage in Omi\n\nJSX:\n\n```jsx\n<m-dialog\n  show={this.alertShow}\n  title='Omim'\n  message={<p>Discard draft?</p>}\n  cancel-button={{ text: 'Cancel' }}\n  confirm-button={{ text: 'Discard' }}\n/>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| show | boolean | -- | Whether to display a dialog box |\n| scrollable | boolean | -- | Displays upper and lower border lines when a scroll bar is present |\n| title | string | -- | Dialog title |\n| message | string/dom | -- | Dialog content |\n| cancel-button | object | -- | Dialog box cancels button content, supports all m-icon attribute |\n| confirm-button | object | -- | Dialog to confirm button content, supports all m-icon attribute |\n| onOpening | function | -- | Dialog opening trigger |\n| onOpened | function | -- | Dialog opened trigger |\n| onClosing | function | -- | Dialog closing trigger |\n| onClosed | function | -- | Dialog closed trigger |\n| onScrim | function | -- | Click the black transparent area around the dialog box to trigger |\n| onCancel | function | -- | Click the dialog cancel button to trigger |\n| onConfirm | function | -- | Click the dialog confirm button to trigger |\n"}});
//# sourceMappingURL=75.e3f23273.chunk.js.map