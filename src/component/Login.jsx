import React,{Component} from 'react'
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import {BrowserRouter as Route,Link} from 'react-router-dom';

const styles = theme =>({
  back: {
    backgroundImage:'url(http://bpic.588ku.com/back_pic/03/99/45/0057f8fd82d2cac.jpg!/fw/260/quality/90/unsharp/true/compress/true)',
    height:'100vh',
    marginTop:-theme.spacing.unit
  },
  TextField: {
    margin: theme.spacing.unit,
  },
  contains:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-end',
    margin:theme.spacing.unit,
    height:'50vh'
  },
  login:{
    display:'flex',
    flexDirection:'column',
    textAlign:'center'
  },
  Tel:{
    display:'flex',
    flexDirection:'row'
  },
  TextField:{
    margin:theme.spacing.unit
  },
  confirm:{
    width:'100%'
  },
  link:{
    margin:theme.spacing.unit,
  }
})

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    const { classes } = this.props;
    return(
      <div className = {classes.back}>
        <div className = {classes.contains}>
          <TextField
            id = "tel"
            label = "电话"
            placeholder = "130xxxx8963"
            className = {classes.TextField}
            />
          <div className = {classes.Tel}>
            <TextField
              id = "veri"
              label = "验证码"
              className = {classes.veri,classes.TextField}
              />
            <Button className = {classes.getVeri}>获取验证码</Button>
          </div>
          <Link className = {classes.link} to = "/user">
            <Button raised color="primary" className = {classes.confirm}>
              确定
            </Button>
          </Link>
        </div>
        <div className = {classes.login}>
          <span>or</span>
          <a href = "#">已有账户，登陆</a>
        </div>
        <div className = {classes.trdLogin}>

        </div>
      </div>
    )
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
