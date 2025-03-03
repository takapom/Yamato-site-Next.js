"use client"
import Link from "next/link"
import styles from './page.module.css' // コメントアウトを解除
import Siderbar from "./components/Siderbar"


export default function Page(){
  return (
    <main>
      {/* 以下はテストテキスト */}
       {/* <Siderbar /> */}
      {/* <div className={styles.firstComment}>
        <p className={styles.hello}>大学生徒向けの<span>ポータルサイトを作成しました！！</span></p>
        <p className={styles.hello}>新しい機能を随時追加していきます！</p>
        <p className={styles.hello}>使い方はこちらから</p>
      </div> */}

      <div className={styles.container}>
          <div className={styles.topicbox}>
            <div className={styles.topicheader}>今週のトピック</div>
            <div className={styles.topiccontent}>
              今年度の新しいプロジェクトについて、学生の皆さんにご案内します。環境保護、持続可能な開発、そして最新のテクノロジーを組み合わせたプロジェクトがスタートします。詳細は来週のイベントで発表予定です！
            </div>
          </div>
        </div>

      <div className={styles.containerNew}>
        <div className={styles.newMake}>
          <h1 className={styles.kousin}>更新内容</h1>
          <p className={styles.newtext}>2/24：教科書売買システムのバグ修正</p>
          <p className={styles.newtext}>2/24：ログインバグ修正</p>
          <p className={styles.newtext}>2/25：就活情報の記載</p>
          <p className={styles.newtext}>2/25：プログラミング言語の追記</p>
        </div>
      </div>

      <section className={styles.studySyukatuContainer}>

             <div className={styles.language}>
              <h3>就活情報</h3>
              <p>これから就活やインターンが始まりどういう技術が必要か、何をやるのかなどまとめてます！！</p>
              <Link href="/programing">
              <button>こちら</button>
              </Link>
            </div>

            <div className={styles.language}>
              <h3>開発言語</h3>
              <p>システムエンジニアや開発の職種でどういった言語やツールがあるかわからない方向けにまとめてます！！</p>
              <Link href="/hunthing">
              <button>こちら</button>
              </Link>
            </div>

      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogo}>
            <h2>YamatoWeb</h2>
            <p>© 2025 MyWebsite. All Rights Reserved.</p>
          </div>
       </div> 
    </footer>
    </main>
  )
}