import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Box, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import user from "../assets/images/sweatDreams.png";
import send from "../assets/images/send.png";
import axios from "axios";

const socket = io.connect('https://api.hamyarwellness.com');

const useStyles = makeStyles({
    chat: {
        height: "calc(100vh - 420px)",
        overflow: "auto",
    },
    chatContainer: {
        display: "grid",
        alignItems: "flex-start",
        paddingTop: 15,
        boxSizing: "border-box"
    },
    messageBox: {
        display: "flex",
        alignItems: "center",
        padding: "5px 15px"
    },
    userImage: {
        height: 62,
        width: 62,
        borderRadius: "50%",
        margin: "0 15px",
        boxShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px 0px #ffffffd1",
    },
    messageContainer: {
        padding: 5,
        borderRadius: 5,
        height: 35,
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        position: "fixed",
        bottom: 66,
        width: "100%",
        backgroundColor: "#d5e1ed",
        height: 70,
        alignItems: "center",
        display: 'flex',
        justifyContent: 'center',
    },
    chatInput: {
        width: "calc(100% - 70px)",
        border: "none",
        borderRadius: 15,
        height: 50,
        margin: "0 5px",
        backgroundColor: "#dde7f3",
        outline: 0,
    },
    sendButton: {
        padding: "11px 7px 9px 12px",
        backgroundColor: "#08afe4",
        borderRadius: 15,
        marginRight: 5
    }
});


const Chat = () => {
    const [state, setState] = useState({ message: "", name: "" });
    const classes = useStyles();
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([
        { type: "recieved", message: "سلام", },
    ]);
    useEffect(() => {
        axios.get(`https://api.hamyarwellness.com/api/v1/messages/${localStorage.getItem('userid')}`)
            .then(res => {
                res.data.data.forEach(element => {
                    let type;
                    if (element.user === localStorage.getItem('userid')) {
                        type = 'sent'
                    } else {
                        type = 'recieved'
                    }
                    console.log(element)
                    setMessages(messages => [...messages, { type: type, message: element.message }]) 
                });
                
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 401) {
                }
            })
    }, [])
    const handleMessageWrite = e => {
        setMessageInput(e.target.value)
    }

    const sendMessage = () => {
        socket.emit('chatMessage', { message: messageInput, user: localStorage.getItem('userid') });
        setMessageInput("");
        const messageListener = message => {
            console.log(message);
            let type;
            if (message.user === localStorage.getItem('userid')) {
                type = 'sent'
            } else {
                type = 'recieved'
            }
            setMessages(messages => [...messages, { type: type, message: message.message }])
        }
        socket.once('message', messageListener);

    };


    return (
        <Box className={classes.chat}>
            <Box className={classes.chatContainer}>
                {messages.map(item => {
                    return (
                        <Box className={classes.messageBox}
                            style={{
                                flexDirection: (item.type === "recieved") ? "row" : "row-reverse",
                            }}
                        >
                            <img className={classes.userImage} src={user} alt="user" />
                            <Box className={classes.messageContainer}
                                style={{
                                    background: (item.type === "recieved") ? "#d7e1ed" : "#08afe4",
                                    color: (item.type === "recieved") ? "#7786a3" : "#dbe9f4",
                                }}
                            >{item.message}</Box>
                        </Box>
                    )
                })}
            </Box>
            <Box className={classes.input}>
                <ButtonBase className={classes.sendButton} onClick={sendMessage}>
                    <img style={{ width: 32 }} src={send} alt="ارسال" />
                </ButtonBase>
                <input
                    className={classes.chatInput}
                    type="text"
                    id="message"
                    name="message"
                    value={messageInput}
                    placeholder="پیام خور را وارد کنید"
                    onChange={handleMessageWrite}
                />
            </Box>
        </Box>
    )
}

export default Chat;
