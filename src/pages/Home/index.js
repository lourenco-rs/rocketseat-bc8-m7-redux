import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatilha-marisol-infantil-feminina/06/H72-0637-006/H72-0637-006_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>
          Tênis muito legal. A descrição desse item é muito grande e
          possivelmente vai quebrar a linha
        </strong>
        <span>R$ 499,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size="16" color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatilha-infantil-disney-minnie-grendene-metalasse/06/J07-2334-006/J07-2334-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 499,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size="16" color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatilha-bebe-princess-pompom-feminina/70/E31-4017-070/E31-4017-070_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 499,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size="16" color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatilha-infantil-couro-catz-calcados-funny-verniz-feminina/16/NCL-0004-016/NCL-0004-016_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 499,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size="16" color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatilha-infantil-couro-catz-calcados-funny-feminina/22/NCL-0003-022/NCL-0003-022_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 499,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size="16" color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-reebok-m-crossfit-nano-8-0-masculino/08/D19-2689-008/D19-2689-008_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 499,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size="16" color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
