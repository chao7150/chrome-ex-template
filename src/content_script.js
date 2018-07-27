const erase = () => {
    const movies = Array.from(document.getElementsByClassName("g_politics"))
    movies.forEach((movie) => movie.style.display="none")
    const rows = Array.from(document.getElementsByClassName("category_row"))
    rows.forEach((row) => row.children[2].style.display="none")
}
erase()
setInterval(erase, 1000)
