import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {/* from exampleVideoData, we can see the structure of each video */
      // JS Array.prototype.map() parameters: currentValue, index(optional)
      // call parent component App's onClick method through props and pass idx to App
      props.videos.map((video, idx) =>
        <VideoListEntry video={video} onClick={() => { props.onClick(idx); }} />)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
