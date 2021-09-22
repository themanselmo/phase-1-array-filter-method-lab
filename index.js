// Code your solution here

function findMatching(collection, name) {
    let returnList = [];
    for(const driver of collection) {
        if(driver.toLowerCase() == name.toLowerCase()) {
            // console.log(name);
            returnList.push(driver);
        }
    }
    return returnList;
}

function fuzzyMatch(names, string) {
    let returnList = [];
    for(const driver of names) {
        if(driver.substring(0, string.length) == string){
            returnList.push(driver);
        }
    }
    return returnList;
}

function matchName(drivers, string) {
    let returnList = [];
    for(const driver of drivers) {
        if(driver.name == string) {
            returnList.push(driver);
        }
    }
    return returnList;
}