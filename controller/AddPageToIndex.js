const Add_to_index = require("./AddToIndex");
class AddPageTOIndex {
    static add_page_to_index(index, url, content) {
        let words = content.split(" ");
        for (var word = 0; word < words.length; word++) {
            Add_to_index.add_to_index(index, words[word], url)
        }
    }
}
module.exports = AddPageTOIndex;