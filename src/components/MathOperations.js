import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/index';

const MathOpeartions = ({onClickOperation, onClickEqual}) => {
    return(
        <section className="math-operations">
            <Button text="+" clickHandler={onClickOperation} type={""}/>
            <Button text="-" clickHandler={onClickOperation} type={""}/>
            <Button text="*" clickHandler={onClickOperation} type={""}/>
            <Button text="/" clickHandler={onClickOperation} type={""}/>
            <Button text="=" clickHandler={onClickEqual} type={""}/>
        </section>
    )
};

MathOpeartions.propTypes = {
    onClickOperation: PropTypes.func.isRequired, 
    onClickEqual: PropTypes.func.isRequired
}

export default MathOpeartions;
