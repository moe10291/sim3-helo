const bcrypt= require('bcryptjs');

module.exports={

    register: async (req, res)=> {
        let{username, password}= req.body
        const db= req.app.get('db')
        let user= await db.find_user([username]);
        console.log('&&username&&', user)
        if(user[0]){
            return res.status(200),send({
                loggedIn: false,
                message: 'Username already in-use'
            })
        } else {
            let salt= bcrypt.genSaltSync(10);
            let hash= bcrypt.hashSync(password, salt)
            let createdUsername= await db.user_created([username, hash]);
            req.session.user={
                username: createdUsername[0].username,
                id: createdUsername[0].id            }
        }
        res.status(200).send({
            loggedIn: true,
            message: 'Login Successful'
        })
    },


    login: async (req, res)=>{
        let {username, password}= req.body;
        const db= req.app.get('db');
        let user= await db.find_user([username]);
        if(!user[0]){
            return res.status(200).send({loggedIn: false, message: 'Email not found'})
        }
        let result= bcrypt.compareSync(password, user[0].hash_value)
        if(result){
            req.session.user= {username: user[0].username, id: username[0].id}
            return res.status(200).send({loggedIn: true, message: 'Login Successful'})
        } else{
            return res.status(401).send({loggedIn: false, message: "Incorrect Password"})
        }
    }








































}