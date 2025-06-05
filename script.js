function mostrarDetalhes(elemento) {
    const detalhes = elemento.parentElement.nextElementSibling;

    if (detalhes.style.display === "none" || detalhes.style.display === "") {
        detalhes.style.display = "block";
        elemento.textContent = "Leia menos";
    } else {
        detalhes.style.display = "none";
        elemento.textContent = "Leia mais";
    }
}
