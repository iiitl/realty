import express from 'express';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

import axios from "axios";

const pinataApiKey = "59cdbcb0f8254fb2d8ec";
const pinataSecretApiKey = "8d3d5cf55cd108ce4d04e06d038d0412f263a7ac9e19744e40cdc278f60f5ee0";
const reladd = "0x25AAC613049F56779064905749F18A0423447115";
const conadd = "0x6b8bf66290cC88e594FBF8e8cb7E75D5e26F3673";

// Setting path for public directory 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

// Handling request 
app.get("/request-ipfs-data", async (req, res) => {

    const data = JSON.stringify({
        "pinataOptions": {
            "cidVersion": 1
        },
        "pinataMetadata": {
            "name": "testing",
            "keyvalues": {
                "address": "addressvalue",

            }
        },
        "pinataContent": {
            "realestate contract address": `${reladd}`,
            "contract contract address": `${conadd}`,

        }
    });

    const config = {
        method: 'post',
        url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        headers: {
            'Content-Type': 'application/json',
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey,
        },
        data: data
    };

    const response = await axios(config);

    const Url = "https://ipfs.io/ipfs/" + response.data.IpfsHash;

    console.log(Url);

    res.json([{
        message: "Successful",
        data: Url,
        error: null,
    }])
})

// Server Setup
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});