(function() {
	//nCage 
	var main = function($) { 
		
		var self = $.nCage = new function(){};
		
		$.extend(self, {
			nCageImgs : [
			'    s://framtida.no/wp-content/uploads/2017/04/Atlars.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/4/45/Atlars.jpg',
			'https://poesislam.no/wp-content/uploads/2015/06/2015-05-29-20.35.03-1-2-676x484.jpg',
			'https://i.ytimg.com/vi/4GGL7r37UIo/hqdefault.jpg',
			'http://rogalyd.no/sites/default/files/media/images/gallery/forest.png',
			'https://www.jaermuseet.no/garborgsenteret/wp-content/uploads/sites/2/2016/07/atlars.02.jpg',
			'https://www.dagsavisen.no/polopoly_fs/1.611695.1450139328!/image/image.jpg_gen/derivatives/169_1600/image.jpg',
			'http://rogalyd.no/sites/default/files/media/images/atlars_press2_gul.png',
			'https://sa.mnocdn.no/images/video/5d71760cd579cfe4b9b717ff6ae4d5e4.jpg?t[]=1440q80',
			'https://i.ytimg.com/vi/ZN-h6c70wuw/maxresdefault.jpg',
			'http://www.grizzmine.fr/images/clip/ATLARS_and_DJ_VEEKASH_prod_dj_veekash.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfe0AF80FaRNzHFyT_iN0nKe93oU70zUfJtNMAX6m5BjhvFYGmg',
			'https://live.staticflickr.com/2758/4422946165_07613d9d15_b.jpg',
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 
