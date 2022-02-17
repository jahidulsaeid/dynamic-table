import { useState } from 'react'
import './App.css'

import Table from './components/icons/Table';
import ViewTable from './components/ViewTable';

function App() {
  const [selectTable, setSelectTable] = useState(false)
  const [nodeHover, setNodeHover] = useState([0, 0]);
  const [currentNode, setCurrentNode] = useState([0, 0]);


  return (
    <>
      <button className="table-icon-btn" onClick={() => setSelectTable(!selectTable)}>
        <Table />
      </button>

      {selectTable === true && (
        <div className='select-table'>
          {Array(5)
            .fill(Array(5).fill(0)) // 5x5 0 array
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


      <div className="container mt-5">
        <ViewTable row={5} col={4}/>
      </div>
    </>
  )
}

export default App
