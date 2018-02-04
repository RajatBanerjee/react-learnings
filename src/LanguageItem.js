import React from 'react';

const LanguageItem = (props) => {
    return (
        <li className="selected" onClick={props.updateLanguage.bind(null, props.language)}
            style={props.selected===true ? { color: 'red' } : null} >
            {props.language}
        </li>
    );
};

export default LanguageItem;