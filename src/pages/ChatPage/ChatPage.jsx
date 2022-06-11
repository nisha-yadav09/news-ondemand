import {TextField} from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import "./ChatPage.css"

export default function ChatPage({ user, setUser }) {
	console.log(user.name);
	const [ state, setState ] = useState({ message: "", name: user.name })
	const [ chat, setChat ] = useState([])
    let url = `${window.location.origin.toString()}`

	const socketRef = useRef()

	useEffect(
		() => {
			socketRef.current = io.connect(url)
            console.log(url)
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socketRef.current.disconnect()
		},
		[ chat ]
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h5 style={{color:'black'}}>
					{name}: <span>{message}</span>
				</h5>
			</div>
		))
	}

	return (
		<div className="card-chat">
			<div className="render-chat" style={{overflowY: 'auto', maxHeight:'300px'}} >
				{renderChat()}
			</div>
			<div >
			<form onSubmit={onMessageSubmit}>
					<TextField
						name="message"
						onChange={(e) => onTextChange(e)}
						value={state.message}
						id="outlined-multiline-static"
						variant="outlined"
						label="Message"
						style={{width:'200px', borderColor:'black'}}
					/>
				<button className="chat">Send</button>
			</form>
			</div>
			
		</div>
	)
}