"use client";

import styles from "./login.module.css"
import { auth, provider } from "../../firebase/config"; 
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation"; // 修正箇所
import { useState, useEffect } from "react";
import Link from "next/link";

//useEffectは初回レンダリング時、依存配列に基づく再実行(第二引数)、
export default function LoginPage() {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState(null);
    useEffect(() => {
        const authStatus = localStorage.getItem("isAuth");
        if (authStatus){
            router.push("/blog")
        }
        setIsAuth(authStatus);
    }, [router])
    const loginInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            router.push("/blog")
        })
    }
  return (
    <div className={styles.logincontainer}>
        <h2>ログイン</h2>
        <button className={styles.googlebtn} onClick={loginInWithGoogle}>
            {/* <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google ロゴ"> */}
            Googleでログイン
        </button>
        <p className={styles.ortext}>または</p>
        <Link href="https://www.google.com/intl/ja/account/about/">
        <p>アカウントをお持ちでないですか？登録</p>
        </Link>
    </div>
  )
}

