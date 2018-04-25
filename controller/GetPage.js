const Cache = require("./Cache");
class GetPage {
    static get_page(page) {
        var pageContent = Cache.checkCache(page)
        return pageContent;
    }
}
module.exports = GetPage
