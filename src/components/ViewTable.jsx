import React from 'react'

const ViewTable = (props) => {

  const col = () => {
    let totalCol = []
    for (let i = 0; i < props.col; i++) {
      totalCol.push(
        <td contentEditable={true}></td>
      )
    }
    return totalCol
  }

  const data = () => {
    let totalRC = []
    for (let i = 0; i < props.row; i++) {
      totalRC.push(
        <tr key={i}>
          {col()}
        </tr>
      )
    }
    return totalRC
  }


  return (
    <>
      <table className="table table-bordered">
        <tbody>
          {data()}
        </tbody>
      </table>
    </>
  )
}

export default ViewTable