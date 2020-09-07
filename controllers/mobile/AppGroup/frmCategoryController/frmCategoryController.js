var navigationParameters = [];
var currentIndex = 0;
var idCat;
var navContext;
var frmProducts = "frmProducts" ;

define({ 
  
 //Type your controller code here 
  /*
  getCategoriesData : function(){
	
    var ApplicationManager = require('ApplicationManager');
    applicationManager = ApplicationManager.getApplicationManager();
    //loading the navigation manager
    var navManager = applicationManager.getNavigationManager();

    //getting the customInfo
    var resultData = navManager.getCustomInfo("dataCategory");
    //alert("Data at frmHomeController  ########"+JSON.stringify(context));
    alert("Data from frmCategoryController: "+JSON.stringify(resultData));
    var widgetDataMap = {      
      "lblCategory": "category_name"
    };    
    this.view.SegmentCategories.widgetDataMap = widgetDataMap;     	
    this.view.SegmentCategories.setData(resultData);  
  }, */
  
  getCategoriesData : function(idCategory){
	
    var ApplicationManager = require('ApplicationManager');
    applicationManager = ApplicationManager.getApplicationManager();
    
    kony.application.showLoadingScreen("CopyslFbox0h819ee2043fa41", null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    var categoryModule = applicationManager.getModule("CategoryModule");
    idCat = idCategory;
    var resultData = categoryModule.presentationController.getCategories(idCategory);
    if(currentIndex > 0){
        this.view.backButtonText.isVisible = true;
      	this.view.backButtonIcon.isVisible = true;
      }
    
    if(currentIndex === 0) {
    	this.view.lblNavigation.text = "Home" ;
    }
    
    // added codes
    //categoryModule.presentationController.getCategories().then((resultData)=> {alert("ASYNC Data from frmCategoryController: "+JSON.stringify(resultData));}) ;
    //setTimeout(()=> alert("3333 Data from frmCategoryController: "+JSON.stringify(this.resultData)) , 6000);
  	
  },
 
  
  onNavigate : function(context){
    
	if(context){
    let index = 0;
    let data = "data";
    let categoryIndex = "category";
    let subcategoriesIndex = "subcategories";
    let path_name ="path_name" ;
    var widgetDataMap = {      
      "lblCategory": "subCategory_name",
      "idCategory": "subCategory_id"
    };
      if(!navContext){
        navContext = context;
      }
    let category = (context[data])[categoryIndex] ;
    let subCategories = (context[data])[subcategoriesIndex] ;
    //alert("context"+JSON.stringify(category));
    
    //set data in segment , and save it for navigation.
    this.view.SegmentCategories.widgetDataMap = widgetDataMap; 
      
    if(category && Array.isArray(subCategories)){
      this.view.SegmentCategories.setData(subCategories);
      navigationParameters.push([{"name":(category[0]).name}]) ;
      navigationParameters[currentIndex].push(this.view.SegmentCategories.data);
       }
      
    // if no data => no subcategory for this category so navigate to products form
      if (category.length && (Array.isArray(subCategories) && subCategories.length === 0 || subCategories === undefined)) { //alert("No subcategories for this category "+category[0].id );
        let navigationParametersToSend = { "selectedItemId": category[0].id, "selectedItemName": category[0].name };
        var navigateToForm = new kony.mvc.Navigation(frmProducts);
        navigateToForm.navigate(navigationParametersToSend);
      }


      // if the category data not founded in fabric 
      if (category.length === 0 && !Array.isArray(subCategories)) {
        alert("No subcategories or products founded for this category");
        this.onBackNavigation();
      }
    
    }
},
  
   // called twice ,when Init the app , and when get the categories of selected subcategory item.
   getSubCategoriesData : function (idCategory){
  	this.getCategoriesData(idCategory);
},
  
  onRowClick : function (){
	var self = this;
    const maxNavigation = 2;
    // selectedItems[0] or selectedRowItems[0]
	var selectedItemId = this.view.SegmentCategories.selectedItems[0].subCategory_id ;
    var selectedItemName = this.view.SegmentCategories.selectedItems[0].subCategory_name ;
	//this.getSubCategoriesData(selectedItemId);
    
    if(currentIndex < maxNavigation){
          currentIndex += 1 ;
          this.getSubCategoriesData(selectedItemId);
          navigationParameters.push([{"name":selectedItemName}]);
          this.view.lblNavigation.text = this.view.lblNavigation.text +" > "+ selectedItemName ; //navigationParameters[currentIndex][0].name
      	  
        }
        else{
          if(selectedItemId){
            let navigationParametersToSend = {"selectedItemId": selectedItemId,"selectedItemName":selectedItemName, "categoryId":idCat, "navContext":navContext};
            var navigateToForm = new kony.mvc.Navigation(frmProducts);
            //var myObj = {data: response};
            navigateToForm.navigate(navigationParametersToSend);
          }
          else{
            alert("No products founded for this category");
          }
        }
    },
  
  onBackNavigation : function(){
    navigationParameters.splice(currentIndex,1); // remove actual categorie from navigationParameters array
    currentIndex -=1 ;
    var oldLblNavigation = this.view.lblNavigation.text ;
    this.view.lblNavigation.text =  oldLblNavigation.substr(0, oldLblNavigation.lastIndexOf(">")) ;
    this.view.SegmentCategories.setData(navigationParameters[currentIndex][1]);
    if(currentIndex === 0){
       this.view.backButtonText.isVisible = false;
       this.view.backButtonIcon.isVisible = false;
    }
    
    // remove search
     this.view.searchText.isVisible = false;
     this.view.searchText.text = "";
  },
  
  onSearchDone : function(){
   if(this.view.searchText.text){
     let navigationParametersToSend = {"searchText":this.view.searchText.text, "navContext":navContext};
     var navigateToForm = new kony.mvc.Navigation("frmSearchProducts");
     //var myObj = {data: response};
     navigateToForm.navigate(navigationParametersToSend);
     // remove search
     this.view.searchText.isVisible = false;
     this.view.searchText.text = "";
   }
 },
  
  clickSearch : function(){
    this.view.searchText.isVisible = !this.view.searchText.isVisible ;
  },
  
  onRemoveSearch : function (){
    // remove search
     this.view.searchText.isVisible = false;
     this.view.searchText.text = "";
  }

 });