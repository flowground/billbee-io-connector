# ![LOGO](logo.png) Billbee **flow**ground Connector

## Description

A generated **flow**ground connector for the Billbee API (version v1).

Generated from: https://api.apis.guru/v2/specs/billbee.io/v1/swagger.json<br/>
Generated at: 2019-05-07T17:39:42+03:00

## API Description

Documentation of the Billbee REST API to connect a Billbee account to external aplications.

## Endpoint

The Billbee API endpoint base url is https://app.billbee.io/api/v1 

## Activation

You have to enable the API in the settings of your Billbee account. In addition you need a Billbee API Key identifying the application you develop. To get an API key, send a mail to support@billbee.io and send us a short note about what you are building.

## Authorization & security

Because you can access private data with the Billbee API, every request has to be sent over https and must

* Contain a valid API Key identifying the application/developer. It has to be sent as the HTTP header X-Billbee-Api-Key
* Contain a valid user login with billbee username and api password in form of a basic auth HTTP header

## Throttling

Each endpoint has a throttle of max 2 requests per second per combination of API Key and Billbee user.

When you exceed these 2 calls, the API will return a HTTP 429 status code



## Authorization

Supported authorization schemes:
- API Key- Basic Authentication

## Actions

### Creates a new Billbee user account with the data passed

*Tags:* `Provisioning`

### Returns infos about Billbee terms and conditions

*Tags:* `Provisioning`

### Gets a list of all connected cloud storage devices

*Tags:* `CloudStorage`

### Get a list of all customers

*Tags:* `Customers`

#### Input Parameters
* `page` - _optional_ - The current page to request starting with 1
* `pageSize` - _optional_ - The pagesize for the result list. Values between 1 and 250 are allowed

### Creates a new customer

*Tags:* `Customers`

### Queries a single address from a customer

*Tags:* `Customers`

#### Input Parameters
* `id` - _required_ - The id of the address

### Updates one or more fields of an address

> Id and CustomerId cannot be changed

*Tags:* `Customers`

#### Input Parameters
* `id` - _required_ - The id of the address

### Updates all fields of an address

> Id and CustomerId cannot be changed. Fields you do not send will become empty.

*Tags:* `Customers`

#### Input Parameters
* `id` - _required_ - The id of the address

### Queries a single customer by id

*Tags:* `Customers`

#### Input Parameters
* `id` - _required_ - The id of the customer to query

### Updates a customer by id

*Tags:* `Customers`

#### Input Parameters
* `id` - _required_ - The id of the customer

### Queries a list of addresses from a customer

*Tags:* `Customers`

#### Input Parameters
* `id` - _required_ - The id of the customer
* `page` - _optional_ - The current page to request starting with 1
* `pageSize` - _optional_ - The pagesize for the result list. Values between 1 and 250 are allowed

### Adds a new address to a customer

> Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

*Tags:* `Customers`

#### Input Parameters
* `id` - _required_ - CustomerId to attach the new address to.

### Queries a list of orders from a customer

*Tags:* `Customers`

#### Input Parameters
* `id` - _required_ - The id of the customer
* `page` - _optional_ - The current page to request starting with 1
* `pageSize` - _optional_ - The pagesize for the result list. Values between 1 and 250 are allowed

### Returns a list with all defined orderstates

*Tags:* `EnumApi`

### Returns a list with all defined paymenttypes

*Tags:* `EnumApi`

### Get a list of all events optionally filtered by date

*Tags:* `Events`

#### Input Parameters
* `minDate` - _optional_ - Specifies the oldest date to include in the response
* `maxDate` - _optional_ - Specifies the newest date to include in the response
* `page` - _optional_ - Specifies the page to request
* `pageSize` - _optional_ - Specifies the pagesize. Defaults to 50, max value is 250
* `typeId` - _optional_ - Filter for specific event types
* `orderId` - _optional_ - Filter for specific order id

### LayoutApi_GetList

*Tags:* `Orders`

### Get a list of all orders optionally filtered by date

*Tags:* `Orders`

#### Input Parameters
* `minOrderDate` - _optional_ - Specifies the oldest order date to include in the response
* `maxOrderDate` - _optional_ - Specifies the newest order date to include in the response
* `page` - _optional_ - Specifies the page to request
* `pageSize` - _optional_ - Specifies the pagesize. Defaults to 50, max value is 250
* `shopId` - _optional_ - Specifies a list of shop ids for which invoices should be included
* `orderStateId` - _optional_ - Specifies a list of state ids to include in the response
* `tag` - _optional_ - Specifies a list of tags the order must have attached to be included in the response
* `minimumBillBeeOrderId` - _optional_ - If given, all delivered orders have an Id greater than or equal to the given minimumOrderId
* `modifiedAtMin` - _optional_ - If given, the last modification has to be newer than the given date
* `modifiedAtMax` - _optional_ - If given, the last modification has to be older or equal than the given date.
* `articleTitleSource` - _optional_ - The source field for the article title. 0 = Order Position (default), 1 = Article Title, 2 = Article Invoice Text
    Possible values: 0, 1, 2, 3.
