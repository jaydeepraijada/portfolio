import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Monogram favicon — replaces the default Next.js/Vercel icon.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          color: "#ffffff",
          fontSize: 22,
          fontWeight: 600,
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: "-1px",
          borderRadius: 7,
        }}
      >
        jr
      </div>
    ),
    { ...size }
  );
}
