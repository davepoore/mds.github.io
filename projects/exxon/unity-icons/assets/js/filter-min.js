function appendPixelValue(l){$(".appended").remove(),$("h2").append('<span class="appended">&nbsp;&nbsp;'+l+"px</span")}appendPixelValue(24);var $btns=$(".btn").on("click",function(){$btns.removeClass("active").filter(this).addClass("active").data("filter")});$("#btn-tiny").on("click",function(){$("ul").removeClass().addClass("group-t"),appendPixelValue(12),$("li").removeClass()}),$("#btn-small").on("click",function(){$("ul").removeClass().addClass("group-s"),appendPixelValue(16),$("li").removeClass()}),$("#btn-medium").on("click",function(){$("ul").removeClass().addClass("group-m"),appendPixelValue(24),$("li").removeClass()}),$("#btn-large").on("click",function(){$("ul").removeClass().addClass("group-l"),appendPixelValue(32),$("li").removeClass()}),$("#btn-xlarge").on("click",function(){$("ul").removeClass().addClass("group-xl"),appendPixelValue(48),$("li").addClass("xlarge")});