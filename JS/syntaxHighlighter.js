
const cpp_highlight = [

    // cpp
    "alignof", "and", "and_eq", "bitand", "bitor", "break", "case", "catch", "class", 
    "compl", "const_cast", "continue", "default", "delete", "do", "dynamic_cast",
    "else", "false", "for", "goto", "if", "namespace", "new", "not", "not_eq",
    "nullptr", "operator", "or", "or_eq", "reinterpret_cast", "return", "sizeof",
    "static_assert", "static_cast", "switch", "this", "throw", "true", "try",
    "typedef", "typeid", "using", "while", "xor", "xor_eq", "NULL", "alignas",
    "asm", "auto", "bool", "char", "char16_t", "char32_t", "class", "clock_t",
    "concept", "const", "consteval", "constexpr", "constinit", "decltype", "double",
    "enum", "explicit", "export", "extern", "final", "float", "friend", "inline",
    "int", "int8_t", "int16_t", "int32_t", "int64_t", "int_fast8_t", "int_fast16_t",
    "int_fast32_t", "int_fast64_t", "intmax_t", "intptr_t", "long", "mutable",
    "noexcept", "override", "private", "protected", "ptrdiff_t", "public", "register",
    "requires", "short", "signed", "size_t", "ssize_t", "static", "struct", "template",
    "thread_local", "time_t", "typename", "uint8_t", "uint16_t", "uint32_t", "uint64_t",
    "uint_fast8_t", "uint_fast16_t", "uint_fast32_t", "uint_fast64_t", "uintmax_t", "uinion",
    "uintptr_t", "union", "unsigned", "virtual", "void", "volatile", "wchar_t",

    // js
    "abstract", "async", "await", "boolean", "break", "byte", "case", "catch", "char", 
    "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", 
    "enum", "export", "extends", "final", "finally", "float", "for", "function", "goto", 
    "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", 
    "native", "new", "null", "of", "package", "private", "protected", "public", "return", 
    "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", 
    "transient", "try", "typeof", "var", "void", "volatile", "while", "with", "true", 
    "false", "prototype", "yield",

    //js dom
    "alert", "all", "anchor", "anchors", "area", "assign", "blur", "button", "checkbox", "clearInterval", 
    "clearTimeout", "clientInformation", "close", "closed", "confirm", "constructor", "crypto", "decodeURI", 
    "decodeURIComponent", "defaultStatus", "document", "element", "elements", "embed", "embeds", "encodeURI", 
    "encodeURIComponent", "escape", "event", "fileUpload", "focus", "form", "forms", "frame", "innerHeight", 
    "innerWidth", "layer", "layers", "link", "location", "mimeTypes", "navigate", "navigator", "frames", 
    "frameRate", "hidden", "history", "image", "images", "offscreenBuffering", "onblur", "onclick", "onerror", 
    "onfocus", "onkeydown", "onkeypress", "onkeyup", "onmouseover", "onload", "onmouseup", "onmousedown", "onsubmit", 
    "open", "opener", "option", "outerHeight", "outerWidth", "packages", "pageXOffset", "pageYOffset", "parent", "parseFloat", 
    "parseInt", "password", "pkcs11", "plugin", "prompt", "propertyIsEnum", "radio", "reset", "screenX", "screenY", 
    "scroll", "secure", "select", "self", "setInterval", "setTimeout", "status", "submit", "taint", "text", "textarea", 
    "top", "unescape", "untaint", "window",

    // py
    "and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", 
    "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", 
    "nonlocal", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"
];

const utils_highlight = [

    // js
    "Array", "Date", "eval", "hasOwnProperty", "Infinity", "isFinite", "isNaN", "isPrototypeOf", 
    "Math", "NaN", "Number", "Object", "prototype", "String", "toString", "undefined", "valueOf",

    // py
    "ArithmeticError", "AssertionError", "AttributeError", "BaseException", "BlockingIOError", 
    "BrokenPipeError", "BufferError", "BytesWarning", "ChildProcessError", "ConnectionAbortedError", 
    "ConnectionError", "ConnectionRefusedError", "ConnectionResetError", "DeprecationWarning", 
    "EOFError", "Ellipsis", "EnvironmentError", "Exception", "False", "FileExistsError", 
    "FileNotFoundError", "FloatingPointError", "FutureWarning", "GeneratorExit", "IOError", 
    "ImportError", "ImportWarning", "IndentationError", "IndexError", "InterruptedError", 
    "IsADirectoryError", "KeyError", "KeyboardInterrupt", "LookupError", "MemoryError", 
    "ModuleNotFoundError", "NameError", "None", "NotADirectoryError", "NotImplemented", 
    "NotImplementedError", "OSError", "OverflowError", "PendingDeprecationWarning", 
    "PermissionError", "ProcessLookupError", "RecursionError", "ReferenceError", "ResourceWarning", 
    "RuntimeError", "RuntimeWarning", "StopAsyncIteration", "StopIteration", "SyntaxError", 
    "SyntaxWarning", "SystemError", "SystemExit", "TabError", "TimeoutError", "True", "TypeError", 
    "UnboundLocalError", "UnicodeDecodeError", "UnicodeEncodeError", "UnicodeError", "UnicodeTranslateError", 
    "UnicodeWarning", "UserWarning", "ValueError", "Warning", "WindowsError", "ZeroDivisionError", 
    "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", 
    "classmethod", "compile", "complex", "copyright", "credits", "delattr", "dict", "dir", "divmod", 
    "enumerate", "eval", "exec", "exit", "filter", "float", "format", "frozenset", "getattr", "globals", 
    "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", 
    "license", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", 
    "ord", "pow", "print", "property", "quit", "range", "repr", "reversed", "round", "set", "setattr", 
    "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"

];

