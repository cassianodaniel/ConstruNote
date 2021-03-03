import React from 'react';
import { Button } from 'reactstrap';
import { useMainBox } from '../contexts/MainBoxContext';
import ScreenType from '../enuns/ScreenType';

const SegundaSessaoCadastroComprador : React.FC = () => {
    const { setScreen } = useMainBox();
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100%", width: "100%"}}>
            <div>
                <Button className="ml-4" type="button" color="primary" onClick={() => setScreen(ScreenType.CADASTROSJURIDICA)}>
                    Sou pessoa jurídica
                </Button>
                <Button className="ml-4" type="button" color="primary" onClick={() => setScreen(ScreenType.CADASTROSFISICA)}>
                    Sou pessoa física        
                </Button>
            </div>
        </div>
    );
}
export default SegundaSessaoCadastroComprador;