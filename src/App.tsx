import MainLayout from "./layout/MainLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import Login from "./layout/Login";
import RegisterForm from "./layout/RegistrationForm";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<MainLayout />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<RegisterForm />} />
			</Routes>
		</Router>
	);
}

export default App;
