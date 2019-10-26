// const harm = $("#harm");

// const ul = $(".menu_left");

// const newItem = $(
//   '<li><a href="content/danceschool/instructors.html"><span>Taniec</span></a></li><li><a href="content/danceschool/instructors.html"><span>Pływanie</span></a></li>'
// );

// harm.mouseover(function() {
//   console.log(ul[0].children[2]);
//   ul[0].children[2] = newItem;
//   //   ul[0].children[2].html("<p>dupa</p>");
//   //   $(this).html("<p>dupa</p>");
// });

// harm.mouseleave(function() {
//   $(this).html(
//     '<a href="content/danceschool/instructors.html"><span>Harmonogram</span></a>'
//   );
// });
// var uncss = ('uncss');
const uncss = require('uncss');

var files = ['my', 'array', 'of', 'HTML', 'files', 'or', 'http://urls.com'],
  options = {
    banner: false,
    csspath: '../css/',
    htmlroot: 'public',
    ignore: ['#added_at_runtime', /test\-[0-9]+/],
    ignoreSheets: [/fonts.googleapis/],
    inject: function(window) {
      window.document
        .querySelector('html')
        .classList.add('no-csscalc', 'csscalc');
    },
    jsdom: {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)'
    },
    media: ['(min-width: 700px) handheld and (orientation: landscape)'],
    raw: 'h1 { color: green }',
    report: false,
    strictSSL: true,
    stylesheets: [
      'lib/bootstrap/dist/css/bootstrap.css',
      'src/public/css/main.css'
    ],
    timeout: 1000,
    uncssrc: '.uncssrc',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)'
  };

uncss(files, options, function(error, output) {
  console.log(output);
});

/* Look Ma, no options! */
uncss(files, function(error, output) {
  console.log(output);
});

/* Specifying raw HTML */
var rawHtml = '../index.html';

uncss(rawHtml, options, function(error, output) {
  console.log(output);
});
