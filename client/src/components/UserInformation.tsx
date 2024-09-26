import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react';

const UserInformation = () => {
    const { user, error, isLoading } = useUser();
    if (isLoading) return "Loading..."
    if (error) return `Error: ${error.message}`

    return (
        user && (
            <div>
              <h2>Username: {user.name}</h2>
            </div>
        )
    );
}

export default UserInformation