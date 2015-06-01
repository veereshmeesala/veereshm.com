(function ($, defaultSettings) {
	var form_shoppingCart = $("#shoppingCart"),
	qty_inputs = form_shoppingCart.find("td.quantity > input"),
	subTotal = $("#subTotal"),
	vat = $("#vat"),
	taxes = defaultSettings.vat || 20,
	totalCost = $("#totalCost");


	function prepareAllSettings() {
		form_shoppingCart.find(".currency").html(defaultSettings.currency);
	};

	function calculateTotalCost() {
		var totalCostValue = parseInt(subTotal.text()) + parseInt(vat.text());
		console.log("totalCostValue="+totalCostValue);
		totalCost.text(totalCostValue.toFixed(2));
		changeBuyNowStatus();
	}

	function changeBuyNowStatus(){
		var value = parseInt(totalCost.text());
		if(value === 0 || value == ""){
			$('.button-submit').prop('disabled', true);
		}else{
			$('.button-submit').prop('disabled', false);
		}
	}

	function calculateCost(item) {
		console.log('calculateCost');
		var qty = item.find("input.number").val(),
		price = item.find(".price > .amount").text(),
		cost = item.find(".cost > .amount"),
		multiply;
		console.log("qty= " + qty + "price= " + price);

		if (validateForm(item) === true && !isNaN(qty)) {
			multiply = (qty * price).toFixed(2);
		} else {
			multiply = "0.00";
		}

		cost.text(multiply);
	}

	function calculateSubtotal() {
		var allCosts = form_shoppingCart.find("td.cost > .amount"),
		sum = 0;
		allCosts.each(function () {
			sum += $(this).text() * 1;
		});

		subTotal.text(sum.toFixed(2));
		calculateVAT();
		calculateTotalCost();
	}

	function calculateVAT(){
		var subTotalAfterTax = (taxes * subTotal.text()) / 100;
		vat.text(subTotalAfterTax.toFixed(2));
	}

	

	function removeItem(item) {
		$(item).remove();
		calculateSubtotal(item);
	}

	function validateForm(context, visibility) {
		var result = true,
		context = context;

		if (!context) 
			context = form_shoppingCart;

		$("input.number", context).each(function () {
			var input_val = $(this).val();

			if (input_val !== "" && !$.isNumeric(input_val)){
				$(this).addClass("error");

				result = false;
			}
		});

		return result;
	}

	function checkout(){
		var data_obj = {};
		data_obj.totalCost = parseInt(totalCost.text());
		if (validateForm() === true) {
				// TODO - send your ajax request for checkout
				alert(JSON.stringify(data_obj));
			}
		}

		function setAllHandlers() {

			$(".button-delete").click(function () {
				var parent_row = $(this).parents("tr");
				removeItem(parent_row);
			});

			$(".button-submit").click(function(){
				checkout();
			});
			qty_inputs.on("change", function () {
				console.log('setAllHandlers');
				var parent_row = $(this).parents("tr");
				calculateCost(parent_row);
				calculateSubtotal(parent_row);
			});


		}
		

		function init () {
			console.log('init');
			prepareAllSettings();
			setAllHandlers();
		};

		return init();

}(window.jQuery, {
	currency: "&pound;",
	vat: 20
}));