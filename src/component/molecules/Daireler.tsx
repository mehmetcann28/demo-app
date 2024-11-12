import React from 'react'
import Daire from '../atoms/Daire'
interface dairelerSpecs{
    states: boolean[],
    clr: string,
    isReverse: boolean,
}
function Daireler(specs: dairelerSpecs) {
    let array= specs.states;
    if(specs.isReverse){
        array.reverse();
    }
  return (
    <div className='row' >
        {
            specs.states.map(data=>{
                return <Daire clr={specs.clr} bgStatus={data}/>
            })
        }
    </div>
  )
}

export default Daireler