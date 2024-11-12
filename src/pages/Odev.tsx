import React, { useState } from "react";
import swal from "sweetalert";

function Toplama() {
    const [sayi1, setSayi1] = useState("");
    const [sayi2, setSayi2] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);
    const [isSayi1Empty, setIsSayi1Empty] = useState(false);
    const [isSayi2Empty, setIsSayi2Empty] = useState(false);

    const doTopla = () => {
        // Boş alanları kontrol et
        setIsSayi1Empty(sayi1 === "");
        setIsSayi2Empty(sayi2 === "");

        if (sayi1 === "" || sayi2 === "") {
            setIsEmpty(true);
            swal("Hata", "Lütfen her iki sayıyı da girin", "error");
            return;
        } else {
            setIsEmpty(false);
        }

        // Toplama işlemi
        const toplam = parseFloat(sayi1) + parseFloat(sayi2);
        swal("Başarılı!", `Sonuç: ${toplam}`, "success");
    };

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-3"></div>
                <div className="col-6">
                    {
                        isEmpty
                            ? <div className="alert alert-warning" role="alert">
                                <h4 className="alert-heading">Uyarı</h4>
                                <hr />
                                <p>Sayı alanları boş geçilemez.</p>
                              </div>
                            : null
                    }
                    {
                        isSayi1Empty
                            ? <div className="mb-3">
                                <label style={{ color: 'red' }} className="form-label">1. Sayı</label>
                                <input
                                    style={{ borderColor: 'red' }}
                                    value={sayi1}
                                    onChange={e => setSayi1(e.target.value)}
                                    type="number"
                                    className="form-control"
                                />
                              </div>
                            : <div className="mb-3">
                                <label className="form-label">1. Sayı</label>
                                <input
                                    value={sayi1}
                                    onChange={e => setSayi1(e.target.value)}
                                    type="number"
                                    className="form-control"
                                />
                              </div>
                    }
                    {
                        isSayi2Empty
                            ? <div className="mb-3">
                                <label style={{ color: 'red' }} className="form-label">2. Sayı</label>
                                <input
                                    style={{ borderColor: 'red' }}
                                    value={sayi2}
                                    onChange={e => setSayi2(e.target.value)}
                                    type="number"
                                    className="form-control"
                                />
                              </div>
                            : <div className="mb-3">
                                <label className="form-label">2. Sayı</label>
                                <input
                                    value={sayi2}
                                    onChange={e => setSayi2(e.target.value)}
                                    type="number"
                                    className="form-control"
                                />
                              </div>
                    }
                    <div className="mb-3">
                        <button onClick={doTopla} className="btn btn-success">Topla</button>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Toplama;
