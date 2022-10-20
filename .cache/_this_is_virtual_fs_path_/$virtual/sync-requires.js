
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": preferDefault(require("/home/hammad/Dev/sg-test-blog/frontend/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/home/hammad/Dev/sg-test-blog/frontend/src/pages/index.js")),
  "component---src-templates-article-post-js": preferDefault(require("/home/hammad/Dev/sg-test-blog/frontend/src/templates/article-post.js"))
}

