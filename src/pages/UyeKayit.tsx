import React, { useState } from "react";
import swal from "sweetalert";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [age, setAge] = useState("");
    const [showInfo, setShowInfo] = useState(false);

    // Şifrelerin eşleşip eşleşmediğini kontrol eden bir state
    const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);

    const handleRegister = () => {
        // Yeni kayıt için showInfo'yu false yaptım
        setShowInfo(false);

        // Şifrelerin eşleşip eşleşmediğini kontrol ediliyor
        if (password !== repassword) {
            swal("Hata", "Şifreler eşleşmiyor!", "error");
            return;
        }
        
        if (username === "" || password === "" || age === "") {
            swal("Hata", "Lütfen tüm alanları doldurun!", "error");
            return;
        }

        // Bilgileri gösterme moduna geçiyor
        setShowInfo(true);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setIsPasswordMismatch(e.target.value !== repassword);
    };
    
    const handleRepasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepassword(e.target.value);
        setIsPasswordMismatch(e.target.value !== password);
    };
    

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="mb-3">
                        <label>Kullanıcı Adı</label>
                        <input
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setShowInfo(false); // Yeni girişte bilgileri gizle
                            }}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Şifre</label>
                        <input
                            value={password}
                            onChange={(e) => {
                                handlePasswordChange(e);
                                setShowInfo(false); // Yeni girişte bilgileri gizle
                            }}
                            type="password"
                            className={`form-control ${isPasswordMismatch ? "border-danger" : ""}`}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Şifre Tekrar</label>
                        <input
                            value={repassword}
                            onChange={(e) => {
                                handleRepasswordChange(e);
                                setShowInfo(false); // Yeni girişte bilgileri gizle
                            }}
                            type="password"
                            className={`form-control ${isPasswordMismatch ? "border-danger" : ""}`}
                        />
                        {isPasswordMismatch && (
                            <small style={{ color: "red" }}>Şifreler eşleşmiyor!</small>
                        )}
                    </div>
                    <div className="mb-3">
                        <label>Yaş</label>
                        <select
                            value={age}
                            onChange={(e) => {
                                setAge(e.target.value);
                                setShowInfo(false); // Yeni girişte bilgileri gizle
                            }}
                            className="form-control"
                        >
                            <option value="">Yaş Seçiniz</option>
                            {[...Array(87).keys()].map((i) => {
                                const age = i + 14;
                                return (
                                    <option key={age} value={age}>{age}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <button onClick={handleRegister} className="btn btn-success">
                            Kayıt Ol
                        </button>
                    </div>

                    {showInfo && (
                        <div className="mt-4">
                            <h5>Kayıtlı Kullanıcı Bilgileri</h5>
                            <p>Kullanıcı Adı: {username}</p>
                            <p>Şifre: {password}</p>
                            <p>Yaş: {age}</p>
                        </div>
                    )}
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Register;
