import { ImageResponse } from "next/og";

export const alt = "口算题生成器 - 在线数学练习卷生成工具";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #14532d 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "rgba(255,255,255,0.2)",
            marginBottom: 32,
            fontSize: 64,
          }}
        >
          🧮
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            marginBottom: 16,
            letterSpacing: "0.02em",
          }}
        >
          口算题生成器
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.05em",
          }}
        >
          在线数学练习卷生成工具
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span>加法</span>
          <span>·</span>
          <span>减法</span>
          <span>·</span>
          <span>乘法</span>
          <span>·</span>
          <span>除法</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
