import MainLayout from './layout/MainLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './theme/globalStyles';
import Login from './layout/Login';
import RegisterForm from './layout/RegistrationForm';
import { FC } from 'react';
import ForgotPassword from './layout/ForgotPassword';
import EmailSent from './layout/EmailSent';

const App: FC = () => {
	return (
		<Router>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<MainLayout />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<RegisterForm />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/email-sent" element={<EmailSent />} />
			</Routes>
		</Router>
	);
};

export default App;
