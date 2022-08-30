import React from 'react'
import { Bar } from '@/componets'

const Principal = (props) => {
    const { children } = props;

  return (
    <>
    <Bar />
    <div>
        {children}
    </div>
    </>
  )
}

export default Principal