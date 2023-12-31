import { Link } from "react-router-dom";
import { ListaProduto } from "../components/ListaProdutos";
import style from "./Produtos.module.css";
import {AiTwotoneEdit as Editar} from "react-icons/ai";
import {MdDeleteForever as Excluir} from "react-icons/md";

export default function Produtos() {
  document.title = "Lista de Produtos";

  return (
    <div>
      <h1>Produtos</h1>

      <table className={style.tblEstilo}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>EDITAR</th>
            <th>EXCLUIR</th>
          </tr>
        </thead>

        <tbody>
          {ListaProduto.map((item, indice) => (
            <tr key={indice} className={style.lineTbl}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.desc}</td>
              <td>{item.preco}</td>
              <td><Link to={`/editar/produtos/${item.id}`}><Editar/></Link></td>
              <td><Link to={`/excluir/produtos/${item.id}`}><Excluir/></Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>
              PRODUTOS INFORMÁTICOS - QTD = {ListaProduto.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
