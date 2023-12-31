//code to claculate uber price
class UberPrice{
    constructor(distance){
        this.distance=distance
    }
    totalFare(){
        let minFare=100
        return (minFare+(this.distance*20))
    }
}
const travel = new UberPrice(2);
console.log(travel.totalFare()+' rupees')