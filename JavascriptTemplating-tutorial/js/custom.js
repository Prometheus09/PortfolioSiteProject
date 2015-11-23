
	var listOfContacts = [
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Steven Seinfeld",
			imageUrl : "img/me.jpg",
			address : "Manchester, United Kingdom"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Martin Luther",
			imageUrl : "img/me.jpg",
			address : "Wigan, United Kingdom"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Robert Einstein",
			imageUrl : "img/me.jpg",
			address : "London, United Kingdom"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Jamie Watford",
			imageUrl : "img/me.jpg",
			address : "New York, United States"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Sandra Bullock",
			imageUrl : "img/me.jpg",
			address : "California, United States"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Amanda Baker",
			imageUrl : "img/me.jpg",
			address : "Frankfurt, Germany"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Jena Cole",
			imageUrl : "img/me.jpg",
			address : "Madrid, Spain"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "John Doe",
			imageUrl : "img/me.jpg",
			address : "Barcelona, Spain"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Sally Myers",
			imageUrl : "img/me.jpg",
			address : "Milan, Italy"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Paul Scholes",
			imageUrl : "img/me.jpg",
			address : "Napoli, Italy"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Steven Seinfeld",
			imageUrl : "img/me.jpg",
			address : "Manchester, United Kingdom"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Steven Seinfeld",
			imageUrl : "img/me.jpg",
			address : "Tokyo, Japan"
		},
		{
			email : "seinfeld@steven.com",
			number : "077645332",
			name : "Steven Seinfeld",
			imageUrl : "img/me.jpg",
			address : "Liverpool, United Kingdom"
		}
	];
	
	$(document).ready(function(){
	
		var contactTemplate = _.template($("#contact-template").html());
		var resultingHtml = contactTemplate({contacts : listOfContacts});
		
		$(".contacts-list").html(resultingHtml);
		
		$(".pagination").customPaginate({
		
			itemsToPaginate : ".contact",
			itemsPerPage : 3
			
		});		

	});
