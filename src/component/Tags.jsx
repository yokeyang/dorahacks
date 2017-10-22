import Chip from 'material-ui/Chip'
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})

class Tags extends React.Component {
  state = {
  }

  styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.row}>
        {this.props.chipData.map(data => {
          return (
            <Chip
              label={data.label}
              key={data.key}
              onRequestDelete={this.props.handletagDelete(data)}
              className={classes.chip}
            />
          );
        })}
      </div>
    )
  }
}

Tags.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Tags)
