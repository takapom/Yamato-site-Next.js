"use client";
import Link from "next/link";
import styles from "./page.module.css"; // コメントアウト解除済み
import Siderbar from "./components/Siderbar";

export default function Page() {
  return (
    <main>
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </symbol>
    </svg>

    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)">
        <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
        <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
            <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
            Light
            <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
            <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
            Auto
            <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>

    
<header data-bs-theme="dark">

</header>

<main>

<section
  className="py-5 text-center container"
  style={{
    backgroundImage: 'url("https://qureo.jp/class/wp/content/uploads/%E3%83%95%E3%82%9A%E3%83%AD%E3%82%AF%E3%82%99%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%AF%E3%82%99%E3%81%A8%E3%81%AF%EF%BC%9F%E6%84%8F%E5%91%B3%E3%82%84%E5%9F%BA%E7%A4%8E%E7%9F%A5%E8%AD%98%E3%82%92%E5%88%86%E3%81%8B%E3%82%8A%E3%82%84%E3%81%99%E3%81%8F%E8%AA%AC%E6%98%8E%EF%BC%81.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light"></h1>
        <p className="lead text-body-secondary"></p>
        <p>
          <a href="#" className="btn btn-primary my-2">How to use Web-site</a>
        </p>
      </div>
    </div> 
    {/* <div className="row py-lg-5">
  <div className="col-lg-6 col-md-8 mx-auto position-relative" style={{ minHeight: '100px' }}>
    <h1 className="fw-light"></h1>
    <p className="lead text-body-secondary"></p>
    <a href="#" className="btn btn-primary position-absolute bottom-0 end-0 my-2"
    style={{bottom: '-20px' }}
    >
      How to use Web-site
    </a>
  </div>
</div> */}

  </section>

  <div className="album py-5 bg-body-tertiary">
    <div className="container">

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-md-center">
  <div className="col">
    <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="white" dy=".3em"fontWeight="bold">就活</text>
      </svg>
      <div className="card-body">
      <p className="card-text fw-bold fs-5">就活情報</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link href="hunthing">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            </Link>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small className="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="white" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">プログラミング</text>
      </svg>
      <div className="card-body">
        <p className="card-text fw-bold fs-5">プログラミング言語</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link href="programing">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            </Link>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small className="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

</main>


<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; 2025 Yamato University</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
   
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li ><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li ><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li ><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li ><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li ><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>
<script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous">

</script>

    </main>
  );
}
