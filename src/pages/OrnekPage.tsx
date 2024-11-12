import React, { useState } from "react";
import OzelCheckox from "../component/atoms/OzelCheckBox";
import CheckIcons from "../component/molecules/CheckIcons";

function OrnekPage() {
    console.log('ornek page render');
    return (
        <div className="container">
            <div className="row mt-4">
                <h1>Uzmanlık yaptığınız alanları seçiniz.</h1>
                <OzelCheckox name={'Yazilim'}/>
                <OzelCheckox name={'Donanim'}/>
                <OzelCheckox name={'Network'}/>
                <OzelCheckox name={'Arch'}/>
                <OzelCheckox name={'Müdür'}/>
                <OzelCheckox name={'Şef'}/>
                
                <div className="mb-2 mt-2">
                    <button className="btn btn-danger">Denetle</button>
                </div>
                <CheckIcons yazilim={false}/>
            </div>
        </div>
    );
}

export default OrnekPage;
