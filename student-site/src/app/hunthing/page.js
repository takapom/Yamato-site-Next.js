import styles from './hunthing.module.css'

export default function Page() {
    return(
    <div className={styles.hunthingcontainer}>
    <h1>情報系の就活ガイド</h1>
    <div className={styles.hunthingcontainer}>
        <h2>1. 就活の流れ</h2>
        <p>情報系の就活は一般的な業界とは異なり、インターンシップの活用や技術面接が重視される傾向があります。</p>
        <ul>
            <li>大学3年生の夏：インターンシップ参加</li>
            <li>大学3年生の冬：本格的な企業研究・エントリーシート（ES）作成</li>
            <li>大学4年生の春：面接・技術試験</li>
            <li>内定獲得</li>
        </ul>
    </div>

    <div className={styles.hunthingcontainer}>
        <h2>2. インターンシップの活用</h2>
        <p>エンジニア職はインターン経験が重要視されるため、複数のインターンに参加することをおすすめします。</p>
        <ul>
            <li>短期インターン（1日～1週間）：業界理解を深める</li>
            <li>長期インターン（1ヶ月以上）：実務経験を積む</li>
        </ul>
    </div>

    <div className={styles.section}>
        <h2>3. 必要なスキルと対策</h2>
        <p>情報系の就活では、以下のスキルが求められます。</p>
        <ul>
            <li>プログラミング（Python, Java, C++ など）</li>
            <li>アルゴリズムとデータ構造の理解</li>
            <li>Git・Dockerなどの開発ツールの使用経験</li>
            <li>インターンや実務での経験</li>
        </ul>
        <p>これらのスキルを学ぶために、LeetCodeやAtCoderでの問題演習、個人開発の経験を積むことが有効です。</p>
    </div>

    <div className={styles.section}>
        <h2>4. 技術面接対策</h2>
        <p>情報系の企業では、技術試験が選考の重要な要素となります。主な対策方法は以下の通りです。</p>
        <ul>
            <li>競技プログラミングの練習</li>
            <li>過去問の解答練習（Google, Amazon などの技術面接問題）</li>
            <li>システム設計の学習（設計パターン、データベース設計）</li>
        </ul>
    </div>

    <div className={styles.section}>
        <h2>5. まとめ</h2>
        <p>情報系の就活では、早めの準備と技術力の向上が成功の鍵です。インターンへの参加、技術面接の練習、自己PRの準備をしっかり行いましょう。</p>
    </div>
    </div>
  )
}