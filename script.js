document.getElementById('resetbutton').addEventListener('click', function () {
    const previewElement = document.getElementById('preview');
    previewElement.innerHTML ="";
     const text = document.getElementById('input_users')
    text.value="";
})

document.getElementById('input_users').addEventListener('input', function() {
    const inputText = this.value;  // Get the input text
    const previewElement = document.getElementById('preview');
    // Convert Markdown to HTML and display it
    previewElement.innerHTML = marked.parse(inputText);
});