"use client";

interface StatusDotProps {
  status: "green" | "red"; // Define the possible statuses
  size?: number; // Optional: Set the size of the dot
}

const StatusDot: React.FC<StatusDotProps> = ({ status, size = 12 }) => {
  const dotStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: status === "green" ? "green" : "red",
    display: "inline-block",
  };

  return <span style={dotStyle} />;
};

export default StatusDot;
