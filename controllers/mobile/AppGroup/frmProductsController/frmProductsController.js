var onNavigateFromCategories = true ;
var sku;
var navigationParameters = [];
var idCat;
var selItemId;
var selItemName;
var navContext;

define({ 

 //Type your controller code here 
 getProducts : function(idCategory){
        // do a thing, possibly async, then…
      var resultData ;
      var ApplicationManager = require('ApplicationManager');
      applicationManager = ApplicationManager.getApplicationManager();
    
      kony.application.showLoadingScreen("CopyslFbox0h819ee2043fa41", null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
      var productsModule = applicationManager.getModule("ProductsModule");
      
       resultData = productsModule.presentationController.getProducts(idCategory);
 
  },
  
  onNavigate : function(context){
    //var resultData = this.getProducts(context);
    //setTimeout(function(){ alert("Data after 5 s :" + JSON.stringify(resultData)); }, 5000);
    // alert("onNavigateFromCategories "+onNavigateFromCategories);
    if(!selItemId){
      idCat = context.categoryId;
      selItemId = context.selectedItemId;
      selItemName = context.selectedItemName;
      navContext = context.navContext;
    }
    
    if (context && onNavigateFromCategories){
      this.getProducts(context.selectedItemId);
      onNavigateFromCategories = false ;
      //alert("Response context "+context);
      this.view.lblProductsName.text = context.selectedItemName ;
    }
    else{
      if(context && !onNavigateFromCategories){
        onNavigateFromCategories = true ;
        //alert("Response context "+JSON.stringify(context));
        
        // modify data style
         for(var i=0;i<context.length;i++){
           
          
           if(context[i].customerReviewAverage === null) 
           {
             (context[i].customerReviewAverage = "No reviews") ;
             }
          context[i].customerReviewAverage = {
            "text": "Average review: "+ context[i].customerReviewAverage
          };
       
        if(context[i].onSale){
          context[i].salePrice = {
            "text": context[i].salePrice,
            "skin":"sknlblBG000000F140ff5b5b"
          };
        }
        else{
          context[i].salePrice = {
            "text": context[i].regularPrice,
            "skin":"sknlblF000000140"
          };
        }}
        
        
        var widgetDataMap = {      
          "lblProductName": "name",
          "lblProductPrice": "regularPrice",
          "lblProductRating": "customerReviewAverage",
          "imgProduct": "image"
    	};
       
       this.view.SegmentProducts.widgetDataMap = widgetDataMap;     	
       this.view.SegmentProducts.setData(context);
        
      }
      
      // alert if no product founded
      if(context.length === 0){
         kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": "No Products",
        "yesLabel": "ok",
        "alertIcon": "bestbuy.png",
        "message": "No Products founded for this category"
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
      }
     
    }
},
  
  onBackNavigation : function(){
    var ntf = new kony.mvc.Navigation("frmCategory");
	ntf.navigate(navContext);
  },
  
  onRowClick : function(){
	var self = this;
    var sku = this.view.SegmentProducts.selectedItems[0].sku;
    var name = this.view.SegmentProducts.selectedItems[0].name;
    var image = this.view.SegmentProducts.selectedItems[0].image; //
    
    var ntf = new kony.mvc.Navigation("frmReviews");

    var myObj = {product_id:sku, product_name:name, backNavPar1:selItemId, backNavPar2:selItemName, idCategory:idCat, imageProduct:image };

    ntf.navigate(myObj);
  }
  
 });