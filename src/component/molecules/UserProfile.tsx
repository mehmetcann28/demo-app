import React from 'react'
import { IUserProfile } from '../../models/IUserProfile'
interface IUserProfileProps{
 userProfile: IUserProfile,
 isAdmin: boolean
}
function UserProfile(props: IUserProfileProps) {
  return (
    <>
        <div className="row m-3 justify-content-center">
            <img src={props.userProfile.photo} alt="" style={{display:'inline-block',width:'200px',borderRadius:'100%',}} />
        </div>
        <div className="row m-3">
            <input type="text" className="form-control" placeholder='Kullanıcı adınızı giriniz...' value={props.userProfile.userName} />
        </div>
        <div className="row m-3">
            <input type="password" className="form-control" placeholder='Şifrenizi giriniz...' value={props.userProfile.sifre} />
        </div>
        <div className="row m-3">
            <input type="tel" className="form-control" placeholder='Telefon numaranızı giriniz...' value={props.userProfile.telefon}/>
        </div>
        <div className="row m-3 d-grid">
            <button className="btn btn-success">Bilgilerimi Güncelle</button>
        </div>
    </>
  )
}

export default UserProfile