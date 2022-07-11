import React from 'react'

export default function ShowCat (props) {
  return (
          <>
            <td>{props.value.toUpperCase()}</td>
              <td className='delete'>X</td>
          </>
         
  )
}

