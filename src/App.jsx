import Star from "./components/Star";

function App() {
  return (
    <>
      <Star onChange={() => console.log("clickeddd")} />
    </>
  );
}

export default App;
