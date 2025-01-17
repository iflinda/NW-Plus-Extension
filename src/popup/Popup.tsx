/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import io, { Socket } from 'socket.io-client';
import { browser } from 'webextension-polyfill-ts';
import {
    joinRoom,
    leaveRoom,
    getRoom,
    generateRoom,
    getContent,
} from '../ContentScript/index';
// import { browser, Tabs } from 'webextension-polyfill-ts';

class Popup extends Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            roomId: '',
            content: '',
        };
        this.displayContent(this.state.content);
    }

    async componentDidMount() {
        console.log('etst');
        const room = await getRoom();
        this.setState({ roomId: await room.res });
        console.log(this.state.roomId);
        joinRoom(this.state.roomId);

        const content = await getContent();
        console.log(await content);
        this.setState({ content: await content.res });
        this.displayContent(this.state.content);
    }

    componentDidUpdate(
        prevProps: any,
        prevState: { roomId: string; content: string },
    ) {
        if (prevState.roomId !== this.state.roomId) {
            leaveRoom(prevState.roomId);
            joinRoom(this.state.roomId);
        }
    }

    generateRoomId(): void {
        const id = generateRoom();
        this.setState({ roomId: id });
    }

    delete = () => {
        this.setState({ content: '' });
    };

    displayContent(content: string) {
        this.setState({ content });
    }

    copy = () => {
        if (this.state.content.length !== 0) {
            navigator.clipboard.writeText(this.state.content);
        } else if (this.state.content.length === 0) {
            navigator.clipboard.writeText('');
        }
    };

    render() {
        return (
            <div className="container flex flex-col text-center">
                <div className="w-full flex flex-row bg-background font-h1 text-xl text-white px-3 pt-3 pb-2 justify-center">
                    <svg
                        width="34"
                        height="26"
                        viewBox="0 0 34 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 12.9091C2 12.9091 7.45455 2 17 2C26.5455 2 32 12.9091 32 12.9091C32 12.9091 26.5455 23.8182 17 23.8182C7.45455 23.8182 2 12.9091 2 12.9091Z"
                            stroke="white"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M17 17C19.2593 17 21.0909 15.1684 21.0909 12.9091C21.0909 10.6497 19.2593 8.81818 17 8.81818C14.7406 8.81818 12.9091 10.6497 12.9091 12.9091C12.9091 15.1684 14.7406 17 17 17Z"
                            stroke="white"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <h1 className="pl-1">reVision</h1>
                </div>
                <div>
                    <div className="flex flex-row justify-center items-center pt-5">
                        <div
                            id="generate"
                            className="h-full bg-generateBackground w-generateWidth text-lg font-p text-white rounded-l-lg"
                        >
                            Sync ID
                        </div>
                        <p className="bg-textBoxBackground w-keyWidth px-5 font-p text-lg rounded-r-lg">
                            {localStorage.getItem('roomId')}
                        </p>
                    </div>
                    <form className="p-5 font-p">
                        <textarea
                            id="copyText"
                            className="p-1 rounded-lg text-base w-textBoxWidth h-textBoxHeight bg-textBoxBackground outline-none focus:border-0 active:border-0"
                            name="copyText"
                            placeholder="Generate a key and take a screenshot of your notes to Astart using Study Mate."
                            value={this.state.content}
                        ></textarea>
                        <div className="p-3 flex flex-row justify-between">
                            <button
                                id="delete"
                                className="w-buttonWidth h-buttonHeight rounded font-bold hover:bg-red-200"
                                type="button"
                                onClick={() => this.delete()}
                            >
                                <p>Delete</p>
                                <svg
                                    className="mx-auto"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.8 3.8H7.6C7.71 3.8 7.8 3.71 7.8 3.6V3.8H15.4V3.6C15.4 3.71 15.49 3.8 15.6 3.8H15.4V5.6H17.2V3.6C17.2 2.7175 16.4825 2 15.6 2H7.6C6.7175 2 6 2.7175 6 3.6V5.6H7.8V3.8ZM20.4 5.6H2.8C2.3575 5.6 2 5.9575 2 6.4V7.2C2 7.31 2.09 7.4 2.2 7.4H3.71L4.3275 20.475C4.3675 21.3275 5.0725 22 5.925 22H17.275C18.13 22 18.8325 21.33 18.8725 20.475L19.49 7.4H21C21.11 7.4 21.2 7.31 21.2 7.2V6.4C21.2 5.9575 20.8425 5.6 20.4 5.6ZM17.0825 20.2H6.1175L5.5125 7.4H17.6875L17.0825 20.2Z"
                                        fill="#494949"
                                    />
                                </svg>
                            </button>
                            <button
                                id="copy"
                                className="w-buttonWidth h-buttonHeight rounded"
                                type="button"
                                onClick={() => this.copy()}
                            >
                                <p className="font-bold">Copy</p>
                                <svg
                                    className="mx-auto"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V4Z"
                                        stroke="#494949"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8"
                                        stroke="#494949"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <button
                            className="text-gray-500 hover:underline"
                            onClick={() => this.generateRoomId()}
                        >
                            Generate new sync id
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Popup;
