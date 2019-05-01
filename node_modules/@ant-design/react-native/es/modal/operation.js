import React from 'react';
import Portal from '../portal';
import OperationContainer from './OperationContainer';
export default function a() {
    var actions = (arguments.length <= 0 ? undefined : arguments[0]) || [{ text: '确定' }];
    var key = Portal.add(React.createElement(OperationContainer, { actions: actions, onAnimationEnd: function onAnimationEnd(visible) {
            if (!visible) {
                Portal.remove(key);
            }
        } }));
}