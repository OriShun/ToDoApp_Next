// prisma/seed.ts
const { PrismaClient } = require("../src/generated/prisma");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.task.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: "テスト太郎",
      email: "test@example.com",
    },
  });

  const baseDate = Date.now();

  const tasks = [
    {
      title: "週次レポート作成",
      description: "営業部向けの週次レポートをまとめる",
      dueDate: new Date(baseDate + 86400000 * 1),
      priority: 1,
      userId: user.id,
    },
    {
      title: "クライアントとの打ち合わせ",
      description: "プロジェクト進捗確認のWeb会議",
      priority: 2,
      userId: user.id,
    },
    {
      title: "請求書発行",
      description: "今月分の請求書を作成し、経理に提出",
      completed: true,
      priority: 3,
      userId: user.id,
    },
  ];

  // 既存の3件に加えて追加で27件の業務タスクを生成
  const jobTitles = [
    "仕様書の確認",
    "コードレビュー対応",
    "テストケース作成",
    "業務フローの見直し",
    "月例会議の準備",
    "新入社員向け資料作成",
    "KPI進捗確認",
    "プロジェクト計画見直し",
    "競合調査まとめ",
    "アンケート集計",
    "社内ポータル更新",
    "スケジュール調整",
    "業務改善アイデア出し",
    "ユーザー問い合わせ対応",
    "マニュアル修正",
    "スプリントレビュー参加",
    "予算案のドラフト作成",
    "SNS投稿原稿の確認",
    "顧客データの更新",
    "セキュリティチェックリスト確認",
    "チームMTG資料作成",
    "営業資料のアップデート",
    "タスク管理表の更新",
    "リリースノート作成",
    "データバックアップ確認",
    "プロダクトロードマップレビュー",
    "開発環境の整備",
  ];

  for (let i = 0; i < jobTitles.length; i++) {
    tasks.push({
      title: jobTitles[i],
      description: `${jobTitles[i]}を完了させるためのタスクです。`,
      dueDate: new Date(baseDate + 86400000 * (i + 4)),
      priority: (i % 3) + 1,
      userId: user.id,
    });
  }

  await prisma.task.createMany({
    data: tasks,
  });

  console.log("🌱 Seed 完了！（業務タスク）");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
