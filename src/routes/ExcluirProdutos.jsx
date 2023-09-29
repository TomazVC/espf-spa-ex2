import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProduto } from '../components/ListaProdutos';

export default function ExcluirProdutos() {

    const {id} = useParams();

    document.title = "Excluir Produtos " + id;

    //Criar uma estratégia para recuperar o produto na lista
    // Utilizando o id
    // const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id));
    const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id))[0];

  return (
    <div>
        <h1>Excluir Produtos</h1>
        <div>
          <form>
            <fieldset>
              <legend>Produto Selecionado | Deseja mesmo excluir?</legend>
              <div>
                <button>Excluir</button>
              </div>
            </fieldset>
          </form>
        </div>
    </div>
  )
}
