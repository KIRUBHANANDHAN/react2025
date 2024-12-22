
import { useState } from "react"

import data from './data'

import './styles.css'

export default function accordion() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)

    const [multiple, enableMultiple] = useState([])


    function handleSingleSelection(getCurrentId) {
        //console.log('get id',getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId) {
        //console.log('get id',getCurrentId)
        const copyMultiple = [...multiple]

        let checkIndex = copyMultiple.indexOf(getCurrentId)

        if(checkIndex == -1)copyMultiple.push(getCurrentId)
            else copyMultiple.splice(checkIndex,1)

        enableMultiple(copyMultiple)

       
    }

    console.log('selected', selected,multiple)

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>  Enable Multi Selection</button>
        <div className="accordion">
            {data && data.length > 0 ?
                data.map((getData) => (
                    <div className="item" >
                        <div onClick={ enableMultiSelection ?
                            () => handleMultiSelection(getData.id) :
                            () => handleSingleSelection(getData.id)

                        } className="title">
                            <h3>{getData.department}
                                <span>+</span>
                            </h3>
                        </div>
                        {
                            selected === getData.id || multiple.indexOf(getData.id)  !== -1?
                                <div className="content">
                                    {getData.name}
                                </div>
                                : null
                        }
                    </div>
                )) :
                <div>No data found</div>
            }
        </div>
    </div>
}