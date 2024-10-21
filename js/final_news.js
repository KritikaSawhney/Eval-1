document.addEventListener('DOMContentLoaded', function() {
    apikey = '2463fcd1a3f3a22aa27bb61d0bcef4d7';
    category = 'cryptocurrency';
    url = `https://gnews.io/api/v4/search?q=cryptocurrency&token=2463fcd1a3f3a22aa27bb61d0bcef4d7`;

            const apiUrl =`https://gnews.io/api/v4/search?q=cryptocurrency&token=2463fcd1a3f3a22aa27bb61d0bcef4d7`;
            //'https://gnews.io/api/v4/search?q=cryptocurrency&token=aa05ad71aef78e8fc1a6f2ea9354b2ea'
            const carouselInner = document.querySelector('.carousel-inner');
         
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    data.articles.forEach((article, index) => {
                        const carouselItem = document.createElement('div');
                        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;

                        carouselItem.innerHTML = `
                            <img src="${article.image}" class="d-block w-100" alt="${article.title}">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${article.title}</h5>
                                <p>${article.description}</p>
                                <a href="${article.url}" target="_blank" class="btn btn-primary btn-sm">Read More</a>
                            </div>
                        `;

                        carouselInner.appendChild(carouselItem);
                    });

                    // Initialize the Bootstrap carousel
                    new bootstrap.Carousel(document.getElementById('cryptoCarousel'), {
                        interval: 5000
                    });
                })
                .catch(error => {
                    console.error('Error fetching news:', error);
                    carouselInner.innerHTML = '<div class="alert alert-danger">Error loading news. Please try again later.</div>';
                });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const apiKey = '2463fcd1a3f3a22aa27bb61d0bcef4d7';
            const category = 'cryptocurrency';
            const url = `https://gnews.io/api/v4/search?q=cryptocurrency&token=2463fcd1a3f3a22aa27bb61d0bcef4d7`;
    
            const newsRow = document.getElementById('newsRow');
    
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    data.articles.forEach(article => {
                        const newsCard = createNewsCard(article);
                        newsRow.appendChild(newsCard);
                    });
                })
                .catch(error => {
                    console.error('Error fetching news:', error);
                    newsRow.innerHTML = '<div class="col-12"><div class="alert alert-danger">Error loading news. Please try again later.</div></div>';
                });
    
            function createNewsCard(article) {
                const newsCard = document.createElement('div');
                newsCard.className = 'col-md-4 news-card';
    
                const image = document.createElement('img');
                image.src = article.image || 'https://via.placeholder.com/400x300?text=No+Image';
                image.alt = article.title;
                image.className = 'img-fluid card-img-top';
    
                const newsContent = document.createElement('div');
                newsContent.className = 'news-content';
    
                const newsBadge = document.createElement('span');
                newsBadge.className = 'news-badge text-bg-light';
                newsBadge.textContent = 'NEWS';
    
                const title = document.createElement('h3');
                title.textContent = article.title;
    
                const time = document.createElement('div');
                time.className = 'news-time';
                time.textContent = formatPublishedDate(article.publishedAt);
    
                newsContent.appendChild(newsBadge);
                newsContent.appendChild(title);
                newsContent.appendChild(time);
    
                newsCard.appendChild(image);
                newsCard.appendChild(newsContent);
    
                return newsCard;
            }
    
            function formatPublishedDate(dateString) {
                const published = new Date(dateString);
                const now = new Date();
                const diffTime = Math.abs(now - published);
                const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    
                if (diffHours < 24) {
                    return `${diffHours} hours ago`;
                } else {
                    const diffDays = Math.ceil(diffHours / 24);
                    return `${diffDays} days ago`;
                }
            }
        });