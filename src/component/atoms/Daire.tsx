import React from 'react'
interface DaireStatus{
    clr: string,
    bgStatus: boolean
}
function Daire(stats: DaireStatus) {
  return (
    <div className={"border border-" + stats.clr +(stats.bgStatus? " bg-" + stats.clr: "")} style={{width: '50px', height: '50px', borderRadius: "50%"}}>
                </div>
  )
}

export default Daire