import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import TodosItem from './TodosItem';
import List from './List';
import { useNavigate } from 'react-router-dom';

const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetchTodos();
	}, []);

	async function fetchTodos() {
		try {
			const responce = await axios.get<ITodo[]>(
				'https://jsonplaceholder.typicode.com/todos?_limit=10'
			);
			setTodos(responce.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<List
			items={todos}
			renderItem={(todo: ITodo) => (
				<TodosItem
					onClick={() => navigate('/todos/' + todo.id)}
					todo={todo}
					key={todo.id}
				/>
			)}
		></List>
	);
};

export default TodosPage;
