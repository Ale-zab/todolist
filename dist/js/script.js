$(function(){var t=$(".task-name"),o=$(".task-description"),i=$(".container-left"),s=($(".toDoList-block-content"),$(".empty-toDoList-block"));$(".task-button").on("click",function(){if(!t.val()||!o.val())return!1;i.append("<div class='toDoList-block'><div class='toDoList-block-top'><h3 class='toDoList-block-name'>"+t.val()+"</h3><div class='toDoList-block-right'><input type='submit' class='hide' value=''><input type='submit' class='clear' value=''></div></div><div class='toDoList-block-content'><p class='toDoList-block-required'>"+o.val()+"</p></div></div>"),t.val(""),o.val(""),l()}),$("html").on("click",".clear",function(){$(this).parents(".toDoList-block").remove(),l()}),$("html").on("click",".hide",function(){$(this).parents(".toDoList-block").find(".toDoList-block-content").slideToggle(500),$(this).toggleClass("rotateHide")});var l=function(){i.children().length?s.css("display","none"):s.fadeIn("fast")}});