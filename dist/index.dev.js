"use strict";

console.log('News Api'); // console.log('133c6b89d8af49bfb9f17a691645547f');
// source = 'the-times-of-india';
// source = 'the-hindu';

var apiKey = '133c6b89d8af49bfb9f17a691645547f';
var newsAccordian = document.getElementById('newsAccordian');
var xhr = new XMLHttpRequest(); // xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.open('GET', "https://newsapi.org/v2/top-headlines?country=in&apiKey=".concat(apiKey), true);

xhr.onload = function () {
  if (this.status === 200) {
    var json = JSON.parse(this.responseText);
    var articles = json.articles;
    console.log(articles);
    var newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index)
      var news = "<div class=\"card\">\n                            <div class=\"card-header\" id=\"heading".concat(index, "\">\n                                <h2 class=\"mb-0\">\n                                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse").concat(index, "\"\n                                    aria-expanded=\"false\" aria-controls=\"collapse").concat(index, "\">\n                                   <b>Breaking News ").concat(index + 1, ":</b> ").concat(element["title"], "\n                                </button>\n                                </h2>\n                            </div>\n\n                            <div id=\"collapse").concat(index, "\" class=\"collapse\" aria-labelledby=\"heading").concat(index, "\" data-parent=\"#newsAccordion\">\n                                <div class=\"card-body\"> ").concat(element["content"], ". <a href=\"").concat(element['url'], "\" target=\"_blank\" >Read more here</a>  </div>\n                            </div>\n                        </div>");
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();