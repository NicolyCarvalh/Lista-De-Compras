import { Link } from "react-router-dom"
import "./Styles/Inicial.css"

export default function Inicial() {
    return (
        <body>
            <Link to={"/Produtos"}><p className="produto">PRODUTOS</p></Link>
            <h1>LISTA DE COMPRAS</h1>
            <input type="text" />
            <button className="botaoAdd">ADICIONAR</button>
            <div className="barra"></div>
            <div className="barra2"></div>
            <ul className="produtos">
                <li>ARROZ</li>
                <li>FEIJÃO</li>
                <li>LEITE</li>
            </ul>
            <ul className="numero">
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
            <Link to={"/Edicao"}><button className="botaoEditar">EDITAR</button></Link>
        </body>
    )
}
