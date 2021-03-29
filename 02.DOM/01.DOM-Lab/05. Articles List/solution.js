function createArticle() {
    let title = document.getElementById('createTitle').value;
    let text = document.getElementById('createContent').value;
    let articleList = document.getElementById('articles');

    let article = document.createElement('article');
    let newTitle = document.createElement('h3');
    let newText = document.createElement('p');

    if (title.length !== 0 && text.length !== 0) {

        articleList.appendChild(article);
        article.appendChild(newTitle);
        article.appendChild(newText);

        newTitle.textContent = title;
        newText.textContent = text;

        document.getElementById('createTitle').value = '';
        document.getElementById('createContent').value = '';
    }

}