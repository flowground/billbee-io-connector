/**
 * Auto-generated action file for "Billbee" API.
 *
 * Generated at: 2019-05-07T14:39:42.934Z
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
 * Operation: 'OrderApi_PostNewOrder'
 * Endpoint Path: '/api/v1/orders'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "shopId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "shopId": "shopId",
    "AcceptLossOfReturnRight": "AcceptLossOfReturnRight",
    "AdjustmentCost": "AdjustmentCost",
    "AdjustmentReason": "AdjustmentReason",
    "BillBeeOrderId": "BillBeeOrderId",
    "BillBeeParentOrderId": "BillBeeParentOrderId",
    "BillbeeShopId": "BillbeeShopId",
    "BillbeeShopName": "BillbeeShopName",
    "Email": "Email",
    "FirstName": "FirstName",
    "FullName": "FullName",
    "Id": "Id",
    "LastName": "LastName",
    "Nick": "Nick",
    "Platform": "Platform",
    "Buyer": "Buyer",
    "Comments": "Comments",
    "ConfirmedAt": "ConfirmedAt",
    "CreatedAt": "CreatedAt",
    "Currency": "Currency",
    "CustomInvoiceNote": "CustomInvoiceNote",
    "LanguageId": "LanguageId",
    "Name": "Name",
    "Number": "Number",
    "PriceGroupId": "PriceGroupId",
    "Tel1": "Tel1",
    "Tel2": "Tel2",
    "VatId": "VatId",
    "Customer": "Customer",
    "CustomerNumber": "CustomerNumber",
    "DeliverySourceCountryCode": "DeliverySourceCountryCode",
    "DistributionCenter": "DistributionCenter",
    "BillbeeId": "BillbeeId",
    "City": "City",
    "Comment": "Comment",
    "Company": "Company",
    "Country": "Country",
    "CountryISO2": "CountryISO2",
    "HouseNumber": "HouseNumber",
    "Line2": "Line2",
    "Line3": "Line3",
    "NameAddition": "NameAddition",
    "Phone": "Phone",
    "Salutation": "Salutation",
    "State": "State",
    "Street": "Street",
    "Title": "Title",
    "Zip": "Zip",
    "InvoiceAddress": "InvoiceAddress",
    "InvoiceDate": "InvoiceDate",
    "InvoiceNumber": "InvoiceNumber",
    "InvoiceNumberPostfix": "InvoiceNumberPostfix",
    "InvoiceNumberPrefix": "InvoiceNumberPrefix",
    "IsCancelationFor": "IsCancelationFor",
    "LanguageCode": "LanguageCode",
    "OrderItems": "OrderItems",
    "OrderNumber": "OrderNumber",
    "PaidAmount": "PaidAmount",
    "PayedAt": "PayedAt",
    "PaymentInstruction": "PaymentInstruction",
    "PaymentMethod": "PaymentMethod",
    "PaymentReference": "PaymentReference",
    "PaymentTransactionId": "PaymentTransactionId",
    "RebateDifference": "RebateDifference",
    "Seller": "Seller",
    "SellerComment": "SellerComment",
    "ShipWeightKg": "ShipWeightKg",
    "ShippedAt": "ShippedAt",
    "ShippingAddress": "ShippingAddress",
    "ShippingCost": "ShippingCost",
    "ShippingIds": "ShippingIds",
    "ShippingProfileId": "ShippingProfileId",
    "ShippingProfileName": "ShippingProfileName",
    "ShippingProviderId": "ShippingProviderId",
    "ShippingProviderName": "ShippingProviderName",
    "ShippingProviderProductId": "ShippingProviderProductId",
    "ShippingProviderProductName": "ShippingProviderProductName",
    "ShippingServices": "ShippingServices",
    "Tags": "Tags",
    "TaxRate1": "TaxRate1",
    "TaxRate2": "TaxRate2",
    "TotalCost": "TotalCost",
    "UpdatedAt": "UpdatedAt",
    "VatMode": "VatMode",
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
        operationId: 'OrderApi_PostNewOrder',
        pathName: '/api/v1/orders',
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