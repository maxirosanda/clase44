
const User = require('../models/usuarios');
const loggerError = require('pino')('./logs/error.log')

module.exports = {

    vistadatos: (req,res)=>{
        let datos =  [req.user]

          res.json({datos:datos})
    },


    updateDatos : async (req, res, next) => { 
  
        const {nombre,mail,direccion,edad,pre_tel,tel,_id,foto}=req.body
 
        console.log(req.body)
        let nuevodatos={}
        if(nombre) nuevodatos.nombre=nombre
        if(mail) nuevodatos.mail=mail
        if(direccion) nuevodatos.direccion=direccion
        if(edad) nuevodatos.edad=edad
        if(pre_tel) nuevodatos.pre_tel=pre_tel
        if(tel) nuevodatos.tel= tel
      
        try{
          let datos = await User.findOneAndUpdate(
          {_id: _id},
          {$set:nuevodatos},
          {new:true}
          )
          await res.json(datos) 
        }
        catch (e) { loggerError.error(e) }
      
        },


    login: (req, res) => {
        res.json(req.user)
    },

   activo: (req, res) => {
        res.json({activo : req.isAuthenticated()})
    },

    register: (req, res) => {
        
        res.json(req.user)
    },

    logout: async (req, res) => {
        try{
            user = await User.find({username: req.user.username}).lean()
           
            await req.session.destroy( err => {
               if(err) return err;
    
            res.json(user)
            })
         }
         catch (e) { loggerError.error(e) } 
         
      
    }
}

