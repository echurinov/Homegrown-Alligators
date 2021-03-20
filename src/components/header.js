import React from 'react';
import Social from './Social';
import NavBar from './NavBar';

export default class Header extends React.Component
{
    render()
    {
        return (
            <div>
                <Social/>
                <NavBar/>
            </div>
        );
    }
}