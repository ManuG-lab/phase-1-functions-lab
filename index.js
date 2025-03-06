// Code your solution in this file
function distanceFromHqInBlocks(someValue){
    const headQuaters = 42;
    return Math.abs(someValue- headQuaters)
}


function distanceFromHqInFeet(someValue){
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
}

function distanceTravelledInFeet(start , destination){
    const blocksTravelled = Math.abs(destination - start)
    return blocksTravelled*264;
}

function calculatesFarePrice(start ,destination){
    const feetTravelled = Math.abs(destination-start)*264;

    if(feetTravelled <=400){
        return 0;
    }
    else if (feetTravelled >400 && feetTravelled<= 2000){
        return (feetTravelled - 400)*0.02;
    }
    else if (feetTravelled >2000 && feetTravelled<=2500)
        return 25;
    else if (feetTravelled >2500){
        return "cannot travel that far"
    }

}
