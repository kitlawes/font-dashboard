import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const AddButton = ({ dispatch, solo, index }) => (
  <div className={'AddContainer' + (solo ? ' solo' : '')}>
    <button
      className='AddButton'
      onClick={() => {
        dispatch({
          type: 'ADD_TEXTBOX',
          index: index
        })
      }}>
      +
    </button>
    <div className='AddBackground'></div>
  </div>
)

AddButton.propTypes = {
  index: PropTypes.number.isRequired
}

export default connect()(AddButton)
