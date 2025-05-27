'use client';

import React, { useState, useEffect } from 'react';

interface Proof {
  id: number;
  text: string;
  isValid: boolean;
}

const proofs: Proof[] = [
  { id: 1, text: '0xabc1234f8e9d3e2c', isValid: true },
  { id: 2, text: '0xdef4567k2m7p4r8', isValid: false },
  { id: 3, text: '0x789ghi1n7m3t9v2', isValid: true },
  { id: 4, text: '0xjkl0128p3q5r7t', isValid: true },
  { id: 5, text: '0xstu7892r9w4x1y', isValid: true },
  { id: 6, text: '0xzyx9876z5v2u1p0', isValid: false },
  { id: 7, text: '0x123mno4k8r9w6t', isValid: false },
  { id: 8, text: '0x456pqr7j2n5w8x', isValid: false },
  { id: 9, text: '0x789stu3m1v2y6q', isValid: true },
  { id: 10, text: '0xabcxyz2k9p7q4r', isValid: false },
  { id: 11, text: '0x1a2b3c4d5e6f7g8', isValid: true },
  { id: 12, text: '0xhij7890k1m2n3p4', isValid: false },
  { id: 13, text: '0x5qwe6rty7uio8pzx', isValid: true },
  { id: 14, text: '0x9asd0fgh1jkl2mno', isValid: false },
  { id: 15, text: '0xzxc7vbn8mkl0pqr', isValid: true },
  { id: 16, text: '0x123456qazwsxedc', isValid: false },
  { id: 17, text: '0xpoi9uyt8rew3qaz', isValid: true },
  { id: 18, text: '0xmnb4vcx5zse6rty', isValid: false },
  { id: 19, text: '0x7ujm6yhn5tgb4rfv', isValid: true },
  { id: 20, text: '0x8ikl7ujm6yhn5tg', isValid: false },
];

export default function Game() {
  const [currentProof, setCurrentProof] = useState(proofs[0]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const handleVerify = (isValid: boolean) => {
    if (isValid === currentProof.isValid) {
      setScore(score + 10 + combo * 5);
      setCombo(combo + 1);
      setFeedback('success');
    } else {
      setScore(score - 5);
      setCombo(0);
      setFeedback('error');
    }
    setTimeout(() => setFeedback(''), 300);
    if (index + 1 < proofs.length) {
      setIndex(index + 1);
      setCurrentProof(proofs[index + 1]);
      setTimeLeft(5);
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setIndex(0);
    setCurrentProof(proofs[0]);
    setScore(0);
    setCombo(0);
    setTimeLeft(5);
    setGameOver(false);
    setFeedback('');
  };

  return (
    <div className={`game-container ${feedback}`}>
      {gameOver ? (
        <div className="game-over">
          <h2 className="subtitle">Game Over</h2>
          <p className="description">Final Score: {score}</p>
          <p className="description tge-message">
            LayerEdge powers fast, reliable blockchain verification. Join the TGE to shape the future!
          </p>
          <button onClick={resetGame} className="button button-primary">
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <div className="game-stats">
            <p>Score: {score}</p>
            <p>Combo: x{combo}</p>
            <p>Time: {timeLeft}s</p>
          </div>
          <div className={`proof-card ${currentProof.isValid ? 'valid' : 'invalid'}`}>
            <p className="proof-text">{currentProof.text}</p>
            <p className="proof-status">{currentProof.isValid ? 'Valid' : 'Invalid'}</p>
          </div>
          <div className="button-container">
            <button onClick={() => handleVerify(true)} className="button button-validate">
              Validate
            </button>
            <button onClick={() => handleVerify(false)} className="button button-reject">
              Reject
            </button>
          </div>
        </div>
      )}
    </div>
  );
}