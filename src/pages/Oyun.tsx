import React from 'react'
import Takim from '../component/molecules/Takim'
import Daireler from '../component/molecules/Daireler'
function Oyun() {
    const AStates = [
        true,
        true,
        false,
        false,
        true
    ]
    const BStates = [
        false,
        false,
        true,
        true,
        true
    ]
  return (
    <div className='container-fluid row border'>
        <div className="col-4 border">
            <Takim clr='bg-primary' name='A Takımı'/>
        </div>
        <div className="col-4 border justify-content-center align-item-center d-flex flex-column">
            <div className='row border justify-content-center my-auto'>
                <Daireler clr={"primary"} states={AStates} isReverse={false} />
            </div>
            <div className='row border justify-content-end my-auto d-flex'>
            <Daireler clr={"warning "} states={BStates} isReverse={true} />
            </div>
        </div>
        <div className="col-4 border">
            <Takim clr='bg-warning' name='B Takımı'/>
        </div>
    </div>
  )
}

export default Oyun