const Category_42 = require('../models/categoryModel_42');

const Clothing_42 = require('../models/clothingModel_42');

exports.getHomepage = async (req,res) => {
    let data;
    const [rows] = await Category_42.fetchAll();
    data = rows;
    // res.json(data);
    
    res.render('crown2_42', { 
      title: 'BoCheng Zhan 408510542 (async/await)',
      data
    });
}

exports.getProductsByCategory = async (req,res) => {
  console.log('req.params',req.params.product);
  let data = {};
  data.cid = 0;
  if(req.params.product === 'hats') data.cid = 1;
  else if(req.params.product === 'jackets') data.cid = 2;
  else if(req.params.product === 'sneakers') data.cid = 3;
  else if(req.params.product === 'womens') data.cid = 4;
  else if(req.params.product === 'mens') data.cid = 5;
  
  const [rows] = await Clothing_42.fetchByCategory(data.cid);
  data.Clothing_42 = rows;

  if(data.cid == 1){
    res.render('hats_42', { 
      data: data.Clothing_42
    });
  }
  else if(data.cid == 2){
    res.render('jackets_42', { 
      data: data.Clothing_42
    });
  }
  else if(data.cid == 3){
    res.render('sneakers_42', { 
      data: data.Clothing_42
    });
  }
  else if(data.cid == 4){
    res.render('womens_42', { 
      data: data.Clothing_42
    });
  }
  else if(data.cid == 5){
    res.render('mens_42', { 
      data: data.Clothing_42
    });
  }
}