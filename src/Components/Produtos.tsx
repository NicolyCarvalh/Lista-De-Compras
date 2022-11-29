import { Link } from "react-router-dom"
import "./Styles/Produtos.css"

export default function Produtos(){
    return(
        <body>
            <h1>LISTA DE PRODUTOS</h1>
            <ul className="listaProdutos">
                <div className="barraProdutos">
                <li>ARROZ</li>
                <li>FEIJÃO</li>
                <li>LEITE</li>
                <li>CAIXA DE LEITE</li>
                <li>ÓLEO</li>
                <li>FARINHA</li>
                <li>CERVEJA</li> 
                </div>
            </ul>
           
            <Link to={"/"}><button className="botaoVoltar">VOLTAR</button></Link>
        </body>
    )
}
