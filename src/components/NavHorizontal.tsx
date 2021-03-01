import React from 'react';
import { useMainBox } from '../contexts/MainBoxContext';
import ScreenType from '../enuns/ScreenType';
import './../../src/assets/scss/horizontalAndVerticalBar.scss';
import emblem from "./../assets/images/emblem.png";

const Header = () => {
    const { screen } = useMainBox();
    return(
    <div className="side-menu-horizontal flex-lg-column">
        <div className="d-flex flex-lg-column my-auto">
            <span style={{float: 'left'}} className="logo-sm ml-4">
                <img src={emblem} alt="emblem" height="30" />
            </span>
            <div className={"title"}>
                {screen === ScreenType.MINHASCOTACOES && "Minhas cotações"}
            </div>
        </div>
    </div>
    )
}

export default Header;