import MainLayout from "./layout/MainLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import Login from "./layout/Login";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<MainLayout />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
