// 1. Regular expression literal: Enclosed in slashes
//    There are 3 optional flags that can be appended on a RegExp
//      g: Global, multiple times
//      i: Case insensitive
//      m: Multiline (^: Start of String and $: End of String can match line-ending characters)
//    Example: Parse a URL
var url = "http://andrewgurung.github.io:8080/2015/12/21/markdown-basics/?q#searchTerm";
var regExp = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;


// 2. Match the passed url string with the regExp
//    If successful, returns an array containing information extracted from url
var result = regExp.exec(url);
var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
for (var i = 0; i < names.length; i += 1) {
  console.log(names[i] + ':' + result[i]);
}

// Output
// -----------------------------------------------------------------------------
// url:http://andrewgurung.github.io:8080/2015/12/21/markdown-basics/?q#searchTerm
// scheme:http
// slash://
// host:andrewgurung.github.io
// port:8080
// path:2015/12/21/markdown-basics/
// query:q
// hash:searchTerm
// -----------------------------------------------------------------------------

// 3. Disection
//  ----------------------
//  Group 1 :: http
//  ----------------------
//  [A-Za-z]  --> Character class with uppercase A to Z and lowercase a to z
//  [A-Za-z]+ --> '+' indicates character class will be matched one or more times
//  (...)     --> () will capture information and store in result array
//  ([A-Za-z]+) --> Capture matching group. http
//  (?: )     --> Non-capturing group. If you do not need the group to capture its match
//  (?:([A-Za-z]+):) --> Non-capture matching group. http:
//  (?:([A-Za-z]+):)? --> Last '?' indicates the block is optional

//  -------------------
//  Group 2 :: //
//  -------------------
//  \/ --> /(slash) should be matched. Note backslash (\) is an escape character
//  \/{0,3} --> Suffix {0,3} indicates '/' will be matched 0 or 1 or 2 or 3 times
//  (\/{0,3}) --> Enclosed in parenthesis denotes a capturing group

//  --------------------------------------
//  Group 3 :: andrewgurung.github.io
//  --------------------------------------
//  [0-9.\-A-Za-z] --> Character class which may be a digit, '.', '-' or letters
//        Here '-' is escaped to avoid confusion with range hyphen '-' as in A-Z
//  ([0-9.\-A-Za-z]+) --> '+' indicates one or more. () indicates capturing group

//  --------------------------------------
//  Group 4 :: 8080
//  --------------------------------------
//  (\d+)  --> Capture one ore more digits. '8080'
//  :(\d+) --> Digit starts with semicolon. ':8080'
//  (?::(\d+)) --> Non-capturing block of ':8080'
//  (?::(\d+))? --> Optional block

//  --------------------------------------
//  Group 5 :: 2015/12/21/markdown-basics/
//  --------------------------------------
//  ([^?#]*)    --> Capture all characters except '?' and '#'. * indicates zero or more
//  (?:\/([^?#]*))  --> Non-capturing block which begins with a forward slash
//  (?:\/([^?#]*))? --> Optional block

//  --------------------------------------
//  Group 6 :: q
//  --------------------------------------
//  ([^#]*)      --> Capture zero or more characters except '#'
//  (?:\?[^#]*)  --> Non-capturing block which begins with '?'
//  (?:\?[^#]*)? --> Optional block

//  --------------------------------------
//  Group 7 :: searchTerm
//  --------------------------------------
//  (.*)        --> Capture any character except line-ending character
//  (?:#(.*))   --> Non-capturing block which begins with '#'
//  (?:#(.*))?  --> Optional block


// 4. Special characters in Regex Factor
//    They are    \ / [ ] ( ) { } ? + * | . ^ $
//    Must be escaped using '\' prefix to be used literally

// 5. Quantifier
//    /www/ can be written as /w{3}
//    {2}   --> Exactly 2
//    {2,5} --> 2,3,4 or 5 times
//    {2,}  --> 2 or more times
//    ?     --> 0 or 1 times. Similar to {0,1}
//    *     --> O or more. Similar to {0,}
//    +     --> 1 or more. Similar to {1,}
