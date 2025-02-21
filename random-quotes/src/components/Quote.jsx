const Quote = ({ handleClick, error, data }) => {
  return (
    <div className="container">
      <button onClick={handleClick} className="btn">
        Generate Quote
      </button>

      {error && <h2 className="errMsg">{error}</h2>}

      {data && <h2 className="quote">{data.content}</h2>}
    </div>
  );
};

export default Quote;
