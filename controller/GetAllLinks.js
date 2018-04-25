const Get_next_target=require("./GetNextTarget")

class getALLlinks {
    static get_all_links(content) {
        let links = []
        while (true) {
            let get_next_target_val = Get_next_target.get_next_target(content);
            let url = get_next_target_val.url;
            let endpos = get_next_target_val.end_quote;
            if (url) {
                links.push(url)
                content = content.substring(endpos)
            }
            else {
                break;
            }
        }
        return links
    }
}
module.exports = getALLlinks