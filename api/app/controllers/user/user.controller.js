import User from '../../models/user.model';

const createUser = (req, res)=>{
    let userData ={
        name: req.body.name,
        password: req.body.password
    }

    const createdUser =  new Promise((resolve, reject)=>{
        
        User.create(userData, (err, userData) => {
            if(err){
                reject(err)
            }else{
                resolve(userData)
            }
        })
    })

    createdUser
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
}

const getUserByEmail = (req, res)=>{
    
}

export {createUser}