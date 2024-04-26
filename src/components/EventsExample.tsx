import React, { FC, useRef, useState } from 'react';

interface EventsExampleProps {}

const EventsExample: FC<EventsExampleProps> = () => {
	const [value, setValue] = useState<string>('');
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>
		console.log(inputRef.current?.value);

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) =>
		console.log('drag');

	const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true);
	};

	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
		console.log('drop');
	};

	return (
		<div>
			<input
				type='text'
				value={value}
				onChange={changeHandler}
				placeholder='Управляемый'
			/>
			<input ref={inputRef} type='text' placeholder='Неуправляемый' />
			<button onClick={clickHandler}>Кнопка</button>

			<div
				draggable
				onDrag={dragHandler}
				style={{
					width: 200,
					height: 200,
					backgroundColor: 'green',
					marginBottom: 20,
				}}
			></div>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragOverHandler}
				style={{
					width: 200,
					height: 200,
					backgroundColor: isDrag ? 'yellow' : 'black',
				}}
			></div>
		</div>
	);
};

export default EventsExample;
