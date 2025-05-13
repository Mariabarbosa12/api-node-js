const db = require('../dataBase/connection'); 

module.exports = {
    async listarMensagens(request, response) {
        try {
             
            const sql = `
            SELECT
             id_mens, id_remetente, id_destinatario, data_hora, texto 
             FROM mensagens;
            `;
            const [rows] =  await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de mensagens',
                itens: rows.length, 
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarMensagens(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de mensagens', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarMensagens(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração em mensagem', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarMensagens(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de mensagem', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  