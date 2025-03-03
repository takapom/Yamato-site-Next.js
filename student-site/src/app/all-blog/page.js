import Link from "next/link"
import Home from "../components/Home"
import styles from "./blog.module.css"

export default function Allcard(){
    return (
    <div className={styles.maincontent}>
        <Home />
        <Link href="blog">
        <button className={styles.postcontent}>投稿画面に移動する</button>
        </Link>
    </div>
    )
}