"use client";

export default function PrintHeader() {
  const today = new Date();
  const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

  return (
    <div className="print-only mb-6 hidden">
      <h1 className="mb-3 text-center text-2xl font-bold">口算练习</h1>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>姓名：_______________</span>
        <span>班级：_______________</span>
        <span>日期：{dateStr}</span>
        <span>成绩：_______________</span>
      </div>
      <hr className="mt-3 border-gray-300" />
    </div>
  );
}
