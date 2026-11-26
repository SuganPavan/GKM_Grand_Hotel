import React from 'react';

export default function PalmAccent({ position = 'left', light = false }) {
  const leafColor = light ? '#3E7A48' : '#588F4E';
  const veinColor = light ? '#65A46E' : '#85B978';

  return (
    <svg
      className={`palm-accent palm-accent--${position}`}
      viewBox="0 0 180 260"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 245 C42 185, 76 115, 138 22"
        stroke={veinColor}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path d="M22 215 C58 195, 108 188, 152 198 C108 208, 62 214, 22 215Z" fill={leafColor} opacity="0.6" />
      <path d="M36 188 C74 162, 125 152, 168 158 C126 172, 78 182, 36 188Z" fill={leafColor} opacity="0.72" />
      <path d="M52 158 C92 128, 138 118, 174 120 C134 136, 92 148, 52 158Z" fill={leafColor} opacity="0.8" />
      <path d="M68 128 C104 96, 145 84, 176 82 C140 100, 102 114, 68 128Z" fill={leafColor} opacity="0.78" />
      <path d="M86 98 C116 68, 150 52, 174 46 C146 66, 114 84, 86 98Z" fill={leafColor} opacity="0.72" />
      <path d="M104 70 C128 42, 152 24, 168 16 C148 36, 126 54, 104 70Z" fill={leafColor} opacity="0.65" />

      <path d="M26 205 C10 170, 2 130, 8 92 C18 130, 24 168, 26 205Z" fill={leafColor} opacity="0.58" />
      <path d="M44 172 C24 135, 18 96, 26 58 C36 96, 42 134, 44 172Z" fill={leafColor} opacity="0.68" />
      <path d="M62 140 C44 104, 40 66, 52 30 C58 68, 62 104, 62 140Z" fill={leafColor} opacity="0.72" />
      <path d="M82 108 C68 74, 68 42, 82 12 C84 44, 84 76, 82 108Z" fill={leafColor} opacity="0.66" />
    </svg>
  );
}
