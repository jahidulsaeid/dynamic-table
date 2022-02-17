import React from 'react'

const ViewTable = ({ row, col }) => {

  return (
    <table className="table table-bordered">
      {/* <thead>
        <tr>
          <th scope="col" contentEditable={true}>#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead> */}
      <tbody>

        {/* {row.length.map((item) =>
          <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        )} */}

        {/* {5.map(())} */}





        {/* <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr> */}

      </tbody>
    </table>
  )
}

export default ViewTable