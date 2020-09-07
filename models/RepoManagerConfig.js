define([],function(){
	var repoMapping = {
		category  : {
			model : "bestBuyProducts/category/Model",
			config : "bestBuyProducts/category/MF_Config",
			repository : "bestBuyProducts/category/Repository",
		},
		product  : {
			model : "bestBuyProducts/product/Model",
			config : "bestBuyProducts/product/MF_Config",
			repository : "bestBuyProducts/product/Repository",
		},
		review  : {
			model : "bestBuyProducts/review/Model",
			config : "bestBuyProducts/review/MF_Config",
			repository : "bestBuyProducts/review/Repository",
		},
		productSearched  : {
			model : "bestBuyProducts/productSearched/Model",
			config : "bestBuyProducts/productSearched/MF_Config",
			repository : "bestBuyProducts/productSearched/Repository",
		},
		subCategory  : {
			model : "bestBuyProducts/subCategory/Model",
			config : "bestBuyProducts/subCategory/MF_Config",
			repository : "bestBuyProducts/subCategory/Repository",
		},
	};
	
	return repoMapping;
})