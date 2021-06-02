import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.css';

function Cart() {
  const [totalizers, setTotalizers] = useState('');
  const [error, setErro] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const shipping = sessionStorage.getItem('endpoint');

  const history = useHistory();

  if (shipping === null) {
    history.push('/');
  }


  useEffect(() => {
    fetch(`http://localhost:3001/${shipping}`)
      .then((res) => res.json())
      .then((res) => {
        const totalPrice = Math.round((res.data.totalizers[0].value + res.data.totalizers[1].value) * 1) / 100;

        if (totalPrice > 10.0) {
          setIsFreeShipping(true);
        }

        setTotalizers(totalPrice.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        }));
        setProducts(res.data.items);
        setIsLoaded(true);
      }).catch(err => setErro(true));
  }, [shipping]);

  if(error) {
    return (
      <div>
        <div className='model'>
          <h1>Ops...<br></br>Algum erro foi ocorrido. Você inicou a API?</h1>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div>
        <div className='model'>
          <h1>
            LOADING<span>...</span>
          </h1>
        </div>
      </div>
    );
  }
  return (
    <body>
      <div className='model'>
        <div className='header-model'>
          <h1>Meu carrinho</h1>
        </div>
        <ul className={styles.cartProducts}>
          {products.map((product) => (
            <>
              <li key={product.uniqueId} className={styles.product}>
                <img src={product.imageUrl} alt='bombom' />
                <div className={styles.productDetails}>
                  <p>{product.name}</p>
                  <p style={{ color: 'gray', fontSize: '0.8em' }}>
                    {(Math.round(product.price * 1) / 100).toLocaleString('pt-br', {
                       style: 'currency', currency: 'BRL'
                     }
                    )}
                  </p>
                  <p>
                    {(
                      Math.round(product.sellingPrice * 1) / 100).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                      }
                    )}
                  </p>
                </div>
              </li>
            </>
          ))}
        </ul>
        <div className={styles.footerModel}>
          <div className={styles.totalPrice}>
            <h1>Total</h1>
            <span>{totalizers}</span>
          </div>
          {isFreeShipping === true && (
            <div className={styles.FreeShippingAlert}>
              <p>Parabéns, sua compra tem frete grátis!</p>
            </div>
          )}
        </div>
        <button className={'primary-btn'}>Finalizar Compra</button>
      </div>
    </body>
  );
}

export default Cart;
