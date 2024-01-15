import {React,useState,useEffect,useRef} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./AuthorsPage.css";
import { GoSearch } from "react-icons/go";

function AuthorsPage(){
    const transmitter= useNavigate();
    const [author, setAuthor] = useState(null);
    const inputRef=useRef(null);

    useEffect(() => {
        if (author !== null) {
        fetchData(author);
        }
    }, [author]);  


    const handleSearch = ()=>{
        const authorName = inputRef.current.value;
        setAuthor(authorName);
    }
    

    const handleClick = (selectedAuthor) => {
        setAuthor(selectedAuthor);
    };

    const fetchData = async (selectedCategory) => {
        const api_url = `https://api.quotable.io/quotes/random?author=${selectedCategory}&limit=5&MinLength=100`;

    try {
        const response = await fetch(api_url);
        const fetchedData = await response.json();
        localStorage.setItem("quotesData", JSON.stringify(fetchedData));
        transmitter("/quotes");
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error(error);
    }
    };
    return (
        <>
            <Navbar />
            <div className="author-container">
                <div className="search-element">
                    <div className='search-label'>
                        <GoSearch className="search-icon"  onClick={handleSearch}/>
                        <input type='text' name="text" placeholder='Authors Name' ref={inputRef}/>
                        <button className="subscribe" onClick={handleSearch} >Search</button>
                    </div>
                </div>
                    <div className="all-authors">
                        <div className="author" onClick={() => handleClick('albert-einstein')}>
                            <img src="./images/Albert.png" alt="Albert Einstein" className="author-img"/>
                            <p>Albert Einstein </p>
                        </div>
                        <div className="author" onClick={() => handleClick('mark-twain')}>
                            <img src="./images/mark-twain.png" alt="Mark Twain" className="author-img"/>
                            <p>Mark Twain</p>
                        </div>
                        <div className="author" onClick={() => handleClick('Oscar-wilde')}>
                            <img src="./images/Oscar-wilde.png" alt="Oscar wilde" className="author-img"/>
                            <p>Oscar Wilde</p>
                        </div>
                        <div className="author" onClick={() => handleClick('mahatma-gandhi')}>
                            <img src="./images/mahatma.png" alt="Mahatma Gandhi" className="author-img"/>
                            <p>Mahatma Gandhi</p>
                        </div>
                        <div className="author" onClick={() => handleClick('Eleanor-Roosevelt')}>
                            <img src="./images/eleanor.png" alt="Eleanor Roosevelt" className="author-img"/>
                            <p>Eleanor Roosevelt</p>
                        </div>
                        <div className="author" onClick={() => handleClick('Abraham-Lincoln')}>
                            <img src="./images/Abraham.png" alt="Abraham Lincoln" className="author-img"/>
                            <p>Abraham Lincoln</p>
                        </div>
                        <div className="author" onClick={() => handleClick('aristotle')}>
                            <img src="./images/aristotle.png" alt="Aristotle" className="author-img"/>
                            <p>Aristotle</p>
                        </div>
                        <div className="author" onClick={() => handleClick('helen-keller')}>
                            <img src="./images/helen.png" alt="Helen Keller" className="author-img"/>
                            <p>Helen Keller</p>
                        </div>
                        <div className="author" onClick={() => handleClick('leo-tolstoy')}>
                            <img src="./images/leo.png" alt="Leo Tolstoy" className="author-img"/>
                            <p>Leo Tolstoy</p>
                        </div>
                        <div className="author" onClick={() => handleClick('Friedrich-Nietzsche')}>
                            <img src="./images/friedrich.png" alt="Friedrich Nietzsche" className="author-img"/>
                            <p>Friedrich Nietzsche</p>
                        </div>
                        <div className="author" onClick={() => handleClick('william-shakespeare')}>
                            <img src="./images/william.png" alt="william shakespeare" className="author-img"/>
                            <p>william shakespeare</p>
                        </div>
                        <div className="author" onClick={() => handleClick('maya-angelou')}>
                            <img src="./images/MAYA.png" alt="maya Angelou" className="author-img"/>
                            <p>Maya Angelou</p>
                        </div>
                        
                    </div>
                </div>
            <Footer />
        </>
    );
}

export default AuthorsPage;