define([
  'jquery',
  'require'
], function ($, require) {
  // Force jQuery.mousewheel to be loaded if it hasn't already

  if ($.fn.cover-videos == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.cover-videos = function (videoContainer, videoSelector, videoRegionSelector, vid_min_w, vid_w_orig, vid_h_orig) {
        
        // set the height of the video container to a referencing element
        $(videoContainer).height($(videoRegionSelector).height());
      
      
        // use largest scale factor of horizontal/vertical
        var scale_h = $(videoContainer).width() / vid_w_orig;
        var scale_v = $(videoContainer).height() / vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;
    
        // don't allow scaled width < minimum video width
        if (scale * vid_w_orig < vid_min_w) {scale = vid_min_w / vid_w_orig;};
    
        // now scale the video
        $(videoSelector ).width(scale * vid_w_orig);
        $(videoSelector ).height(scale * vid_h_orig);
        
        // this centers the viewport
        $(videoContainer).scrollLeft(($(videoSelector).width() - $(window).width()) / 2);
        $(videoContainer).scrollTop(($(videoSelector).height() - $(window).height()) / 2);
          
    };
  }

  if ($.fn.cover-videos.defaults == null) {
    $.fn.cover-videos.defaults = Defaults;
  }

  return cover-videos;
});