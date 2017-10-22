import React,{Component} from 'react'
import SwipeableViews from 'react-swipeable-views'
import Add from 'material-ui-icons/Add'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import CloseIcon from 'material-ui-icons/Close'
import Slide from 'material-ui/transitions/Slide'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

const styles = theme =>({
  ChatButton:{
    position:'absolute',
    bottom:'1rem',
    right:'1rem',
    zIndex:'999'
  },
  appBar: {
    position: 'relative',
    background: 'linear-gradient(45deg, #00E9E6 30%, #98FFEF 90%)',
  },
  flex: {
    flex: 1,
  },
})
class Security extends Component {
  state = {
    barOpen: false,
    addOpen:false,
    lists:[
      {name:'港记',tel:'130xxxx8963'},
      {name:'华莱士',tel:'130xxxx8963'}
    ]
  }

  handleClickOpen = () => {
    this.setState({ barOpen: true });
  }

  handleRequestClose = () => {
    this.setState({ barOpen: false });
  }
  handleAddOpen = () => {
    this.setState({ addOpen: true });
  }

  handleAddClose = () => {
    this.setState({ addOpen: false });
  }

  handleAdd = (e) =>{
    var lists = this.state.lists
    var name = this.name.value
    var tel = this.tel.value
    lists.push({name:name,tel:tel})
    this.setState({ lists })
    this.setState({ addOpen: false });
  }
  componentDidMount(){
  }
  render(){
    const { classes } = this.props
    return(
      <div>
          <Dialog
            fullScreen
            open={this.props.SecurityOpen}
            onRequestClose={this.props.handleSecurityClose}
            transition={<Slide direction="down" />}
            >
            <SwipeableViews>
              <div>
                <IconButton className = {classes.ChatButton} onClick = {this.handleAddOpen}>
                  <Add style = {{color:'#F44336',fontSize:'2rem'}} />
                </IconButton>
                <AppBar className={classes.appBar}>
                  <Toolbar>
                    <IconButton color="contrast" onClick={this.props.handleSecurityClose} aria-label="Close">
                      <CloseIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                      安全设置
                    </Typography>
                  </Toolbar>
                </AppBar>
                <List>
                  {this.state.lists.map((item) => {
                    return(
                      <div>
                        <ListItem>
                          <ListItemText primary={item.name} secondary={item.tel} />
                        </ListItem>
                        <Divider />
                      </div>
                    )
                  })}
                </List>
              </div>
              <div id = 'container'>
              </div>
          </SwipeableViews>
        </Dialog>
        <Dialog open={this.state.addOpen} onRequestClose={this.handleAddClose}>
          <DialogTitle>添加紧急联系人</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="紧急联系人姓名"
              fullWidth
              inputRef = {ref =>this.name = ref}
            />
            <TextField
              margin="dense"
              id="name"
              label="联系人电话"
              type="tel"
              fullWidth
              inputRef = {ref =>this.tel = ref}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleAddClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAdd} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
Security.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Security)
