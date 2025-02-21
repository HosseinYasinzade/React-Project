const Quote = ({ handleClick, error, data }) => {
  return (
    <div>
      <button onClick={handleClick}>Generate Quote</button>

      {error && <h2 style={{ color: "red" }}>{error}</h2>}

      {data && <h2>{data.content}</h2>}
    </div>
  );
};

export default Quote;
