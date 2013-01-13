document.write('<link href=\"https://gist.github.com/assets/embed-c14e307821ae2832783369ab288fe82a.css\" media=\"screen\" rel=\"stylesheet\" />')
document.write('<div id=\"gist3819468\" class=\"gist\">\n      <div class=\"gist-file\">\n        <div class=\"gist-data gist-syntax\">\n\n\n\n  <div class=\"data\">\n    <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n      <tr>\n        <td class=\"line_numbers\">\n          <span id=\"file-server-js-L1\" rel=\"file-server-js-L1\">1<\/span>\n          <span id=\"file-server-js-L2\" rel=\"file-server-js-L2\">2<\/span>\n          <span id=\"file-server-js-L3\" rel=\"file-server-js-L3\">3<\/span>\n          <span id=\"file-server-js-L4\" rel=\"file-server-js-L4\">4<\/span>\n          <span id=\"file-server-js-L5\" rel=\"file-server-js-L5\">5<\/span>\n          <span id=\"file-server-js-L6\" rel=\"file-server-js-L6\">6<\/span>\n          <span id=\"file-server-js-L7\" rel=\"file-server-js-L7\">7<\/span>\n          <span id=\"file-server-js-L8\" rel=\"file-server-js-L8\">8<\/span>\n          <span id=\"file-server-js-L9\" rel=\"file-server-js-L9\">9<\/span>\n          <span id=\"file-server-js-L10\" rel=\"file-server-js-L10\">10<\/span>\n          <span id=\"file-server-js-L11\" rel=\"file-server-js-L11\">11<\/span>\n          <span id=\"file-server-js-L12\" rel=\"file-server-js-L12\">12<\/span>\n          <span id=\"file-server-js-L13\" rel=\"file-server-js-L13\">13<\/span>\n          <span id=\"file-server-js-L14\" rel=\"file-server-js-L14\">14<\/span>\n          <span id=\"file-server-js-L15\" rel=\"file-server-js-L15\">15<\/span>\n          <span id=\"file-server-js-L16\" rel=\"file-server-js-L16\">16<\/span>\n          <span id=\"file-server-js-L17\" rel=\"file-server-js-L17\">17<\/span>\n          <span id=\"file-server-js-L18\" rel=\"file-server-js-L18\">18<\/span>\n        <\/td>\n        <td class=\"line_data\" width=\"100%\">\n          <pre><div class=\"line\" id=\"file-server-js-LC1\"><span class=\"kd\">var<\/span> <span class=\"nx\">express<\/span> <span class=\"o\">=<\/span> <span class=\"nx\">require<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;express&#39;<\/span><span class=\"p\">),<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC2\">    <span class=\"nx\">wine<\/span> <span class=\"o\">=<\/span> <span class=\"nx\">require<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;./routes/wines&#39;<\/span><span class=\"p\">);<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC3\">&nbsp;<\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC4\"><span class=\"kd\">var<\/span> <span class=\"nx\">app<\/span> <span class=\"o\">=<\/span> <span class=\"nx\">express<\/span><span class=\"p\">();<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC5\">&nbsp;<\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC6\"><span class=\"nx\">app<\/span><span class=\"p\">.<\/span><span class=\"nx\">configure<\/span><span class=\"p\">(<\/span><span class=\"kd\">function<\/span> <span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC7\">    <span class=\"nx\">app<\/span><span class=\"p\">.<\/span><span class=\"nx\">use<\/span><span class=\"p\">(<\/span><span class=\"nx\">express<\/span><span class=\"p\">.<\/span><span class=\"nx\">logger<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;dev&#39;<\/span><span class=\"p\">));<\/span>     <span class=\"cm\">/* &#39;default&#39;, &#39;short&#39;, &#39;tiny&#39;, &#39;dev&#39; */<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC8\">    <span class=\"nx\">app<\/span><span class=\"p\">.<\/span><span class=\"nx\">use<\/span><span class=\"p\">(<\/span><span class=\"nx\">express<\/span><span class=\"p\">.<\/span><span class=\"nx\">bodyParser<\/span><span class=\"p\">());<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC9\"><span class=\"p\">});<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC10\">&nbsp;<\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC11\"><span class=\"nx\">app<\/span><span class=\"p\">.<\/span><span class=\"nx\">get<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;/wines&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">wine<\/span><span class=\"p\">.<\/span><span class=\"nx\">findAll<\/span><span class=\"p\">);<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC12\"><span class=\"nx\">app<\/span><span class=\"p\">.<\/span><span class=\"nx\">get<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;/wines/:id&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">wine<\/span><span class=\"p\">.<\/span><span class=\"nx\">findById<\/span><span class=\"p\">);<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC13\"><span class=\"nx\">app<\/span><span class=\"p\">.<\/span><span class=\"nx\">post<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;/wines&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">wine<\/span><span class=\"p\">.<\/span><span class=\"nx\">addWine<\/span><span class=\"p\">);<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC14\"><span class=\"nx\">app<\/span><span class=\"p\">.<\/span><span class=\"nx\">put<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;/wines/:id&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">wine<\/span><span class=\"p\">.<\/span><span class=\"nx\">updateWine<\/span><span class=\"p\">);<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC15\"><span class=\"nx\">app<\/span><span class=\"p\">.<\/span><span class=\"k\">delete<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;/wines/:id&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">wine<\/span><span class=\"p\">.<\/span><span class=\"nx\">deleteWine<\/span><span class=\"p\">);<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC16\">&nbsp;<\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC17\"><span class=\"nx\">app<\/span><span class=\"p\">.<\/span><span class=\"nx\">listen<\/span><span class=\"p\">(<\/span><span class=\"mi\">3000<\/span><span class=\"p\">);<\/span><\/div><\/pre>\n          <pre><div class=\"line\" id=\"file-server-js-LC18\"><span class=\"nx\">console<\/span><span class=\"p\">.<\/span><span class=\"nx\">log<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Listening on port 3000...&#39;<\/span><span class=\"p\">);<\/span><\/div><\/pre>\n        <\/td>\n      <\/tr>\n    <\/table>\n  <\/div>\n\n        <\/div>\n\n        <div class=\"gist-meta\">\n          <a href=\"https://gist.github.com/raw/3819468/9711262233638bfbb4e0b5da25c56ac433b68ca5/server.js\" style=\"float:right\">view raw<\/a>\n          <a href=\"https://gist.github.com/3819468#file-server-js\" style=\"float:right; margin-right:10px; color:#666;\">server.js<\/a>\n          <a href=\"https://gist.github.com/3819468\">This Gist<\/a> brought to you by <a href=\"http://github.com\">GitHub<\/a>.\n        <\/div>\n      <\/div>\n<\/div>\n')
