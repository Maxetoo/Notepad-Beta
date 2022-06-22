import React, { useEffect, useRef, useState } from 'react'
const sizes = {
  xs: {
    height: '30px',
    width: 'auto',
    fz: '0.7em',
    icon: '1.2em',
  },
  s: {
    height: '35px',
    width: 'auto',
    fz: '0.9em',
    icon: '0.95em',
  },
  m: {
    height: '40px',
    width: 'auto',
    fz: '0.9em',
    icon: '1.2em',
  },
  l: {
    height: '45px',
    width: 'auto',
    fz: '0.99em',
    icon: '1.2em',
  },
  xl: {
    height: '55px',
    width: 'auto',
    fz: '1.1em',
    icon: '1.2em',
  },
}

const colorThemes = {
  default: {
    bg: '',
    color: '',
  },
  black: {
    bg: '#000000',
    color: '#f5f5f5',
  },
  white: {
    bg: '#f5f5f5',
    color: '#000000',
  },
  cool: {
    bg: '#0f0e17',
    color: '#fffffe',
  },
  green: {
    bg: '#38a169',
    color: '#f5f5f5',
  },
  pink: {
    bg: '#e53170',
    color: '#f5f5f5',
  },
  orange: {
    bg: '#e67f09',
    color: '#f5f5f5',
  },
  purple: {
    bg: '#805ad5',
    color: '#f5f5f5',
  },
  yellow: {
    bg: '#ecc94b',
    color: '#000000',
  },
  blue: {
    bg: '#3182ce',
    color: '#f5f5f5',
  },
  cyan: {
    bg: '#0bc5ea',
    color: '#000000',
  },
  blossom: {
    bg: '#33272a',
    color: '#faeee7',
  },
  'blossom-shade': {
    bg: '#faeee7',
    color: '#33272a',
  },
  tint: {
    bg: '#ffc0ad',
    color: '#55423d',
  },
  cream: {
    bg: '#fef6e4',
    color: '#001858',
  },
  red: {
    bg: '#e53e3e',
    color: '#f5f5f5',
  },
}

const SabiBtn = (props) => {
  const [inspectBtnType, setInspectBtnType] = useState('')
  const btnTarget = useRef(null)
  const {
    btnType = 'glance',
    size = 's',
    theme = 'blue',
    width,
    fontSize,
    height,
    leftIcon = '',
    rightIcon = '',
    borderRadius,
    onFocus,
    onClick,
    shadow,
    border,
  } = props

  useEffect(() => {
    setInspectBtnType(btnType)
  }, [btnType])
  return (
    <button
      ref={btnTarget}
      type='button'
      style={{
        height: `${!height ? sizes[size].height : height}`,
        width: `${!width ? sizes[size].width : width}`,
        fontSize: `${!fontSize ? sizes[size].fz : fontSize}`,
        border: `${
          !border
            ? inspectBtnType === 'outline'
              ? `solid 1.5px ${colorThemes[theme].bg}`
              : 'none'
            : border
        }`,
        borderRadius: borderRadius,
        color: `${
          inspectBtnType !== 'solid' &&
          inspectBtnType !== 'glow' &&
          inspectBtnType !== 'glance'
            ? `${colorThemes[theme].bg}`
            : '#fffffe'
        }`,
        boxShadow: shadow,
      }}
      className={`sabi--btn ${
        btnType ? `sabi-${theme} whole--sabibtn-${btnType}` : null
      }`}
      onMouseOver={() => {
        if (inspectBtnType === 'outline') {
          btnTarget.current.style.background = `${colorThemes[theme].bg}`
          btnTarget.current.style.color = `${colorThemes[theme].color}`
        }
        if (inspectBtnType === 'faint') {
          btnTarget.current.style.background = `${colorThemes[theme].bg}`
          btnTarget.current.style.color = `${colorThemes[theme].color}`
          btnTarget.current.style.opacity = `70%`
        }
        if (inspectBtnType === 'glance') {
          btnTarget.current.style.background = ``
          btnTarget.current.style.color = `${colorThemes[theme].bg}`
          btnTarget.current.style.border = `solid 1.5px ${colorThemes[theme].bg}`
        }
      }}
      onMouseLeave={() => {
        if (inspectBtnType === 'outline') {
          btnTarget.current.style.background = ''
          btnTarget.current.style.color = `${colorThemes[theme].bg}`
        }
        if (inspectBtnType === 'faint') {
          btnTarget.current.style.background = ``
          btnTarget.current.style.color = `${colorThemes[theme].bg}`
          btnTarget.current.style.opacity = `100%`
        }
        if (inspectBtnType === 'glance') {
          btnTarget.current.style.background = `${colorThemes[theme].bg}`
          btnTarget.current.style.color = `${colorThemes[theme].color}`
        }
      }}
      onFocus={onFocus}
      onClick={onClick}
    >
      <span
        className={`sabi-main-icon ${leftIcon && 'sabi--left'}`}
        style={{ fontSize: `${sizes[size].icon}` }}
      >
        {leftIcon}
      </span>
      {props.children}
      <span
        className={`sabi-main-icon ${rightIcon && 'sabi--right'}`}
        style={{ fontSize: `${sizes[size].icon}` }}
      >
        {rightIcon}
      </span>
    </button>
  )
}

export default SabiBtn
