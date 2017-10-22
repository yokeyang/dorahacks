import React,{Component} from 'react'
import UserSetting from './component/UserSetting'
import Users from './component/Users'
import Chat from './component/Chat'
import Security from './component/Security'
import $ from 'jquery'
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Home from 'material-ui-icons/Home';
import ChatBubble from 'material-ui-icons/ChatBubble';
import PersonPinIcon from 'material-ui-icons/PersonPin';


class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[
        {"username":"Yoke","tags":["鹿晗","关晓彤","袁隆平","阿森纳","曼联"],"id":2,"rank":5,"location":10.5},
        {"username":"yoke","tags":["读书","健身","OPPO","科比","nice"],"id":2,"rank":5,"location":10.5}]
    }
  }
  state = {
    value: 0,
    SecurityOpen:false,
    barOpen:false,
    index:0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentWillMount(){
    $.ajax({
      url: '/IndexCardAPIView',
      type: 'GET',
      dataType: 'json',
    })
    .done((e)=> {
      this.setState({data:e.cards})
    })
  }
  handleSecurityOpen = () =>{
    this.setState({ SecurityOpen: true})
  }
  handleSecurityClose = () =>{
    this.setState({ SecurityOpen: false})
  }
  handleClickOpen = () => {
    this.setState({ barOpen: true });
  }

  handleChatOpen = () => {
    this.setState({ index: 1 });
  }

  handleRequestClose = () => {
    this.setState({ barOpen: false });
  }
  handleChatClose = () =>{
    this.setState({ index: 0 });
  }
  render(){
    return(
      <div>
        <UserSetting />
        <Users UserInfo = {this.state.data} />
        <Chat index = {this.state.index} barOpen = {this.state.barOpen} chatList = {this.state.data} handleChatOpen ={this.handleChatOpen} handleChatClose = {this.handleChatClose} handleRequestClose = {this.handleRequestClose}  />
          <Paper style={{backgroundColor:'#0CBCB3', width:'100%',position:'fixed',bottom:'0'}}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              indicatorColor="accent"
              textColor="accent"
            >
              <Tab style = {{color:'white'}} icon={<Home />} label="主页" />
              <Tab onClick = {this.handleClickOpen} style = {{color:'white'}} icon={<ChatBubble />} label="聊天" />
              <Tab onClick = {this.handleSecurityOpen} style = {{color:'white'}} icon={<PersonPinIcon />} label="安全" />
            </Tabs>
            <Security handleSecurityClose = {this.handleSecurityClose} SecurityOpen = {this.state.SecurityOpen} />
          </Paper>
      </div>
    )
  }
}
export default HomePage
