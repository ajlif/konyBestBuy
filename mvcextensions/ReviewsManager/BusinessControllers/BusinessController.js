define([], function () { 
    
    /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Controller
     */
    function ReviewsBusinessController() { 
        kony.mvc.Business.Controller.call(this); 

    } 

    inheritsFrom(ReviewsBusinessController, kony.mvc.Business.Controller); 

    /**
     * Overridden Method of kony.mvc.Business.Controller
     * This method gets called when business controller gets initialized
     * @method
     */
    ReviewsBusinessController.prototype.initializeBusinessController = function() { 

    }; 

    /**
     * Overridden Method of kony.mvc.Business.Controller
     * This method gets called when business controller is told to execute a command
     * @method
     * @param {Object} kony.mvc.Business.Command Object
     */
	ReviewsBusinessController.prototype.execute = function(command) { 

		kony.mvc.Business.Controller.prototype.execute.call(this, command);

	};

  
    ReviewsBusinessController.prototype.getReviews = function(idProduct, presentationSuccessCallback,presentationErrorCallback){

      //loading my model object
      var reviewsList =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("review");

      //In the below line getAccounts is my customverb name to get the accounts
      reviewsList.customVerb('getUserReviewsForProduct', {"sku": idProduct}, getReviewsCompletionCallback);
      //       accountList.customVerb('getAccounts', {"id": "cat00000"}, getAccountsCompletionCallback);
      //categoryList.prototype.getCategories({"id" : "cat00000"}, getAccountsCompletionCallback);

      function  getReviewsCompletionCallback(status,  data,  error) {
        //To get the service response handler
        //alert("RESPONSE DATA GET" + JSON.stringify(data));
        var srh = applicationManager.getServiceResponseHandler();

        //Analyzing the data received from the backend using service response handler and after that it returns an object
        var obj = srh.manageResponse(status, data, error);
        //	obj={"status":true,"data":response};

        //       kony.print("Data from getCatgories ... "+JSON.stringify(obj));
        //alert("Data from getReviews ... "+JSON.stringify(obj));
        if (obj["status"] === true) {
          presentationSuccessCallback(obj["data"]);
        } else {
          presentationErrorCallback(obj["errmsg"]);
        }
      }
  };

    return ReviewsBusinessController;

});