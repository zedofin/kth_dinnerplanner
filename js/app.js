$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	var view1 = new View1($("#view1"), model);
	var view2 = new View2($("#view2"), model);
	var view3 = new View3($("#view3"), model);
	var view4 = new View4($("#view4"), model);
	var view5 = new View5($("#view5"), model);
	var view6 = new View6($("#view6"), model);

	var view1Controller = new View1Controller(view1, model);
	var view2Controller = new View2Controller(view2, model);
	var view3Controller = new View3Controller(view3, model);
	var view4Controller = new View4Controller(view4, model);
	var view5Controller = new View5Controller(view5, model);
	var view6Controller = new View6Controller(view6, model);

});