import React, { useState } from 'react'

function CheckIcons(props: any) {
    const [yazilim, setYazilim] = useState(props.yazilim);
    const [donanim, setDonanim] = useState(true);
    const [network, setNetwork] = useState(true);
    const [architect, setArchitect] = useState(true);
    const [mudur, setMudur] = useState(true);
    const [sef, setSef] = useState(true);
  return (
    <div className="mb-2 mt-2 row">
        {
            yazilim ? <div className="col">
            <i className="fa-brands fa-java fa-2xl"></i> 
            </div> 
            : null
        }
        {
            donanim ?  <div className="col">
            <i className="fa-solid fa-microchip fa-2xl"></i>
            </div>
            : null
        }
        {
            network ?     <div className="col">
            <i className="fa-solid fa-network-wired fa-2xl"></i>
            </div>
            : null
        }
        {
            architect ? <div className="col">
            <i className="fa-solid fa-pen-ruler fa-2xl"></i>
            </div>
            : null
        }
        {
            mudur ?  <div className="col">
            <i className="fa-solid fa-clipboard-user fa-2xl"></i>
            </div> 
            : null
        }
        {
            sef ?  <div className="col">
            <i className="fa-solid fa-user fa-2xl"></i>
            </div>
            : null
        }
    </div>
  )
}

export default CheckIcons