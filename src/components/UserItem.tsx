import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemsProps {
	user: IUser;
	onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemsProps> = ({ user, onClick }) => {
	return (
		<div
			onClick={() => onClick(user)}
			style={{ marginBottom: 20, padding: 15, border: '1px solid red' }}
		>
			{user.id}. {user.name} проживает в городе {user.address.city} по улице{' '}
			{user.address.street}
		</div>
	);
};

export default UserItem;
