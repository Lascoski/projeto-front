import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Component from './Component.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App title="Os perigos de roubo de dados na internet" content="conteúdo recebido com  "/>

    <App title="" content="mesmo conteúdo recebido com  props.title"/>
    <Component />
  </StrictMode>,
)
