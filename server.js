
var http = require('http');
var express = require('express')
var crawler = require("./controller/CrawlSeed");
var union = require("./controller/UnionAll");
var get_page = require("./controller/GetPage");
var get_next_target = require("./controller/GetNextTarget");
var get_all_links = require("./controller/GetAllLinks");
var cache = require("./controller/Cache");
var Compute_ranks = require("./controller/ComputeRanks");
var add_page_to_index = require("./controller/AddPageToIndex");
var add_to_index = require("./controller/AddToIndex");
var path = require("path");

var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/view/MainPage.html'));
})

let crawled_web = crawler.crawl_web("http://udacity.github.io/cs101x/index.html");
var index = crawled_web.index;
var graph = crawled_web.graph;
let ranks = Compute_ranks.compute_ranks(graph)
console.log(ranks)


app.listen(3000, () => console.log("Server is running on: 3000"))
