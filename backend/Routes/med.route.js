const express = require("express");
const medRouter = express.Router();
const MedModel = require("../Model/medicine.model");


medRouter.post("/add", async (req, res) => {
    try {
        const medi = MedModel(req.body);
        await medi.save();
        res.status(200).send("Successfully added Data");
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});
//get all Products
medRouter.get("/", async (req, res) => {
    try {
        const medi = await MedModel.find();
        res.status(200).send({ products: medi });
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});

//for Static filters
// medRouter.get("/:category", async (req, res) => {
    
//    let filters={}   
//    const {category}=req.params
//    if(req.query.brand){
//     filters.brand=req.query.brand
//    }
//    if(req.query.subcat2){
//     filters.brand=req.query.subcat2
//    }
  
//   if(category){
//     filters.category=category
//   }
//    console.log(filters)
//     try {
//         const medi = await MedModel.find(filters);
//         res.status(200).send({ products: medi });
//     } catch (err) {
//         res.status(400).send({ err: err.message });
//     }
// });

medRouter.get("/:category", async (req, res) => {
    let filters = { category: req.params.category };
    let value=0
    console.log(req.query)
    if (req.query.brandrange) {
      filters.brand = req.query.brandrange;
    }
    
    if (req.query.subcat2) {
      filters.subcat2 = req.query.subcat2;
    }
    
    if (req.query.name) {
      filters.name = { $regex: req.query.name, $options: "i" };
    }
    
    if (req.query.priceMin) {
      filters.price = { $gte: parseFloat(req.query.priceMin) };
    }
    
    if (req.query.priceMax) {
      filters.price = { ...filters.price, $lte: parseFloat(req.query.priceMax) };
    }
      if (req.query.sortingByPrice === "asc") {
       value=Number(1)
      } else if (req.query.sortingByPrice === "desc") {
        value=Number(-1)
      }else{
        value=0
      }
      
    try {
      let medi = await MedModel.find(filters).sort({price:value});

      
      res.status(200).send({ products: medi });
    
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  });
  

//get particular Products for logged-in user
medRouter.get("/admin", async (req, res) => {
    try {
        const medi = await MedModel.find({ authorID: req.body.authorID });
        res.status(200).send({ products: medi });
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});

medRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params;
    const medi = await MedModel.find({ _id: id });
    try {
        if (req.body.medID !== medi.medID) {
            res.status("u are not that person");
        } else {
            const data = await MedModel.findByIdAndUpdate({ _id: id }, req.body);
            res.send("data has been updated");
        }
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});

medRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await MedModel.findByIdAndDelete({ _id: id });
        res.send("data has been Deleted");
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});

module.exports = { medRouter };
