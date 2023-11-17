import React from 'react'

type Props = {
    children: React.ReactNode;
}

const ContentBox = (props: Props) => {
  return (
    <div>{props.children}</div>
  )
}

export default ContentBox