import React, { useEffect } from 'react'
import { createUndefinedPropError } from './ErrorHandler/Error'

const BtnStack = (props) => {
  const {
    border,
    height,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    width = 'auto',
    display = 'flex',
    direction = 'row',
    align = 'center',
    justifyContent,
    gridColumns,
    gridRows,
    placeContent,
    whiteSpace,
    wrap,
    overflow,
    shadow,
  } = props

  useEffect(() => {
    createUndefinedPropError(props.children)
  }, [props])
  return (
    <div
      className='btn-stack--main'
      style={{
        height: height,
        minHeight: minHeight,
        maxHeight: maxHeight,
        minWidth: minWidth,
        maxWidth: maxWidth,
        width: width,
        display: display,
        flexDirection: direction,
        alignItems: align,
        placeContent: placeContent,
        justifyContent: justifyContent,
        gridTemplateColumns: gridColumns,
        gridTemplateRows: gridRows,
        whiteSpace: whiteSpace,
        flexWrap: wrap,
        overflow: overflow,
        border: border,
        boxShadow: shadow,
      }}
    >
      {props.children}
    </div>
  )
}

export default BtnStack
