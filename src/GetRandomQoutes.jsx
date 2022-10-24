import React, {useState, useEffect} from 'react'

export default function GetRandomQuotes({url}) {
  
    console.log(url)
    const [quotes, setQuotes] = useState({});
  
    useEffect(() => {
      getQuote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 
  
    const getQuote = () => {
      fetch(url)
      .then(res => res.json())
      .then(data => setQuotes(data))
    }
    const getNewQuote = () => getQuote();

    const tweetQuote = () => {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
      window.open(twitterUrl, "_blank");
    };
  
    const { content, author } = quotes;
    return (
        <>
        <header className='header'>
          <h1>Quotes of the Day</h1>
        </header>
        <div className="box-centered">
          <div className="text">
            <p>{content}</p>
          </div>
        <div className="author">
          <h5>{author}</h5>
          <div className="button-container">
            <button className="twitter-button" onClick={tweetQuote}>
              <i className="fab fa-twitter"></i>
            </button>
            <button onClick={getNewQuote}>New Quote</button>
          </div>
        </div>
      </div>
      </>
    )
  }
