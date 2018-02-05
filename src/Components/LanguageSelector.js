import React from 'react';
import LanguageItem from './LanguageItem';

const LanguageSelector = (props) => {
    return (
        <ul className="languages">
                {props.languages.map((item,index)=>{
                    return(
                        <LanguageItem  key={index}  updateLanguage={props.updateLanguage} selected ={item===props.selectedLanguage?true:false} index={index} language={item}/>
                    )
                })

                }
                </ul>
    );
};

export default LanguageSelector;