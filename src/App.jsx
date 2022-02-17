import { useState } from 'react'
import Draggable from 'react-draggable';
import './App.css'

import Table from './components/icons/Table';
import ViewTable from './components/ViewTable';

function App() {
  const [selectTable, setSelectTable] = useState(false)
  const [nodeHover, setNodeHover] = useState([0, 0]);
  const [currentNode, setCurrentNode] = useState([0, 0]);
  const [flag, setFlag] = useState(false)

  const tableIconHandle = () => {
    setFlag(true)
    setSelectTable(!selectTable)
  }
  return (
    <>
      <button className="table-icon-btn" onClick={tableIconHandle}>
        <Table />
      </button>

      {selectTable === true && (
        <div className='select-table'>
          {Array(10)
            .fill(Array(10).fill(0)) // 5x5 0 array
            .map((e, i) => (
              <div className="row-node" key={i}>
                {e.map((e2, i2) => (
                  <div
                    className={
                      "single-node border border-secondary " +
                      (currentNode[0] >= i && currentNode[1] >= i2
                        ? "border-danger border-1 " : " ") //border all selected nodes
                      + (nodeHover[0] >= i && nodeHover[1] >= i2
                        ? "bg-secondary " : " ") //background color all hovered nodes 
                    }
                    onMouseOver={() => setNodeHover([i, i2])}
                    onClick={() => setCurrentNode([i, i2])}
                  >
                    {" "}
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
      <div onClick={() => setSelectTable(false)}>
        <Draggable>

          <div className="container mt-5" >
            <ViewTable row={currentNode[0] + 1} col={currentNode[1] + 1} flag={flag} />
          </div>

        </Draggable>
      </div>

    </>
  )
}

export default App
