// const index = require('./static_files/index')
const express = require('express');
const app = express();

app.use(express.static('static_files'));

const fakeDatabase = {

};

// console.log(fakeDatabase);

// app.get('/:userid', (req, res) => {
//    const takeALook = req.params.userid;
//    const val = fakeDatabase[takeALook];
//    console.log(takeALook, '->', val);

//    if(val){
//        res.send(val)
//    } else {
//       res.send({});
//    }
// }
// );

app.get('/team', (req, res) => {
   const allUserNames = Object.keys(fakeDatabase);
   console.log('allUsernames is:', allUserNames);
   res.send(allUserNames);
}
);

app.get('/team/:userid', (req, res) => {
   const nameToLookup = req.params.userid;
   const val = fakeDatabase[nameToLookup];
   if (val) {
      res.send(val)
   } else {
      res.send({})
   }
   console.log(nameToLookup, '->', val)

})


app.listen(3000, () => {
   console.log('My rest API running on port 3000!');
})