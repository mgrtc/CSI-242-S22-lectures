////*******************
////*******************
//// Lecture 15: JQuery
////*******************
////*******************

// JQuery is a Javascript Library built for succinct DOM manipulation and basic Animations
// throughout this lecture we will compare with vanilla js or vjs with is the name for the 
// basic out of the box js with no libraries.


////****************
//// Start Recording

////*******************************
//// CDNs: Content Delivery Network
////*******************************


////**********
//// Selectors
////**********

// addEventListener("load",()=>{
//     // $("h1")
//     console.log($("h1"));

//     // works like querySelectorAll()
//     // but is not quite the same thing as a list of DOM Elements, 
//     // what we get is a "JQuery object": "S.fn.init"
//     // These represent set of DOM Elements and you can batch process them (more on that in a minute)
//     // once in JQuery Land the only way out is .get()

//     console.log($("h1").get())
//     console.log($("h1").get(0))
//     //otherwise you are locked into JQuery Methods which are mostly awesome and only occasionally buggy as heck
// })

////********
//// Methods
////********
// There are an ton of JQuery methods, I wouldn't be able to get to all of 
// them even if I spent the whole 12 weeks of this class on this.

// Here some of the main ones
// .val()
// .text()
// .attr()
// .html()
// .css()
// .addClass() / .removeClass() / .toggleClass()
// .empty() / .remove()
// .append() / .prepend()
// .find() / .closest() / .parent() / .next() / .prev()

// addEventListener("load",()=>{
//     // These methods work way more the way we would wish methods work in javascript
//     // as an example, we would like $("p").parent() to give us all the parents of p tags,
//     // ideally without any duplicates from p tags with the same parent.
//     // in vanilla JS we'd have to for loop and duplicate check ourselves. 
//     // With JQuery it typically just works
//     console.log($("div").parent());
// });

////*********
//// Chaining
////*********

//Super awesomely JQuery Methods typically return JQuery Objects this means we can chain JQuery methods

// addEventListener("load",()=>{
//     console.log(
//         $("p")
//             .on("click", function(evt) { console.log("clicked!") })
//             .css("color","red")
//             .parent()
//             .addClass("p-parent")
//             .prepend("<p>Test</p>")
//     );
// });

////***************
//// Variable names
////***************
// traditional to have jQuery object variables start with $

// addEventListener("load",()=>{
//     var $parents = $("p").parent();
//     console.log($parents);
// })


////*******************************
//// jQuery getter / setter pattern
////*******************************

// vanilla JS: .getAttribute(attrName) and .setAttribute(attrName, newValue)
// JQuery: .attr(attrName, newValue) with (second param optional)

// addEventListener("load",()=>{
//     var $content = $("#content");
//     console.log($content.attr("class", "main").css("color", "blue"));
//     console.log($content.attr("class"));
// });


////******************
//// Creating elements
////******************

// addEventListener("load",()=>{
//     var $p = $("<p>");
//     $p.attr("id","hi");
//     $p.text("hi")
//     var $content = $("#content");
//     $content.append($p);
//     $p.css("color","blue");
// });


////*****************
//// Event Delegation
////*****************

addEventListener("load",()=>{
    var $content = $("#content");
    $("#content").on("click", ".meme", function(evt) {
        console.log("hi")
        evt.target.remove();
    });
    $content.append($("<p>").addClass("meme").text("clickable"));
});
  