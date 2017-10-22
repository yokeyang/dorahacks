import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Tags from './Tags'
import Room from 'material-ui-icons/Room';
import Favorite from 'material-ui-icons/Favorite';


const styles = theme => ({
  avatar:{
    backgroundColor:'pink',
    width:'5rem',
    height:'5rem',
    borderRadius:'0',
  },
  cards:{
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  buttons:{
    display:'flex',
    flexWrap:'wrap'
  },
  tagSpan:{
    minWidth: '2rem',
    margin: '0.2rem',
    padding: '0.1rem'
  },
  left:{
    width:'50%',
    margin:0
  },
  right:{
    width:'50%',
    margin:0
  },
  card: {
    width:window.screen.width - theme.spacing.unit,
    margin:theme.spacing.unit,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  Contents:{
    display:'flex',
    flexDirection:'row',
    paddingBottom:0
  },
  Actions:{
    paddingTop:0,
    flexDirection:'row'
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
    fontSize:'1.2rem'
  },
});

class Users extends Component {
  render(){
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    const Color = [
      '#EF5350','#3F51B5','#2196F3','#4CAF50','#FF5722'
    ]
    return (
      <div className = {classes.cards}>
        {this.props.UserInfo.map((item) => {
          return(
            <Card className={classes.card} key = {item.tags[0]}>
              <CardContent className = {classes.Contents}>
                <div className = {classes.left}>
                  <Typography type="headline" component="h2">
                    <Avatar alt="Remy Sharp" className = {classes.avatar} />
                    <Typography type="body1" className={classes.pos}>
                      {item.username}
                    </Typography>
                  </Typography>
                </div>
                <div className = {classes.right}>
                  <Typography component="p" className = {classes.buttons}>
                    {item.tags.map((i) => {
                      return(
                        <Button className = {classes.tagSpan} key = {i}>{i}</Button>
                      )
                    })}
                  </Typography>
                </div>
              </CardContent>
              <CardActions className = {classes.Actions}>
                <Button dense><Room />{item.location}</Button>
                <Button dense style = {{marginLeft:'auto'}}><Favorite style = {{color:'red'}} />{item.rank}</Button>
              </CardActions>
            </Card>
          )
        })}
      </div>
    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);
