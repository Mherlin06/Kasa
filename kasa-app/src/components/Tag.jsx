import React from 'react'
import '../styles/Tag.css'

const Tag = ({tag}) => {
  return (
    <li key={tag}>
      {tag}
    </li>
  )
}

export default Tag