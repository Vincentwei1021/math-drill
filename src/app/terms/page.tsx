import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "使用条款 - 口算题生成器",
  description: "口算题生成器使用条款",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
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
        <h1 className="mb-6 text-2xl font-bold text-green-900">使用条款</h1>
        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          <p>最后更新日期：2026年4月7日</p>

          <h2 className="pt-2 text-base font-semibold text-green-800">
            服务说明
          </h2>
          <p>
            口算题生成器（以下简称"本工具"）是由 ToolboxLite
            提供的免费在线教育辅助工具，用于生成小学数学口算练习题。
          </p>

          <h2 className="pt-2 text-base font-semibold text-green-800">
            使用许可
          </h2>
          <p>
            您可以免费使用本工具生成口算练习题，用于个人学习、课堂教学或家庭辅导等非商业用途。生成的练习卷可自由打印和分发。
          </p>

          <h2 className="pt-2 text-base font-semibold text-green-800">
            免责声明
          </h2>
          <p>
            本工具按"现状"提供，不作任何明示或暗示的保证。我们不保证生成的题目完全无误，建议教师或家长在使用前进行核实。
          </p>
          <p>
            对于因使用本工具而产生的任何直接或间接损失，ToolboxLite
            不承担责任。
          </p>

          <h2 className="pt-2 text-base font-semibold text-green-800">
            知识产权
          </h2>
          <p>
            本工具的界面设计、代码及品牌标识归 ToolboxLite
            所有。您生成的练习题内容可自由使用，不受版权限制。
          </p>

          <h2 className="pt-2 text-base font-semibold text-green-800">
            条款修改
          </h2>
          <p>
            ToolboxLite
            保留随时修改本使用条款的权利。修改后的条款将在本页面更新后生效，继续使用本工具即视为接受修改后的条款。
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
