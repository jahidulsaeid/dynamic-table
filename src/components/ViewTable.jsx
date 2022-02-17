import React from 'react'
import ReactColumnResizer from 'react-column-resizer'

const ViewTable = (props) => {

  const col = () => {
    let totalCol = []
    for (let i = 0; i < props.col; i++) {
      totalCol.push(
        <td contentEditable={true} width="300"></td>
        // <td></td>
        // <ReactColumnResizer className="columnResizer" minWidth={0} contentEditable={true}/>
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
    props.flag && (
      <>
        <div class="table-responsive-sm">
          <table className="table table-bordered " id='somethingUnique' >
            <tbody>
              {data()}
            </tbody>
          </table>
        </div>


      </>
    )
  )
}

export default ViewTable