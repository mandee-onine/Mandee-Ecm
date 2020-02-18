import React from 'react';
import PropTypes from 'prop-types';

export const AddItem = ({ name, onChange }) => (
    <div className="row justify-content-center">

        <div style={{
            position: 'absolute',
            bottom: '31px',
            left: '4px',
            padding: '5px 10px 2px 0px'
        }}><label>Saved List</label></div>
        <input class="form-control"
            type="text"
            placeholder="Item"
            value={name}
            name="name"
            onChange={onChange}
            placeholder="Saved List name" required />

    </div>
);
AddItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};