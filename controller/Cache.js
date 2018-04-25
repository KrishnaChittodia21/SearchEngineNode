class CACHE {
    static checkCache(url) {
         var cache = {
            'http://udacity.github.io/cs101x/index.html': '<html> <body> This is a test page for learning to crawl! <p> It is a good idea to <a href="http://udacity.github.io/cs101x/crawling.html"> learn to crawl </a> before you try to <a href="http://udacity.github.io/cs101x/walking.html"> walk </a> or <a href="http://udacity.github.io/cs101x/fly.html"> fly </a> </p> </body> </html>',
            'http://udacity.github.io/cs101x/crawling.html': '<html> <body> I have not learned to crawl yet , but I am quite good at  kicking </a> </body> </html>',
            'http://udacity.github.io/cs101x/walking.html': '<html> <body> I cant get enough <a href="http://udacity.github.io/cs101x/index.html"> crawling </a> </body> </html>',
            'http://udacity.github.io/cs101x/fly.html': '<html> <body> The magic words are Squeamish Ossifrage! </body> </html>'
        }
        return cache[url];
    }
}

module.exports = CACHE
