class GETnextTarget {
    static get_next_target(content) {
        let start_link = content.indexOf("<a href=")
        if (start_link == -1) {
            return { None: "None", 0: 0 }
        }
        let start_quote = content.indexOf('"', start_link);
        let end_quote = content.indexOf('"', start_quote + 1);
        let url = content.substring(start_quote + 1, end_quote);
        return { url, end_quote }
    }
}
module.exports = GETnextTarget;
