import React, { FC, useState } from 'react';
import { ITodo } from '../types/types';
import { EventType } from '@testing-library/react';

interface TodosItemProps {
	todo: ITodo;
	onClick: (todo: ITodo) => void;
}

const TodosItem: FC<TodosItemProps> = ({ todo, onClick }) => {
	const [taskComplete, setTaskComplete] = useState<boolean>(todo.completed);
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskComplete(!taskComplete);
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				border: '1px solid blue',
				marginBottom: 20,
				padding: '0 30px',
			}}
		>
			<div
				onClick={(e) => onClick(todo)}
				style={{
					display: 'flex',
					gap: 20,
					width: '100%',
				}}
			>
				<p>{todo.id}.</p>
				<p>{todo.title}.</p>
			</div>
			<input type='checkbox' checked={taskComplete} onChange={onChange} />
		</div>
	);
};

export default TodosItem;
