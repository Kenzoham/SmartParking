console.log("mulai react");

/**
 *
 * membuat component Helo.
 * Mencetak UI (elements)
 */
function Hello(props) {
  //diluar return merupakan tag javascript biasa
  const nama = "Ilham";

  //didalam return merupakan html atau disebut dengan jsx
  return (
    <div className="hello">
      <h2> Hello react</h2>
      <p> Saya {props.name} - Frontend Engineer</p>
    </div>
  );
}

/**
 * Membuat component Header.
 * Menampilkan navigasi
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/**
 * Membuat component Main
 * Menampung konten utama
 */
function Main() {
  return (
    <main>
      <Hello name="Ilham" />
      <Hello name="Haji" />
      <Hello name="Abdullah" />
      <Hello name="Kenzoham" />
      <Hello name="Walter" />
    </main>
  );
}

/**
 * Membuat component Footer
 * untuk menampilkan informasi website
 */
function Footer() {
  return (
    <footer>
      <h2>Copyright ilham</h2>
      <p>Dibuat dengan menggunakan react js</p>
    </footer>
  );
}

/**
 * Membuat Component App.
 * Component utama yang menampung semua component
 */

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
