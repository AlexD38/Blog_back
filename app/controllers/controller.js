import dataMapper from "../models/get_model.js";

const get_controller = {
    // changer await datamapper.blabla par getInfos
    // async clientInformation(req, res) {
    //     try {
    //         const clientId = req.headers.clientid;
    //         if (!clientId) {
    //             res.json({ failed: "client id is null" });
    //             return;
    //         }
    //         let client = await dataMapper.getOneClient(clientId);
    //         if (client) {
    //             res.json(client);
    //         } else {
    //             console.log(error);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
};

export default get_controller;
