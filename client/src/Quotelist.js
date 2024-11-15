import {React,useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "./Quotelist.css";
import { FaHeart } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";
import { MdOutlineContentCopy } from "react-icons/md";

function Quote({content, author}) {  
    const [isHeartClicked, setIsHeartClicked] = useState(false);

    const handleHeartClick = () => {
        setIsHeartClicked(!isHeartClicked);
    };

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(`"${content}" - ${author}`);
            // Optionally, you can provide feedback to the user using React state
            alert('Content copied to clipboard!');
        } catch (err) {
            console.error('Unable to copy to clipboard:', err);
        }
    };

    const handleShareClick = async () => {
        try {
          await navigator.share({
            title: 'Quote',
            text: `"${content}" - ${author}`,
          });
        } catch (err) {
          console.error('Unable to share:', err);
        }
      };

    return (
        <div className="quote-item">
                <p className='quote-content'>"{content}"</p>
                <div className='author-icon-container'>
                    <ul>
                        <li>
                        <FaHeart
                            className={`quote-icons heart ${isHeartClicked ? 'heart-clicked' : ''}`}
                            onClick={handleHeartClick}
                        />
                        </li>
                        <li>
                            <TbShare3 
                                className="quote-icons share"
                                onClick={handleShareClick}
                            />
                        </li>
                        <li>
                            <MdOutlineContentCopy 
                                className="quote-icons copy" 
                                onClick={handleCopyClick}
                            />
                        </li>
                    </ul>
                    <div className='quote-author'><hr />{author}</div>
                </div>
            </div>
    );
}

function QuotesList() {
    const storedData = localStorage.getItem("quotesData");
    const data = storedData ? JSON.parse(storedData) : null;

    return (
        <>
        <Navbar />
        <div className="quote-container">
        {data ? (
          data.map((quote, index) => (
            <Quote key={index} content={quote.content} author={quote.author} />
          ))
        ) : (
          <p>Error: Unable to fetch data</p>
        )}
        </div>
        <Footer />
        </>
    );
}

export default QuotesList;