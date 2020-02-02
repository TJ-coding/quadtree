import React from 'react';

function getLocation(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

const get = '/get_image?ImgName='

class Image extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      api: getLocation(props.url).hostname,
      base: getLocation(props.url).pathname.split('.')[0],
      filename: props.url.split('/').pop().split('.').slice(0, -1).join('.'),
      cnt: 1,
      max: 0
    };
    // console.log(this.state.api + get + this.state.base);
    fetch('http://' + this.state.api + get + this.state.base)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({max: myJson.num_of_files}, this.handleImageLoaded);
    });
  }

  handleImageLoaded() {
    if (this.state.max !== 0){
      if (this.state.cnt < this.state.max) {
        this.setState((state, props) => ({
          cnt: state.cnt + 1
        }));
      }
    }
  }

  render() {
    const url = 'http://' + this.state.api + this.state.base + '/' + this.state.filename + this.state.cnt + '.png';
    return <img src={url}
                alt='smth'
                onLoad={this.handleImageLoaded.bind(this)}/>;
  }
}

export default Image;
