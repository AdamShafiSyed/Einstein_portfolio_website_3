document.addEventListener( "DOMContentLoaded", getBooks());
function getBooks(){
    fetch("https://upadhayay.github.io/db.json")
.then(function (response) {
    return response.json();
})
.then(function (db) {
    let placeholder = document.querySelector(".papers_container");
    let out = "";
    for (let i = 0; i < db.books.length; i++) {
        out += `
        <div class="paper">
            <h2>Title:${db.books[i].title} (${db.books[i].year})</h2>
            <a href="#" class="read_more">Read More</a>
        </div>
                `;
    }

    placeholder.innerHTML = out;
});
}
