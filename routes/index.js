var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  				"nav-section" : {
					"nav-login" : "Log in",
					"nav-signup" : "Sign up"
				},

				"main-section" : {
					"main-heading" : "Watch your favorite movies, instantly.",
					"main-btn1" : "Learn More",
					"main-btn2" : "Search"
				},

				"content-A-section" : {
					"content-A-heading" : "A world of movies at your fingertips.",
					"content-A-description" : "Choose from the latest titles, with new movies added every day."
				},

				"content-B-section" : {
					"content-B-heading" : "Available everywhere",
					"content-B-description" : "Start watching on one device, and pick up where you left off on another device."
				},

				"footer-company" : {
					"footer-company-heading" : "Bolt",
					"footer-company-list1" : "Careers",
					"footer-company-list2" : "Terms",
					"footer-company-list3" : "Help"							
				},

				"footer-company-more" : {
					"footer-company-more-heading" : "More Bolt",
					"footer-company-more-list1" : "Gift Cards",
					"footer-company-more-list2" : "Trailers"
				},

				"footer-news" : {
					"footer-news-heading" : "News",
					"footer-news-list1" : "Blog",
					"footer-news-list2" : "Twitter",
					"footer-news-list3" : "YouTube",
					"footer-news-list4" : "Google+",
					"footer-news-list5" : "Facebook"
				}

  			});
});

module.exports = router;
