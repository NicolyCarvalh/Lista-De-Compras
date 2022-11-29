import mongoose, { Schema } from 'mongoose';
import { number } from 'yup';

export interface ProdutoInteface {
    produto: String;
    quantidade: number;
}
const ProdutoSchema = new Schema({
    produto: String,
    quantidade: number
})
export const Produto = mongoose.model('produtos', ProdutoSchema, 'produto');
{
}

