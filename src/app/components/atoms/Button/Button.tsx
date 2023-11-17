import React from 'react'
import './Button.css'

type Props = {
    children: React.ReactNode
}

const Button = (props: Props) => {
  return (
    <button className='Button'>{props.children}</button>
  )
}

export default Button