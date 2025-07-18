import React from 'react'
import './Table.css'

const Table = ({headings , children}) => {
  return (
    <table className="common-table">
        <thead>
            {
            headings.map((heading , index)=><th key={index}>{heading}</th>)
            }
        </thead>
        {children}
    </table>
  )
}

export default Table