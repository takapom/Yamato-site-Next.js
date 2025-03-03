"use client";

import styles from "./login.module.css"
import { auth, provider } from "../../firebase/config"; 
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation"; // 修正箇所
import { useState } from "react";
import Link from "next/link";


export default function LoginPage() {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
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
        <p>アカウントをお持ちでないですか？ <a href="#" className="register-link" >登録</a></p>
        </Link>
    </div>
  )
}

