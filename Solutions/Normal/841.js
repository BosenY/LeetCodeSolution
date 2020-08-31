/**
 * https://leetcode-cn.com/problems/keys-and-rooms/
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let hash = {0: true}
    let len = 1
    const dfs = (room = []) => {
        for(let i of room) {
            if(!hash[i]) {
                hash[i] = true
                len ++
                dfs(rooms[i])
            }
        }
    }
    dfs(rooms[0])
    return len === rooms.length
};