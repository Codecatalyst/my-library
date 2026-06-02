
import { useState } from 'react'

function App() {
  const [books, setBooks] = useState([
  { id: 1, title: "Tuesdays with Morrie", author: "Mitch Albom", status: "unread" },
  { id: 2, title: "How to Feel Confident", author: "Leil Lowndes", status: "unread" },
  { id: 3, title: "The Art of the Good Life", author: "Rolf Dobelli", status: "unread" },
  { id: 4, title: "The Art of Worldly Wisdom", author: "Baltasar Gracián", status: "unread" },
  { id: 5, title: "Limitless", author: "Radhika Gupta", status: "unread" },
  { id: 6, title: "Happiness Is a Serious Problem", author: "Dennis Prager", status: "unread" },
  { id: 7, title: "Attitude Is Your Superpower", author: "Eduardo Clemente", status: "unread" },
  { id: 8, title: "The Dark Side of Discipline", author: "Craig Ballantyne", status: "unread" },
  { id: 9, title: "Ultralearning", author: "Scott H. Young", status: "unread" },
  { id: 10, title: "The Self-Esteem Class", author: "Dr. Yoon Hong Gyun", status: "unread" },
  { id: 11, title: "Life's Little Instruction Book", author: "H. Jackson Brown Jr.", status: "unread" },
  { id: 12, title: "The Laws of Human Nature", author: "Robert Greene", status: "unread" },
  { id: 13, title: "Tiny Experiments", author: "Anne-Laure Le Cunff", status: "unread" },
  { id: 14, title: "The Way of the Superior Man", author: "David Deida", status: "unread" },
  { id: 15, title: "No More Mr. Nice Guy", author: "Robert Glover", status: "unread" },
  { id: 16, title: "Principles", author: "Ray Dalio", status: "unread" },
  { id: 17, title: "1984", author: "George Orwell", status: "unread" },
  { id: 18, title: "Animal Farm", author: "George Orwell", status: "unread" },
  { id: 19, title: "Confidence", author: "Roxie Nafousi", status: "unread" },
  { id: 20, title: "Algorithms to Live By", author: "Brian Christian", status: "unread" },
  { id: 21, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", status: "unread" },
  { id: 22, title: "Everything Is F*cked", author: "Mark Manson", status: "unread" },
  { id: 23, title: "When Things Fall Apart", author: "Pema Chödrön", status: "unread" },
  { id: 24, title: "Hidden Potential", author: "Adam Grant", status: "unread" },
  { id: 25, title: "Radical Acceptance", author: "Tara Brach", status: "unread" },
  { id: 26, title: "The Gifts of Imperfection", author: "Brené Brown", status: "unread" },
  { id: 27, title: "The Four Agreements", author: "Don Miguel Ruiz", status: "unread" },
  { id: 28, title: "The Alter Ego Effect", author: "Todd Herman", status: "unread" },
  { id: 29, title: "The Denial of Death", author: "Ernest Becker", status: "unread" },
  { id: 30, title: "101 Essays That Will Change the Way You Think", author: "Brianna Wiest", status: "unread" },
  { id: 31, title: "Love in Action", author: "Thich Nhat Hanh", status: "unread" },
  { id: 32, title: "Made to Stick", author: "Chip & Dan Heath", status: "unread" },
  { id: 33, title: "Good Strategy Bad Strategy", author: "Richard Rumelt", status: "unread" },
  { id: 34, title: "Click Here", author: "Alex Schultz", status: "unread" },
  { id: 35, title: "Building a StoryBrand", author: "Donald Miller", status: "unread" },
  { id: 36, title: "How to Be an Adult in Relationships", author: "David Richo", status: "unread" },
  { id: 37, title: "Brandology", author: "Reena Jagtap", status: "unread" },
  { id: 38, title: "Metamorphosis", author: "Franz Kafka", status: "unread" },
  { id: 39, title: "Human Edge in the AI Age", author: "Nitin Seth", status: "unread" },
  { id: 40, title: "The Coming Wave", author: "Mustafa Suleyman", status: "unread" },
  { id: 41, title: "Co-Intelligence", author: "Ethan Mollick", status: "unread" },
  { id: 42, title: "The Beauty of What Remains", author: "Steve Leder", status: "unread" },
  { id: 43, title: "Extreme Ownership", author: "Jocko Willink", status: "unread" },
  { id: 44, title: "The Charisma Myth", author: "Olivia Fox Cabane", status: "unread" },
  { id: 45, title: "Greenlights", author: "Matthew McConaughey", status: "unread" },
  { id: 46, title: "Switch", author: "Chip & Dan Heath", status: "unread" },
  { id: 47, title: "Dopamine Nation", author: "Dr. Anna Lembke", status: "unread" },
  { id: 48, title: "Wisdom Takes Work", author: "Ryan Holiday", status: "unread" },
  { id: 49, title: "The Art of Spending Money", author: "Morgan Housel", status: "unread" },
  { id: 50, title: "Always Remember", author: "Charlie Mackesy", status: "unread" },
  { id: 51, title: "The Immortals of Meluha", author: "Amish Tripathi", status: "unread" },
  { id: 52, title: "Sherlock Holmes Vol. 1", author: "Arthur Conan Doyle", status: "unread" },
  { id: 53, title: "Sherlock Holmes Vol. 2", author: "Arthur Conan Doyle", status: "unread" },
  { id: 54, title: "The Hobbit", author: "J.R.R. Tolkien", status: "unread" },
  { id: 55, title: "The Lord of the Rings: The Return of the King", author: "J.R.R. Tolkien", status: "unread" },
  { id: 56, title: "The Lord of the Rings: The Two Towers", author: "J.R.R. Tolkien", status: "unread" },
  { id: 57, title: "The Mistakes of My Life", author: "Chetan Bhagat", status: "unread" },
  { id: 58, title: "Revolution Twenty20", author: "Chetan Bhagat", status: "unread" },
  { id: 59, title: "Mindset", author: "Carol Dweck", status: "unread" },
  { id: 60, title: "Scion of Ikshvaku", author: "Amish Tripathi", status: "unread" },
  { id: 61, title: "Things No One Taught Us About Love", author: "Yung Pueblo", status: "unread" },
  { id: 62, title: "How Not to Sell", author: "Rajeev Kant", status: "unread" },
  { id: 63, title: "How to Read a Book", author: "Mortimer Adler", status: "unread" },
  { id: 64, title: "Word Power Made Easy", author: "Norman Lewis", status: "unread" },
  { id: 65, title: "Grit", author: "Angela Duckworth", status: "unread" },
  { id: 66, title: "Hints for Self-Culture", author: "Lala Har Dayal", status: "unread" },
  { id: 67, title: "The Happiness of Pursuit", author: "Chris Guillebeau", status: "unread" },
  { id: 68, title: "We, the People of the States of Bharat", author: "Zia Mody", status: "unread" },
  { id: 69, title: "10 Judgements That Changed India", author: "Zia Mody", status: "unread" },
  { id: 70, title: "The Definitive Book of Body Language", author: "Allan & Barbara Pease", status: "unread" },
  { id: 71, title: "Creative Confidence", author: "Tom Kelley & David Kelley", status: "unread" },
  { id: 72, title: "This Is Marketing", author: "Seth Godin", status: "unread" },
  { id: 73, title: "The Basics of Bitcoins and Blockchains", author: "Antony Lewis", status: "unread" },
  { id: 74, title: "Code", author: "Charles Petzold", status: "unread" },
  { id: 75, title: "Traffic Secrets", author: "Russell Brunson", status: "unread" },
  { id: 76, title: "Masala Lab", author: "Krish Ashok", status: "unread" },
  { id: 77, title: "Sanskrit Swayam Shikshak", author: "Damodar Satvalekar", status: "unread" },
  { id: 78, title: "Think Faster Talk Smarter", author: "Matt Abrahams", status: "unread" },
  { id: 79, title: "Emotional Intelligence", author: "Daniel Goleman", status: "unread" },
  { id: 80, title: "Launch in 5", author: "Will Russell", status: "unread" },
  { id: 81, title: "The Art of Non-Conformity", author: "Chris Guillebeau", status: "unread" },
  { id: 82, title: "Almanac of Naval Ravikant", author: "Eric Jorgenson", status: "unread" },
  { id: 83, title: "The Untethered Soul", author: "Michael Singer", status: "unread" },
  { id: 84, title: "Impossible", author: "Steven Kotler", status: "unread" },
  { id: 85, title: "The Courage to Be Disliked", author: "Ichiro Kishimi", status: "unread" },
  { id: 86, title: "Don't Believe Everything You Think", author: "Joseph Nguyen", status: "unread" },
  { id: 87, title: "Focus", author: "Daniel Goleman", status: "unread" },
  { id: 88, title: "The Boy, the Mole, the Fox and the Horse", author: "Charlie Mackesy", status: "unread" },
  { id: 89, title: "Atomic Habits", author: "James Clear", status: "unread" },
  { id: 90, title: "Do Hard Things", author: "Steve Magness", status: "unread" },
  { id: 91, title: "You're Too Good to Feel This Bad", author: "Nate Dallas", status: "unread" },
  { id: 92, title: "The Art of Public Speaking", author: "Dale Carnegie", status: "unread" },
  { id: 93, title: "The Three-Body Problem", author: "Liu Cixin", status: "unread" },
  { id: 94, title: "Don't Worry", author: "Shunmyo Masuno", status: "unread" },
  { id: 95, title: "Think Like a Monk", author: "Jay Shetty", status: "unread" },
  { id: 96, title: "Why Nations Fail", author: "Daron Acemoglu", status: "unread" },
  { id: 97, title: "The Life and Times of Sultan Mahmud of Ghazna", author: "Nazim", status: "unread" },
  { id: 98, title: "Chinta Chhoro Sukh Se Jiyo", author: "Dale Carnegie", status: "unread" },
  { id: 99, title: "Discipline is Destiny", author: "Ryan Holiday", status: "unread" },
  { id: 100, title: "Social Anxiety and Shyness", author: "Gillian Butler", status: "unread" },
  { id: 101, title: "Influence is Your Superpower", author: "Zoe Chance", status: "unread" },
  { id: 102, title: "How to Think Like Sherlock", author: "Daniel Smith", status: "unread" },
  { id: 103, title: "Range", author: "David Epstein", status: "unread" },
  { id: 104, title: "It's Not How Good You Are", author: "Paul Arden", status: "unread" },
  { id: 105, title: "Chal Chala Chal", author: "Jagdish Bali", status: "unread" },
  { id: 106, title: "In Search of Excellence", author: "Tom Peters", status: "unread" },
  { id: 107, title: "Hooked", author: "Nir Eyal", status: "unread" },
  { id: 108, title: "How to Make Money in Stock Market Trading", author: "Indrazith Shantharaj", status: "unread" },
  { id: 109, title: "How to Finish Everything You Start", author: "Jan Yager", status: "unread" },
  { id: 110, title: "Five Point Someone", author: "Chetan Bhagat", status: "unread" },
  { id: 111, title: "Never Go Back", author: "Lee Child", status: "unread" },
  { id: 112, title: "How to Build a Better Vocabulary", author: "Maxwell Nurnberg", status: "unread" },
  { id: 113, title: "The 10 New Life-Changing Skills", author: "Rajesh Srivastava", status: "unread" },
  { id: 114, title: "Manifest", author: "Roxie Nafousi", status: "unread" },
  { id: 115, title: "You Must Know Your Constitution", author: "Fali S. Nariman", status: "unread" },
  { id: 116, title: "Bhrashtachar Ka Sach", author: "Shanta Kumar", status: "unread" },
  { id: 117, title: "The Hard Thing About Hard Things", author: "Ben Horowitz", status: "unread" },
  { id: 118, title: "Do It Today", author: "Darius Foroux", status: "unread" },
  { id: 119, title: "Positioning: The Battle for Your Mind", author: "Ries & Trout", status: "unread" },
  { id: 120, title: "History of the Sikhs", author: "Joseph Davey Cunningham", status: "unread" },
  { id: 121, title: "Badshah Darwesh Guru Gobind Singh", author: "Jagjit Singh", status: "unread" },
  { id: 122, title: "Mere Pahad Mein", author: "Ashok Dard", status: "unread" },
  { id: 123, title: "Deewan-e-Ghalib", author: "S. Vishvanath", status: "unread" },
  { id: 124, title: "Akbar Birbal Ki Nokjhonk", author: "Various", status: "unread" },
  { id: 125, title: "The Book Thief", author: "Markus Zusak", status: "unread" },
  { id: 126, title: "Dune", author: "Frank Herbert", status: "unread" },
  { id: 127, title: "The Story of Philosophy", author: "Will Durant", status: "unread" },
  { id: 128, title: "Never Split the Difference", author: "Chris Voss", status: "unread" },
  { id: 129, title: "The Design of Everyday Things", author: "Don Norman", status: "unread" },
  { id: 130, title: "Design for a Better World", author: "Don Norman", status: "unread" },
  { id: 131, title: "UX Decoded", author: "Dushyant Kanungo", status: "unread" },
  { id: 132, title: "The Practicing Mind", author: "Thomas M. Sterner", status: "unread" },
  { id: 133, title: "Children of Ruin", author: "Adrian Tchaikovsky", status: "unread" },
  { id: 134, title: "All Marketers Are Liars", author: "Seth Godin", status: "unread" },
  { id: 135, title: "The 22 Immutable Laws of Branding", author: "Al Ries & Laura Ries", status: "unread" },
  { id: 136, title: "Children of Time", author: "Adrian Tchaikovsky", status: "unread" },
  { id: 137, title: "Children of Memory", author: "Adrian Tchaikovsky", status: "unread" },
  { id: 138, title: "Project Hail Mary", author: "Andy Weir", status: "read" },
]
) 
  const [searchText, setSearchText] = useState('')
  const filteredBooks = books.filter(book =>          // filtering logic
  book.title.toLowerCase().includes(searchText.toLowerCase())
)

const [sortingBooks, setSortingBooks] = useState(false)  //Sorting logic
const sortingON = sortingBooks ? [...filteredBooks].sort((a, b) => a.title.localeCompare(b.title)) : filteredBooks

const [newTitle, setnewTitle] = useState('')          //Adding a new book
const [newAuthor, setnewAuthor] = useState('')
const [newStatus, setnewStatus] = useState('unread')

const [notification, setNotification] = useState(false)  //Notification when a book is added

const [darkMode, setDarkMode] = useState(false)        // Dark Mode feature


function toggleStatus(id){                             //flip the button status
  const toggledList = books.map(book=>(
    book.id === id ? {...book, status: book.status === 'read' ? 'unread':'read'}:book 

  ))
  setBooks(toggledList)
}

function addBook(){                                   // Adding a new book
  const newBook = {id: books[books.length -1].id + 1, title: newTitle, author: newAuthor, status: newStatus }
  const updatedBooks = [newBook, ...books]
  setBooks(updatedBooks)

  setNotification(true)
  setTimeout(() => setNotification(false), 3000)

  setnewTitle('')                                     //resets input field states back to empty
  setnewAuthor('')
  setnewStatus('unread')
}

function deleteBooks(id){                             // Delete Books feature
  const afterDeletionBooks = books.filter(book=> book.id !== id)
  setBooks(afterDeletionBooks)
}

document.body.style.backgroundColor = darkMode ? "#1a1a2e" : "#ffffff"; //sets the body background colour whenever darkMode changes

  return (

    <div className={`container ${darkMode ? "dark" : ""}`}>

      {notification && <div className="notification">Book added to your library!</div>} 
    
    <div className="header-bar">
      <h1>My Library</h1>
      <button className="toggle-btn" onClick={()=>setDarkMode(!darkMode)}>
        Dark Mode 
      </button>
     </div> 
      <p className="subtitle">{filteredBooks.length} books</p>

      <input
        type="text"                                  // searchbox logic
        className="search-input"
        placeholder="Search books..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
                                                    
      <div className="add-form">                    
        <input
          type='text'
          className="search-input"
          placeholder="Book title"
          value={newTitle}
          onChange={e => setnewTitle(e.target.value)}
        />

        <input
          type='text'
          className="search-input"
          placeholder="Book author"
          value={newAuthor}
          onChange={e => setnewAuthor(e.target.value)}
        />

        <select 
          className ="search-input"
          value={newStatus}
          onChange={e=>setnewStatus(e.target.value)}
        >
          <option value="unread">Unread</option>
          <option value='read'>Read</option>
        </select>

        <button className="add-btn" onClick={addBook}>
          Add Book
        </button>

      </div>

      <div className="sort-bar">                           
        <button className={`toggle-btn ${sortingBooks ? 'sort-active' : ''}`} onClick={()=>{setSortingBooks(!sortingBooks)}}>
          Sort↑↓
        </button>
      </div>

      {sortingON.map(book => (                   // filtered list logic
        <div key={book.id} className="book-card">
          <p className="book-title">{book.title}</p>
          <p className="book-author">{book.author}</p>
          <div className="book-footer">
            <span className={`badge ${book.status === 'read' ? 'badge-read' : 'badge-unread'}`}>
                {book.status}
            </span>
             <button className="toggle-btn" onClick={function() {toggleStatus(book.id)}}>
                {book.status === 'read' ? 'Mark unread' : 'Mark read'}
             </button>
          
          <button className="del-btn" onClick={()=>{deleteBooks(book.id)}}>   
            Delete 
          </button>
          
          </div> 
        </div>
      ))}
    </div>
  )
}

export default App