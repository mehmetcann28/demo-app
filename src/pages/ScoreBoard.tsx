import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Scoreboard() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 1));
  const [currentTeam, setCurrentTeam] = useState(Math.random() < 0.5 ? 'A' : 'B');
  const [guess, setGuess] = useState('');
  const [aTeamScore, setATeamScore] = useState(0);
  const [bTeamScore, setBTeamScore] = useState(0);
  const [aTeamCircles, setATeamCircles] = useState(Array(15).fill(null));
  const [bTeamCircles, setBTeamCircles] = useState(Array(15).fill(null));

  const handleGuessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };


  const handleGuessSubmit = () => {
    const guessedNumber = parseInt(guess);
    if (guessedNumber === targetNumber) {
      if (currentTeam === 'A') {
        const newCircles = [...aTeamCircles];
        newCircles[aTeamScore] = 'blue';
        setATeamCircles(newCircles);
        setATeamScore(aTeamScore + 1);
        if (aTeamScore + 1 === 15) {
          Swal.fire({
            title: 'Tebrikler!',
            text: 'A Takımı kazandı!',
            icon: 'success',
            confirmButtonText: 'Tamam'
          }).then(() => {
            resetGame();
          });
          return;
        }
      } else {
        const newCircles = [...bTeamCircles];
        newCircles[14 - bTeamScore] = 'yellow';
        setBTeamCircles(newCircles);
        setBTeamScore(bTeamScore + 1);
        if (bTeamScore + 1 === 15) {
          Swal.fire({
            title: 'Tebrikler!',
            text: 'B Takımı kazandı!',
            icon: 'success',
            confirmButtonText: 'Tamam'
          }).then(() => {
            resetGame();
          });
          return;
        }
      }
    } else {
      setCurrentTeam(currentTeam === 'A' ? 'B' : 'A');
    }
    
    // Yeni bir sayı belirle
    setTargetNumber(Math.floor(Math.random() * 1));
    setGuess('');
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 1));
    setCurrentTeam(Math.random() < 0.5 ? 'A' : 'B');
    setGuess('');
    setATeamScore(0);
    setBTeamScore(0);
    setATeamCircles(Array(15).fill(null));
    setBTeamCircles(Array(15).fill(null));
  };

  return (
    <div className="d-flex justify-content-around align-items-center p-5">
      <div className={`card text-center shadow-sm ${currentTeam === 'A' ? '' : 'opacity-50'}`} style={{ width: '250px', border: '1px solid #ddd' }}>
        <div className="card-header bg-primary text-white">
          <h2 className="h5 m-0">A Takımı</h2>
        </div>
        <div className="card-body">
          <p className="mb-3">Sayıyı tahmin et</p>
          <input
            type="number"
            value={guess}
            onChange={handleGuessChange}
            className="form-control mb-4 text-center"
            style={{ fontSize: '1.2em' }}
            disabled={currentTeam !== 'A'}
          />
          <button
            className="btn btn-success rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{ width: '70px', height: '70px', fontSize: '1em' }}
            onClick={handleGuessSubmit}
            disabled={currentTeam !== 'A'}
          >
            Tahmin Et
          </button>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center mx-5">
        <div className="d-flex mb-4">
          {aTeamCircles.map((color, index) => (
            <div
              key={index}
              className="rounded-circle mx-1"
              style={{
                width: '35px',
                height: '35px',
                border: '2px solid #007bff',
                backgroundColor: color === 'blue' ? '#007bff' : 'transparent',
              }}
            />
          ))}
        </div>
        <div className="d-flex mb-4">
          {bTeamCircles.map((color, index) => (
            <div
              key={index}
              className="rounded-circle mx-1"
              style={{
                width: '35px',
                height: '35px',
                border: '2px solid #ffc107',
                backgroundColor: color === 'yellow' ? '#ffc107' : 'transparent',
              }}
            />
          ))}
        </div>
      </div>

      <div className={`card text-center shadow-sm ${currentTeam === 'B' ? '' : 'opacity-50'}`} style={{ width: '250px', border: '1px solid #ddd' }}>
        <div className="card-header bg-warning text-white">
          <h2 className="h5 m-0">B Takımı</h2>
        </div>
        <div className="card-body">
          <p className="mb-3">Sayıyı tahmin et</p>
          <input
            type="number"
            value={guess}
            onChange={handleGuessChange}
            className="form-control mb-4 text-center"
            style={{ fontSize: '1.2em' }}
            disabled={currentTeam !== 'B'}
          />
          <button
            className="btn btn-success rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{ width: '70px', height: '70px', fontSize: '1em' }}
            onClick={handleGuessSubmit}
            disabled={currentTeam !== 'B'}
          >
            Tahmin Et
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
