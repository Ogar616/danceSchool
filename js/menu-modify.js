const harm = $("#harm");

const ul = $(".menu_left");

const newItem = $(
  '<li><a href="content/danceschool/instructors.html"><span>Taniec</span></a></li><li><a href="content/danceschool/instructors.html"><span>Pływanie</span></a></li>'
);

harm.mouseover(function() {
  console.log(ul[0].children[2]);
  ul[0].children[2] = newItem;
  //   ul[0].children[2].html("<p>dupa</p>");
  //   $(this).html("<p>dupa</p>");
});

harm.mouseleave(function() {
  $(this).html(
    '<a href="content/danceschool/instructors.html"><span>Harmonogram</span></a>'
  );
});
