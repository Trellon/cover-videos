# videocover
Simulates background-cover behavior for videos. Useful for placing a video element in a div tag and having the video expand to the height and width of the div.

# Usage

    // for this markup
    <div class="video-container">
      <video class="video-background" autoplay="" loop="" muted="">
        <source src="/videos/front.mp4" type="video/mp4">
      </video>
    </div>

    // set some selectors
    var videoContainer = '.video-container',
    videoSelector = '.video-background',
    videoRegionSelector = '.some-other-container';
    
    // initiate
    videocover(videoContainer, videoSelector, videoRegionSelector, 600, 1920, 984);
    
    // attach to a resize event
    $(window).resize(function () { 
      videocover(videoContainer, videoSelector, videoRegionSelector, 600, 1920, 984); 
    });
    
    // add a trigger
    $(window).trigger('resize');

# Variables

<table>
  <tr>
    <th>Variable</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>videoContainer</td>
    <td>Selector for the element containing the video.</td>
  </tr>
  <tr>
    <td>videoSelector</td>
    <td>Selector for the video itself.</td>
  </tr>
  <tr>
    <td>videoRegionSelector</td>
    <td>Selector for another element. Useful when the background of the video needs to match the size of another containing element.</td>
  </tr>
  <tr>
    <td>vid_min_w</td>
    <td>Minimum width for the video element.</td>
  </tr>
  <tr>
    <td>vid_w_orig</td>
    <td>Original width for the video element.</td>
  </tr>
  <tr>
    <td>vid_h_orig</td>
    <td>Original height for the video element.</td>
  </tr>
</table>



