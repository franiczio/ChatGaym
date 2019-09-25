import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import * as chatActions from "../Actions/chatActions";
import axios from 'axios';
const MAIN_CHAT = 0;
class Chat extends Component {
  constructor(props) {
    super(props);
    this.onUpdateChat = this.onUpdateChat.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.sendMessageToDB = this.sendMessageToDB.bind(this);
      this.getListOfMessagesFromServer = this.getListOfMessagesFromServer.bind(this);
  }

    async  useAxios() {
        const axios = require('axios');
        let res = await axios.post('https://localhost:44320/api/SignIn').then(resp => {
            console.log(resp);
        });
    }

     async getListOfMessagesFromServer() {
        const axios = require('axios');
         let res = await axios.post('https://localhost:44320/api/SignIn/sendData', this.props.chat[this.props.chatId].lastMessage).then(
            (resp) => {
                console.log(this.props.chat[this.props.chatId].lastMessage);
                let dbLength = resp.data.length - 1;
                this.props.onUpdateChat(resp.data, this.props.chatId);
                this.forceUpdateHandler();
            });
    }

    async sendMessageToDB(message) {
        const axios = require('axios');
        let messageTime = Date.now();
        let chatId = this.props.chatId;
        var body = {}
        body["content"] = message;
        body["time"] = messageTime;
        body["id"] = chatId;
        console.log(body);
        let res = await axios.post('https://localhost:44320/api/SignIn/getData', JSON.stringify(body));
    }

    forceUpdateHandler() {
    this.forceUpdate();
  }

  onUpdateChat(event) {
    if (event.key === "Enter") {
        this.sendMessageToDB(event.target.value);
        this.getListOfMessagesFromServer();
        event.target.value = "";
        this.forceUpdate();
      }
    }

  functionToTryEvents() {
    }
  

    componentDidMount() {
        setInterval(this.getListOfMessagesFromServer
            , 500);
    }

  render() {
    return (
      <Fragment>
        <h3>CHAT</h3>
        <div>
          {this.props.chat[this.props.chatId].chat.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <form>
          <textarea type="text" onKeyDown={this.onUpdateChat} /> 
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  onUpdateChat: chatActions.updateChat
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Chat);

