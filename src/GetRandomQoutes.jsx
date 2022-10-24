import React, {useState, useEffect} from 'react'

export default function GetRandomQuotes({url}) {
  
    console.log(url)
    const [quotes, setQuotes] = useState({});
  
    useEffect(() => {
      getQoute()
    }, [])
  
    const getQoute = () => {
      fetch(url)
      .then(res => res.json())
      .then(data => setQuotes(data))
    }
    const getNewQuote = () => getQoute();

    const tweetQuote = () => {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
      window.open(twitterUrl, "_blank");
    };
  
    const { content, author } = quotes;
    return (
        <div className="box-centerside">
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
    )
  }
