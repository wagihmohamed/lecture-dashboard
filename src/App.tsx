import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	HomeScreen,
	LoginScreen,
	OrganizationRegisterScreen,
	RegisterScreen,
	CoursesScreen,
	LeaderboardScreen,
	MessagesScreen,
	ProfileScreen,
	CourseScreen,
} from './screens';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginScreen />} />
					<Route path="/register" element={<RegisterScreen />} />
					<Route
						path="/organization-register"
						element={<OrganizationRegisterScreen />}
					/>
					<Route path="/home" element={<HomeScreen />} />
					<Route path="/courses" element={<CoursesScreen />} />
					<Route path="/courses/:courseId" element={<CourseScreen />} />
					<Route path="/leaderboard" element={<LeaderboardScreen />} />
					<Route path="/messages" element={<MessagesScreen />} />
					<Route path="/profile" element={<ProfileScreen />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
