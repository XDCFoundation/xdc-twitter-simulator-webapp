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
   

    render() {
        return (
            <div>{this.state.value}</div>
        )
    }
}
