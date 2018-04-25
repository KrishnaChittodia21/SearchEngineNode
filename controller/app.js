function crawl_web(seed) {
    let tocrawl = [seed];
    let crawled = [];
    let graph = {};
    let index = {};

    while (tocrawl) {
        let page = tocrawl.pop()
        if (!crawled.includes(page)){
            let content = get_page(page)
            add_page_to_index(index, page, content)
            let outlinks = get_all_links(content)
            graph[page] = outlinks
            union(tocrawl, outlinks)
            crawled.push(page)

        }
        return { index: index, graph: graph }
    }
}
function get_page(url) {
    if (cache.includes(url)){
        let cache_url = cache[url]
        return cache
    }
    else {
        return None
    }
}

function get_next_target(page) {
    let start_link = page.indexOf("<a href=")
    if (start_link == -1) {
        return { None:None, 0:0}
    }
    let start_quote = page.indexOf('"', start_link);
    let end_quote = page.indexOf('"', start_quote + 1);
    let url = page.substring(start_quote + 1, end_quote);
    return { url: url, end_quote: end_quote }
}

function get_all_links(page) {
    let links = []
    while (true) {
        let get_next_target_val = get_next_target();
        let url = get_next_target_val.url;
        let endpos = get_next_target_val.end_quote;
        if (url) {
            links.push(url)
            page = page.substring(endpos)
        }
        else {
            break;
        }
    }
    return links
}

function union(a, b) {
    for (var entry in b) {
        if (!a.includes(entry)) {
            a.push(entry)
        }
    }
}

function add_page_to_index(index, url, content) {
    let words = content.split(" ")
    for (var word in words) {
        add_to_index(index, word, url)
    }
}

function add_to_index(index, keyword, url) {
    if (index.includes(keyword)) {
        index[keyword].push(url)
    }
    else {
        index[keyword] = [url]
    }
}

function lookup(index, keyword) {
    if (index.includes(keyword)) {
        return index[keyword];
    }
    else {
        return None;
    }
}
let crawled_web = crawl_web("https://udacity.github.io/cs101x/index.html");
let index = crawled_web.index;
let graph = crawled_web.graph;
let ranks = compute_ranks(graph)
console.log(ranks)

function compute_ranks(graph) {
    let d = 0.8;
    let numloops = 10;
    let ranks = {};
    let npages = graph.length();
    for (var page in graph) {
        ranks[page] = (1.0 / npages);

    }
    for (var i = 0; i < numloops; i++) {
        let newranks = {};
        for (var page in graph) {
            let newrank = (1 - d) / npages

            for (var node in graph) {
                if (graph[node].includes(page)) {
                    newrank = newrank + (d * (ranks[node] / (graph[node].length())));

                }
            }
            newranks[page] = newrank;
        }
        ranks = newranks
    }
    return ranks
}
