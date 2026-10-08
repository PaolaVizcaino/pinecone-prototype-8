const paths = {
  car: "M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14a2 2 0 0 1 2 2v4h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3v-4a2 2 0 0 1 2-2z",
  chart: "M4 19h16M7 16V9M12 16V5M17 16v-6",
  cap: "M3 9l9-4 9 4-9 4-9-4zm3 3v4c0 1.5 3 3 6 3s6-1.5 6-3v-4M21 9v6",
  shield: "M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3zM9 12l2 2 4-4",
  plane: "M2 12l20-8-6 18-3-7-11-3z",
  list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  bars: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  calendar: "M4 5h16v15H4zM4 10h16M8 3v4M16 3v4",
  read: "M4 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-7a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h7z",
  video: "M4 6h12v12H4zM16 10l5-3v10l-5-3",
  podcast: "M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM6 11a6 6 0 0 0 12 0M12 17v4M9 21h6",
  quiz: "M9 11l3 3 8-8M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9",
  arrow: "M5 12h14M13 6l6 6-6 6",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5",
  check: "M20 6L9 17l-5-5",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  lock: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
  chevron: "M6 9l6 6 6-6",
  play: "M7 5l12 7-12 7z",
  trophy: "M8 4h8v5a4 4 0 0 1-8 0zM6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3M12 13v4M8 21h8M9 17h6",
  lines: "M4 7h16M4 12h16M4 17h16",
  pinecone: "M12 2c2 2 3 4 3 6 0 1-1 2-3 2s-3-1-3-2c0-2 1-4 3-6zM7 9c1 2 2 3 5 3s4-1 5-3c1 2 1 4 0 6-1 1-3 2-5 2s-4-1-5-2c-1-2-1-4 0-6zM8 16c1 1 2 2 4 2s3-1 4-2c0 2-1 4-4 6-3-2-4-4-4-6z",
};

export default function Icon({ name, size = 22, stroke = 2 }) {
  const d = paths[name] || paths.read;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
