import React from 'react'
import Takim from '../component/molecules/Takim'
import Daireler from '../component/molecules/Daireler'
function Oyun() {
    const AStates = [
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]
    const BStates = [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
    ]
  return (
    <div className='container-fluid row border'>
        <div className="col-4 border shadow">
            <Takim clr='bg-primary' name='A Takımı'/>
        </div>
        <div className="col-4 border justify-content-center align-item-center d-flex flex-column shadow">
            <div className='row border justify-content-center my-auto'>
                <Daireler clr={"primary"} states={AStates} isReverse={false} />
            </div>
            <div className='row border my-auto d-flex'>
                <Daireler clr={"warning "} states={BStates} isReverse={true} />
            </div>
        </div>
        <div className="col-4 border shadow">
            <Takim clr='bg-warning' name='B Takımı'/>
        </div>
    </div>
  )
}

export default Oyun