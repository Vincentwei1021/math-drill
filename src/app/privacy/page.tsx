import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策 - 口算题生成器",
  description: "口算题生成器隐私政策",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="border-b border-green-100 bg-white">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors"
          >
            <span aria-hidden="true">&larr;</span>
            <span className="text-sm font-medium">返回首页</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <h1 className="mb-6 text-2xl font-bold text-green-900">隐私政策</h1>
        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          <p>最后更新日期：2026年4月7日</p>

          <h2 className="pt-2 text-base font-semibold text-green-800">
            信息收集
          </h2>
          <p>
            口算题生成器（以下简称"本工具"）是一个纯前端应用。所有题目生成均在您的浏览器本地完成，我们不会收集、存储或传输您输入的任何配置数据或生成的题目内容。
          </p>

          <h2 className="pt-2 text-base font-semibold text-green-800">
            Cookie 与分析
          </h2>
          <p>
            本工具可能使用 Google AdSense
            提供广告服务。Google
            可能会使用Cookie来提供与您相关的广告。您可以通过访问
            Google 广告设置页面来管理您的广告偏好。
          </p>

          <h2 className="pt-2 text-base font-semibold text-green-800">
            第三方服务
          </h2>
          <p>
            本工具使用 Google Fonts
            加载字体文件。加载字体时，Google
            可能会收集您的IP地址等技术信息。详情请参阅 Google 隐私政策。
          </p>

          <h2 className="pt-2 text-base font-semibold text-green-800">
            数据安全
          </h2>
          <p>
            由于本工具不收集用户数据，因此不存在数据泄露风险。所有运算均在您的设备本地执行。
          </p>

          <h2 className="pt-2 text-base font-semibold text-green-800">
            联系方式
          </h2>
          <p>
            如对本隐私政策有任何疑问，请通过 ToolboxLite 网站与我们联系。
          </p>
        </div>
      </main>

      <footer className="min-h-[44px] border-t border-green-100 bg-white py-3">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 px-4 text-xs text-gray-400 sm:px-6">
          <span>&copy; 2026 ToolboxLite</span>
          <Link href="/privacy" className="hover:text-green-600 transition-colors">
            隐私政策
          </Link>
          <Link href="/terms" className="hover:text-green-600 transition-colors">
            使用条款
          </Link>
        </div>
      </footer>
    </div>
  );
}
