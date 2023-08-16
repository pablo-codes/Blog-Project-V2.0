const bcrypt = require("bcrypt");
const user = require('../models/schema')
const path = require('path')
const jwt = require('jsonwebtoken');
const { get } = require("gridfile");
const dotenv = require('dotenv').config({ path: path.join(__dirname, '../config.env') })




// Get's register page
const register = (req, res) => {
  res.render("register");
}


// Get's login page
const login = async (req, res) => {
  try {

    res.render("login");
  } catch (error) {
    console.log(error)
  }

}



// Creates a user
const registerUser = async (req, res) => {
  try {

    const body = req.body;
    const { email, username, password } = req.body


    console.log(body)
    if (!email || !username || !password) {


    } else {
      const oldEmail = await user.findOne({ email: body.email });
      const oldUser = await user.findOne({ username: body.username });
      if (oldEmail) {
        const email = body.email

      }

      else if (oldUser) {
        const username = body.username

      }

      else {

        if (body.email == process.env.EMAIL && body.password == process.env.PASSWORD) {
          const saltround = 10


          const encryptedUserPassword = await bcrypt.hash(body.password, saltround);

          await user.create({
            username: body.username,
            password: encryptedUserPassword,
            role: "Admin",
            email: body.email,
            image: ""
          });


          const token = jwt.sign(
            { user_id: user._id, email: body.email },
            process.env.ADMIN_KEY,
            {
              expiresIn: "3d"
            }
          );


          const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { token: token })
          const Get = await user.findOne({ email: req.body.email })
          const all = {
            token: token,
            user_id: Get._id
          }

          res.send(token)
          console.log("user added")
        }

        else {
          const saltround = 10

          const encryptedUserPassword = await bcrypt.hash(body.password, saltround);


          await user.create({
            username: body.username,
            password: encryptedUserPassword,
            role: "User",
            email: body.email,
            image: ""
          });


          const token = jwt.sign(
            { user_id: user._id, email: body.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "3d"
            }
          );


          const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { token: token })
          const Get = await user.findOne({ email: req.body.email })





          res.send(token)
          console.log('user added')
        }
      }
    }


  } catch (err) {
    console.log(err)
  }

}

// Sign in to a user
const loginUser = async (req, res, next) => {


  try {
    const body = req.body

    const users = await user.findOne({ email: body.email });

    if (users) {

      if (body.email == process.env.EMAIL && body.password == process.env.PASSWORD) {
        if (bcrypt.compareSync(body.password, users.password)) {


          const token = jwt.sign(
            { users_id: users._id, email: req.body.email },
            process.env.ADMIN_KEY,
            {
              expiresIn: "5h"
            }
          );

          const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { token: token })
          const Get = await user.findOne({ email: req.body.email })


          res.send(token)

          res.redirect('/admin');
        }

        else {

          let check = "invalid Password"
          res.render("login", { check });
        }
      }

      else if (body.email !== process.env.EMAIL && body.password !== process.env.PASSWORD) {
        if (bcrypt.compareSync(body.password, users.password)) {


          const token = jwt.sign(
            { users_id: users._id, email: req.body.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "5h"
            }
          );


          const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { token: token })
          const Get = await user.findOne({ email: req.body.email })


          res.send(token)



        }
        else {
          let check = "Email exists but invalid Password"
          res.send(check);
        }
      } else {
        console.log("error")
      }

    }
    else {
      let check2 = "invalid user"
      res.send(check2);
    }
  } catch (error) {
    console.log(error)
    res.send(error)
  }

}

const updateUser = async (req, res) => {
  try {
    const users = req.params.id
    const { username, } = req.body.user
    console.log(req.body)
    const topics = await user.findOneAndUpdate({ token: users }, { username: username, image: req.body.url })




    res.send('updated');


  } catch (error) {
    console.log(error)

    res.send("login")
  }

}





module.exports = { register, login, registerUser, loginUser, updateUser };