* `excludeTags` - _optional_ - If true the list of tags passed to the call are used to filter orders to not include these tags

### Creates a new order in the Billbee account

> To create an order POST an JSON object to the orders endpoint with the shown properties. <br/>
> Not all properties are required.

*Tags:* `Orders`

#### Input Parameters
* `shopId` - _optional_

### Create an delivery note for an existing order

*Tags:* `Orders` `DeliveryNote`

#### Input Parameters
* `id` - _required_ - The internal billbee id of the order
* `includePdf` - _optional_ - If true, the PDF is included in the response as base64 encoded string
* `sendToCloudId` - _optional_ - Optionally specify the id of a billbee connected cloud device to send the pdf to

### Create an invoice for an existing order

*Tags:* `Orders` `Invoice`

#### Input Parameters
* `id` - _required_ - The internal billbee id of the order
* `includeInvoicePdf` - _optional_ - If true, the PDF is included in the response as base64 encoded string
* `templateId` - _optional_ - You can pass the id of an invoice template to overwrite the assigned template for invoice creation
* `sendToCloudId` - _optional_ - You can pass the id of a connected cloud printer/storage to send the invoice to it

### Returns a list of fields which can be updated with the orders/{id} patch call

*Tags:* `Orders`

### Find a single order by its external id (order number)

*Tags:* `Orders`

#### Input Parameters
* `id` - _required_ - The order id from the external system
* `partner` - _required_ - Optional the name of the shop/marketplace the order was imported from

### Get a single order by its internal billbee id

*Tags:* `Orders`

#### Input Parameters
* `extRef` - _required_ - The internal billbee id of the order

### Get a list of all invoices optionally filtered by date

*Tags:* `Orders` `Invoice`

#### Input Parameters
* `minInvoiceDate` - _optional_ - Specifies the oldest invoice date to include
* `maxInvoiceDate` - _optional_ - Specifies the newest invoice date to include
* `page` - _optional_ - Specifies the page to request
* `pageSize` - _optional_ - Specifies the pagesize. Defaults to 50, max value is 250
* `shopId` - _optional_ - Specifies a list of shop ids for which invoices should be included
* `orderStateId` - _optional_ - Specifies a list of state ids to include in the response
* `tag` - _optional_
* `minPayDate` - _optional_
* `maxPayDate` - _optional_
* `includePositions` - _optional_
* `excludeTags` - _optional_ - If true the list of tags passed to the call are used to filter orders to not include these tags

### Get a single order by its internal billbee id

*Tags:* `Orders`

#### Input Parameters
* `id` - _required_ - The internal billbee id of the order
* `articleTitleSource` - _optional_ - The source field for the article title. 0 = Order Position (default), 1 = Article Title, 2 = Article Invoice Text
    Possible values: 0, 1, 2, 3.

### Updates one or more fields of an order

*Tags:* `Orders`

#### Input Parameters
* `id` - _required_ - The Billbee internal order id of the Order

### Changes the main state of a single order

> ### REMARKS ###<br/>
> Use this call to change the state of an order to i.e. paid or sent.<br/>
> <br/>
> The state is transfered to the external shop/marketplace if configured.<br/>
> This is the list of known states:<br/>
> - 1: ordered<br/>
> - 2: confirmed<br/>
> - 3: paid<br/>
> - 4: shipped<br/>
> - 5: reclamation<br/>
> - 6: deleted<br/>
> - 7: closed<br/>
> - 8: canceled<br/>
> - 9: archived<br/>
> - 10: not used<br/>
> - 11: demand note 1<br/>
> - 12: demand note 2<br/>
> - 13: packed<br/>
> - 14: offered<br/>
> - 15: payment reminder

*Tags:* `Orders`

#### Input Parameters
* `id` - _required_ - The internal id of the order

### Sends a message to the buyer

*Tags:* `Orders`

#### Input Parameters
* `id` - _required_ - The id of the order

### Add a shipment to a given order

*Tags:* `Orders`

#### Input Parameters
* `id` - _required_ - The internal billbee id of the order

### Attach one or more tags to an order

> When a tag is already attached, it is ignored. Tags are not case sensitive.

*Tags:* `Orders`

#### Input Parameters
* `id` - _required_ - The internal id of the order

### Updates/Sets the tags attached to an order

*Tags:* `Orders`

#### Input Parameters
* `id` - _required_ - The internal id of the order

### Triggers a rule event

*Tags:* `Orders`

#### Input Parameters
* `id` - _required_ - The id of the order

### Get a list of all products

*Tags:* `Products`

#### Input Parameters
* `page` - _optional_ - The current page to request starting with 1
* `pageSize` - _optional_ - The pagesize for the result list. Values between 1 and 250 are allowed
* `minCreatedAt` - _optional_ - Optional the oldest create date of the articles to be returned

