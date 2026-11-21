// Sidebar navigation toggle
const menuToggle = document.getElementById("menuToggle");
const closeDrawer = document.getElementById("closeDrawer");
const lessonDrawer = document.getElementById("lessonDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");

function openDrawer() {
    lessonDrawer.classList.add("active");
    drawerOverlay.classList.add("active");
}

function hideDrawer() {
    lessonDrawer.classList.remove("active");
    drawerOverlay.classList.remove("active");
}

if (menuToggle) menuToggle.addEventListener("click", openDrawer);
if (closeDrawer) closeDrawer.addEventListener("click", hideDrawer);
if (drawerOverlay) drawerOverlay.addEventListener("click", hideDrawer);

// CSS Lessons data array
const lessons = [
    {
        title: "Introduction to CSS",
        description: "Discover how CSS styles, colors, and designs the layout of modern web pages.",
        category: "GETTING STARTED",
        isPractice: false,
        content: `
            <div class="intro-banner">
                <div>
                    <span>Welcome to CSS Styling</span>
                    <h2>Cascading Style Sheets</h2>
                    <p>While HTML provides the core structure of a webpage, CSS handles the visual presentation, color schemes, and structural layout.</p>
                </div>
                <div class="banner-icon">
                    <i class="fa-brands fa-css3-alt"></i>
                </div>
            </div>
            <h2>What is CSS?</h2>
            <p>CSS stands for <b>Cascading Style Sheets</b>. It is a stylesheet language used to describe the presentation and design of documents written in HTML.</p>
            <div class="info-box">
                <i class="fa-solid fa-lightbulb"></i>
                <div><strong>Key Concept:</strong> HTML defines the content structure, while CSS defines the visual design and styling.</div>
            </div>
            <h2>CSS Syntax, Properties, and Values</h2>
            <p>A CSS rule consists of a <strong>Selector</strong>, a <strong>Property</strong>, and a specific <strong>Value</strong>:</p>
            ${codeExample(`<style>\n    h1 {\n        color: #2563eb;\n        font-size: 24px;\n    }\n</style>\n<h1>Styled Heading</h1>`)}
            <p>In this example: <code><b>h1</b></code> is the <i><u>selector</u></i>, <code><b>color</b></code> and <code><b>font-size</b></code> are <i><u>properties</u></i>, and <code><b>#2563eb</b></code> and <code><b>24px</b></code> are their respective <i><u>values</u></i>.</p>
        `,
        takeaways: [
            "CSS stands for Cascading Style Sheets.",
            "CSS manages web page styling, design, and layout.",
            "Syntax consists of a selector, property, and value."
        ],
        mistakes: [
            "Forgetting to append a semicolon (;) at the end of property declarations.",
            "Typo errors in CSS property names or curly braces."
        ]
    },
    {
        title: "The 3 Ways to Add CSS",
        description: "Explore Inline, Internal, and External CSS implementations.",
        category: "GETTING STARTED",
        isPractice: false,
        content: `
            <h2>Three Methods of Implementing CSS</h2>
            <p>There are three primary methods used to incorporate style sheets into web documents:</p>
            <h3>1. Inline CSS</h3>
            <p>Applied directly to a single HTML element using the <code>style</code> attribute.</p>
            ${codeExample(`<p style="color: #dc2626; font-weight: bold;">This is red text styled using Inline CSS.</p>`)}
            <h3>2. Internal CSS</h3>
            <p>Defined within a <code>&lt;style&gt;</code> element located inside the <code>&lt;head&gt;</code> section.</p>
            ${codeExample(`<style>\n    .internal-demo { color: #16a34a; font-weight: bold; }\n</style>\n<p class="internal-demo">Styled via Internal CSS.</p>`)}
            <h3>3. External CSS</h3>
            <p>The industry-standard approach utilizing a separate <code>.css</code> file linked via <code>&lt;link rel="stylesheet" href="css.css"&gt;</code> in the <code>&lt;head&gt;</code>.</p>
        `,
        takeaways: [
            "Inline CSS uses the style attribute directly on elements.",
            "Internal CSS uses the style tag inside the document head.",
            "External CSS links a separate .css file for multi-page consistency."
        ],
        mistakes: [
            "Using incorrect file paths in the href attribute of the link tag.",
            "Overusing inline styles, making code hard to maintain."
        ]
    },
    {
        title: "CSS Selectors",
        description: "Learn how to target specific HTML elements using Element, Class, and ID selectors.",
        category: "CSS BASICS",
        isPractice: false,
        content: `
            <h2>What are CSS Selectors?</h2>
            <p>CSS selectors find and select the HTML elements you want to style.</p>
            <ul>
                <li><strong>Element Selector:</strong> Targets tags directly (e.g., <code>p</code>, <code>h1</code>).</li>
                <li><strong>Class Selector (.):</strong> Targets elements with a specific <code>class</code> attribute. Reusable across multiple elements.</li>
                <li><strong>ID Selector (#):</strong> Targets a single unique element with a specific <code>id</code> attribute.</li>
            </ul>
            ${codeExample(`<style>\n    p { color: #475569; }\n    .highlight { background: #fef08a; padding: 4px 8px; }\n    #special-title { color: #2563eb; }\n</style>\n<h3 id="special-title">ID Selector Title</h3>\n<p>Standard paragraph element.</p>\n<p class="highlight">Paragraph with a class selector.</p>`)}
        `,
        takeaways: [
            "Use a period (.) before a class name.",
            "Use a hash (#) before an ID name.",
            "Classes can be reused; IDs must be unique per page."
        ],
        mistakes: [
            "Forgetting the dot (.) or hash (#) prefix in CSS.",
            "Starting class or ID names with a number."
        ]
    },
    {
        title: "CSS Colors",
        description: "Apply colors using Color Names, HEX codes, RGB, and RGBA values.",
        category: "CSS BASICS",
        isPractice: false,
        content: `
            <h2>Color Formats in CSS</h2>
            <p>Colors can be defined using predefined names, Hexadecimal values (<code>#RRGGBB</code>), or RGB/RGBA values.</p>
            ${codeExample(`<style>\n    .c-name { color: tomato; }\n    .c-hex { color: #2563eb; }\n    .c-rgba { background: rgba(37, 99, 235, 0.15); padding: 8px; border-radius: 6px; }\n</style>\n<p class="c-name">Color Name: Tomato</p>\n<p class="c-hex">HEX Color: #2563eb</p>\n<p class="c-rgba">RGBA with 15% opacity background</p>`)}
        `,
        takeaways: [
            "HEX codes start with # followed by 6 characters.",
            "RGBA adds an alpha channel (0.0 to 1.0) for transparency."
        ],
        mistakes: [
            "Forgetting the # symbol on HEX color codes.",
            "Using opacity values outside the 0 to 1 range in RGBA."
        ]
    },
    {
        title: "CSS Backgrounds",
        description: "Customize element backgrounds using colors, gradients, and images.",
        category: "CSS BASICS",
        isPractice: false,
        content: `
            <h2>Background Properties</h2>
            <p>The <code>background</code> properties control the background color, image, repeat behavior, and positioning of an element.</p>
            ${codeExample(`<style>\n    .banner-box {\n        background: linear-gradient(135deg, #1e3a8a, #2563eb);\n        color: white;\n        padding: 20px;\n        border-radius: 10px;\n    }\n</style>\n<div class="banner-box">\n    <h3>Gradient Background</h3>\n    <p>Smooth color transitions using linear-gradient.</p>\n</div>`)}
        `,
        takeaways: [
            "background-color sets a solid background fill.",
            "background-size: cover scales background images proportionally."
        ],
        mistakes: [
            "Using low-contrast text colors against busy backgrounds."
        ]
    },
    {
        title: "CSS Borders",
        description: "Style element outlines with border width, style, color, and rounded corners.",
        category: "BOX & SPACING",
        isPractice: false,
        content: `
            <h2>Creating Borders</h2>
            <p>The <code>border</code> shorthand property sets width, style (<code>solid</code>, <code>dashed</code>, <code>dotted</code>), and color. Use <code>border-radius</code> to round corners.</p>
            ${codeExample(`<style>\n    .card-solid { border: 2px solid #2563eb; padding: 10px; border-radius: 8px; margin-bottom: 10px; }\n    .card-dashed { border: 2px dashed #f59e0b; padding: 10px; }\n</style>\n<div class="card-solid">Solid Rounded Border</div>\n<div class="card-dashed">Dashed Border</div>`)}
        `,
        takeaways: [
            "A border will not appear unless border-style is specified.",
            "border-radius: 50% turns a square element into a circle."
        ],
        mistakes: [
            "Setting border-width and border-color without border-style."
        ]
    },
    {
        title: "CSS Margins",
        description: "Control outer spacing between elements using the margin property.",
        category: "BOX & SPACING",
        isPractice: false,
        content: `
            <h2>Outer Spacing with Margin</h2>
            <p>Margins create space <strong>outside</strong> an element's border, pushing neighboring elements away. Setting <code>margin: 0 auto;</code> horizontally centers block elements with a set width.</p>
            ${codeExample(`<style>\n    .box-a { background: #dbeafe; padding: 10px; margin-bottom: 25px; }\n    .box-b { background: #fef3c7; padding: 10px; width: 60%; margin: 0 auto; text-align: center; }\n</style>\n<div class="box-a">Box with 25px bottom margin</div>\n<div class="box-b">Centered Box (margin: 0 auto)</div>`)}
        `,
        takeaways: [
            "Margin controls space outside the element border.",
            "margin: 0 auto horizontally centers fixed-width block elements."
        ],
        mistakes: [
            "Expecting margin: 0 auto to center an element without a defined width."
        ]
    },
    {
        title: "CSS Padding",
        description: "Create breathing room inside elements between content and borders.",
        category: "BOX & SPACING",
        isPractice: false,
        content: `
            <h2>Inner Spacing with Padding</h2>
            <p>Padding creates space <strong>inside</strong> an element, between its content and its border.</p>
            ${codeExample(`<style>\n    .btn-padded {\n        background: #2563eb;\n        color: white;\n        border: none;\n        padding: 12px 24px;\n        border-radius: 6px;\n    }\n</style>\n<button class="btn-padded">Button with Padding</button>`)}
        `,
        takeaways: [
            "Padding adds space inside the border.",
            "Padding inherits the element's background color."
        ],
        mistakes: [
            "Confusing margin (outside space) with padding (inside space)."
        ]
    },
    {
        title: "CSS Height & Width",
        description: "Control element dimensions using fixed pixels, percentages, and viewport units.",
        category: "BOX & SPACING",
        isPractice: false,
        content: `
            <h2>Setting Dimensions</h2>
            <p>The <code>width</code> and <code>height</code> properties define the size of an element's content area. Using <code>max-width</code> prevents horizontal scrolling on small screens.</p>
            ${codeExample(`<style>\n    .responsive-box {\n        width: 100%;\n        max-width: 320px;\n        height: 80px;\n        background: #e0f2fe;\n        border: 1px solid #0284c7;\n        padding: 12px;\n    }\n</style>\n<div class="responsive-box">Max-width 320px container</div>`)}
        `,
        takeaways: [
            "Percentages (%) scale relative to the parent container.",
            "max-width improves mobile responsiveness."
        ],
        mistakes: [
            "Using fixed pixel widths on large containers, breaking mobile layouts."
        ]
    },
    {
        title: "CSS Box Model",
        description: "Understand how Content, Padding, Border, and Margin combine to form every element.",
        category: "BOX & SPACING",
        isPractice: false,
        content: `
            <h2>The CSS Box Model</h2>
            <p>Every HTML element is wrapped in a rectangular box consisting of four layers from inside out: <strong>Content → Padding → Border → Margin</strong>.</p>
            <div class="info-box">
                <i class="fa-solid fa-lightbulb"></i>
                <div><strong>Best Practice:</strong> Add <code>* { box-sizing: border-box; }</code> so padding and borders are included inside an element's total width and height.</div>
            </div>
            ${codeExample(`<style>\n    .box-model-demo {\n        box-sizing: border-box;\n        width: 240px;\n        padding: 16px;\n        border: 4px solid #2563eb;\n        margin: 10px;\n        background: #eff6ff;\n    }\n</style>\n<div class="box-model-demo">Total width stays exactly 240px!</div>`)}
        `,
        takeaways: [
            "The four layers are Content, Padding, Border, and Margin.",
            "box-sizing: border-box keeps element sizing predictable."
        ],
        mistakes: [
            "Forgetting that default content-box adds padding and border onto width."
        ]
    },
    {
        title: "CSS Text & Fonts",
        description: "Format typography using font-family, font-size, font-weight, and text alignment.",
        category: "STYLING CONTENT",
        isPractice: false,
        content: `
            <h2>Typography Styling</h2>
            <p>CSS controls text readability through <code>font-family</code>, <code>font-size</code>, <code>font-weight</code>, <code>line-height</code>, and <code>text-align</code>.</p>
            ${codeExample(`<style>\n    .title-text { font-family: Georgia, serif; font-size: 20px; text-align: center; letter-spacing: 1px; }\n    .body-text { font-family: Arial, sans-serif; font-size: 13px; line-height: 1.6; color: #334155; }\n</style>\n<h3 class="title-text">Elegant Heading</h3>\n<p class="body-text">Readable body paragraph with 1.6 line-height spacing.</p>`)}
        `,
        takeaways: [
            "Always include a fallback font (e.g., sans-serif).",
            "line-height: 1.5 to 1.8 improves paragraph readability."
        ],
        mistakes: [
            "Using tiny font sizes or tight line spacing for body paragraphs."
        ]
    },
    {
        title: "CSS Links & Hover States",
        description: "Style hyperlinks and add interactive hover effects using pseudo-classes.",
        category: "STYLING CONTENT",
        isPractice: false,
        content: `
            <h2>Interactive Link States</h2>
            <p>Links can be styled differently depending on user interaction using pseudo-classes like <code>:hover</code> and <code>:active</code>. Use <code>text-decoration: none;</code> to remove the default underline.</p>
            ${codeExample(`<style>\n    .custom-link {\n        color: #2563eb;\n        text-decoration: none;\n        font-weight: bold;\n        transition: 0.2s;\n    }\n    .custom-link:hover {\n        color: #1d4ed8;\n        text-decoration: underline;\n    }\n</style>\n<a href="#" class="custom-link">Hover over this link</a>`)}
        `,
        takeaways: [
            "text-decoration: none removes default underlines.",
            ":hover triggers styles when the mouse cursor points at an element."
        ],
        mistakes: [
            "Putting spaces around the colon in :hover (e.g., a :hover)."
        ]
    },
    {
        title: "CSS Lists",
        description: "Customize bullet styles, numbers, and navigation list layouts.",
        category: "STYLING CONTENT",
        isPractice: false,
        content: `
            <h2>Styling HTML Lists</h2>
            <p>The <code>list-style-type</code> property changes list markers (<code>disc</code>, <code>square</code>, <code>decimal</code>, or <code>none</code>).</p>
            ${codeExample(`<style>\n    .styled-list {\n        list-style-type: square;\n        padding-left: 20px;\n        color: #1e293b;\n    }\n    .styled-list li { margin-bottom: 6px; }\n</style>\n<ul class="styled-list">\n    <li>HTML Structure</li>\n    <li>CSS Styling</li>\n    <li>JavaScript Logic</li>\n</ul>`)}
        `,
        takeaways: [
            "list-style-type: none removes bullets for navigation menus.",
            "Reset default padding and margin when building navbars."
        ],
        mistakes: [
            "Forgetting default left padding on ul and ol elements."
        ]
    },
    {
        title: "CSS Tables",
        description: "Design clean, readable data tables with borders, padding, and striped rows.",
        category: "STYLING CONTENT",
        isPractice: false,
        content: `
            <h2>Styling Data Tables</h2>
            <p>Use <code>border-collapse: collapse;</code> to merge double table borders into a single clean line.</p>
            ${codeExample(`<style>\n    table { width: 100%; border-collapse: collapse; font-size: 12px; }\n    th, td { border: 1px solid #cbd5e1; padding: 8px; text-align: left; }\n    th { background: #1e3a8a; color: white; }\n    tr:nth-child(even) { background: #f8fafc; }\n</style>\n<table>\n    <tr><th>Topic</th><th>Status</th></tr>\n    <tr><td>Selectors</td><td>Done</td></tr>\n    <tr><td>Box Model</td><td>In Progress</td></tr>\n</table>`)}
        `,
        takeaways: [
            "border-collapse: collapse removes double borders between cells.",
            ":nth-child(even) creates alternating zebra-striped rows."
        ],
        mistakes: [
            "Forgetting to add padding inside th and td cells."
        ]
    },
    {
        title: "CSS Display Property",
        description: "Control how elements flow on a page using block, inline, inline-block, and none.",
        category: "LAYOUT & POSITIONING",
        isPractice: false,
        content: `
            <h2>Understanding Display Values</h2>
            <ul>
                <li><strong>block:</strong> Starts on a new line and takes full available width (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>).</li>
                <li><strong>inline:</strong> Flows on the same line; ignores width and height (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).</li>
                <li><strong>inline-block:</strong> Flows on the same line while respecting width, height, and vertical margins.</li>
                <li><strong>none:</strong> Completely hides the element from the layout.</li>
            </ul>
            ${codeExample(`<style>\n    .pill {\n        display: inline-block;\n        padding: 6px 14px;\n        background: #dbeafe;\n        color: #1e40af;\n        border-radius: 20px;\n        margin-right: 6px;\n    }\n</style>\n<span class="pill">HTML</span>\n<span class="pill">CSS</span>\n<span class="pill">JS</span>`)}
        `,
        takeaways: [
            "inline-block allows side-by-side elements with custom padding/width.",
            "display: none removes the element from visual layout flow."
        ],
        mistakes: [
            "Trying to set width or height on a pure inline element."
        ]
    },
    {
        title: "CSS Position",
        description: "Position elements precisely using relative, absolute, fixed, and sticky.",
        category: "LAYOUT & POSITIONING",
        isPractice: false,
        content: `
            <h2>Positioning Elements</h2>
            <p>The <code>position</code> property works with <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> offsets:</p>
            <ul>
                <li><strong>relative:</strong> Positioned relative to its normal position.</li>
                <li><strong>absolute:</strong> Positioned relative to its nearest positioned (non-static) ancestor.</li>
                <li><strong>fixed:</strong> Stays fixed relative to the browser viewport even when scrolling.</li>
                <li><strong>sticky:</strong> Toggles between relative and fixed based on scroll position.</li>
            </ul>
            ${codeExample(`<style>\n    .parent-card {\n        position: relative;\n        background: #f1f5f9;\n        padding: 20px;\n        border-radius: 8px;\n    }\n    .badge {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        background: #ef4444;\n        color: white;\n        padding: 3px 8px;\n        font-size: 10px;\n        border-radius: 4px;\n    }\n</style>\n<div class="parent-card">\n    <span class="badge">NEW</span>\n    <h4>Product Card</h4>\n</div>`)}
        `,
        takeaways: [
            "Set position: relative on a parent before using position: absolute on a child.",
            "position: sticky is commonly used for top navigation headers."
        ],
        mistakes: [
            "Using position: absolute without a positioned parent container."
        ]
    },
    {
        title: "CSS Overflow & Z-Index",
        description: "Manage content clipping and control overlapping element stack order.",
        category: "LAYOUT & POSITIONING",
        isPractice: false,
        content: `
            <h2>Overflow and Layering</h2>
            <p><code>overflow</code> controls what happens when content exceeds its container's size (<code>visible</code>, <code>hidden</code>, <code>scroll</code>, <code>auto</code>). <code>z-index</code> controls which positioned element appears on top.</p>
            ${codeExample(`<style>\n    .scroll-box {\n        width: 100%;\n        height: 75px;\n        overflow-y: auto;\n        border: 1px solid #cbd5e1;\n        padding: 10px;\n        background: #f8fafc;\n    }\n</style>\n<div class="scroll-box">\n    <p>Line 1: Scrollable container content.</p>\n    <p>Line 2: Overflow-y: auto adds a scrollbar only when needed.</p>\n    <p>Line 3: Extra text inside the fixed-height box.</p>\n</div>`)}
        `,
        takeaways: [
            "overflow: auto adds scrollbars only when content overflows.",
            "z-index only works on elements with position set (relative, absolute, fixed, sticky)."
        ],
        mistakes: [
            "Applying z-index to a static element and wondering why it has no effect."
        ]
    },
    {
        title: "CSS Flexbox Basics",
        description: "Build flexible, one-dimensional row or column layouts with ease.",
        category: "MODERN LAYOUTS",
        isPractice: false,
        content: `
            <h2>Flexible Box Layout</h2>
            <p>Applying <code>display: flex;</code> on a parent container aligns child items automatically. Use <code>justify-content</code> for horizontal alignment and <code>align-items</code> for vertical alignment.</p>
            ${codeExample(`<style>\n    .flex-row {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 10px;\n        background: #e2e8f0;\n        padding: 12px;\n        border-radius: 8px;\n    }\n    .flex-item {\n        background: #2563eb;\n        color: white;\n        padding: 10px 16px;\n        border-radius: 6px;\n    }\n</style>\n<div class="flex-row">\n    <div class="flex-item">Item 1</div>\n    <div class="flex-item">Item 2</div>\n    <div class="flex-item">Item 3</div>\n</div>`)}
        `,
        takeaways: [
            "display: flex activates Flexbox on the parent container.",
            "gap adds clean spacing between flex items without extra margins."
        ],
        mistakes: [
            "Putting justify-content on the child items instead of the flex parent."
        ]
    },
    {
        title: "CSS Grid & Media Queries",
        description: "Create two-dimensional grid layouts and adapt designs for mobile screens.",
        category: "MODERN LAYOUTS",
        isPractice: false,
        content: `
            <h2>CSS Grid & Responsive Design</h2>
            <p><code>display: grid;</code> arranges items into rows and columns using <code>grid-template-columns</code>. Combine it with <code>@media</code> queries to adjust layouts on smaller viewports.</p>
            ${codeExample(`<style>\n    .grid-cards {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 10px;\n    }\n    .g-card {\n        background: #0f172a;\n        color: #38bdf8;\n        padding: 15px;\n        text-align: center;\n        border-radius: 8px;\n    }\n</style>\n<div class="grid-cards">\n    <div class="g-card">Col 1</div>\n    <div class="g-card">Col 2</div>\n    <div class="g-card">Col 3</div>\n</div>`)}
        `,
        takeaways: [
            "1fr divides available grid space into equal fractions.",
            "@media (max-width: 768px) applies styles specifically for tablets and phones."
        ],
        mistakes: [
            "Forgetting the viewport meta tag in HTML when testing media queries."
        ]
    },
    {
        title: "CSS Practice Playground",
        description: "Test and experiment with Inline, Internal, and External CSS concepts inside the interactive playground.",
        category: "PRACTICE",
        isPractice: true,
        takeaways: [
            "Experiment with Inline, Internal, and External stylesheet configurations.",
            "Test out the built-in Login Page project challenge."
        ],
        mistakes: [
            "Syntax inconsistencies such as missed curly braces or semicolons."
        ]
    }
];

// Helper Function for Code Examples
function codeExample(code) {
    const safeCode = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const fullDocument = `<!DOCTYPE html><html><head><style>body { font-family: sans-serif; padding: 10px; color: #1e293b; font-size: 13px; }</style></head><body>${code}</body></html>`;
    const iframeContent = fullDocument.replace(/"/g, '&quot;');

    return `
        <div class="code-example-container">
            <div class="code-example">
                <div class="code-header">
                    <span><i class="fa-solid fa-code"></i> CSS Code</span>
                    <span>example.css</span>
                </div>
                <pre><code>${safeCode}</code></pre>
            </div>
            <div class="code-preview">
                <div class="code-header preview-header-title">
                    <span><i class="fa-solid fa-eye"></i> Output Preview</span>
                    <span>Browser</span>
                </div>
                <iframe class="example-preview-frame" srcdoc="${iframeContent}" sandbox="allow-scripts"></iframe>
            </div>
        </div>
    `;
}

// Navigation & State Logic
let currentLesson = 0;
const completedLessons = new Set();

const lessonLinks = document.querySelectorAll(".lesson-link");
const lessonTitle = document.getElementById("lessonTitle");
const lessonDescription = document.getElementById("lessonDescription");
const lessonBody = document.getElementById("lessonBody");
const lessonCounter = document.getElementById("lessonCounter");
const lessonCategory = document.getElementById("lessonCategory");
const practiceSection = document.getElementById("practiceSection");

function loadLesson(index) {
    if (index < 0 || index >= lessons.length) return;
    currentLesson = index;
    const lesson = lessons[index];

    if (lessonTitle) lessonTitle.textContent = lesson.title;
    if (lessonDescription) lessonDescription.textContent = lesson.description;
    if (lessonCategory) lessonCategory.textContent = lesson.category;
    if (lessonCounter) lessonCounter.textContent = `Lesson ${String(index + 1).padStart(2, "0")} of ${lessons.length}`;

    if (lesson.isPractice) {
        if (lessonBody) lessonBody.style.display = "none";
        if (practiceSection) {
            practiceSection.style.display = "block";
            if (typeof editor !== 'undefined' && editor) {
                editor.refresh();
            }
        }
        runHTML();
    } else {
        if (lessonBody) {
            lessonBody.style.display = "block";
            lessonBody.innerHTML = lesson.content;
        }
        if (practiceSection) practiceSection.style.display = "none";
    }

    const takeawayList = document.getElementById("takeawayList");
    if (takeawayList && lesson.takeaways) {
        takeawayList.innerHTML = lesson.takeaways.map(item => `<li>${item}</li>`).join("");
    }

    const mistakeList = document.getElementById("mistakeList");
    if (mistakeList && lesson.mistakes) {
        mistakeList.innerHTML = lesson.mistakes.map(item => `<li>${item}</li>`).join("");
    }

    lessonLinks.forEach((link, i) => {
        link.classList.toggle("active", i === index);
    });

    const prevBtn = document.getElementById("previousLesson");
    const nextBtn = document.getElementById("nextLesson");
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === lessons.length - 1;

    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
    hideDrawer();
}

lessonLinks.forEach((link, index) => {
    link.addEventListener("click", () => loadLesson(index));
});

function updateProgress() {
    lessonLinks.forEach((link, index) => {
        const number = link.querySelector(".lesson-number");
        if (!number) return;
        if (completedLessons.has(index)) {
            number.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else {
            number.textContent = String(index + 1).padStart(2, "0");
        }
    });
}

const completeBtn = document.getElementById("completeLesson");
if (completeBtn) {
    completeBtn.addEventListener("click", () => {
        completedLessons.add(currentLesson);
        updateProgress();
        completeBtn.innerHTML = 'Completed <i class="fa-solid fa-check"></i>';
        setTimeout(() => {
            completeBtn.innerHTML = 'Mark as Complete <i class="fa-solid fa-check"></i>';
        }, 1500);
    });
}

const prevBtn = document.getElementById("previousLesson");
const nextBtn = document.getElementById("nextLesson");
if (prevBtn) prevBtn.addEventListener("click", () => loadLesson(currentLesson - 1));
if (nextBtn) nextBtn.addEventListener("click", () => loadLesson(currentLesson + 1));

// Codemirror & Practice Presets setup
const editorElement = document.getElementById("htmlEditor");
const htmlPreview = document.getElementById("htmlPreview");

const presets = {
    inline: `<!DOCTYPE html>\n<html>\n<body>\n    <h2 style="color: #2563eb; text-align: center;">Inline CSS Example</h2>\n    <p style="background-color: #fef08a; padding: 12px; border-radius: 6px;">\n        This paragraph demonstrates direct inline styling using the style attribute.\n    </p>\n</body>\n</html>`,
    internal: `<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        body { font-family: sans-serif; background: #f8fafc; }\n        h2 { color: #16a34a; text-align: center; }\n        .box { background: #dcfce7; padding: 15px; border-radius: 8px; }\n    </style>\n</head>\n<body>\n    <h2>Internal CSS Example</h2>\n    <div class="box">\n        <p>This design is defined inside the &lt;style&gt; tag within the head section.</p>\n    </div>\n</body>\n</html>`,
    external: `<!DOCTYPE html>\n<html>\n<head>\n    <link rel="stylesheet" href="css.css">\n</head>\n<body>\n    <h2>External CSS Example</h2>\n    <p class="ext-text">This text is styled using an external css.css stylesheet file.</p>\n</body>\n</html>`,
    login: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #1e3a8a, #2563eb);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-card {
            background: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 330px;
        }
        .login-card h2 {
            margin-bottom: 20px;
            color: #0f172a;
            text-align: center;
            font-size: 22px;
        }
        .input-group {
            margin-bottom: 15px;
        }
        .input-group label {
            display: block;
            font-size: 12px;
            color: #475569;
            margin-bottom: 5px;
            font-weight: 600;
        }
        .input-group input {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            font-size: 13px;
            box-sizing: border-box;
            outline: none;
        }
        .login-btn {
            width: 100%;
            padding: 11px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
        }
        .login-btn:hover {
            background: #1d4ed8;
        }
    </style>
</head>
<body>
    <div class="login-card">
        <h2>Welcome Back</h2>
        <form>
            <div class="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="leonhelpresno06@gmail.com">
            </div>
            <div class="input-group">
                <label>Password</label>
                <input type="password" placeholder="Password">
            </div>
            <button type="submit" class="login-btn">Log In</button>
        </form>
    </div>
</body>
</html>`
};

// ==========================================
// SIMPLE CSS ERROR HIGHLIGHTER (Inilipat sa itaas)
// ==========================================
// Simple CSS Error Highlighter (Hindi na iilaw sa HTML tags)
let errorMarkers = [];

function checkSimpleCSSErrors() {
    if (!editor) return;

    // Alisin muna ang mga lumang pulang guhit
    errorMarkers.forEach(marker => marker.clear());
    errorMarkers = [];

    const code = editor.getValue();
    const lines = code.split("\n");

    let insideStyleTag = false;

    lines.forEach((lineText, lineIndex) => {
        const trimmed = lineText.trim();
        
        // Alamin kung pumasok na sa loob ng <style> tag
        if (trimmed.toLowerCase().includes("<style>")) {
            insideStyleTag = true;
            return;
        }
        if (trimmed.toLowerCase().includes("</style>")) {
            insideStyleTag = false;
            return;
        }

        // I-check lang kung nasa loob ng <style> tag O kung ito ay purong CSS line (walang HTML tags tulad ng < o >)
        const isCSSLine = insideStyleTag || (!trimmed.includes("<") && !trimmed.includes(">") && !trimmed.startsWith("<!") && !trimmed.startsWith("/"));

        if (isCSSLine) {
            // Kung may colon ':' pero walang semicolon ';' sa dulo
            if (trimmed.includes(":") && !trimmed.endsWith(";") && !trimmed.endsWith("{") && !trimmed.endsWith("}") && !trimmed.startsWith("/*")) {
                
                const startChar = lineText.indexOf(trimmed);
                const endChar = lineText.length;

                // Lagyan ng pulang guhit ang mismong linya
                const marker = editor.markText(
                    { line: lineIndex, ch: startChar },
                    { line: lineIndex, ch: endChar },
                    { className: "cm-css-error-highlight" }
                );
                errorMarkers.push(marker);
            }
        }
    });
}
let editor = null;
if (editorElement) {
    editorElement.value = presets.inline;
    editor = CodeMirror.fromTextArea(editorElement, {
        mode: "htmlmixed",
        theme: "default",
        lineNumbers: true,
        lineWrapping: true,
        tabSize: 4
    });
    
    // Ngayon ay gagana na ito dahil nabuo na sa itaas ang function
    editor.on("change", checkSimpleCSSErrors);
    checkSimpleCSSErrors();
}

function runHTML() {
    if (editor && htmlPreview) {
        htmlPreview.srcdoc = editor.getValue();
    }
}

const runCodeBtn = document.getElementById("runCode");
const resetCodeBtn = document.getElementById("resetCode");

if (runCodeBtn) runCodeBtn.addEventListener("click", runHTML);
if (resetCodeBtn) {
    resetCodeBtn.addEventListener("click", () => {
        const activeBtn = document.querySelector(".preset-btn.active");
        const key = activeBtn ? activeBtn.getAttribute("data-preset") : "inline";
        if (editor && presets[key]) {
            editor.setValue(presets[key]);
            runHTML();
        }
    });
}

// Preset button click handling
document.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const presetKey = e.target.getAttribute("data-preset");
        if (editor && presets[presetKey]) {
            editor.setValue(presets[presetKey]);
            runHTML();
            document.querySelectorAll(".preset-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
        }
    });
});

loadLesson(0);