export const addTextBox = (text) => ({
  type: 'ADD_TEXTBOX',
  id: 0,
  index: 0,
  color: "#fff",
  fontFamily: 'sans-serif',
  text
})

export const selectTextBox = (id) => ({
  type: 'SELECT_TEXTBOX',
  id
})

export const deleteTextBox = () => ({
  type: 'DELETE_TEXTBOX'
})

export const updateText = (value) => ({
  type: 'UPDATE_TEXT',
  value
})

export const updateFontSize = (value) => ({
  type: 'UPDATE_FONT_SIZE',
  value
})

export const updateFontTracking = (value) => ({
  type: 'UPDATE_FONT_TRACKING',
  value
})

export const updateFontLeading = (value) => ({
  type: 'UPDATE_FONT_LEADING',
  value
})

export const updateFontFamily = (value) => ({
  type: 'UPDATE_FONT_FAMILY',
  value
})

export const updateColumns = (value) => ({
  type: 'UPDATE_COLUMNS',
  value
})

export const updateColor = (value) => ({
  type: 'UPDATE_COLOR',
  value
})

export const updateAlignment = (value) => ({
  type: 'UPDATE_ALIGNMENT',
  value
})

export const updatePagePadding = (value, direction) => ({
  type: 'UPDATE_PAGE_PADDING',
  value,
  direction
})

export const updatePageWidth = (value) => ({
  type: 'UPDATE_PAGE_WIDTH',
  value
})
