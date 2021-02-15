import "./App.css";
import ListofProfiles from "./Profile/ListofProfiles";

function App() {
  return (
    <div className="App">
      <img
        src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
        alt="photo"
        style={{ alignItems: "end" }}
      ></img>
      <ListofProfiles />
    </div>
  );
}

export default App;
