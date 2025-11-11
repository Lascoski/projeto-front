import { useState } from "react";
import "./style.css";

export default function Component() {
  const [nome, setNome] = useState("Nati");
  const [mostrarTexto, setMostrarTexto] = useState(true);

  function alternarTexto() {
    setMostrarTexto(!mostrarTexto);
  }
 
  return (
    <main className="container">
      <section className="intro">
        <h2>Olá, {nome}!</h2>
        <p className="texto">
          Atualmente, com o avanço constante da tecnologia, a identidade digital tornou-se
          uma extensão fundamental da identidade pessoal. No entanto, com essa evolução,
          surgem também novos riscos, sendo o roubo de identidade online um dos mais alarmantes.
        </p>

        <div className="input-area">
          <label htmlFor="nome">Alterar nome:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>

        <button className="btn" onClick={alternarTexto}>
          {mostrarTexto ? "Ocultar Conteúdo" : "Mostrar Conteúdo"}
        </button>
      </section>

      {mostrarTexto && (
        <section className="content">
          <h3>Técnicas Comuns Utilizadas pelos Criminosos</h3>
          <ul>
            <li>
              <b>1. Phishing:</b> Envio de e-mails fraudulentos que aparentam ser de instituições
              legítimas, solicitando informações pessoais. ({nome})
            </li>
            <li>
              <b>2. Malware:</b> Programas maliciosos que se infiltram em dispositivos para roubar dados.
            </li>
            <li>
              <b>3. Keylogging:</b> Softwares que registram tudo o que é digitado no teclado.
            </li>
            <li>
              <b>4. Roubo de Dados em Redes Sociais:</b> Coleta de informações públicas ou obtidas por engenharia social.
            </li>
          </ul>

          <img src="imgs/download.jpg" alt="Roubo de dados" />

          <p className="texto">
            No Brasil, a proteção da identidade digital é regida principalmente pela Lei Geral de
            Proteção de Dados (LGPD), Lei nº 13.709/2018. A LGPD estabelece normas sobre a coleta,
            armazenamento e tratamento de dados pessoais, garantindo maior segurança e privacidade.
          </p>
        </section>
      )}
    </main>
  );
}
