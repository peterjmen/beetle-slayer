import CardList from "./CardList";
import creature_list from "../creature_list";

function App() {
  return (
    <div>
      <h1 className="heading">The App</h1>
      <CardList creatures={creature_list} />
    </div>
  );
}

export default App;
