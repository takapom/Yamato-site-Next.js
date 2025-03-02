import Link from "next/link"
import Home from "../components/Home"

export default function Allcard(){
    return (
        <>
        <Home />
        <p>こちらは投稿内容の全ページです</p>
        <Home />
        <Link href="blog">
        <button>投稿画面に移動する</button>
        </Link>
        </>
    )
}