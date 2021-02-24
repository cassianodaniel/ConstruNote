import React from "react";
import { Button, Input } from "reactstrap";
import { useMainBox } from "../contexts/MainBoxContext";
import ScreenType from "../enuns/ScreenType";
import './../assets/scss/welcome.scss';
import { motion } from "framer-motion"

const Welcome: React.FC = () => {
  const { setScreen } = useMainBox();

  return (
    <motion.div
      animate={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={"main"}
    >   
        <img 
          style={{
            backgroundSize: 'contain',
            background: 'no-repeat',
            width:'45%',
            height: 'auto',
          }}
          className={"imageFromBackground"}
          src={require('./../assets/images/negocio.png')}
          alt={"decisions"}
        />
        
        
        <div className={"form shadow bg-white rounded"}>

          <div className={"inputs"}>

            <h1>Entre já!</h1>
          
            <h6 style={{
              fontSize: 14, 
              marginTop: 20, 
              marginBottom: 30
            }} 
            className="text-muted">E conheça a melhor plataforma de cotações virtuais!</h6>
            
            <Input style={{}} placeholder="E-mail"></Input>

            <Input style={{marginTop: 10}} placeholder="Senha"></Input>
          
          </div>

          <div style={{
            marginTop: 20,
          }} 
          className={"buttons"}>
            <Button color={"primary"} style={{
              width: "100%"
            }}
            onClick={() => setScreen(ScreenType.MINHASCOTACOES)}>
              Entrar
            </Button>
            <Button style={{
              width: '100%',
              marginTop: 10
            }}
              color={"light"}>
              Cadastre-se
            </Button>
              <motion.button
                style={{
                  float: "right",
                  fontSize: 14,
                  backgroundColor: "transparent",
                  border: 0,
                  marginTop: 10,
                  color: "blue",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Esqueceu a sua senha?
              </motion.button>
          </div>
        </div>
    </motion.div>
  );
};

export default Welcome;
