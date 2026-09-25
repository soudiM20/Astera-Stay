const express=require("express");
const reviewRoute=express.Router({mergeParams:true});//mergeparams for getting parent routes parameters
const wrapAsync= require("../utils/wrapAsync.js");
const{validateReview,isLoggedIn}= require("../middleware.js");
//REQUIRING REVIEW CONTROLLER
const reviewController= require("../controller/review.js");

//REVIEW ROUTE
//save review route
reviewRoute.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.saveReview));

//delete review route; the controller also verifies that the authenticated user owns the review
reviewRoute.delete("/:reviewId",isLoggedIn,wrapAsync(reviewController.deleteReview));

module.exports=reviewRoute;
