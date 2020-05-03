import React, { Component } from 'react'

export class MovieCard extends Component {
    // Refs need to be created in the constructor
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        // Create a ref and store it in the `imageRef` prop
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // Use ref to access the DOM element
        this.imageRef.current.addEventListener('load', this.setSpans)

    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 8);
        // This is equivalent to {spans: spans}
        this.setState({spans});
    };

    render () {
        // Destructure the movie object to extract the properties we care about
        // const {  Poster } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}} >
                {/* Assign  ref to jsx element */}
                <div>
                     <img ref={this.imageRef}src={`${this.props.image}`} />
                     <label>{this.props.title}</label>
                     
                </div>
               
            </div>
        )
    }
}

export default MovieCard
