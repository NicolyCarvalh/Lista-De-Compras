import { Link } from "react-router-dom"
import "./Styles/Edicao.css"
import { FaTrashAlt, FaPlus, FaRegWindowMinimize } from 'react-icons/fa';

export default function(){
    return(
        <body>
            <h1>EDITAR</h1> 
             <div className="barraEdicao"></div>
             <p className="quantidade">QUANT.</p>
             <p className="produtoEdicao">ARROZ</p>
             <div className='barraContador'></div>
             <p className="contador">1</p>
             <i className="iconLixo"><FaTrashAlt/></i>
             <i className='iconMais'><FaPlus/></i>
             <i className="iconMenos"><FaRegWindowMinimize/></i>
             <Link to={"/"}><button className="botaoSalvar">SALVAR</button></Link>
        </body>
    )
}