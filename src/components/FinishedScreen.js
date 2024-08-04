function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const precentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(precentage)}%)
      </p>
      <p className="highscore">highScore: {highScore}</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
