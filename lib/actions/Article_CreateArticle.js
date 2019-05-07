/**
 * Auto-generated action file for "Billbee" API.
 *
 * Generated at: 2019-05-07T14:39:42.939Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / billbee-io-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Article_CreateArticle'
 * Endpoint Path: '/api/v1/products'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "BasicAttributes": "BasicAttributes",
    "BillOfMaterial": "BillOfMaterial",
    "Id": "Id",
    "Name": "Name",
    "Category1": "Category1",
    "Category2": "Category2",
    "Category3": "Category3",
    "Condition": "Condition",
    "CostPrice": "CostPrice",
    "CountryOfOrigin": "CountryOfOrigin",
    "CustomFields": "CustomFields",
    "DeliveryTime": "DeliveryTime",
    "Description": "Description",
    "EAN": "EAN",
    "ExportDescription": "ExportDescription",
    "HeightCm": "HeightCm",
    "Images": "Images",
    "InvoiceText": "InvoiceText",
    "IsCustomizable": "IsCustomizable",
    "IsDigital": "IsDigital",
    "LengthCm": "LengthCm",
    "LowStock": "LowStock",
    "Manufacturer": "Manufacturer",
    "Materials": "Materials",
    "Occasion": "Occasion",
    "Price": "Price",
    "Recipient": "Recipient",
    "SKU": "SKU",
    "ShippingProductId": "ShippingProductId",
    "ShortDescription": "ShortDescription",
    "SoldAmount": "SoldAmount",
    "SoldAmountLast30Days": "SoldAmountLast30Days",
    "SoldSumGross": "SoldSumGross",
    "SoldSumGrossLast30Days": "SoldSumGrossLast30Days",
    "SoldSumNet": "SoldSumNet",
    "SoldSumNetLast30Days": "SoldSumNetLast30Days",
    "Sources": "Sources",
    "StockCode": "StockCode",
    "StockCurrent": "StockCurrent",
    "StockDesired": "StockDesired",
    "StockReduceItemsPerSale": "StockReduceItemsPerSale",
    "StockWarning": "StockWarning",
    "Stocks": "Stocks",
    "Tags": "Tags",
    "TaricNumber": "TaricNumber",
    "Title": "Title",
    "Type": "Type",
    "Unit": "Unit",
    "UnitsPerItem": "UnitsPerItem",
    "Vat1Rate": "Vat1Rate",
    "Vat2Rate": "Vat2Rate",
    "VatIndex": "VatIndex",
    "Weight": "Weight",
    "WeightNet": "WeightNet",
    "WidthCm": "WidthCm",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['X-Billbee-Api-Key'] = cfg['X-Billbee-Api-Key'];
    securities['basic'] = {username: cfg.username, password: cfg.password};;

    let callParams = {
        spec: spec,
        operationId: 'Article_CreateArticle',
        pathName: '/api/v1/products',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}