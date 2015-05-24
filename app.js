var i;
var SpoilerListItems = [];

for (i = 1; i < spoiler.length; i++)
{
  SpoilerListItems[i] = $("#spoiler_list_1");
  $(SpoilerListItems[i]).append("<li data-index=\"" + i + "\" class=\"button spoiler\"><p class=\"shine\">" + spoiler[i].filmTitle + "</p></li>");
  
}

$(".spoiler").click(function(){
  var index = $(this).data('index');
  if (spoiler[index].collapsed)
  {
    $(this).children("p").text(spoiler[index].filmTitle + " - " + spoiler[index].spoiler)
    .css("font-style: italic;");
    spoiler[index].collapsed = false;
  }
  else
  {
    $(this).children("p").text(spoiler[index].filmTitle);
    spoiler[index].collapsed = true;
  }
});