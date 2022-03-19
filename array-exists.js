function megaFriend(friends) {
    //======== Array.isArray ========
    //akhane friends er value jodi Array na hoy taile ei text ta return dibe;
    if (Array.isArray(friends) == false) {
        return 'Please provide an array'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['shahin', 'mim', 'alamin', 'nayeem', 'jaminur', 'jonayed', 'akash'];
const myBigBuddy = megaFriend(friends);
console.log('largest name -- ', myBigBuddy);
//========== .indexOf ===============
//how to check mim is here? or not;
if (friends.indexOf('dim') != -1) {
    console.log('mim exists using indexOf')
}
else {
    console.log("mim doesn't exists using indexOf")
}
//========= .includes ============
if (friends.includes('mim')) {
    console.log('mim exists using includes')
}