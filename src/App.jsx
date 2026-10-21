import React, { useRef, useState } from 'react';
import ApologyGate from './components/ApologyGate';
import FlowerTransition from './components/FlowerTransition';
import LetterGarden from './components/LetterGarden';

const musicFiles = [
  '/music/01-xin-loi.mp4',
  '/music/02-hieu-nhau.mp4',
  '/music/03-ky-niem.mp4',
  '/music/04-loi-hen.mp4'
];

export default function App() {
  const [stage, setStage] = useState('envelope');
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const playSong = (index) => {
    const video = audioRef.current;
    if (!video) return;
    video.pause();
    video.src = musicFiles[index];
    video.currentTime = 0;
    video.volume = 0.4;
    video.load();
    setMusicOn(true);
    video.play().catch((error) => {
      console.warn('Không phát được nhạc:', error);
      setMusicOn(false);
    });
  };

  const stopMusic = () => {
    const video = audioRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setMusicOn(false);
  };

  const toggleMusic = () => {
    const video = audioRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      setMusicOn(false);
    } else {
      video.play()
        .then(() => setMusicOn(true))
        .catch((error) => {
          console.warn('Không bật được nhạc:', error);
          setMusicOn(false);
        });
    }
  };

  return (
    <main className="page-shell">
      <video ref={audioRef} loop playsInline preload="auto" style={{ display: 'none' }} />
      {stage === 'envelope' && (
        <div className="entrance">
          <div className="entrance-stars">✧ ˚ · . ✦ . · ˚ ✧</div>
          <button className="entrance-envelope" onClick={() => {
            playSong(0);
            setStage('bloom');
          }}>
            <span>✿</span>
            <strong>for bé ♡</strong>
            <small>chạm vào để mở một điều nhỏ xinh</small>
          </button>
          <p>from Rô, with a little courage</p>
        </div>
      )}
      {stage === 'bloom' && (
        <FlowerTransition onComplete={() => setStage('sorry')} />
      )}
      {stage === 'sorry' && (
        <ApologyGate
          onAccept={() => { stopMusic(); setStage('garden'); }}
          onBack={() => { stopMusic(); setStage('envelope'); }}
        />
      )}
      {stage === 'garden' && (
        <LetterGarden
          onClose={() => { stopMusic(); setStage('envelope'); }}
          onLetterOpen={playSong}
          onLetterClose={stopMusic}
          musicOn={musicOn}
          onToggleMusic={toggleMusic}
        />
      )}
    </main>
  );
}
