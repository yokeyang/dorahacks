import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { withStyles,createMuiTheme,MuiThemeProvider } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List,{ListItemText,ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import FaWeibo from 'react-icons/lib/fa/weibo';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Explore from 'material-ui-icons/Explore';
import Info from 'material-ui-icons/Info';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Add from 'material-ui-icons/Add';
import History from 'material-ui-icons/History';
import Avatar from 'material-ui/Avatar'
import TextField from 'material-ui/TextField'
import Tags from './Tags'
import Security from './Security'
import $ from 'jquery'
const drawerWidth = 200
const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  textField:{
    width:'60vw'
  },
  addTags:{
    display:'flex',
    justifyContent:'center',
  },
  Tags:{
    marginTop:'2rem',
    height:'20vh'
  },
  button_outer:{
    marginRight:'auto',
    marginLeft:'1rem',
    alignSelf:'flex-end',
    color:'white',
    fontSize:'0.8rem'
  },
  button_avatar:{
    textDecoration:'none',
    textTransform: 'capitalize',
    padding:'0',
    minWidth:'auto',
    borderRadius:'100%',
    marginBottom:'1rem'
  },
  avatar:{
    color: '#fff',
    background:'#673AB7',
    width:'3rem',
    height:'3rem',
  },
  appBar:{
    display:'flex',
    flexDirection:'row'
  },
  listButton:{
    textDecoration:'none',
    color:'#9E9E9E',
    '&:hover':{
      color:'#29B6F6'
    }
  },
  menuButton: {
    color:'black',
    height:'auto'
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    width:'12vw',
    minWidth:'80vw',
    width: drawerWidth,
    height:'100vh',
    overflowX:'hidden'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    height:'25vh',
    backgroundImage:`url(./yellow.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    width: '100%',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
  Unders:{
    position:'absolute',
    bottom:'0.5rem',
    width:'100%'
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});
class UserSetting extends Component {
  constructor(props){
    super(props);
    this.state = {
      barOpen:false,
      SecurityOpen:false,
      weiboOpen:false,
      chipData:[
        { key: 0, label: 'Angular' },
        { key: 1, label: 'JQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'ReactJS' },
        { key: 4, label: 'Vue.js' },
      ]
    }
  }
  componentDidMount(){
  }
  postTags = (data) =>{
    $.ajax({
      url: '/SetTagAPIView',
      type: 'GET',
      dataType: 'json',
      data: {tags: data}
    })
    .done(function() {
      console.log("success");
    })
  }
  handleWeiboOpen = () => {
    this.setState({ weiboOpen: true });
  };

  handleWeiboClose = () => {
    this.setState({ weiboOpen: false });
  };
  handleWeibo = () =>{
    $.ajax({
      url: '/SetWeiboName',
      type: 'GET',
      dataType: 'json',
      data: {name: this.weibo.value}
    })
    this.setState({ weiboOpen: false });
  }
  handleDrawerOpen = () => {
    this.setState({ barOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ barOpen: false });
  };

  handleSecurityOpen = () =>{
    this.setState({ SecurityOpen: true})
  }
  handleSecurityClose = () =>{
    this.setState({ SecurityOpen: false})
  }
  handletagAdd = data => () =>{
    var chipData = [...this.state.chipData];
    if(this.tag.value !== ''){
      if(-chipData.findIndex((value) => {return value.label === this.tag.value})){
        chipData.push({key:chipData.length+1,label:this.tag.value})
        this.postTags({key:chipData.length+1,label:this.tag.value})
        this.setState({ chipData })
        this.tag.value = ''
      }
    }
  }
  handletagDelete = data => () => {
    const chipData = [...this.state.chipData];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    this.setState({ chipData });
  };
  render(){
    const { classes } = this.props
    return(
    <div className={classes.appFrame}>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        open={this.state.barOpen}
        onRequestClose={this.handleDrawerClose}
        >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <div className = {classes.button_outer}>
              <Button className = {classes.button_avatar}>
                <Avatar className = {classes.avatar}>{this.props.user}</Avatar>
              </Button>
            </div>
            <IconButton onClick={this.handleDrawerClose} style = {{alignSelf:'flex-start'}}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className = {classes.Tags}>
            <Tags chipData = {this.state.chipData} handletagDelete = {this.handletagDelete} />
          </div>
          <div className = {classes.addTags}>
            <TextField
              id="addTags"
              label="添加标签"
              className={classes.textField}
              margin="normal"
              inputRef = {ref => { this.tag = ref}}
            />
          <IconButton style = {{height:'auto'}} onClick = {this.handletagAdd()}><Add /></IconButton>
          </div>
          <Security handleSecurityClose = {this.handleSecurityClose} SecurityOpen = {this.state.SecurityOpen} />
          <div className = {classes.Unders}>
            <Button onClick = {this.handleSecurityOpen}>设置</Button>
            <IconButton onClick = {this.handleWeiboOpen} style = {{position:'fixed',right:'0.5rem',bottom:'0'}}><FaWeibo /></IconButton>
          </div>
        </div>
      </Drawer>
      <AppBar position="static" color="default" className = {classNames(classes.appBar)}>
        <IconButton
          color="contrast"
          aria-label="open drawer"
          onClick={this.handleDrawerOpen}
          className={classNames(classes.menuButton, this.state.barOpen && classes.hide)}
          >
          <MenuIcon />
        </IconButton>
        <Toolbar>
          <Typography type="title" color="inherit">
            See U
          </Typography>
        </Toolbar>
      </AppBar>
      <Dialog open={this.state.weiboOpen} onRequestClose={this.handleWeiboClose}>
        <DialogTitle>微博账户</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="您的微博账户"
            fullWidth
            inputRef = {ref =>this.weibo = ref}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleWeiboClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleWeibo} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
  }
}

export default withStyles(styles)(UserSetting);
