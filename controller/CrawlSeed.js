const Get_page = require("./GetPage");
const Add_page_to_index = require("./AddPageToIndex");
const Union = require("./UnionAll");
const Get_all_links = require("./GetAllLinks")

class web_crawler {
    static crawl_web(seed) {
        let tocrawl = [seed];
        let check_prev = {};
        let crawled = [];
        let graph = {};
        let index = {};
        while (tocrawl != 0) {
            let page = tocrawl.pop()
            if (!(page in crawled)) {
                let content = Get_page.get_page(page)
                Add_page_to_index.add_page_to_index(index, page, content)
                let outlinks = Get_all_links.get_all_links(content)
                graph[page] = outlinks
                if (!(outlinks in check_prev)) {
                    check_prev[outlinks] = outlinks
                }
                crawled.push(page)
                Union.union(tocrawl, outlinks, check_prev)
            }
        }

        return { index, graph }
    }
}

module.exports = web_crawler;