const cpp_highlight_regex = /\b(alignof|and|and_eq|bitand|bitor|break|case|catch|class|compl|const_cast|continue|default|delete|do|dynamic_cast|else|false|for|goto|if|namespace|new|not|not_eq|nullptr|operator|or|or_eq|reinterpret_cast|return|sizeof|static_assert|static_cast|switch|this|throw|true|try|typedef|typeid|using|while|xor|xor_eq|NULL|alignas|asm|auto|bool|char|char16_t|char32_t|class|clock_t|concept|const|consteval|constexpr|constinit|decltype|double|enum|explicit|export|extern|final|float|friend|inline|int|int8_t|int16_t|int32_t|int64_t|int_fast8_t|int_fast16_t|int_fast32_t|int_fast64_t|intmax_t|intptr_t|long|mutable|noexcept|override|private|protected|ptrdiff_t|public|register|requires|short|signed|size_t|ssize_t|static|struct|template|thread_local|time_t|typename|uint8_t|uint16_t|uint32_t|uint64_t|uint_fast8_t|uint_fast16_t|uint_fast32_t|uint_fast64_t|uintmax_t|uinion|uintptr_t|union|unsigned|virtual|void|volatile|wchar_t|abstract|async|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|of|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|try|typeof|var|void|volatile|while|with|true|false|prototype|yield|alert|all|anchor|anchors|area|assign|blur|button|checkbox|clearInterval|clearTimeout|clientInformation|close|closed|confirm|constructor|crypto|decodeURI|decodeURIComponent|defaultStatus|document|element|elements|embed|embeds|encodeURI|encodeURIComponent|escape|event|fileUpload|focus|form|forms|frame|innerHeight|innerWidth|layer|layers|link|location|mimeTypes|navigate|navigator|frames|frameRate|hidden|history|image|images|offscreenBuffering|onblur|onclick|onerror|onfocus|onkeydown|onkeypress|onkeyup|onmouseover|onload|onmouseup|onmousedown|onsubmit|open|opener|option|outerHeight|outerWidth|packages|pageXOffset|pageYOffset|parent|parseFloat|parseInt|password|pkcs11|plugin|prompt|propertyIsEnum|radio|reset|screenX|screenY|scroll|secure|select|self|setInterval|setTimeout|status|submit|taint|text|textarea|top|unescape|untaint|window|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g;
const utils_highlight_regex = /\b(Array|Date|eval|hasOwnProperty|Infinity|isFinite|isNaN|isPrototypeOf|Math|NaN|Number|Object|prototype|String|toString|undefined|valueOf|ArithmeticError|AssertionError|AttributeError|BaseException|BlockingIOError|BrokenPipeError|BufferError|BytesWarning|ChildProcessError|ConnectionAbortedError|ConnectionError|ConnectionRefusedError|ConnectionResetError|DeprecationWarning|EOFError|Ellipsis|EnvironmentError|Exception|False|FileExistsError|FileNotFoundError|FloatingPointError|FutureWarning|GeneratorExit|IOError|ImportError|ImportWarning|IndentationError|IndexError|InterruptedError|IsADirectoryError|KeyError|KeyboardInterrupt|LookupError|MemoryError|ModuleNotFoundError|NameError|None|NotADirectoryError|NotImplemented|NotImplementedError|OSError|OverflowError|PendingDeprecationWarning|PermissionError|ProcessLookupError|RecursionError|ReferenceError|ResourceWarning|RuntimeError|RuntimeWarning|StopAsyncIteration|StopIteration|SyntaxError|SyntaxWarning|SystemError|SystemExit|TabError|TimeoutError|True|TypeError|UnboundLocalError|UnicodeDecodeError|UnicodeEncodeError|UnicodeError|UnicodeTranslateError|UnicodeWarning|UserWarning|ValueError|Warning|WindowsError|ZeroDivisionError|abs|all|any|ascii|bin|bool|breakpoint|bytearray|bytes|callable|chr|classmethod|compile|complex|copyright|credits|delattr|dict|dir|divmod|enumerate|eval|exec|exit|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|license|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|print|property|quit|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip)\b/g;

const codeSnippet = document.getElementById('code-snippet');
const codeDisplay = document.getElementById('code-display');

function resize_code_snippet_editor() {
    codeSnippet.style.height = 'auto';
    codeSnippet.style.height = codeDisplay.style.height = codeSnippet.scrollHeight + 'px';
}

function reset_code_snippet_editor() {
    
        codeSnippet.lastInnerText =
        codeSnippet.innerText = 
        codeSnippet.textContent =
        codeSnippet.value = '';
        codeDisplay.innerHTML = '';
        
        resize_code_snippet_editor();
        
}

function highlightSyntax() {

    const code = codeSnippet.innerText || codeSnippet.textContent || codeSnippet.value;

    if (code === codeSnippet.lastInnerText)
        return;

    codeSnippet.lastInnerText = code;

    let line_comment_flag = false; 
    let block_comment_flag = false;
    let inside_quote = false;
    let quote_char = '';

    const highlightedCode = code.split(/(\s)/).map((word, index, arr) => {
        // Add space after < or >
        if (word.includes("<")) {
            word = word.replace(/<\s*/g, "&lt;");
        }

        if (word.includes(">")) {
            word = word.replace(/\s*>/g, "&gt;");
        }

        // Add space before { or }
        if (word.includes("}")) {
            word = word.replace(/\s*}/g, "<b>}</b>");
        }
        
        if (word.includes("{")) {
            word = word.replace(/{\s*/g, "<b>{</b>");
        }

        // Add space before ( or )
        if (word.includes(")")) {
            word = word.replace(/\s*\)/g, "<b>)</b>");
        }
        
        if (word.includes("(")) {
            word = word.replace(/\(\s*/g, "<b>(</b>");
        }

        // Add space before [ or ]
        if (word.includes("]")) {
            word = word.replace(/\s*]/g, "<b>]</b>");
        }
        
        if (word.includes("[")) {
            word = word.replace(/\[\s*/g, "<b>[</b>");
        }

        // handle block comments
        if (block_comment_flag) {
            if (word.includes("*/")) {
                block_comment_flag = false;
                return `${word}</div>`;
            }
            if (word.includes("\n")) {
                return `${word}<br>`;
            }
            return word;
        }

        // handle line comments
        if (line_comment_flag) {
            if (word.includes("\n")) {
                line_comment_flag = false;
                return `${word}</div><br>`;
            }
            return word;
        }

        // Check for starting of block comment
        if (word.includes("/*")) {
            block_comment_flag = true;
            return `<div class="comment">${word}`;
        }

        // Check for starting of line comment
        if (word.includes("//") || word.includes("#")) {
            line_comment_flag = true;
            return `<div class="line_comment">${word}`;
        }

        // Check for strings
        const current_quote = word.match(/['"]/);
        if (current_quote) {
            const replacer = function(c){
                if (inside_quote)
                {
                    if (quote_char === c) {
                        inside_quote = false;
                        return `${c}</div>`;
                    } 
                    return c;
                }
                inside_quote = true;
                quote_char = c;
                return `<div class="string">${c}`;
            };
            return word.replace(/['"]/g,replacer);
        }

        // Wrap numbers
        if (word.match(/^\d/)) {
            return word.replaceAll(/\b(\d+)\b/g,`<div class="digit">$1</div>`);
        }

        // highlight an object's properties and or attributes
        if(word.match(/\.(\w+)\b/g))
            return word.replace(/\.(\w+)\b/g, `.<div class="keyword">$1</div>`);

        // Wrap keywords near word boundaries
        if (word.match(cpp_highlight_regex)) {
            word = word.replaceAll(cpp_highlight_regex,`<div class="keyword">$1</div>`);
        }

        // Wrap utils near word boundaries
        if (word.match(utils_highlight_regex)) {
            word = word.replaceAll(utils_highlight_regex,`<div class="keyword">$1</div>`);
        }

        // Wrap scope resolution operator
        if (word.match(/::/)) {
            word = word.replace(/::(\w+)/g, `::<div class="scope">$1</div>`);
        }

        // Wrap keywords
        if (cpp_highlight.includes(word)) {
            return `<div class="keyword">${word}</div>`;
        }

        let ar;
        if (ar = word.match(/&lt; (.+)/g)) {
            for(w of ar)
            {
                for (let u of w.replace(/,/g, ' ').split(/\s/))
                    if (cpp_highlight.includes(u))
                        word = word.replaceAll(u, `<div class="keyword">${u}</div>`);
            }
            return word;
        }

        // Wrap utility keywords
        if (utils_highlight.includes(word)) {
            return `<div class="utils">${word}</div>`;
        }

        // Replace newline characters with line breaks
        if (word.includes("\n")) {
            return word.replace(/\n/g,"<br>");
        }

        return word;
    }).join('<div class="space"></div>');

    codeDisplay.innerHTML = highlightedCode;

    resize_code_snippet_editor();
}

codeSnippet.addEventListener('input', highlightSyntax, false);
codeSnippet.addEventListener('paste', function(e){ e.preventDefault(); }, false);
