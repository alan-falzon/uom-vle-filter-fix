// ==UserScript==
// @name         UoM VLE Academic Year Filter Fix
// @namespace    https://github.com/yurgenschembri/UoM-VLE-Filter-Fix
// @version      0.1
// @description  Workaround for: (UoM VLE) Note: If no results are displayed for a particular category, select any other category from the drop-down menu, e.g. 'All'. You may then re-select the required category.
// @author       Yurgen Schembri
// @match        https://www.um.edu.mt/vle/my/
// @grant        none
// ==/UserScript==

(function() {
    window.onload = function filterTopLevelCategory() {
        var e = Y;
        var t = Y.one('#coc-filtertoplevelcategory');
        var n = e.one("#coc-filtertoplevelcategory").get("selectedIndex"),
            r = e.one("#coc-filtertoplevelcategory").get("options").item(n).getAttribute("value");
        var k = r == "all" ? e.all("div.toplevelcategorydiv").removeClass("coc-hidden") : (e.all("div.toplevelcategorydiv").addClass("coc-hidden"), e.all("div.coc-toplevelcategory-" + r).removeClass("coc-hidden")) && M.util.set_user_preference("block_course_overview_campus-selectedtoplevelcategory", r);
    };
})();
