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

// const getSinglePlayer = async (req, res) => {
//     try {
//         const { id } = req.params
//         const single_player = await Players.findById(id)
//         res.status(200).send({ Player: single_player })
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// }

// FootballRouter.get("/:id", getSinglePlayer)


medRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const medi = await MedModel.findById({ _id: id })
        res.status(200).send({ products: medi });
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});


medRouter.get("/", async (req, res) => {
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
