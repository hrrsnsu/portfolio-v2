import React from 'react'

type Props = {
    src?: string,
    alt?: string,
}

const Icon = (props: Props) => {
  return (
    <img src={props.src} alt={props.alt}/>
  )
}

export default Icon