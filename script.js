var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'https://cdn.pixabay.com/photo/2016/09/02/22/59/harry-potter-1640525_1280.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        image: 'https://media.gettyimages.com/photos/the-lion-guard-return-of-the-roar-the-epic-storytelling-of-disneys-picture-id494748808'
    },
    {
        id: 3,
        title: 'Vaiana',
        desc: 'Film o odważnej Vaianie',
        image: 'https://cdn191.picsart.com/232226728000202.jpg?r1024x1024'
    },
    {
        id: 4,
        title: 'Bolek i Lolek',
        desc: 'Wesołe przygody dwóch braci',
        image: 'https://i-h2.pinimg.com/564x/de/0d/fb/de0dfbad9aa0a48efead0420cbacf127.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id},
            React.createElement(MovieTitle, {title: this.props.movie.title}), 
            React.createElement(MovieDescription, {desc: this.props.movie.desc}),
            React.createElement(MovieImage, {image: this.props.movie.image}))
        );
        
    }

});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('h2', {}, this.props.tittle)
        );
    },
    
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        );
    },
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },

    render: function(){
        return (
            React.createElement('img', {src:this.props.image, style: {width:"200px", height:"auto"}})
        );
    },
});
    
var MoviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {key: movie.id, movie:movie}
     );
});

var MoviesList =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, MoviesElements)
);



ReactDOM.render(MoviesList, document.getElementById('app'));