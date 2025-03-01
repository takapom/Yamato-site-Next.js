import styles from './programing.module.css'

export default function Page() {
    return(
        <>
        <div className={styles.programContainer}>
          <h1 className={styles.firstText}>
            プログラミング言語やフレームワーク、ツールなどを分かりやすく書いてます！！
          </h1>

          <section className={styles.category}>
            <h2>🖥️ フロントエンド開発（Webサイトの見た目を作る）</h2>
            <div className={styles.language}>
              <h3>HTML</h3>
              <p>Webページの「骨組み」を作る言語。ボタンや画像、リンクを配置する。</p>
            </div>
            <div className={styles.language}>
              <h3>CSS</h3>
              <p>Webページの「デザイン」を決める言語。色やレイアウト、アニメーションを設定できる。</p>
            </div>
            <div className={styles.language}>
              <h3>JavaScript</h3>
              <p>Webページに「動き」をつけるプログラミング言語。ボタンのクリックやアニメーションを作れる。</p>
            </div>
            <div className={styles.language}>
              <h3>React</h3>
              <p>JavaScriptのフレームワークで、WebサイトのUIを効率よく作れる。</p>
            </div>
            <div className={styles.language}>
              <h3>Next.js</h3>
              <p>React の拡張版で、より高速なWebサイトを作れる。</p>
            </div>
          </section>

          <section className={styles.category}>
            <h2>🔧 バックエンド開発（データやシステムを管理する）</h2>
            <div className={styles.language}>
              <h3>Python</h3>
              <p>初心者向けで学びやすく、AIやデータ分析にも使われる万能な言語。</p>
            </div>
            <div className={styles.language}>
              <h3>Java</h3>
              <p>大企業や銀行のシステムに使われる、信頼性の高い言語。</p>
            </div>
            <div className={styles.language}>
              <h3>Go</h3>
              <p>高速な処理ができるサーバー向けの言語。シンプルで学びやすい。</p>
            </div>
          </section>

          <section className={styles.category}>
            <h2>🎮 ゲーム・システム開発</h2>
            <div className={styles.language}>
              <h3>C</h3>
              <p>OSや組み込みシステムに使われる、超高速なプログラミング言語。</p>
            </div>
            <div className={styles.language}>
              <h3>C++</h3>
              <p>ゲーム開発やハイパフォーマンスなアプリに使われる言語。</p>
            </div>
            <div className={styles.language}>
              <h3>C#</h3>
              <p>Unity でのゲーム開発に使われる言語。ゲームを作りたい人におすすめ！</p>
            </div>
          </section>
        </div>
        </>
    )
}