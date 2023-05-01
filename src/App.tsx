import MainLayout from './layout/MainLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './theme/globalStyles';
import Login from './layout/Login';
import RegisterForm from './layout/RegistrationForm';
import { FC } from 'react';
import ForgotPassword from './layout/ForgotPassword';
import EmailSent from './layout/EmailSent';
import Profile from './layout/Profile'
import Assignations from './layout/Assignations/Assignations';
import ServicesProfile from './layout/ServicesProfile/ServicesProfile';
import ViewAssignation from './modules/AssignationsProfile/ViewAssignation';
import Help from './layout/Help';
import Support from './layout/Support';
import NotificationsProfile from './layout/NotificationsProfile';
import OurServices from './pages/OurServices';

const App: FC = () => {
	return (
		<Router>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<MainLayout />} />
				{/* LANDING ROUTES */}
				<Route path="/ourservices" element={<OurServices />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<RegisterForm />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/email-sent" element={<EmailSent />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/assignations" element={<Assignations />} />
				<Route path="/services" element={<ServicesProfile />} />
				<Route path="/assignation/:id/:status" element={<ViewAssignation />} />
				<Route path="/help" element={<Help />} />
				<Route path="/support" element={<Support />} />
				<Route path="/notifications" element={<NotificationsProfile />} />
			</Routes>
		</Router>
	);
};

export default App;
