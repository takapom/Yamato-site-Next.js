import styles from './how.module.css';

export default function UsagePage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>学生ポータルサイト 使い方ガイド</h1>
        <p className={styles.subtitle}>
          あなたの学習と情報収集をサポートする最先端のポータルサイト
        </p>
      </section>

      <section className={styles.content}>
        <h2>ナビゲーション</h2>
        <p>
          トップメニューから各セクションに簡単にアクセス。最新のイベント、授業スケジュール、各種資料など、必要な情報を瞬時に取得できます。
        </p>

        <h2>アカウント管理</h2>
        <p>
          プロフィールページでは、個人情報の更新、通知設定、パスワード変更など、セキュリティを重視したアカウント管理が可能です。
        </p>

        <h2>カスタムダッシュボード</h2>
        <p>
          個々の学生に合わせたダッシュボードで、学習進捗やスケジュール管理がスムーズに行えます。ウィジェットの追加・削除も自由自在です。
        </p>

        <h2>リアルタイム通知</h2>
        <p>
          授業変更、キャンパスイベント、重要なお知らせがリアルタイムで届き、スマートフォン連携により、いつでも最新情報をキャッチできます。
        </p>

        <h2>サポートとフィードバック</h2>
        <p>
          サイトに関するご質問やご意見は、フィードバックフォームやチャットサポートからお寄せいただけます。迅速に対応いたします。
        </p>
      </section>
    </main>
  );
}