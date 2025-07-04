/// Updated JavaScript for Book Selector with Image Left, Info Right Popup
const bookArray = [
    {
    id: 1,
    category: 'Philosophy',
    title: 'As a Man Thinketh',
    description: 'An essay and self-help classic on the power of thought.',
    img: 'Book_List/As_a_Man_Thinketh/As_a_Man_Thinketh_cover.png',
    author: 'James Allen',
    releaseDate: '1903',
    type: 'book',
    readLink: 'Book_List/As_a_Man_Thinketh/As_Man_Thinketh.pdf'
  },
  {
    id: 2,
    category: 'Philosophy',
    title: 'The Kybalion',
    description: 'A Study of The Hermetic Philosophy of Ancient Egypt and Greece.',
    img: 'Book_List/The_Kybalion/Kybalion_cover.png',
    author: 'Three Initiates',
    releaseDate: '1908',
    type: 'book',
    readLink: 'Book_List/The_Kybalion/Kybalion.pdf',
  },
  {
    id: 3,
    category: 'Philosophy',
    title: 'The Master Key System',
    description: 'A personal development book outlining mental training.',
    img: 'Book_List/The_Master_Key_System/MKS_cover.png',
    author: 'Charles F. Haanel',
    releaseDate: '1912',
    type: 'book',
    readLink: 'Book_List/The_Master_Key_System/The_Master_Key_System.pdf'
  },
  {
    id: 4,
    category: 'Philosophy',
    title: 'Natural Law Seminar',
    description: "Mark Passio's Natural Law presentation argues that objective, universal moral laws, independent of human belief, govern the consequences of human behavior. And that aligning with these laws is essential for true freedom and avoiding chaos and tyranny.",
    img: 'Book_List/Natural_Law/Natural_Law3.png',
    author: 'Mark Passio',
    releaseDate: '2013',
    type: 'video',
      parts: [
    { label: 'Watch Part 1', link: 'https://odysee.com/@woeih:e/Mark-Passio-Natural-Law-Seminar-Part-1-of-3-2013-10-19:c' },
    { label: 'Watch Part 2', link: 'https://odysee.com/@woeih:e/Mark-Passio-Natural-Law-Seminar-Part-2-of-3-2013-10-19:b' },
    { label: 'Watch Part 3', link: 'https://odysee.com/@woeih:e/Mark-Passio-Natural-Law-Seminar-Part-3-of-3-2013-10-19:9' } ]
  },
  {
    id: 5,
    category: 'Philosophy',
    title: 'What On Earth Is Happening',
    description: "Mark Passio's video series What On Earth Is Happening lays the foundational framework for his extensive teachings on consciousness, Natural Law, mind control, and the occult. These initial episodes are designed to awaken viewers to the unseen forces influencing human behavior and societal structures.",
    img: 'Book_List/WOEIH/WOEIH_cover.png',
    author: 'Mark Passio',
    releaseDate: '2008',
    type: 'video',
      parts: [
    { label: 'Watch Part 1', link: 'https://odysee.com/@woeih:e/What-On-Earth-Is-Happening---Part-1-of-4:1' },
    { label: 'Watch Part 2', link: 'https://odysee.com/@woeih:e/What-On-Earth-Is-Happening---Part-2-of-4:6' },
    { label: 'Watch Part 3', link: 'https://odysee.com/@woeih:e/What-On-Earth-Is-Happening---Part-3-of-4:7' },
    { label: 'Watch Part 4', link: 'https://odysee.com/@woeih:e/Mark-Passio---What-On-Earth-Is-Happening---Part-4-of-4:e' } ]
  },
  {
    id: 6,
    category: 'Philosophy',
    title: 'De-Mystifying The Occult',
    description: 'This video series explains that the occult is not inherently evil but simply hidden knowledge. Mark shows how these tools are deliberately weaponized by secret societies and ruling classes to maintain psychological, spiritual, and societal control over unaware populations.',
    img: 'Book_List/De_Mystifying_The_Occult/De_Mystifying_The_Occult_cover.png',
    author: 'Mark Passio',
    releaseDate: '2014 / 2016',
    type: 'video',
      parts: [
    { label: 'Watch Part 1', link: 'https://odysee.com/@woeih:e/Mark-Passio-De-Mystifying-The-Occult-Part-1-of-3:5' },
    { label: 'Watch Part 2', link: 'https://odysee.com/@woeih:e/Mark-Passio-De-Mystifying-The-Occult-Part-2-of-3:3' },
    { label: 'Watch Part 3', link: 'https://odysee.com/@woeih:e/Mark-Passio-De-Mystifying-The-Occult-Part-3-of-3:a' },
    { label: 'Watch Part 4', link: 'https://odysee.com/@woeih:e/Mark-Passio-De-Mystifying-The-Occult-Part-II-Satanism-The-Dark-Occult:0' } ]
  },
  {
    id: 7,
    category: 'Philosophy',
    title: 'Fake-Ass Christians',
    description: 'Mark Passio explains that human beings have been given a false form of Christianity to keep them spiritually asleep. He points out the hallmark beliefs and behaviors of false "Christians" and defines what it really means to be an Authentic Christian.',
    img: 'Book_List/Fake_Ass_Christians/Fake_Ass_Christians_cover.png',
    author: 'Mark Passio',
    releaseDate: '2017',
    type: 'video',
      parts: [
    { label: 'Watch Part 1', link: 'https://odysee.com/@woeih:e/Mark-Passio-Fake-Ass-Christians-Part-1-of-2:c' },
    { label: 'Watch Part 2', link: 'https://odysee.com/@woeih:e/Mark-Passio-Fake-Ass-Christians-Part-2-of-2:7' } ]
  },
  {
    id: 8,
    category: 'Philosophy',
    title: 'De-Facto Satanism',
    description: 'Mark Passio argues that most people unknowingly live by Satanic principles: selfishness, moral relativism, and blind obedience. He calls for conscious moral awakening to break this hidden alignment fueling evil systems.',
    img: 'Book_List/De-Facto_Satanism/De-Facto_Satanism.png',
    author: 'Mark Passio',
    releaseDate: '2022',
    type: 'video',
      parts: [
    { label: 'Watch Part 1', link: 'https://odysee.com/@woeih:e/Mark-Passio-De-Facto-Satanism:a' },
    { label: 'Watch Summary by Greg Reese', link:'https://banned.video/watch?id=63b5761d3117050c27835c93'}]
    },
  {
    id: 9,
    category: 'Controversial',
    title: 'PsyOps: An Introduction to Occult Psychological Warfare',
    description: 'A video presentation that explains what Psychological Warfare is, who employs it, and most importantly, WHY it works as a method of mass manipulation.',
    img: 'Book_List/Intro_to_Psyops/Intro_To_Psyops_cover.png',
    author: 'Mark Passio',
    releaseDate: '2022',
    type: 'video',
    watchLink: 'https://odysee.com/@woeih:e/Mark-Passio-Psy-Ops:8'
  },
  {
    id: 10,
    category: 'Controversial',
    title: 'Industrial Society and Its Future',
    description: 'A comprehensive critique of the global "techno-industrial system" and its damage on the human psyche, freedom, and potential.',
    img: 'Book_List/Industrial_Society_and_its_Future/ISAIF.png',
    author: 'Theodore Kaczynski',
    releaseDate: '1995',
    type: 'book',
    readLink: 'Book_List/Industrial_Society_and_its_Future/Industrial Society and Its Future.pdf'
  },
  {
    id: 11,
    category: 'Controversial',
    title: 'Silent Weapons For Quiet Wars',
    description: 'Whether genuine or fabricated, this document lays out a vision of technocratic elite control through economic manipulation and psychological warfare. A form of war waged not with bombs, but with information, currency, and control of perception.',
    img: 'Book_List/Silent_Weapons_For_Quiet_Wars/SWFQW.jpg',
    author: '???',
    releaseDate: '1979 -supposedly-',
    type: 'book',
      parts: [
    { label: 'Read or Download Book', link: 'Book_List/Silent_Weapons_For_Quiet_Wars/SILENT WEAPONS for QUIET WARS.pdf' },
    { label: 'Watch Book Summary', link: 'https://odysee.com/@GloboNarc:e/manual-for-genocide-silent-weapons-for:6' } ]
  },
  {
    id: 12,
    category: 'Controversial',
    title: 'Ancient Bloodlines/Contemporary Power',
    description: 'An interview featuring Professor Hamamoto and Leuren Moret on the continued influence and impact of ancient bloodlines on modern global power structures. They explore historical, geopolitical, and esoteric themes, presenting a perspective that links elite lineages with contemporary control systems.',
    img: 'Book_List/Ancient_Bloodlines_Contemporary_Power/Ancient_Bloodlines_Contemporary_Power.png',
    author: 'Professor Hamamoto',
    releaseDate: '2016',
    type: 'video',
    watchLink: 'https://www.youtube.com/watch?v=9QbI5RPbHWo'
  },
  {
    id: 13,
    category: 'Tech Guides',
    title: "Technology's Critical Role In The War For Freedom",
    description: 'Mark Passio explains how modern technology is a critical component to the solution to the condition of human slavery. He talks about the communication and publishing aspects of computing technology.',
    img: 'Book_List/Techs_Critical_Role/Techs_Critical_Role.png',
    author: 'Mark Passio',
    releaseDate: '2023',
    type: 'video',
    watchLink: "https://odysee.com/@woeih:e/Mark-Passio-Technology's-Critical-Role-In-The-War-For-Freedom:a"
  },
  {
    id: 14,
    category: 'Tech Guides',
    title: 'Intro to Linux',
    description: 'Linux is a free, open-source operating system known for its stability, security, and flexibility. Its widely used in servers, desktops, and embedded systems. It is highly customizable, efficient, and has strong privacy since it avoids built-in data collection and gives users full control of their computers.',
    img: 'Book_List/Intro_to_Linux/Intro_to_Linux_Cover.png',
    author: 'Various',
    releaseDate: '2025',
    type: 'video',
      parts: [
    { label: 'Watch How to install Linux', link: 'https://www.youtube.com/watch?v=pwWfJwlZLWg' },
    { label: 'Read Intro to Unix/Linux', link: 'Book_List/Intro_to_Linux/Intro_to_Unix.pdf' },
    { label: 'Linux command line Tutorials', link: 'Book_List/Intro_to_Linux/Linux-Tutorials.pdf' },
    { label: 'List of Linux Commands', link: 'Book_List/Intro_to_Linux/Index _of_Linux _command_line.pdf' }   ]
  },
  {
    id: 15,
    category: 'Tech Guides',
    title: 'Intro to Python',
    description: 'Python is a high-level, general-purpose programming language known for its simplicity, readability, and versatility. Its used in everything from web development and automation to data science, machine learning, scripting, and software prototyping.',
    img: 'Book_List/Intro_to_Python/Python_cover.png',
    author: 'Various',
    releaseDate: '2025',
    type: 'video',
      parts: [
    { label: 'Watch Python in 100 Seconds', link: 'https://www.youtube.com/watch?v=x7X9w_GIm1s' },
    { label: 'Python Dev Guide (for Linux users)', link: 'Book_List/Intro_to_Python/My_Python_Guide.pdf' },
    { label: 'Python Tutorial', link: 'Book_List/Intro_to_Python/Tutorial_Python.pdf' },
    { label: 'Read A Practical Intro to Python Programming', link: 'Book_List/Intro_to_Python/A_Practical_Introduction_to_Python_Programming_Heinold.pdf' }   ]
  },
  {
    id: 16,
    category: 'Fiction?',
    title: 'The Coming Race',
    description: 'Follow an explorer who discovers an advanced subterranean civilization, the Vril-ya, who wield a powerful energy called Vril that grants them immense abilities, raising questions about the future of humanity.',
    img: 'Book_List/The_Coming_Race/The_Coming_Race_(1871).png',
    author: 'Edward Bulwer-Lytton',
    releaseDate: '1871',
    type: 'book',
    readLink: 'Book_List/The_Coming_Race/TheComingRace.pdf'
  }

];

