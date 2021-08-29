import React from 'react';

type IProps = {
    label: string,
    fontSize?: number,
    customStyle?: object
}

const Title : React.FC<IProps> = ({ label, customStyle, fontSize = 24}) => {
    return(
        <h1 className="modal-title" style={{fontSize: fontSize, ...customStyle}}>{label}</h1>
    );
};

export default Title;