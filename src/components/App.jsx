import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currVideoIdx: -1,
    };
  }

  componentDidMount() {
    const options = {
      key: this.props.YOUTUBE_API_KEY,
      query: '',
      max: 5,
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currVideoIdx: 0,
      })
    );
  }

  onClick(index) {
    this.setState({
      currVideoIdx: index,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videos[this.state.currVideoIdx]} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClick={(index) => { this.onClick(index); }}/>
          </div>
        </div>
      </div >
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
