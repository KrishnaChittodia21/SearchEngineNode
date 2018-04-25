class ComPuteRanks {
    static compute_ranks(graph) {
        let d = 0.8;
        let numloops = 10;
        let ranks = {};
        let graph_length = Object.keys(graph).length;
        let npages = graph_length;
        for (var page in graph) {
            ranks[page] = (1.0 / npages);
        }
        for (var i = 0; i < numloops; i++) {
            let newranks = {};
            for (var page in graph) {
                let newrank = (1 - d) / npages

                for (var node in graph) {
                    if (graph[node].includes(page)) {
                        newrank = newrank + (d * (ranks[node] / (graph[node].length)));

                    }
                }
                newranks[page] = newrank;
            }
            ranks = newranks
        }
        return ranks
    }
}
module.exports = ComPuteRanks
