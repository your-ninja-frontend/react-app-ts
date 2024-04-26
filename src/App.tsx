import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {
	return (
		<BrowserRouter>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '20px 100px',
				}}
			>
				<Link to='/'>Main</Link>
				<Link to='/users'>Users</Link>
				<Link to='/todos'>Todos</Link>
			</div>
			<Routes>
				<Route path={'/'} />
				<Route path={'/users'} element={<UsersPage />} />
				<Route path={'/todos'} element={<TodosPage />} />
				<Route path={'/users/:id'} element={<UserItemPage />} />
				<Route path={'/todos/:id'} element={<TodoItemPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
