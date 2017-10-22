import React,{Component} from 'react'
import SwipeableViews from 'react-swipeable-views'
import QuestionAnswer from 'material-ui-icons/QuestionAnswer'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'
import Dialog from 'material-ui/Dialog'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import CloseIcon from 'material-ui-icons/Close'
import ArrowBack from 'material-ui-icons/ArrowBack'
import Slide from 'material-ui/transitions/Slide'
import Chatting from './Chatting'

const styles = theme =>({
  ChatButton:{
    position:'fixed',
    bottom:'1rem',
    right:'1rem',
    backgroundColor:'#F44336'
  },
  appBar: {
    position: 'relative',
    background: 'linear-gradient(45deg, #00E9E6 30%, #98FFEF 90%)',
  },
  flex: {
    flex: 1,
  },
})
class Chat extends Component {
  state = {
    barOpen: false,
    chatOpen:false,
    index:0,
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
    const { classes } = this.props
    return(
      <div>
        <Dialog
          fullScreen
          open={this.props.barOpen}
          onRequestClose={this.props.handleRequestClose}
          transition={<Slide direction="up" />}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              {this.props.index?
                <IconButton color="contrast" onClick={this.props.handleChatClose} aria-label="Close">
                  <ArrowBack />
                </IconButton>
                :<IconButton color="contrast" onClick={this.props.handleRequestClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
              }
              <Typography type="title" color="inherit" className={classes.flex}>
                聊天
              </Typography>
            </Toolbar>
          </AppBar>
          <SwipeableViews
            index = {this.props.index}
          >
            <List>
              <ListItem button onClick = {this.props.handleChatOpen}>
                <ListItemText primary="港记" secondary="会不会给人钦定的感觉" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="华莱士" secondary="我是最高的" />
              </ListItem>
              {this.props.chatList.map((item) => {
                <div>
                  <ListItem button>
                    <ListItemText primary={item.username} secondary="我是最高的" />
                  </ListItem>
                  <Divider />
                </div>
              })}
            </List>
            <Chatting />
          </SwipeableViews>
        </Dialog>
      </div>
    )
  }
}
Chat.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Chat)
