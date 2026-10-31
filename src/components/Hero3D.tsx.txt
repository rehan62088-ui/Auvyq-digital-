import React from 'react';

export function Hero3D() {
  return (
    <div
      style={{
        width: '100%',
        height: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '260px',
          height: '300px',
          borderRadius: '28px',
          background: 'linear-gradient(145deg, #252a32, #080a0e)',
          border: '1px solid #414b59',
          boxShadow: '0 30px 80px #000000aa, 0 0 45px #168bff22',
          transform: 'rotateY(-14deg) rotateX(5deg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '25px',
          boxSizing: 'border-box',
          color: '#ffffff',
        }}
      >
        <div style={{ color: '#58aaff', fontSize: '13px', letterSpacing: '4px' }}>
          AUVYQ
        </div>

        <div>
          <div style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1 }}>
            DIGITAL
          </div>
          <div style={{ color: '#9ca8b8', marginTop: '12px', fontSize: '13px' }}>
            Built to stand apart.
          </div>
        </div>

        <div
          style={{
            height: '5px',
            width: '75px',
            borderRadius: '10px',
            background: '#168bff',
            boxShadow: '0 0 20px #168bff',
          }}
        />
      </div>
    </div>
  );
}
