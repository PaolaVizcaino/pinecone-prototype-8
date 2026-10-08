import Icon from "./Icon";

// Placeholder illustration block. Replace with the Pinecone illustrations
// (Frame.io) by dropping files into /public/art and swapping this for <img>.
export default function Art({ color = "teal", icon = "chart", className = "" }) {
  const ink = {
    sun: "#7a5a00",
    moss: "#2a5d3a",
    plum: "#7a2f57",
    sky: "#1f5a7a",
    teal: "#005f6b",
  }[color];
  return (
    <div className={`art bg-${color} ${className}`} style={{ color: ink }}>
      <Icon name={icon} size={120} stroke={1.4} />
    </div>
  );
}
