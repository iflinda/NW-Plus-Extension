/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
/* eslint-disable @typescript-eslint/no-explicit-any */
import io, { Socket } from 'socket.io-client';
import { browser } from 'webextension-polyfill-ts';

// Listen for messages sent from other parts of the extension
browser.runtime.onMessage.addListener((request: { popupMounted: boolean }) => {
    // Log statement if request.popupMounted is true
    // NOTE: this request is sent in `popup/component.tsx`
    if (request.popupMounted) {
        console.log('backgroundPage notified that Popup.tsx has mounted.');
    }
});

const serverURL = 'https://revisionsocketserver.herokuapp.com/';
const socket: Socket = io(serverURL);

socket.on('text', async content => {
    try {
        console.log(`${content}`);
        localStorage.setItem('content', content);
        await browser.runtime.sendMessage({
            event: 'text',
            value: content,
        });
    } catch (error) {
        console.log(error);
    }
});

browser.runtime.onMessage.addListener(async (req: any) => {
    const { event, value } = req;
    if (event === 'setRoomId') {
        localStorage.setItem('roomId', value);
        return Promise.resolve({ res: value });
    }
    if (event === 'getRoomId') {
        return Promise.resolve({ res: localStorage.getItem('roomId') });
    }
    if (event === 'getContent') {
        return Promise.resolve({ res: localStorage.getItem('content') });
    }
    if (event === 'setContent') {
        localStorage.setItem('content', value);
        return Promise.resolve({ res: value });
    }

    if (event === 'joinRoom') {
        socket.emit('join', value);
        return Promise.resolve({ res: value });
    }

    if (event === 'leaveRoom') {
        socket.emit('leave', value);
        return Promise.resolve({ res: value });
    }

    return false;
});

export default { socket };
