const accountSid = 'AC5d64f4cd95772e122053397cd4c435c9'; 
const authToken = '1a5e2f2be61984eadab5b9856ff06706';    

const phoneInput = document.querySelector('.phoneInput');
const subButton = document.querySelector('.subscribeButton');

const sendWhatsAppMessage = async (customerNumber, newsItems) => {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const fromNumber = 'whatsapp:+14155238886';
    const toNumber = `whatsapp:+91${customerNumber}`;
    const messageBody = "📈 Cryptocurrency News Updates:\n\n" + 
        newsItems.map((item, index) => `${index + 1}. ${item}`).join('\n');

    const body = new URLSearchParams({
        From: fromNumber,
        To: toNumber,
        Body: messageBody
    });

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Message sent successfully:', data.sid);
    } else {
        const error = await response.json();
        console.error('Failed to send message:', error.message);
    }
};

const newsURL = 'https://gnews.io/api/v4/search?q=cryptocurrency&token=aa05ad71aef78e8fc1a6f2ea9354b2ea';

const getNewsData = async () => {
    try {
        const response = await fetch(newsURL);
        const data = await response.json();
        return data.articles.map(article => article.title); 
    } catch (error) {
        console.error('Error fetching news data:', error);
        return []; 
    }
}

subButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const customerNumber = phoneInput.value.trim(); 
    
    const newsItems = await getNewsData(); 
    if (newsItems.length > 0) {
        await sendWhatsAppMessage(customerNumber, newsItems);
    } else {
        console.log('No news items to send.');
    }
});
