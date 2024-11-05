import "./App.css";
import Nico from "./components/Nico";

const NicoData = {
	firstName: "Nicolas",
	lastName: "Chiche",
	age: 29,
	adress: "171 avenue Lucien Faure, 33000 Bordeaux",
};

function App() {
	return (
		<>
			<Nico
				firstName={NicoData.firstName}
				lastName={NicoData.lastName}
				age={NicoData.age}
				adress={NicoData.adress}
			/>
		</>
	);
}

export default App;
