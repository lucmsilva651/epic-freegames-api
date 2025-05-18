import { deliverData } from "./utils/deliverData.js";
import express from "express";

const api = express();
const port = process.env.PORT || 3000;

api.use(express.json());

api.get("/v1/get/all", async (req, res) => {
  deliverData(res, []);
});

api.get("/v1/get", async (req, res) => {
  deliverData(res, [
    "isCodeRedemptionOnly",
    "customAttributes",
    "effectiveDate",
    "offerMappings",
    "viewableDate",
    "productSlug",
    "description",
    "expiryDate",
    "promotions",
    "categories",
    "namespace",
    "keyImages",
    "seller.id",
    "catalogNs",
    "urlSlug",
    "status",
    "items",
    "price",
    "tags",
    "url",
    "id",
  ]);
});

api.listen(port, () => {
  console.log(`API running on port ${port}`);
});