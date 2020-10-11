import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/index';

const Functions = ({onContentClear, onDelete}) => {
    return (
        <section className="functions">
            <Button text="clear" clickHandler={onContentClear} type={"button-long-text"}/>
            <Button text="&larr;" clickHandler={onDelete} type={""}/>
        </section>
    )
};

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions;