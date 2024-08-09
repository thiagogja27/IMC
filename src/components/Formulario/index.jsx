import { useState } from "react";

const Formulario = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const formatarAltura = (valor) => {
    // Adiciona um ponto decimal na visualização
    const apenasNumeros = valor.replace(/\D/g, '');
    if (apenasNumeros.length > 2) {
      return `${apenasNumeros.slice(0, -2)}.${apenasNumeros.slice(-2)}`;
    }
    return apenasNumeros;
  };

  const calcularIMC = () => {
    const alturaNumerica = parseFloat(altura);
    const pesoNumerico = parseFloat(peso);
    
    if (pesoNumerico > 0 && alturaNumerica > 0) {
      const alturaMetros = alturaNumerica / 100;
      const imc = pesoNumerico / (alturaMetros * alturaMetros);
      return imc.toFixed(2);
    }
    return null;
  };

  const interpretarResultado = (imc) => {
    if (imc < 18.5) {
      return "Você está abaixo do peso.";
    } else if (imc < 25) {
      return "Você está no peso ideal.";
    } else if (imc < 30) {
      return "Você está com sobrepeso.";
    } else {
      return "Você está com obesidade.";
    }
  };

  const resultadoIMC = calcularIMC();
  const mensagemResultado = resultadoIMC ? interpretarResultado(parseFloat(resultadoIMC)) : null;

  return (
    <div className="container">
      <form>
        <h1>IMC</h1>
        <input
          type="text"
          placeholder="Altura (cm)"
          value={formatarAltura(altura)}
          onChange={(evento) => setAltura(evento.target.value)}
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(evento) => setPeso(evento.target.value)}
        />
        {resultadoIMC && (
          <>
            <p>IMC: {resultadoIMC}</p>
            <p>{mensagemResultado}</p>
          </>
        )}
                <div>
        <img className="container" src="https://escolaeducacao.com.br/wp-content/uploads/2020/04/tabela-imc.jpg" alt="" />
    </div>
      </form>
    </div>
  );
};

export default Formulario;


