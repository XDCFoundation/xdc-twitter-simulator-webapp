import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket"
const client = new W3CWebSocket("wss://stats1.apothem.network/primus/?_primuscb=1642861667080-0")
export default class WebSocketCountNode extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }
    componentDidMount() {
        this.getValue()
    }
    getValue = () => {
        let test = {}
        client.onopen = () => {
            console.log("connect")
        }
        client.onmessage = async (event)=> {
            var msg = JSON.parse(event.data)
            if (msg.action === 'stats') {
                if (msg.data.id in test) {
                    return
                } else {
                    test[msg.data.id] = msg.data.stats.active
                    await this.setState({ value: Object.keys(test).length })
                }
            }
        }
        client.onclose = async (event) => {
            if (event.wasClean) {
                console.log(`Number of Active Nodes = ${Object.keys(test).length}`)
                // await this.setState({ value: Object.keys(test).length })
            } else {
                console.log('[close] Connection died')
            }
        }
    }

    render() {
        return (
            <div>{this.state.value}</div>
        )
    }
}
