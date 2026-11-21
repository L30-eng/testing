const presets = {
    starter: `<!DOCTYPE html>\n<html>\n<head>\n    <title>My Practice Page</title>\n</head>\n<body>\n    <h1>Hello, WebLearn!</h1>\n    <p>Nagsisimula na akong mag-practice ng HTML.</p>\n</body>\n</html>`,
    
    image: `<!DOCTYPE html>\n<html>\n<body>\n    <h2>HTML Image Example</h2>\n    <p>Gagamit tayo ng sample image gamit ang &lt;img&gt; tag:</p>\n    <img src="https://via.placeholder.com/300x150" alt="Sample Picture" width="300" height="150">\n</body>\n</html>`,
    
    video: `<!DOCTYPE html>\n<html>\n<body>\n    <h2>HTML Video Example</h2>\n    <p>Nagpapakita ng video gamit ang &lt;video&gt; tag at controls attribute:</p>\n    <video width="320" height="240" controls>\n        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">\n        Your browser does not support the video tag.\n    </video>\n</body>\n</html>`,
    
    audio: `<!DOCTYPE html>\n<html>\n<body>\n    <h2>HTML Audio Example</h2>\n    <p>Mag-play ng sound clip gamit ang &lt;audio&gt; tag:</p>\n    <audio controls>\n        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">\n        Your browser does not support the audio element.\n    </audio>\n</body>\n</html>`,
    
    style: `<!DOCTYPE html>\n<html>\n<head>\n    <title>Inline Style Example</title>\n</head>\n<body>\n    <h2 style="color: #2563eb; text-align: center;">Paggamit ng Inline CSS Style</h2>\n    \n    <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; font-family: sans-serif; font-size: 13px; color: #334155; border-left: 4px solid #2563eb;">\n        <strong>Definition:</strong> Ang <em>inline style</em> ay ginagamit para magbigay ng direktang disenyo (tulad ng kulay, size, o background) sa isang partikular na HTML element gamit ang <code>style</code> attribute.\n    </div>\n\n    <p style="background-color: #fef08a; padding: 12px; border-radius: 6px; border-left: 4px solid #ca8a04; font-family: sans-serif;">\n        Ito ay isang halimbawa ng paragraph na may direktang inline style.\n    </p>\n    \n</body>\n</html>`,
    
    table: `<!DOCTYPE html>\n<html>\n<body>\n    <h2>HTML Table Example</h2>\n    <p>Ito ang simpleng istraktura ng table gamit ang mga tags na &lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, at &lt;td&gt;.</p>\n    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">\n        <tr>\n            <th>Pangalan</th>\n            <th>Kurso</th>\n        </tr>\n        <tr>\n            <td>Juan Cruz</td>\n            <td>BTLED-ICT</td>\n        </tr>\n        <tr>\n            <td>Maria Santos</td>\n            <td>BTLED-ICT</td>\n        </tr>\n    </table>\n</body>\n</html>`,
    
    form: `<!DOCTYPE html>\n<html>\n<body>\n    <h2>Registration Form</h2>\n    <form>\n        <label for="name">Name:</label><br>\n        <input type="text" id="name" placeholder="Enter your name"><br>\n        <label for="password">Password:</label><br>\n        <input type="password" id="password" placeholder="Password"><br><br>\n        <button type="submit">Submit</button>\n    </form>\n</body>\n</html>`,
    
    list: `<!DOCTYPE html>\n<html>\n<body>\n    <h2>My Favorite Topics</h2>\n    <ul>\n        <li>HTML Basics</li>\n        <li>CSS Layouts</li>\n        <li>JavaScript Fundamentals</li>\n    </ul>\n</body>\n</html>`
};

const editorElement = document.getElementById("htmlEditor");
const htmlPreview = document.getElementById("htmlPreview");
const errorList = document.getElementById("errorList");
const errorCount = document.getElementById("errorCount");
const presetButtons = document.querySelectorAll(".preset-btn");

if (editorElement) {
    editorElement.value = presets.starter;
}

const editor = CodeMirror.fromTextArea(editorElement, {
    mode: "htmlmixed",
    lineNumbers: true,
    lineWrapping: true,
    tabSize: 4
});

function updatePreview() {
    if (editor && htmlPreview) {
        htmlPreview.srcdoc = editor.getValue();
    }
    checkErrors();
}

function checkErrors() {
    if (typeof HTMLHint === "undefined" || !errorList) return;
    const errors = HTMLHint.verify(editor.getValue(), {
        "tag-pair": true,
        "tagname-lowercase": true,
        "attr-value-double-quotes": true,
        "doctype-first": true
    });

    errorList.innerHTML = "";

    if (errors.length === 0) {
        if (errorCount) errorCount.textContent = "No issues";
        errorList.innerHTML = `
            <div class="error-item success">
                <i class="fa-solid fa-circle-check"></i>
                <div class="error-details">
                    <strong>Great work! No HTML syntax errors found.</strong>
                </div>
            </div>
        `;
    } else {
        if (errorCount) errorCount.textContent = `${errors.length} issue(s) found`;
        errors.forEach(err => {
            const item = document.createElement("div");
            item.className = "error-item";
            item.innerHTML = `
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div class="error-details">
                    <strong>Line ${err.line}, Column ${err.col}</strong>
                    <p>${err.message}</p>
                </div>
            `;
            errorList.appendChild(item);
        });
    }
}

presetButtons.forEach(button => {
    button.addEventListener("click", () => {
        const key = button.getAttribute("data-preset");
        if (presets[key]) {
            editor.setValue(presets[key]);
            updatePreview(); // Mag-uupdate lang kapag pinili ang preset
            presetButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        }
    });
});

// TANGGALIN o i-comment out ang: editor.on("change", updatePreview);
// Sa halip, mag-a-update lang ito kapag pinindot ang Run Code button o nag-load ng page.

const runCodeBtn = document.getElementById("runCode");
const resetCodeBtn = document.getElementById("resetCode");

if (runCodeBtn) runCodeBtn.addEventListener("click", updatePreview);
if (resetCodeBtn) {
    resetCodeBtn.addEventListener("click", () => {
        const activeBtn = document.querySelector(".preset-btn.active");
        const key = activeBtn ? activeBtn.getAttribute("data-preset") : "starter";
        editor.setValue(presets[key] || presets.starter);
        updatePreview();
    });
}

// Initial load para may laman ang preview sa simula
updatePreview();
