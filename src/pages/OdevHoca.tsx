import React,{ useState } from "react";

function OdevHoca(){
    let s1=0;
    let s2=0;
    const [toplam,setToplam] = useState(0);
    const topla = ()=>{
        console.log('sayı1...: ', s1);
        console.log('sayı2...: ', s2);
        setToplam(s1+s2);
        console.log('toplam...: ', toplam);
    }
    console.log()
    return(
        <div className="container">
            <div className="mb-2 mt-4">
                <input onChange={evt=>{s1=parseInt(evt.target.value)}} type="number" className="form-control" />
            </div>
            <div className="mb-2">
                <input onChange={evt=>{s2=parseInt(evt.target.value)}} type="number" className="form-control" />
            </div>
            <div className="mb-2">
                <button onClick={topla} className="btn btn-info">Topla</button>
            </div>
            <div className="mb-2">
                <label className="form-label">Sonuç: {toplam}</label>
            </div>
        </div>
    )
}

export default OdevHoca;