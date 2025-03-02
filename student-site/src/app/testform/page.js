import styles from "./test.module.css"

export default function Testform(){
    return (
        <>
        <h3>以下は2年後期試験対策テストフォームです！</h3>
        <p>現段階は仮のテキストを入力しているだけです</p>
        
        <div className={styles.container}>
      <h1 className={styles.title}>〇〇試験対策</h1>
      <nav className={styles.nav}>
        <a href="#mathematics">〇〇</a>
        <a href="#physics">〇〇</a>
        <a href="#chemistry">〇〇</a>
        <a href="#english">〇〇</a>
        <a href="#history">〇〇</a>
      </nav>

      <section id="mathematics" className={styles.section}>
        <h2>データ構造とアルゴリズム</h2>
        <p>
          テスト対策として、基本公式の暗記や演習問題の反復が重要です。特に、微分積分や統計、確率などの分野を重点的に学習しましょう。
        </p>
        <p>
          <strong>おすすめ対策:</strong> 過去問演習、参考書の活用、オンライン講座
        </p>
      </section>

      <section id="physics" className={styles.section}>
        <h2>情報セキュリティ</h2>
        <p>
          物理は、基本法則の理解と実験結果の分析が鍵です。理論と実践の両面から対策を行い、グラフの読み取りや計算問題に慣れておくと良いでしょう。
        </p>
        <p>
          <strong>おすすめ対策:</strong> 教科書の例題、問題集、実験動画の視聴
        </p>
      </section>

      <section id="chemistry" className={styles.section}>
        <h2>プログラミング１</h2>
        <p>
          化学は記憶すべき用語や反応式が多く、基本原理の理解が大切です。理論と実践のバランスを取りながら、過去問で実践力をつけましょう。
        </p>
        <p>
          <strong>おすすめ対策:</strong> 反応式の暗記、実験レポート、グループディスカッション
        </p>
      </section>

      <section id="english" className={styles.section}>
        <h2>英語</h2>
        <p>
          英語はリスニング、リーディング、文法、語彙の4技能をバランスよく学習することが求められます。毎日少しずつの積み重ねが効果的です。
        </p>
        <p>
          <strong>おすすめ対策:</strong> 単語帳、オンライン英会話、模擬試験
        </p>
      </section>

      <section id="history" className={styles.section}>
        <h2>基礎演習</h2>
        <p>
          歴史は出来事や年代、人物の因果関係を理解することが重要です。年表や図を用いて、視覚的に整理しながら覚えましょう。
        </p>
        <p>
          <strong>おすすめ対策:</strong> 年表作成、歴史ドラマ視聴、重要事件のまとめ
        </p>
      </section>
    </div>
      </>
    )
}