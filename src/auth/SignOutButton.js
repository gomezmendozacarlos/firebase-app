import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui';
import { signOut } from './singOut';

export const StyledButton = styled(Button)`
    background-color: #ed0d25;
`;

/*
    This button allows users to sign out once they've
    been signed in with Firebase Auth
*/
export const SignOutButton = () => {
    const onClickSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error(error + 'An error occurred while signing out');
            throw error;
        }
    }

    return (
        <StyledButton
            onClick={onClickSignOut}
            style={{ float: 'right' }}
        >Sign Out</StyledButton>
    );
}