### Creates a new product

*Tags:* `Products`

### Returns a list of fields which can be updated with the patch call

*Tags:* `Products`

### GEts a list of all defined categories

*Tags:* `Products`

### Queries a list of all custom fields

*Tags:* `Products`

#### Input Parameters
* `page` - _optional_
* `pageSize` - _optional_

### Queries a single custom field

*Tags:* `Products`

#### Input Parameters
* `id` - _required_ - The id of the custom field to query

### Delete multiple images by id

*Tags:* `Products`

### Deletes a single image by id

*Tags:* `Products`

#### Input Parameters
* `imageId` - _required_ - The image id

### Returns a single image by id

*Tags:* `Products`

#### Input Parameters
* `imageId` - _required_ - The Id of the image

### Queries the reserved amount for a single article by id or by sku

*Tags:* `Products`

#### Input Parameters
* `id` - _required_ - The id or the sku of the article to query
* `lookupBy` - _optional_ - Either the value id or the value sku to specify the meaning of the id parameter
* `stockId` - _optional_ - Optional the stock id if the multi stock feature is enabled

### Update the stock qty of an article

> The article is specified by sku. You have to send the absolute value for the current stock

*Tags:* `Products`

### Update the stock code of an article

*Tags:* `Products`

### Update the stock qty for multiple articles at once

*Tags:* `Products`

### Queries a single article by id or by sku

*Tags:* `Products`

#### Input Parameters
* `id` - _required_ - The id or the sku of the article to query
* `lookupBy` - _optional_ - Either the value id, ean or the value sku to specify the meaning of the id parameter

### Updates one or more fields of a product

*Tags:* `Products`

#### Input Parameters
* `id` - _required_ - The id of the Product

### Returns a list of all images of the product

*Tags:* `Products`

#### Input Parameters
* `productId` - _required_ - The Id of the product

### Add multiple images to a product or replace the product images by the given images

*Tags:* `Products`

#### Input Parameters
* `productId` - _required_ - The id of the product
* `replace` - _optional_ - If you pass true, the images will be replaced by the passed images. Otherwise the passed images will be appended to the product.

### Deletes a single image from a product

*Tags:* `Products`

#### Input Parameters
* `productId` - _required_ - The product id
* `imageId` - _required_ - The image id

### Returns a single image by id

*Tags:* `Products`

#### Input Parameters
* `productId` - _required_ - The Id of the product
* `imageId` - _required_ - The Id of the image

### Add or update an existing image of a product

*Tags:* `Products`

#### Input Parameters
* `productId` - _required_ - The product id
* `imageId` - _required_ - The image id. If you pass 0, the image will be added

### Search for products, customers and orders.<br/>
> Type can be "order", "product" and / or "customer"<br/>
> Term can contains lucene query syntax

*Tags:* `Products` `Customers` `Orders`

### Shipment_GetPing

*Tags:* `Shipments`

### Creates a new shipment with the selected Shippingprovider

*Tags:* `Shipments`

### Get a list of all shipments optionally filtered by date. All parameters are optional.

*Tags:* `Shipments`

#### Input Parameters
* `page` - _optional_ - Specifies the page to request.
* `pageSize` - _optional_ - Specifies the pagesize. Defaults to 50, max value is 250
* `createdAtMin` - _optional_ - Specifies the oldest shipment date to include in the response
* `createdAtMax` - _optional_ - Specifies the newest shipment date to include in the response
* `orderId` - _optional_ - Get shipments for this order only.
* `minimumShipmentId` - _optional_ - Get Shipments with a shipment greater or equal than this id. New shipments have a greater id than older shipments.
* `shippingProviderId` - _optional_ - Get Shippings for the specified shipping provider only. <seealso cref="M:Rechnungsdruck.WebApp.Controllers.Api.ShipmentController.GetShippingproviders" />

### Query all defined shipping providers

*Tags:* `Shipments`

### Creates a shipment for an order in billbee

*Tags:* `Shipments`

### Deletes all existing WebHook registrations.

*Tags:* `Webhooks`

### Gets all registered WebHooks for a given user.

*Tags:* `Webhooks`

### Registers a new WebHook for a given user.

*Tags:* `Webhooks`

### Returns a list of all known filters you can use to register webhooks

*Tags:* `Webhooks`

### Deletes an existing WebHook registration.

*Tags:* `Webhooks`

#### Input Parameters
* `id` - _required_ - The WebHook ID.

### Looks up a registered WebHook with the given {id} for a given user.

*Tags:* `Webhooks`

#### Input Parameters
* `id` - _required_

### Updates an existing WebHook registration.

*Tags:* `Webhooks`

#### Input Parameters
* `id` - _required_ - The WebHook ID.

## License

**flow**ground :- Telekom iPaaS / billbee-io-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
