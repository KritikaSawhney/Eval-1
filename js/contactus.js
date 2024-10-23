const searchInput = document.getElementById('searchBar');
const topics = document.querySelectorAll('.topic-item');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    topics.forEach(topic => {
        const topicText = topic.textContent.toLowerCase();
        if (topicText.includes(query)) {
            topic.style.display = '';
        } else {
            topic.style.display = 'none';
        }
    });
});