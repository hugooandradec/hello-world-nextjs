// Importa os tipos NextApiRequest e NextApiResponse do módulo 'next'
import type { NextApiRequest, NextApiResponse } from "next";
// Importa a biblioteca 'moment', que é usada para formatar datas e horários
import moment from 'moment';

// A função 'export default' é o handler que lida com a requisição recebida pela API
// Recebe dois parâmetros, 'req' e 'res', que são objetos da classe 'NextApiRequest' e 'NextApiResponse', respectivamente
export default (req: NextApiRequest, res: NextApiResponse) => {
    // Dentro do handler, é chamado o método 'json()' do objeto 'res' para enviar uma resposta no formato JSON
    // com a data e hora formatada usando o método 'format()' da biblioteca 'moment'
    res.status(200).json({data: moment().format('DD/MM/yyyy HH:mm:ss')});
};
