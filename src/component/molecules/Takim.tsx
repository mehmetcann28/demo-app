import React from 'react'
interface takimSpecs{
    name:string,
    clr:string,
}
function Takim(specs: takimSpecs) {
  return (
    <div>
                <div className={"row text-center "+specs.clr} style={{borderTopLeftRadius: '14px', borderTopRightRadius: '14px'}}>
                    <label className='text-white form-label fs-1'><b>{specs.name}</b></label>
                </div>
                <div className='row mt-3 text-center'>
                    <label className='form-label'><b>Sayıyı tahmin et</b></label>
                </div>
                <div className='row mt-3 mx-3'>
                    <input className='form-control' type="text" />
                </div>
                <div className='row m-3 justify-content-center'>
                    <button className='btn btn-success' style={{borderRadius: '50%', height: '100px', width: '100px'}}>Tahmin Et</button>
                </div>
            </div>
  )
}

export default Takim