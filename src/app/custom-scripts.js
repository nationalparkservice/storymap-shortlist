define(["dojo/topic"], function(topic) {
	/*
	* Custom Javascript to be executed while the application is initializing goes here
	*/
	function addButtonFeaturesToButtonLikeElements($selection)
	{
		$selection
			.attr("tabindex", "0")
			.attr("role", "button")
			.on('keydown', function (e) {
				if (e.keyCode === 32 || e.keyCode === 13) {
					$(e.target).click();
					return false;
				}
			})
			.each(function() {
				var title = $(this).attr('title');
				if (title) {$(this).attr('aria-label', title)}
			});
	}

	// The application is ready
	topic.subscribe("tpl-ready", function(){
		/*
		* Custom Javascript to be executed when the application is ready goes here
		*/
		// Add key navigation to social links
		addButtonFeaturesToButtonLikeElements($('.share_facebook, .share_twitter'));  //.share_bitly already a button

		// Add key navigation to main stage actions (these anchor elements have no href)
		addButtonFeaturesToButtonLikeElements($('a[data-storymaps]'));

		// Add key control to image 'view-fullsize' control
		var viewImageFullsizeControl = $('.image-wrapper .btn-fullscreen');
		addButtonFeaturesToButtonLikeElements(viewImageFullsizeControl);

		// Add key control to all mobile controls (needed for embed mode)
		addButtonFeaturesToButtonLikeElements($('#mobileView').find('p.help-embed, div.embed-btn, span.embed-btn2'));
	});
});
