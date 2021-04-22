function kilometerToMeter(km) {
    if (km < 0) //negative handle
        return km + " is not valid";
    return km * 1000; //1km = 1000 meter
}

function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop) {
    if (noOfWatch < 0 || noOfPhone < 0 || noOfLaptop < 0) //negative item handle
        return "No. of item cannot be negative";
    // price of per watch = 50
    // price of per phone = 100
    // price of per laptop = 500
    return noOfWatch * 50 + noOfPhone * 100 + noOfLaptop * 500;
}

function hotelCost(days) {
    if (days < 0) //negative day handle
        return days + " is not valid.";
    //1-10 days: 100
    //11-20 days: 80
    //days>20: 50
    if (days <= 10) { //days: (1-10)
        return days * 100; //1st 1-10 days
    } else if (days <= 20) { //days: (11-20)
        const firstTenDaysCost = 10 * 100;
        const remainingDays = days - 10;

        return firstTenDaysCost + (remainingDays * 80);
    } else { //days>20
        const firstTenDaysCost = 10 * 100;
        const secondTenDaysCost = 10 * 80;
        const remainingDays = days - 20;

        return firstTenDaysCost + secondTenDaysCost + (remainingDays * 50);
    }
}

function megaFriend(friendNames) {
    if (friendNames.length == 0) //empty array handle
        return "Empty Array";

    let megaFriendId = 0; //to track mega friend Index
    let megaFriendNameLength = friendNames[0].length; //initially set 1st name length
    for (let i = 1; i < friendNames.length; i++) {
        if (friendNames[i].length > megaFriendNameLength) { //check for larger name
            megaFriendId = i;
            megaFriendNameLength = friendNames[i].length;
        }
    }
    return friendNames[megaFriendId];
}