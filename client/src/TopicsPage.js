import {React,useState,useEffect,useRef} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./TopicsPage.css";
import { GoSearch } from "react-icons/go";

function TopicsPage(){

    const transmitter= useNavigate();
    const [category, setCategory] = useState('all');
    const inputRef=useRef(null);

    useEffect(() => {
        if(category !== "all"){
            fetchData(category);
        }
        // eslint-disable-next-line
    }, [category]); 
   

    const handleClick = (prop) => {
        setCategory(prop);
    };

    const handleSearch = ()=>{
        const topicName = inputRef.current.value;
        setCategory(topicName);
    }

    const fetchData = async (selectedCategory) => {
        const api_url = `https://api.quotable.io/quotes/random?tags=${selectedCategory}&limit=5&MinLength=50`;

        try {
            const response = await fetch(api_url);
            const fetchedData = await response.json();
            // console.log(fetchedData);
            localStorage.setItem("quotesData", JSON.stringify(fetchedData));
            transmitter("/quotes");
            
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
          } catch (error) {
            console.error(error);
          }
        };
      
    
    return(
        <>
            <Navbar />
            <div className="topics-container">
                <div className="search-element">
                    <div className='search-label'>
                        <GoSearch className="search-icon "  onClick={handleSearch}/>
                        <input type='email' name="email" placeholder='Topic Name' ref={inputRef} />
                        <button className="subscribe" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                <div className="topics-grid">
                    <div className="topic" onClick={() => handleClick('wisdom')}>wisdom</div>
                    <div className="topic" onClick={() => handleClick('Friendship')}>Friendship</div>
                    <div className="topic" onClick={() => handleClick('Inspirational')}>Inspirational</div>
                    <div className="topic" onClick={() => handleClick('Change')}>Change</div>
                    <div className="topic" onClick={() => handleClick('Life')}>Life</div>
                    <div className="topic" onClick={() => handleClick('Love')}>Love</div>
                    <div className="topic" onClick={() => handleClick('Success')}>Success</div>
                    <div className="topic" onClick={() => handleClick('History')}>History</div>
                    <div className="topic" onClick={() => handleClick('truth')}>Truth</div>
                    <div className="topic" onClick={() => handleClick('Faith')}>Faith</div>
                    <div className="topic" onClick={() => handleClick('science')}>Science</div>
                    <div className="topic" onClick={() => handleClick('technology')}>Technology</div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TopicsPage;