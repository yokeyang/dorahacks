import React,{Component} from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import Dialog from 'material-ui/Dialog'
import ArrowBack from 'material-ui-icons/ArrowBack'
import Slide from 'material-ui/transitions/Slide'
import Divider from 'material-ui/Divider'

function Talk(props){
  const {classes} = props
  return(
    <div id = "talkbubble">
      你好，我是来自美国的华莱士
    </div>
  )
}
function Talkleft(props){
  return(
    <div id = "talkbubbleleft">
      你好，我是来自美国的华莱士
    </div>
  )
}

const styles = theme =>({
  message:{
    display:'flex',
    padding:theme.spacing.unit,
    paddingTop:'2rem'
  },
  avatarRight:{
    backgroundColor:'#FF5722',
    marginTop:'1rem'
  },
  avatarLeft:{
    backgroundColor:'#FF5722',
    marginTop:'1rem',
    marginLeft:'auto'
  },
  send:{
    display:'flex',
    justifyContent:'center',
    width:'100vw',
    position:'absolute',
    bottom:'0',
    backgroundColor:'white',
  }
})
class Chatting extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const {classes} = this.props
    return(
      <div style = {{height:'90vh',backgroundColor:'#EEEEEE',}}>
        <div className = {classes.message}>
          <Avatar className = {classes.avatarRight} />
          <Talk />
        </div>
        <div className = {classes.message}>
          <Talkleft />
          <Avatar className = {classes.avatarLeft} />
        </div>
        <div className = {classes.send}>
          <Input
            multiline
            rowsMax="4"
            style = {{alignItems:'flex-end',width:'70vw'}}
          />
        <Button style = {{paddingBottom:0}}>发送</Button>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(Chatting)
