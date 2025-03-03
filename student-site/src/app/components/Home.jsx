"use client"

import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import { db } from '../../firebase/config'; // インポートパスを確認
import styles from "./Home.module.css";


export default function Home() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            const postRef = collection(db, "posts")
            const  q = query(postRef, orderBy("createdAt", "desc"))
            const data = await getDocs(q);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            // const q = query(data, orderBy("posts", "desc"));
        };
        getPost();
    }, []);

    const handleDelete = async(id) => {
        await deleteDoc(doc(db, "posts", id));
        window.location.href = "/all-blog";
        window.alert("消去しました");
    };

    return (
        <div className={styles.homePage}>
            {postList.map((post) => (
                <div className={styles.postContents} key={post.id}>
                    <div className={styles.posHeader}>
                        <h1>{post.title}</h1>
                    </div>
                    <div className={styles.postTextContainer}>
                        {post.postText}
                    </div>
                    <div className={styles.cotentText}>
                      <div className={styles.cotentText}>
                    <p>投稿日時: {post.createdAt && post.createdAt.toDate().toLocaleString()}</p>
                        </div>
                    </div>
                    <div className={styles.nameAndDeleteButton}>
                        <button onClick={() => handleDelete(post.id)}>消去</button>
                    </div>
                    <div className={styles.nameAndDeleteButton}>
                        <button>chat</button>
                    </div>
                </div>
            ))}
        </div>
    );
}