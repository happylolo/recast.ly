import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currVideoIdx: -1,
    };
  }

  componentDidMount() {
    // default query
    this.search('Ray Chen');
  }

  onClick(index) {
    this.setState({
      currVideoIdx: index,
    });
  }

  search(query) {
    const options = {
      key: this.props.YOUTUBE_API_KEY,
      query: query,
      max: 5,
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currVideoIdx: 0,
      })
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={ this.search.bind(this) } />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videos[this.state.currVideoIdx]} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videos}
              onClick={(index) => { this.onClick(index); }} />
          </div>
        </div>
      </div >
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
