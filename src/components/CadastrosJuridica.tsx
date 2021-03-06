import React, { FormEvent, useState } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Spinner } from 'reactstrap';
import { useMainBox } from '../contexts/MainBoxContext';
import ScreenType from '../enuns/ScreenType';

const CadastrosJuridica : React.FC = () => {
    const [login, setLogin] = useState("");
    /* const { setLoginUser, loading } = useLogin(); */
    const [loading, setLoading] = useState<boolean>(false);
    const { setScreen } = useMainBox();
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        /* setLoginUser({ login, password }); */
        setTimeout(() => {
            setLoading(true);
        }, 3000)
    };
    return(
        <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center">
                <div className="card card-login mr-lg-5">
                    <div className="card-body m-3 m-lg-5 has-shown-squad">
                    <div className="d-flex flex-column align-items-center">
                        <div className="mb-3 title">Cadastro de empresa compradora</div>
                        <div className="mb-4 sub-title">
                        Digite os dados da sua empresa para cadastrar:
                        </div>
                    </div>
                    <Form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <InputGroup>
                                <Input
                                value={login}
                                onChange={(e) => {
                                    console.log(e);
                                    setLogin(e.target.value);
                                }}
                                type="email"
                                placeholder="Nome completo"
                                bsSize="lg"
                                className="input-login"
                                />
                                <InputGroupAddon addonType="append">
                                <InputGroupText className="input-group-text">
                                    
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>

                        <div className="mb-3">
                            <InputGroup>
                                <Input
                                value={login}
                                onChange={(e) => {
                                    console.log(e);
                                    setLogin(e.target.value);
                                }}
                                type="email"
                                placeholder="Email"
                                bsSize="lg"
                                className="input-login"
                                />
                                <InputGroupAddon addonType="append">
                                <InputGroupText className="input-group-text">
                                    
                                </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>

                        <div className="mb-4">
                        <FormGroup>
                            <Input type="select" name="select" id="exampleSelect">
                            <option selected disabled>Função principal</option>
                            <option>Dono/administrador</option>
                            <option>Gerente/Coordenador de obras</option>
                            <option>Engenheiro(a)/Tecnólogo(a)</option>
                            <option>Arquiteto(a)/Designer de interiores</option>
                            <option>Compras/Suprimentos</option>
                            <option>Planejamento/Orçamento</option>
                            <option>Estoque/Almoxarifado</option>
                            <option>Outro</option>
                            </Input>
                        </FormGroup>
                        </div>

                        <div className="input-options">
                            <div className="row mb-3">
                                <div className="col">
                                <FormGroup check>
                                    <Label check>
                                    <div className="form-check-input-box">
                                        <Input type="checkbox" />{" "}
                                    </div>
                                    <span>Aceito os {" "}
                                        <a  href="www.google.com.br">termos e condições de uso</a>
                                    </span>
                                    </Label>
                                </FormGroup>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                size="lg"
                                block
                                className="buttom-login"
                                style={{
                                height: "54px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems:"center"
                                }}
                                onClick={
                                    () => setScreen(ScreenType.CADASTROFUNCIONARIOEMPRESACOMPRADORA)
                                }
                            >
                                {!loading ? "Cadastrar" : <Spinner size="md"></Spinner>}
                            </Button>
                        </div>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastrosJuridica;