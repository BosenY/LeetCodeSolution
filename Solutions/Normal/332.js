/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let res = [];
  const map = {};
  for (const ticket of tickets) {
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }
  for (const city in map) {
    map[city].sort();
  }
  const dfs = (node) => {
    const nextNodes = map[node];
    while (nextNodes && nextNodes.length) {
      const next = nextNodes.shift();
      dfs(next);
    }
    res.unshift(node);
  };
  dfs("JFK");
  return res;
};
