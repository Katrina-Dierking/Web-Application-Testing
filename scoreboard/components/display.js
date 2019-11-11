import React from 'react';

const Display = ({balls, strikes}) => {


    render (
        <section className = "display-at-bat">
            <div>
                balls: {balls}
                strikes: {strikes}
            </div>
        </section>
    );
};
    

export default Display;

// ### Display

// - display the count of `balls` and `strikes` for the at-bat.
// - should be updated when the user records activity on the `Dashboard` component.