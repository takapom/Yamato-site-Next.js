"use client"

import Link from "next/link";
import { useEffect } from "react";



// app/components/Sidebar.js
export default function Sidebar() {
    useEffect(() =>{
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, [])
    return (
        <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{
          background: "linear-gradient(45deg,rgba(30, 21, 204, 0.78), #928dab)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="navbar-brand">Yamato-University</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className="nav-link active" aria-current="page">
                    ホーム
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login" legacyBehavior>
                  <a className="nav-link">掲示板</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/testform" legacyBehavior>
                  <a className="nav-link">テスト対策フォーム</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/programing" legacyBehavior>
                  <a className="nav-link">技術勉強</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  