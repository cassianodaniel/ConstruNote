import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Spinner } from 'reactstrap';

const CadastrosJuridica : React.FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    /* const { setLoginUser, loading } = useLogin(); */
    const [loading, setLoading] = useState<boolean>(false);
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
                        <div className="mb-3 title">Cadastro de pessoa jurídica</div>
                        <div className="mb-4 sub-title">
                        Digite os seus dados para cadastrar:
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
                                placeholder="Nome do usuário"
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
                                placeholder="Senha"
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
                            <InputGroup>
                                <Input
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type="password"
                                placeholder="Confirmar senha"
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
                                placeholder="E-mail"
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
                            <option>Engenheriro(a) / Tecnólogo (a)</option>
                            <option>Arquiteto(a)/Designer de Interiores</option>
                            <option>Técnico(a)</option>
                            <option>Mestre/Encarregado(a)</option>
                            <option>Profissional/Prestador de serviço</option>
                            <option>Construtor (pessoa física)</option>
                            <option>Construindo, reformando ou reparando imóvel próprio</option>
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
                                    <span>Salvar senha</span>
                                    </Label>
                                </FormGroup>
                                </div>
                                <div className="col d-flex justify-content-end">
                                <FormGroup check>
                                    <Label check>
                                    <Link to="/forgot-password" className="link-password">
                                        Esqueceu a senha?
                                    </Link>
                                    </Label>
                                </FormGroup>
                                </div>
                            </div>
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
                            >
                                {!loading ? "Entrar" : <Spinner size="md"></Spinner>}
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