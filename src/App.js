const Pet = ({name, animal, breed}) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed)
    ]);
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Adpot Me!'),
        React.createElement(Pet, {
            name: 'Flynn',
            animal: 'Dog',
            breed: 'Boston Terrier'
        }),
        React.createElement(Pet, {
            name: 'Mewmew',
            animal: 'Cat',
            breed: 'Mixed'
        }),
        React.createElement(Pet, {
            name: 'Pepper',
            animal: 'Bird',
            breed: 'Cockatiel'
        })
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);