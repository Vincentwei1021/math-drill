import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "口算题生成器 - 在线数学练习卷生成工具",
  description:
    "免费在线口算题生成器，支持加减乘除混合运算，自定义难度和题目数量，一键生成可打印练习卷。适用于小学数学教学。",
  keywords: [
    "口算题生成器",
    "数学练习卷",
    "小学口算题",
    "数学题在线生成",
    "口算练习",
  ],
  metadataBase: new URL("https://math.toolboxlite.com"),
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "口算题生成器",
  description:
    "免费在线口算题生成器，支持加减乘除混合运算，自定义难度和题目数量，一键生成可打印练习卷。适用于小学数学教学。",
  url: "https://math.toolboxlite.com",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CNY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5881105388002876"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
