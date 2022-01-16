import { browser } from 'webextension-polyfill-ts';
import socket from 'src/Background/index';

const serverURL = 'https://revisionsocketserver.herokuapp.com/';
// const socket: Socket = io(serverURL);

function joinRoom(id: string) {
    // socket.emit('join', id);
    browser.runtime.sendMessage({ event: 'joinRoom', value: id });
}

function leaveRoom(id: string) {
    // socket.emit('leave', id);
    browser.runtime.sendMessage({ event: 'leaveRoom', value: id });
}

async function getRoom() {
    const request = browser.runtime
        .sendMessage({ event: 'getRoomId' })
        .then(res => res);
    return request;
}

async function generateRoom() {
    const id = Math.floor(Math.random() * 899999 + 100000).toString();
    browser.runtime.sendMessage({ event: 'setRoomId', value: id });
    joinRoom(await getRoom());
    return id;
}

async function getContent() {
    const request = browser.runtime
        .sendMessage({ event: 'getContent' })
        .then(res => res);
    return request;
}

async function setContent(content: string) {
    const request = await browser.runtime.sendMessage({
        event: 'setContent',
        value: content,
    });
    return request;
}

async function setupRoom() {
    if (await getRoom()) {
        const roomId = await getRoom();
        joinRoom(roomId.res.toString());
    } else {
        generateRoom();
    }
}
setupRoom();

browser.runtime.onMessage.addListener(async req => {
    const { event, value } = req;
    if (event === 'text') {
        console.log({ event, value });
        setContent(await value.res);
    }
});

// socket.on('text', async content => {
//     console.log(`script${content}`);
//     await setContent(content);
// });

export { joinRoom, leaveRoom, getRoom, getContent, generateRoom };
