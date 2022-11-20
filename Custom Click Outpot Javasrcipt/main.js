function postStatus() {
    var textElement = document.getElementById('status');
    var status = textElement.value;

    var postContainer = document.getElementById('posts');
    postContainer.append(status);
}