function sendToGoogleSheets(data) {
    const url = 'https://your-google-sheet-web-app-url'; // הכנס את ה-URL של ה-Web App שלך

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('המידע הושלם בהצלחה!');
        } else {
            alert('שגיאה בהשלמת המידע.');
        }
    })
    .catch((error) => {
        console.error('שגיאה:', error);
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // למנוע את שליחת הטופס הרגילה

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    sendToGoogleSheets(formData);
});
