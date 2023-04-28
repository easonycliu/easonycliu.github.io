const data = [
    ["0", "The Lord of the Rings", "J. R. R. Tolkien", "English", "1954-1955", "150 million", "magazine"],
    ["1", "Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million", "magazine"],
    ["2", "Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million", "textbook"],
    ["3", "And Then There Were None", "Agatha Christie", "English", "1939", "100 million", "magazine"],
    ["4", "Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100 million", "textbook"],
    ["5", "The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million", "magazine"],
    ["6", "She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million", "magazine"],
    ["7", "She: A sb of sjc", "great.Eason", "English", "2022", "100 million", "magazine"],
    ["8", "he: A sjc of sb", "The Eason", "English", "2022", "100 million", "textbook"],
    ["9", "sbsjc", "Eason", "English", "2022", "100 million", "magazine"],
    ["10", "sjcSB!", "Liu", "English", "2022", "100 million", "magazine"],
    ["11", "SJC54088", "Eason Liu", "English", "2022", "100 million", "magazine"],
];

export function getBooks() {
    let bookData = [];
    data.forEach(element => {
        bookData.push(
            {
                id: element[0],
                image: require('../assets/apple.jpg'),
                name: element[1],
                author: element[2],
                price: 10
            }
        );
    });
    return bookData;
};

export function getBooksById(id) {
    var bookData;
    if (id) {
        data.forEach(element => {
            if (element[0] === id) {
                bookData = {
                        id: element[0],
                        image: require('../assets/apple.jpg'),
                        name: element[1],
                        author: element[2],
                        price: 10
                    };
            }
        });
    }
    return bookData;
}

export function getBooksByName(name) {
    let bookData = [];
    if (name) {
        data.forEach(element => {
            if (element[1].toLowerCase().includes(name.toLowerCase())) {
                bookData.push(
                    {
                        id: element[0],
                        image: require('../assets/apple.jpg'),
                        name: element[1],
                        author: element[2],
                        price: 10
                    }
                );
            }
        });
    }
    return bookData;
}

export function getBooksByClassName(className) {
    let bookData = [];
    if (className) {
        data.forEach(element => {
            if (element[6].toLowerCase() === className.toLowerCase()) {
                bookData.push(
                    {
                        id: element[0],
                        image: require('../assets/apple.jpg'),
                        name: element[1],
                        author: element[2],
                        price: 10
                    }
                );
            }
        });
    }
    return bookData;
}