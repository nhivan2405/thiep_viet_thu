import React, { useEffect } from 'react';

export default function FlowerTransition({ onComplete }) {
  useEffect(() => {
    const id = setTimeout(onComplete, 2200);

    return () => clearTimeout(id);
  }, [onComplete]);

  return (
    <section className="flower-transition">
      <div className="ft-center">
        <span>✿</span>
        <p>một chút thương, gửi đến bé…</p>
      </div>

      {Array.from({ length: 35 }, (_, i) => (
        <span
          className="ft-petal"
          key={i}
          style={{
            '--a': `${i * 137.5}deg`,
            '--r': `${140 + (i % 6) * 48}px`,
            '--d': `${(i % 9) * 0.035}s`
          }}
        >
          ❀
        </span>
      ))}
    </section>
  );
}
