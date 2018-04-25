class ADDtoIndex {
    static add_to_index(index, keyword, url) {
        if (keyword in index) {
            index.key = keyword
            index.value = url
        }
        else {
            index.key = keyword
            index.value = url

        }
    }
}
module.exports = ADDtoIndex;
