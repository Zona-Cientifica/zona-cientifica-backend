require("dotenv").config();
const crypto = require('crypto');
const User = require("../../models/User");
const nodemailer = require('nodemailer');

async function forgot_password(req, res) {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email }); 

        if(!user) 
            return res.status(400).json({ error: 'Usuário não encontrado em nossa base de dados'});

        const token = crypto.randomBytes(20).toString('hex');
        
        
        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,            
                  }
            },
            );

        console.log(token);

        const remetente = nodemailer.createTransport({
            "host": "smtp.mailtrap.io",
            "port": 2525,
            auth:{
            "user": "72ae86b4447d0a",
            "pass": "6d1e7fb790fd51"}
        })

        const emailEnviado = {
            from: "rafa@exemp.com",
            to: email, 
            subject: 'Recuperação de acesso',
            Text:"recuperar senha",
            template: 'auth/forgot_password',
            context: { token },
        }
        remetente.sendMail(emailEnviado, (err) => {
           if (err)
            return res.status(400).json({ error: 'Não foi possivel enviar o e-mail de recuperação de senha'});

            return res.status(200).json({ status: 'E-mail enviado com sucesso'});
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Falha no sistema de recuperação de senha, tente novamente mais tarde'});
    }
};

module.exports = forgot_password;