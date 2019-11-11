import React from 'react';

const Dashboard = ({ball, strike, foul, hit}) => {

    return (
        <section className = "dashboard">
            <button onClick = {ball}>Add a Ball</button>
            <button onClick = {strike}>Add a Strike</button>
            <button onClick = {foul}>Add a Foul</button>
            <button onClick = {hit}>Add a Hit</button>
        </section>
    );
};

export default Dashboard;
        

// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, 
// a foul makes it 1 strike. 
// With 1 strike, a foul makes it 2 strikes.
//  With two strikes a foul has no effect, count stays at 2 strikes.

// - provide a button that the person in charge
//  can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - there is **NO** need to specify the type of hit (single, double, etc).