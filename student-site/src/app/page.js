"use client"
import Link from "next/link"
import styles from './page.module.css' // コメントアウトを解除
import Siderbar from "./components/Siderbar"


export default function Page(){
  return (
    <main>
       {/* <Siderbar /> */}
      <div className={styles.firstComment}>
        <p className={styles.hello}>大学生徒向けの<span>ポータルサイトを作成しました！！</span></p>
        <p className={styles.hello}>新しい機能を随時追加していきます！</p>
        <p className={styles.hello}>使い方はこちらから</p>
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
        <div className={styles.studyContainer}>
          <p>Programing</p>
          <Link href="/programing">
            <button>check</button>
          </Link>
        </div>

        <div className={styles.syukatuContainer}>
          <p>job hunting</p>
          <Link href="/hunthing">
            <button>check</button>
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