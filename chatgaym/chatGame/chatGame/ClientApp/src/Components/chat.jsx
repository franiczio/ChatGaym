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
//    this.fetchProducts = this.fetchProducts.bind(this);
  }

//    fetchProducts() {
//        fetch('https://localhost:44320/api/SignIn').then((response) => response.json())
//            .then((responseJSON) => {
//                this.props.onUpdateChat(responseJSON, this.props.chatId);
//            });
//    }

    async  useAxios() {
        const axios = require('axios');



        let res = await axios.post('https://localhost:44320/api/SignIn').then(resp => {
            console.log(resp);
        });
    }

    async getListOfMessagesFromServer() {
        const axios = require('axios');
        let res = await axios.get('https://localhost:44320/api/SignIn/sendData').then(
            (resp) => { this.props.onUpdateChat(resp.data, this.props.chatId); });
        this.forceUpdate();
    }


    forceUpdateHandler() {
    this.forceUpdate();
    console.log("forsłem");
  }

  onUpdateChat(event) {
    if (event.key === "Enter") {
      this.props.onUpdateChat(event.target.value, this.props.chatId);
        event.target.value = "";
      this.forceUpdate();
      }
      if (event.key === "a") {
          console.log("klikłem spacje");
          this.getListOfMessagesFromServer();
          this.forceUpdate();

      }
  }
  functionToTryEvents() {
     // console.log("Now its working");
      console.log("da");
    }
  

    componentDidMount() {
        setInterval(this.useAxios
            , 5000);
        console.log("DU...");

      //const a = this.fetchProducts();
      //console.log(a);
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
          <textarea type="text" onKeyDown={this.onUpdateChat} /> //return chat content with onUpdateChat method.
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

