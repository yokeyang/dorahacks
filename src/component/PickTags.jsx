import Chip from 'material-ui/Chip'
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import SwipeableViews from 'react-swipeable-views'
import Card, { CardActions, CardContent } from 'material-ui/Card'

class PickTags extends React.Component{
  render(){
    return(
      <SwipeableViews>
        <div>
          <Card />
          <Chip label = "hello"></Chip>
        </div>
        <div>
          <Card />
          <Chip label = "hello"></Chip>
        </div>
        <div>
          <Card />
          <Chip label = "hello"></Chip>
        </div>
      </SwipeableViews>
    )
  }
}
export default PickTags