const bookContainer = document.querySelector('.bookCenterMan');
const selectorContainer = document.querySelector('.selector');

window.addEventListener('DOMContentLoaded', () => {
  displayBooks(bookArray);
  createCategoryButtons();
  setupBookInfo();
});

function displayBooks(array) {
  const booksHTML = array
    .map(
      (book) => 
      `<article class="book" data-id="${book.id}">
        <img src="${book.img}" onerror="this.onerror=null; this.src='bookimg/nocover.png';" />
        <div class="bookDetails">
          <span class="bookTitle">${book.title}</span>
          <span class="bookDescription">${book.description}</span>
        </div>
      </article>`
    )
    .join('');
  bookContainer.innerHTML = booksHTML;
}

function createCategoryButtons() {
  const categories = bookArray.reduce((acc, book) => {
    if (!acc.includes(book.category)) {
      acc.push(book.category);
    }
    return acc;
  }, ['All']);

  const buttonsHTML = categories
    .map((category) => `<button class="btnStyle" data-id="${category}">${category}</button>`)
    .join('');

  // Add the search input field to the right of the category buttons
  const searchHTML = `
    <div class="search-container">
      <input type="text" id="searchInput" placeholder="Search by title or author" autocomplete="off"/>
      <div id="autocompleteDropdown" class="autocomplete-dropdown"></div>
    </div>
  `;

  selectorContainer.innerHTML = buttonsHTML + searchHTML;

  const buttons = document.querySelectorAll('.btnStyle');
  const searchInput = document.querySelector('#searchInput');
  const autocompleteDropdown = document.querySelector('#autocompleteDropdown');

  // Handle category button clicks
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const filteredBooks = category === 'All' ? bookArray : bookArray.filter((book) => book.category === category);
      displayBooks(filteredBooks);
      setupBookInfo();
    });
  });

  // Handle search input
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    // Filter books based on search term (both title and author)
    const filteredBooks = bookArray.filter((book) => 
      book.title.toLowerCase().includes(searchTerm) || 
      book.author.toLowerCase().includes(searchTerm)
    );

    // Display autocomplete dropdown based on input
    if (searchTerm) {
      autocompleteDropdown.innerHTML = filteredBooks
        .map((book) => `<div class="autocomplete-item">${book.title} by ${book.author}</div>`)
        .join('');
      autocompleteDropdown.style.display = 'block';
    } else {
      autocompleteDropdown.style.display = 'none';
    }

    // Handle click on an autocomplete suggestion
    const autocompleteItems = document.querySelectorAll('.autocomplete-item');
    autocompleteItems.forEach((item) => {
      item.addEventListener('click', () => {
        const selectedText = item.textContent;
        searchInput.value = selectedText;  // Set input to selected book's title and author
        const filteredBooks = bookArray.filter((book) => 
          book.title.toLowerCase() === selectedText.split(' by ')[0].toLowerCase() || 
          book.author.toLowerCase() === selectedText.split(' by ')[1].toLowerCase()
        );
        displayBooks(filteredBooks);
        setupBookInfo();
        autocompleteDropdown.style.display = 'none'; // Hide dropdown after selection
      });
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      autocompleteDropdown.style.display = 'none';
    }
  });
}

