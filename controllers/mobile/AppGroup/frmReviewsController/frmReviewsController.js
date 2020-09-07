var onNavigateFromProducts = true;
var idCat;
var selItemId;
var selItemName;

var navContext;
var searchText;
var navigationParametersToSend ;
var navigationTo ;


define({ 

  getReviews : function(idProduct){
	
    var ApplicationManager = require('ApplicationManager');
    applicationManager = ApplicationManager.getApplicationManager();
    
    kony.application.showLoadingScreen("CopyslFbox0h819ee2043fa41", null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    var reviewsModule = applicationManager.getModule("ReviewsModule");
    var resultData = reviewsModule.presentationController.getReviews(idProduct);
    // added codes
    //categoryModule.presentationController.getCategories().then((resultData)=> {alert("ASYNC Data from frmCategoryController: "+JSON.stringify(resultData));}) ;
    //setTimeout(()=> alert("3333 Data from frmCategoryController: "+JSON.stringify(this.resultData)) , 6000);
  	
  },
  
  onBackNavigation : function(){
    // to products
    if(selItemId && !searchText){
    navigationParametersToSend = {"selectedItemId":selItemId, "selectedItemName":selItemName, "categoryId":idCat};
    navigationTo = "frmProducts";
    }
    else{
      // to product search
      if(searchText){
        navigationParametersToSend = {"navContext":navContext, "searchText":searchText};
    	navigationTo = "frmSearchProducts" ;
      }
      }
    var ntf = new kony.mvc.Navigation(navigationTo);
	ntf.navigate(navigationParametersToSend);
  },
 
  
  onNavigate : function(context){
    // come from products
    if(!selItemId && !context.searchText){
      idCat = context.categoryId;
      selItemId = context.selectedItemId;
      selItemName = context.selectedItemName;
    }else{
      //navigate from search products
      if(!searchText){
      navContext = context.navContext;
      searchText = context.searchText; }
      
    }
    
    if(context && onNavigateFromProducts){
      //alert(JSON.stringify(context));
      onNavigateFromProducts = false;
      this.view.lblProductName.text = context.product_name ; 
      this.view.imageProduct.src = context.imageProduct ;
      this.getReviews(context.product_id);
      
    }
    else{
      if(context && !onNavigateFromProducts){
        onNavigateFromProducts = true;
        var widgetDataMap = {      
          "reviewerName": "reviewer_name",
          "reviewTitle": "title",
          "reviewScore": "rating",
          "reviewText": "comment"
        };
        
        this.view.SegmentReviews.widgetDataMap = widgetDataMap;     	
        this.view.SegmentReviews.setData(context);

      }
    }
  }

 });