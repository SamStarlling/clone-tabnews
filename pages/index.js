function Home({ theme, toggleTheme }) {
  return (
    <div className="center-container">
      <div className="controls-row">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-pressed={theme === "dark"}
        >
          Alternar tema ({theme === "light" ? "claro" : "escuro"})
        </button>
      </div>

      <h1 className="title">
        Ter você do lado é o bem mais valioso e nenhum dinheiro pode comprar
      </h1>
    </div>
  );
}

export default Home;
