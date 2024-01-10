import { useState,React } from 'react';
import { HiOutlineChatAlt } from "react-icons/hi";
import Navbar from './Navbar';
import Footer from './Footer';
import "./Homepage.css";

function Homepage(){
    const [Author, setAuthor] = useState('You-know-me');
    return(
        <div>
            <Navbar />
            <div className='home-container'>
                <div className='home-quote'>
                    <p className='quote'>" when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"</p>
                    <div className='author-name'>
                            <hr width="2%" />
                            {Author}
                    </div>
                </div>
                <div>
                    <button className='shuffle-btn'>
                        <img src='/dice.svg' alt='dice-img'></img>
                        Shuffle
                    </button>
                </div>

                <div className='newsletter-section'>
                    <h1 className='newsletter-title'>
                        UNLOCK DAILY WISDOM
                    </h1>
                    <p>
                        Submerge yourself in daily wisdom. Subscribe Now for a captivating infusion of thought-provoking quotes, unlocking the beauty of each day with profound insights that touch your soul.
                    </p>
                    <div className='news-label'>
                        <input type='email' name="email" placeholder='Enter your email address' />
                        <button className="subscribe">Subscribe</button>
                    </div>
                </div>

                <div className='connect-section'>
                    <div className='text-section'>
                        <h1 className='connect-title'>
                            LET' S CONNECT
                        </h1>
                        <p>
                            Enjoying the website? I'm available online most of the time and would love to connect with you. Feel free to reach out now – let's start a conversation!
                        </p>
                        <button className='get-in-touch'>Get In Touch <HiOutlineChatAlt className="chat-icon"/></button>
                    </div>
                    <img src='/chat-img.png' alt='chat-img' className='chat-img'></img>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;