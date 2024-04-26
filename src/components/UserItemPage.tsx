import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import { useNavigate, useParams } from 'react-router-dom';

type UserItemPageParams = {
	id: string;
};

const UserItemPage: FC = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams<UserItemPageParams>();
	const navigate = useNavigate();

	useEffect(() => {
		fetchUser();
	}, []);

	async function fetchUser() {
		try {
			const responce = await axios.get<IUser>(
				'https://jsonplaceholder.typicode.com/users/' + params.id
			);
			setUser(responce.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<div>
			<button onClick={() => navigate('/users')}>Back</button>
			<h1>Страница пользователя {user?.name}</h1>
			<p>{user?.email}</p>
			<p>
				{user?.address.city} - {user?.address.street} - {user?.address.zipcode}
			</p>
		</div>
	);
};

export default UserItemPage;
