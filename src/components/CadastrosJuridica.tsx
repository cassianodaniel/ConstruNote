import React, { FormEvent, useState } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Spinner } from 'reactstrap';

const CadastrosJuridica : React.FC = () => {
    const [login, setLogin] = useState("");
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
                                placeholder="Nome da empresa"
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
                                placeholder="CNPJ"
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
                            <option selected disabled>Tipo de empresa</option>
                            <option>Construtora</option>
                            <option>Construtora/Incorporadora</option>
                            <option>Incorporadora</option>
                            <option>Autônomo</option>
                            <option>Prestadora de serviços</option>
                            <option>Outras Empresas privadas</option>
                            <option>Órgão público</option>
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
                                    <span>Não tenho empresa</span>
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
                                        Declaro que posso cotar preços e comprar em nome desta empresa
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