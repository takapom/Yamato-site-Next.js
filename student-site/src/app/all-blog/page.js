import Link from "next/link"

export default function Allcard(){
    return (
        <>
        <p>こちらは投稿内容の全ページです</p>
        <Link href="blog">
        <button>投稿画面に移動する</button>
        </Link>
        </>
    )
}