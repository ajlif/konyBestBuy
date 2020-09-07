var navContext ;
var onNavigateFromCategories = true ;
var idCat;
var selItemId;
var selItemName;
var searchTextToSend;

define({

//Type your controller code here
getSearchProducts : function(searchText){
       // do a thing, possibly async, then…
     var resultData ;
     var ApplicationManager = require('ApplicationManager');
     applicationManager = ApplicationManager.getApplicationManager();
   
     kony.application.showLoadingScreen("CopyslFbox0h819ee2043fa41", null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
     var productsModule = applicationManager.getModule("SearchProductsModule");
     
     resultData = productsModule.presentationController.getSearchProducts(searchText);

 },
 
 onNavigate : function(context){
   //var resultData = this.getProducts(context);
   //setTimeout(function(){ alert("Data after 5 s :" + JSON.stringify(resultData)); }, 5000);
   
   //come from category
   if(!selItemId && context){
     idCat = context.categoryId;
     selItemId = context.selectedItemId;
     selItemName = context.selectedItemName;
     navContext = context.navContext;
   }
   
   // come from reviews or category : request by search text
   if (context && onNavigateFromCategories){
     //alert("searchText context  "+context.searchText);
     this.getSearchProducts(context.searchText);
     onNavigateFromCategories = false ;
     this.view.labelNavigation.text = "Results for: " + context.searchText ;
     searchTextToSend = context.searchText ;
     
   }
   else{
     // come from presentation controller
     if(context && !onNavigateFromCategories){
       onNavigateFromCategories = true ;
       
       
     context.forEach(element => {
           if(element.customerReviewAverage === null) 
           {(element.customerReviewAverage = "No reviews") ; }
     });
       
       
       var widgetDataMap = {      
         "lblProductName": "name",
         "lblProductPrice": "regularPrice",
         "lblProductRating": "customerReviewAverage",
         "imgProduct": "image"
    };
     
      this.view.SegmentProducts.widgetDataMap = widgetDataMap ;
      this.view.SegmentProducts.setData(context);
     }
   }
   
 
},
 
 onBackNavigation : function(){
   var ntf = new kony.mvc.Navigation("frmCategory");
   var cleanSegments = [];
   onNavigateFromCategories = true ;
   this.view.SegmentProducts.setData(cleanSegments);
   ntf.navigate(navContext);
 },
 
 
  onRowClick : function(){
    onNavigateFromCategories = true ;
	var self = this;
    var sku = this.view.SegmentProducts.selectedItems[0].sku;
    var name = this.view.SegmentProducts.selectedItems[0].name;
    var image = this.view.SegmentProducts.selectedItems[0].image; //
    
    var ntf = new kony.mvc.Navigation("frmReviews");

    var myObj = {product_id:sku, product_name:name, backNavPar1:selItemId, backNavPar2:selItemName, idCategory:idCat, imageProduct:image,navContext:navContext,searchText:searchTextToSend };

    ntf.navigate(myObj);
  }
  
  
});