﻿var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.end();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


app.get('/text', function (req, res) {
   res.header('Access-Control-Allow-Origin', "*");
	res.send(getText());
});



function getText(){
   
   return JSON.stringify({ 
		title: "AmazonAtlas 11 October, 2018  Today,",
		date : "11 October, 2018",
		message : "AmazonAtlas"+
		"Today, 11 October 2018, WikiLeaks publishes a Highly Confidential internal document from the cloud computing provider Amazon. The document from late 2015 lists the addresses and some operational details of over one hundred data centers spread across fifteen cities in nine countries. To accompany this document, WikiLeaks also created a map showing where Amazon’s data centers are located."+
		
		"Amazon, which is the largest cloud provider, is notoriously secretive about the precise locations of its data centers. While a few are publicly tied to Amazon, this is the exception rather than the norm. More often, Amazon operates out of data centers owned by other companies with little indication that Amazon itself is based there too or runs its own data centers under less-identifiable subsidiaries such as VaData, Inc. In some cases, Amazon uses pseudonyms to obscure its presence. For example, at its IAD77 data center, the document states that “Amazon is known as ‘Vandalay Industries’ on badges and all correspondence with building manager."+
		
		"Amazon is the leading cloud provider for the United States intelligence community. In 2013, Amazon entered into a $600 million contract with the CIA to build a cloud for use by intelligence agencies working with information classified as Top Secret. Then, in 2017, Amazon announced the AWS Secret Region, which allows storage of data classified up to the Secret level by a broader range of agencies and companies. Amazon also operates a special GovCloud region for US Government agencies hosting unclassified information." +
		
		"Currently, Amazon is one of the leading contenders for an up to $10 billion contract to build a private cloud for the Department of Defense. Amazon is one of the only companies with the certifications required to host classified data in the cloud. The Defense Department is looking for a single provider and other companies, including Oracle and IBM, have complained that the requirements unfairly favor Amazon. Bids on this contract are due tomorrow."+
		
		"While one of the benefits of the cloud is the potential to increase reliability through geographic distribution of computing resources, cloud infrastructure is remarkably centralised in terms of legal control. Just a few companies and their subsidiaries run the majority of cloud computing infrastructure around the world. Of these, Amazon is the largest by far, with recent market research showing that Amazon accounts for 34% of the cloud infrastructure services market."+
		
		"Until now, this cloud infrastructure controlled by Amazon was largely hidden, with only the general geographic regions of the data centers publicised. While Amazon’s cloud is comprised of physical locations, indications of the existence of these places are primarily buried in government records or made visible only when cloud infrastructure fails due to natural disasters or other problems in the physical world."+
		
		"In the process of dispelling the mystery around the locations of Amazon’s data centers, WikiLeaks also turned this document into a puzzle game, the Quest of Random Clues. The goal of this game was to encourage people to research these data centers in a fun and intriguing way, while highlighting related issues such as contracts with the intelligence community, Amazon’s complex corporate structures, and the physicality of the cloud."
		
	 });
}

