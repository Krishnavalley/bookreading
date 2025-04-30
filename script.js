// Example book data for different categories
const booksData = {
    spiritual: [
        { title: "The Bhagavad Gita", description: "A spiritual scripture of deep wisdom.", image: "https://via.placeholder.com/220x200?text=Bhagavad+Gita" },
        { title: "Bhakti Yoga", description: "The path of love and devotion.", image: "https://via.placeholder.com/220x200?text=Bhakti+Yoga" }
    ],
    philosophy: [
        { title: "The Republic", description: "A work by Plato on justice and the ideal state.", image: "https://via.placeholder.com/220x200?text=The+Republic" },
        { title: "Meditations", description: "The personal thoughts of Marcus Aurelius.", image: "https://via.placeholder.com/220x200?text=Meditations" }
    ],
    history: [
        { title: "Sapiens", description: "A history of humanity from the stone age to the modern age.", image: "https://via.placeholder.com/220x200?text=Sapiens" },
        { title: "Guns, Germs, and Steel", description: "A study of human history and its impact.", image: "https://via.placeholder.com/220x200?text=Guns+Germs+and+Steel" }
    ],
    'self-help': [
        { title: "Atomic Habits", description: "A guide to building good habits and breaking bad ones.", image: "https://via.placeholder.com/220x200?text=Atomic+Habits" },
        { title: "The Power of Now", description: "A spiritual guide to living in the present moment.", image: "https://via.placeholder.com/220x200?text=The+Power+of+Now" }
    ]
};

// Function to show books based on selected category
function showCategory(category) {
    const bookListDiv = document.getElementById('book-list');
    bookListDiv.innerHTML = ''; // Clear current list

    const books = booksData[category];

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-title">${book.title}</div>
            <div class="book-description">${book.description}</div>
            <div class="book-actions">
                <button onclick="markRead('${book.title}')">Mark as Read</button>
                <button onclick="bookmark('${book.title}')">Bookmark</button>
            </div>
        `;

        bookListDiv.appendChild(bookCard);
    });
}

// Functions for book actions
function markRead(bookTitle) {
    alert(bookTitle + " marked as read!");
}

function bookmark(bookTitle) {
    alert(bookTitle + " bookmarked!");
}

// Logout function
function logout() {
    window.location.href = "https://your-login-page-link.com"; // Replace with your login page link
}
