const car={
    carBrand :"Honda",
    carModel :"CRV",
    carType :"Hybrid",
    id :420,
    carTag : function() {
    return this.carBrand+ " " + this.carModel;
}
};
document.getElementById('car').innerHTML = "this is a " + car.carTag();
window.alert(car.carTag());