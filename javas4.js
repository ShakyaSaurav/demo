car={
carBrand:"Honda",
carModel:"CRV",
carType:"Hybrid",
id:420,
carTag: function() {
    return this.carBrand+ " " + this.carModel;
}
};
document.getElementById('car').innerhtml= car.carTag;