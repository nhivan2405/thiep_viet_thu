
import React from 'react';

export default function ApologyGate({ onAccept, onBack }) {
  return (
    <section className="apology-gate">
      <button className="gate-back" onClick={onBack}>
        ←
      </button>

      <div className="gate-flower">✿</div>

      <div className="gate-note">
        <span>Có đôi điều Rô gửi đến Bé</span>

        <h1>
          Bé ơi,
          <br />
          <em>Rô xin lỗi Bé nhiều nha</em>
        </h1>

        <p>
          Có vài chuyện Rô muốn nói với bé 1 xíu.
        Muốn dỗ tâm trạng của bé chút thôi. 
        </p>

        <button onClick={onAccept} className="gate-start">
          Bé mở thư cùng Rô nha ♡ <span>↗</span>
        </button>

        <small>four little letters · made with care</small>
      </div>

      <figure className="gate-photo">
        <img src="/images/meme.jpg" alt="Một kỷ niệm của bé" />
        <figcaption>một chiếc ảnh thật đáng yêu ♡</figcaption>
      </figure>

      <img
        className="gate-puppy"
        src="/images/puppy-tulip-sticker.png"
        alt="Cún tặng hoa"
      />
    </section>
  );
}
