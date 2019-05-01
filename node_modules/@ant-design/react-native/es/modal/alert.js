import React from 'react';
import Portal from '../portal';
import AlertContainer from './AlertContainer';
export default function a(title, content) {
    var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{ text: '确定' }];

    var key = Portal.add(React.createElement(AlertContainer, { title: title, content: content, actions: actions, onAnimationEnd: function onAnimationEnd(visible) {
            if (!visible) {
                Portal.remove(key);
            }
        } }));
}