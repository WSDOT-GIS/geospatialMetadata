const { publish } = require("gh-pages");

publish(".", {
    src: [
        "dist/*",
        "./*.html",
        "./*.css"
    ]
}, (error) => {
    console.error("could not publish to gh-pages", error);
})