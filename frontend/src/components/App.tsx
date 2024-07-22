import CardList from "./CardList";
import creature_list from "../creature_list";

function App() {
  return (
    <div className="px-5 py-10">
      <h1 className="text-blue-500 text-3xl font-semibold">The App</h1>
      <CardList creatures={creature_list} />
    </div>
  );
}

export default App;
