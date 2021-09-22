// Code your solution here

function findMatching(collection, name) {
    let matching = collection.filter((driver) => { return driver.toLowerCase() == name.toLowerCase()});
    
    return matching;
}

function fuzzyMatch(names, string) {
    let matching = names.filter((driver) => { return driver.substring(0, string.length) == string});
    
    return matching;
}

function matchName(drivers, string) {
    let matching = drivers.filter((driver) => { return driver.name == string });

    return matching;
}