function setupBookInfo() {
  const books = document.querySelectorAll('.book');
  const bookOverlay = document.querySelector('.bookMoreInfo');

  books.forEach((bookEl) => {
    bookEl.addEventListener('click', () => {
      const bookId = parseInt(bookEl.dataset.id); // Correctly retrieve book ID from the dataset
      const book = bookArray.find((b) => b.id === bookId); // Find the correct book based on ID

      if (!book) return; // If no book is found, exit the function

      // Set up the overlay content with the selected book's details
      bookOverlay.innerHTML = `
        <div class="bookDetailsOverlay">
          <div class="popupImage">
            <img src="${book.img}" onerror="this.onerror=null; this.src='bookimg/nocover.png';" />
          </div>
          <div class="popupInfo">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Release Date:</strong> ${book.releaseDate}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p>${book.description}</p>
            <div class="popupButtons">
              ${
                book.parts && book.parts.length > 0 //if a book or video has multiple parts, the popup will show separate buttons for each part.
                  ? book.parts.map(part => `<a href="${part.link}" target="_blank" class="popupBtn">${part.label}</a>`).join('')
                  : (
                      book.type === 'book'
                        ? (book.readLink ? `<a href="${book.readLink}" target="_blank" class="popupBtn">Read or Download Book</a>` : '')
                        : (book.watchLink ? `<a href="${book.watchLink}" target="_blank" class="popupBtn">Watch Video</a>` : '')
                    )
              }
            </div>
          </div>
          <button class="closeOverlay">X</button>
        </div>`;

      bookOverlay.classList.add('showBox'); // Show the overlay

      // Close button functionality
      document.querySelector('.closeOverlay').addEventListener('click', () => {
        bookOverlay.classList.remove('showBox'); // Hide the overlay when the close button is clicked
      });
    });
  });
}
