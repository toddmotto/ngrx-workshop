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
  CodePane,
  Code,
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
  store1: require('../assets/store/1.svg'),
  store2: require('../assets/store/2.svg'),
  store3: require('../assets/store/3.svg'),
  store4: require('../assets/store/4.svg'),
  store5: require('../assets/store/5.svg'),
  flow1: require('../assets/flow/1.svg'),
  flow2: require('../assets/flow/2.svg'),
  flow3: require('../assets/flow/3.svg'),
  flow4: require('../assets/flow/4.svg'),
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
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
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
            ngrx/store and ngrx/effects
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

        <Slide transition={['fade']}>
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

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Today's plan
          </Heading>
          <List textColor="secondary">
            <ListItem>State management concepts</ListItem>
            <ListItem>Small application to apply concepts</ListItem>
            <ListItem>Move onto advanced app and examples</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
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

        <Slide transition={['fade']}>
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

        <Slide transition={['fade']} bgImage={images.audience} bgDarken={0.5}>
          <Heading textColor="primary" caps fit>
            Audience introduction
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Project setup
          </Heading>
          <List textColor="secondary">
            <ListItem>Visit: </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Part I: Concepts
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            What is state?
          </Heading>
          <List>
            <ListItem>What's happening</ListItem>
            <ListItem>e.g. value of an input</ListItem>
            <ListItem>e.g. a list of items</ListItem>
            <ListItem>e.g. an open navbar</ListItem>
            <ListItem>e.g. variables, classes, data structures</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading fit caps textColor="tertiary">
            State management libraries
          </Heading>
          <List>
            <ListItem>Model our app state</ListItem>
            <ListItem>Update state</ListItem>
            <ListItem>Derive computed values from state</ListItem>
            <ListItem>Monitor/observe changes to state</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={2} caps textColor="tertiary">
            Redux
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Redux: Core Concepts
          </Heading>
          <List>
            <ListItem>Single state tree</ListItem>
            <ListItem>Actions</ListItem>
            <ListItem>Reducers</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Single state tree
          </Heading>
          <List>
            <ListItem>Plain JavaScript Object</ListItem>
            <ListItem>Composed by a root reducer</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgImage={images.flow1} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Actions
          </Heading>
          <List>
            <ListItem>JavaScript Object</ListItem>
            <ListItem>Describes an event</ListItem>
            <ListItem>
              Two properties: <Code>type</Code> and <Code>payload</Code>
            </ListItem>
            <ListItem>Dispatch Actions to Reducers</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgImage={images.flow2} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Reducers
          </Heading>
          <List>
            <ListItem>Pure function</ListItem>
            <ListItem>Given previous state</ListItem>
            <ListItem>Given dispatched Action</ListItem>
            <ListItem>
              Responds to <Code>action.type</Code>
            </ListItem>
            <ListItem>Returns new state</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgImage={images.flow3} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Computes new state
          </Heading>
          <List>
            <ListItem>Reducer returns new state</ListItem>
            <ListItem>Updates the state tree</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgImage={images.flow4} />

        <Slide transition={['slide']} bgImage={images.store1} />
        <Slide transition={['']} bgImage={images.store2} />
        <Slide transition={['']} bgImage={images.store3} />
        <Slide transition={['']} bgImage={images.store4} />
        <Slide transition={['']} bgImage={images.store5} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Redux: Three Principles
          </Heading>
          <List>
            <ListItem>1. Single source of truth</ListItem>
            <ListItem>2. State is read-only</ListItem>
            <ListItem>3. Pure functions update state</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            1. Single source of truth
          </Heading>
          <List>
            <ListItem>State inside a Store</ListItem>
            <ListItem>Predictability, maintainability</ListItem>
            <ListItem>Universal apps (SSR)</ListItem>
            <ListItem>Testing and debugging</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            2. State is read-only
          </Heading>
          <List>
            <ListItem>Derive specific props from state</ListItem>
            <ListItem>Dispatch actions to change the state</ListItem>
            <ListItem>Immutable update patterns</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading fit caps textColor="tertiary">
            3. Pure functions update state
          </Heading>
          <List>
            <ListItem>Pure functions (reducers)</ListItem>
            <ListItem>Reducers look for action types</ListItem>
            <ListItem>Return new state</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Meet ngrx/store
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            ngrx/store
          </Heading>
          <List>
            <ListItem>Observables</ListItem>
            <ListItem>Based on Redux</ListItem>
            <ListItem>Selectors</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
