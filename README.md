# Drum Machine

This is a simple drum machine built with React.

## Description

The drum machine plays different sounds based on the keys pressed on the keyboard. The keys and their corresponding sounds are defined in the `audioClips` array. The sounds are played using the HTML5 audio API.

## Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the application with `npm start`

## Usage

Once the application is running, you can press the keys defined in the `audioClips` array to play the corresponding sound. The keys are: Q, W, E, A, S, D, Z, X, C.

## Components

- `App`: This is the main component of the application. It handles the key press events and updates the display with the id of the sound being played.
- `Pad`: This component represents a single drum pad. It receives the id, letter, and source of the sound as props.

## Dependencies

- React
- useState, useEffect from React for state management and side effects
- Pad component for the drum pads
- CSS for styling

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)