import React from 'react';
import Portal from '../portal';
import PromptContainer from './PromptContainer';
export default function prompt(title, message, callbackOrActions) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'default';
    var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var placeholders = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ['', ''];

    if (!callbackOrActions) {
        // tslint:disable-next-line:no-console
        console.error('Must specify callbackOrActions');
        return;
    }
    var key = Portal.add(React.createElement(PromptContainer, { title: title, message: message, actions: callbackOrActions, type: type, defaultValue: defaultValue, onAnimationEnd: function onAnimationEnd(visible) {
            if (!visible) {
                Portal.remove(key);
            }
        }, placeholders: placeholders }));
}