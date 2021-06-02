import React from 'react';
import { useHistory } from 'react-router-dom';


function Home () {
  const history = useHistory();

  return (
    <body>
    <div style={{ marginTop: '20vh', height: '50vh' }} className='model'>
      <div className='header-model'>
        <h1>Selecione uma opção</h1>
      </div>
      <div className='content-model'>
        <button className={'primary-btn'} onClick={e => { sessionStorage.setItem('endpoint', 'products/freeshipping'); history.push('/cart') }}>CARRINHO COM FRETE GRÁTIS</button>
        <button className={'primary-btn'} onClick={e => { sessionStorage.setItem('endpoint', 'products/'); history.push('/cart') }}>CARRINHO COM FRETE</button>
      </div>
    </div>
    </body>
  )
}

export default Home;