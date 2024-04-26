import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ITodo } from '../types/types';

type TodoItemPageParams = {
	id: string;
};

const TodoItemPage: FC = () => {
	const [todo, setTodo] = useState<ITodo | null>(null);
	const params = useParams<TodoItemPageParams>();
	const navigate = useNavigate();

	const [taskComplete, setTaskComplete] = useState<boolean | undefined>(
		todo?.completed
	);
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskComplete(!taskComplete);
	};

	useEffect(() => {
		fetchTodo();
	}, []);

	async function fetchTodo() {
		try {
			const responce = await axios.get<ITodo>(
				'https://jsonplaceholder.typicode.com/todos/' + params.id
			);
			setTodo(responce.data);
			setTaskComplete(responce.data.completed);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<div>
			<button onClick={() => navigate('/todos')}>Back</button>
			<h1>Страница задачи {todo?.id}</h1>
			<p>Описание задачи {todo?.title}</p>
			<p>
				Статус выполнения задачи -{' '}
				<input type='checkbox' checked={taskComplete} onChange={onChange} />
			</p>
		</div>
	);
};

export default TodoItemPage;
