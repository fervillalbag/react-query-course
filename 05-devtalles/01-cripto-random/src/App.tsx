import { useRandomQuery } from "./hooks/useRandomQuery";
import "./App.css";

export default function App() {
  const randomQuery = useRandomQuery();

  if (randomQuery.isError) return <div>{`${randomQuery.error}`}</div>;

  return (
    <div>
      <h2>Numero aleatorio</h2>
      <p>{randomQuery.isLoading ? "Loading" : randomQuery.data}</p>

      <button
        onClick={() => randomQuery.refetch()}
        disabled={randomQuery.isFetching}
      >
        {randomQuery.isFetching ? "Loading" : "Refetching"}
      </button>
    </div>
  );
}
