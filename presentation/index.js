// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  logo: require('../assets/logo.svg'),
  audience: require('../assets/audience.jpg'),
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#545e6f',
    tertiary: '#8b18a3',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="tertiary">
          <Image width="35%" src={images.logo} />
          <Heading
            margin="50px 0 0"
            size={1}
            fit
            caps
            lineHeight={1}
            textColor="white"
          >
            NGRX: the workshop
          </Heading>
          <Text margin="10px 0 0" textColor="white" size={1}>
            @ngrx/store and @ngrx/effects
          </Text>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Wifi Details
          </Heading>
          <List textColor="secondary">
            <ListItem>Name: AngularConnect2017</ListItem>
            <ListItem>Password: 1234</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} caps textColor="tertiary">
            About
          </Heading>
          <List textColor="secondary">
            <ListItem>4/5+ years experience with Angular</ListItem>
            <ListItem>Blogger: toddmotto.com</ListItem>
            <ListItem>Trainer: ultimateangular.com</ListItem>
            <ListItem>In progress: liquify.io</ListItem>
            <ListItem>GDE for Angular/Web Technologies</ListItem>
            <ListItem>Conference and workshop training</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} caps textColor="tertiary">
            Today's plan
          </Heading>
          <List textColor="secondary">
            <ListItem>State management concepts</ListItem>
            <ListItem>Small application to apply concepts</ListItem>
            <ListItem>Move onto advanced app and examples</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} caps textColor="tertiary">
            Teaching style
          </Heading>
          <List textColor="secondary">
            <ListItem>Make you think</ListItem>
            <ListItem>Challenge you</ListItem>
            <ListItem>Facilitate you coming up with answers</ListItem>
            <ListItem>Not giving you all the answers</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>
              Show me and I will forget. Teach me I will remember. Involve me
              and I will understand.
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} caps textColor="tertiary">
            What will we learn?
          </Heading>
          <List textColor="secondary">
            <ListItem>Redux philosophy / single state tree</ListItem>
            <ListItem>What, why, how with Stores</ListItem>
            <ListItem>One-way dataflow and architecture</ListItem>
            <ListItem>Immutability and performance</ListItem>
            <ListItem>Actions, Reducers, Observables</ListItem>
            <ListItem>Side effects management</ListItem>
            <ListItem>Testing and debugging</ListItem>
            <ListItem>Some advanced topics</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgImage={images.audience} bgDarken={0.5}>
          <Heading textColor="primary" caps fit>
            Audience introduction
          </Heading>
        </Slide>

        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} caps textColor="tertiary">
            Project setup
          </Heading>
          <List textColor="secondary">
            <ListItem>Visit: </ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']}>
          <Heading size={4} caps textColor="tertiary">
            What is state management?
          </Heading>
          <List textColor="secondary">
            <ListItem>Visit: </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
