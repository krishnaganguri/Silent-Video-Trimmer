const express = require("express");
const path = require("path");

const app = express();

// ✅ Enable security headers for SharedArrayBuffer
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    next();
});

// ✅ Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "")));

// ✅ Serve index.html when visiting "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "", "index.html"));
});

// ✅ Start server on port 3000
app.listen(3000, () => console.log("Server running at http://localhost:3000"));
