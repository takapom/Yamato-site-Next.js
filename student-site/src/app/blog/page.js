// import styles from "./blog.module.css"
"use client";

import Link from "next/link";
import styles from "./blog.module.css"
import { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";//これ以上変更しない！！
// import { auth } from "../../../firebase/config";
 import { serverTimestamp } from "firebase/firestore";


export default function Blog(){
const [ title, setTitle ] = useState("");//タイトル管理
const [postText, setPostText] = useState("");//投稿内容管理

// データベースに投稿
const createPost = async() => {
  <siderbar />
  window.alert("投稿しました")
  
  setTitle("")
  setPostText("")
  await addDoc(collection(db, "posts"), {
    title: title,//タイトル
    postText: postText,//内容
    createdAt: serverTimestamp(), // 作成日時を設定
    // author:{
    //   username: うんち
    //   id: auth.currentUser.uid
    // }
  })
}

  // const createPostPage = () => {

  // }

  // const postContainer = () => {

  // }
    return(
    <div className={styles.createPostPage}>
        <div className={styles.postContainer}>
        <h1 className=''>投稿する</h1>
         <div className={styles.inputPost}>
          <div>タイトル</div>
           <input type="text" placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='inputPost'>
          <div>投稿</div>
          <textarea placeholder='投稿内容を記入'  onChange={(e) => setPostText(e.target.value)}></textarea>
        </div>
        <button className={styles.postButton} onClick={createPost}>投稿する</button>
        <Link href="all-blog">
          <button>全ての投稿を見る</button>
        </Link>
      </div>
   </div>
    )
}