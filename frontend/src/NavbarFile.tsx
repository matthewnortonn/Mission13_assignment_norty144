function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Joel's Movies
      </a>
      <ul>
        <li className="active">
          <a href="/">Home</a>
        </li>
        <li className="active">
          <a href="/podcast">Podcast</a>
        </li>
        <li className="active">
          <a href="/movies">Movie List</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
