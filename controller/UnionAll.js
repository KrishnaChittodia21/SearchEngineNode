class UnionALL {
    static union(tocrawl, outlinks, check_prev) {
        for (var entry = 0; entry < outlinks.length; entry++) {
            if (!(outlinks[entry] in check_prev)) {
                tocrawl.push(outlinks[entry])
            }
        }
    }
}
module.exports = UnionALL
