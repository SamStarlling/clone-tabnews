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
            <blockquote>
                <p>Deus não fez tudo num só dia; o que me faz pensar que eu possa? <cite>(William Shakespeare)</cite>
                </p>
            </blockquote>
        </div>
    )
}

export default Home;
