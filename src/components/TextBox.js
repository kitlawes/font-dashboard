import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import './TextBox.css'
import DeleteButton from './DeleteButton'

const TextBox = ({ text, dispatch, id, selected, fontFamily, tracking, leading, color, fontSize }) => {
  const styles = {
    fontFamily: `'${fontFamily}'`,
    fontSize: `${fontSize}px`,
    color: color,
    letterSpacing: tracking,
    lineHeight: leading
  }
  return (
    <div className='TextItem'>
      <textarea
        className='text'
        onFocus={() => {
          dispatch({
            type: 'SELECT_TEXTBOX',
            id: id
          })
        }}
        style={styles}
        defaultValue={text}
        rows='1'
      />
    { selected && <DeleteButton id={id} /> }
    </div>
  )
}

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  fontFamily: PropTypes.string.isRequired,
  tracking: PropTypes.number.isRequired,
  leading: PropTypes.number.isRequired
}

function mapStateToProps (state, ownProps) {
  const textBox = state.textBoxes.filter(el => {
    return (el.id === ownProps.id)
  })[0]
  return { ...textBox }
}

export default connect(mapStateToProps)(TextBox)
