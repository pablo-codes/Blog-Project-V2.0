const cloudinary = require('cloudinary').v2
// Configuration 
cloudinary.config({
    cloud_name: "dyevylpk8",
    api_key: "849142168281374",
    api_secret: "0KsyvZa7TEGN1NZlJKyuEcTc31k"
});


// Upload
const Profile = (req, res) => {
    console.log(req.body)
    // const pics = cloudinary.uploader.upload(req.body,{public_id:req.body.na})
    // const user = req.params.id
    // pics.then((data) => {
    //     console.log(data);
    //     console.log(data.secure_url);
    // }).catch((err) => {
    //     console.log(err);
    // });
    // const url = cloudinary.url("olympic_flag",);
    // // The output url
    // console.log(url);
    // // https://pics.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
}


// Generate 


// const cloudinary = require('cloudinary').v2;


// // Configuration 
// cloudinary.config({
//     cloud_name: "dyevylpk8",
//     api_key: "849142168281374",
//     api_secret: "0KsyvZa7TEGN1NZlJKyuEcTc31k"
// });


// // Upload

// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', { public_id: "olympic_flag" })

// res.then((data) => {
//     console.log(data);
//     console.log(data.secure_url);
// }).catch((err) => {
//     console.log(err);
// });


// // Generate 
// const url = cloudinary.url("olympic_flag", {
//     width: 100,
//     height: 150,
//     Crop: 'fill'
// });



// // The output url
// console.log(url);
// // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
module.exports = { Profile };