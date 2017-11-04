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
  audience: require('../assets/audience.jpg'),
  redux: require('../assets/redux.png'),
  store1: require('../assets/store/1.svg'),
  store2: require('../assets/store/2.svg'),
  store3: require('../assets/store/3.svg'),
  store4: require('../assets/store/4.svg'),
  store5: require('../assets/store/5.svg'),
  effects1: require('../assets/effects/1.svg'),
  effects2: require('../assets/effects/2.svg'),
  effects3: require('../assets/effects/3.svg'),
  effects4: require('../assets/effects/4.svg'),
  effects5: require('../assets/effects/5.svg'),
  effects6: require('../assets/effects/6.svg'),
  effects7: require('../assets/effects/7.svg'),
  effects8: require('../assets/effects/8.svg'),
  effects9: require('../assets/effects/9.svg'),
  effects10: require('../assets/effects/10.svg'),
  effects11: require('../assets/effects/11.svg'),
  flow1: require('../assets/flow/1.svg'),
  flow2: require('../assets/flow/2.svg'),
  flow3: require('../assets/flow/3.svg'),
  flow4: require('../assets/flow/4.svg'),
  immutable1: require('../assets/immutable/1.svg'),
  immutable2: require('../assets/immutable/2.svg'),
  immutable3: require('../assets/immutable/3.svg'),
  immutable4: require('../assets/immutable/4.svg'),
  immutable5: require('../assets/immutable/5.svg'),
  ngrxSetup1: require('../assets/ngrx/setup/1.svg'),
  ngrxSetup2: require('../assets/ngrx/setup/2.svg'),
  ngrxSetup3: require('../assets/ngrx/setup/3.svg'),
  ngrxSelectors1: require('../assets/ngrx/selectors/1.svg'),
  ngrxSelectors2: require('../assets/ngrx/selectors/2.svg'),
  ngrxSelectors3: require('../assets/ngrx/selectors/3.svg'),
  ngrxSelectors4: require('../assets/ngrx/selectors/4.svg'),
  ngrxReducers1: require('../assets/ngrx/reducers/1.svg'),
  ngrxReducers2: require('../assets/ngrx/reducers/2.svg'),
  ngrxReducers3: require('../assets/ngrx/reducers/3.svg'),
  ngrxReducers4: require('../assets/ngrx/reducers/4.svg'),
  ngrxEffects1: require('../assets/ngrx/effects/1.svg'),
  ngrxEffects2: require('../assets/ngrx/effects/2.svg'),
  ngrxEffects3: require('../assets/ngrx/effects/3.svg'),
  ngrxActions1: require('../assets/ngrx/actions/1.svg'),
  ngrxActions2: require('../assets/ngrx/actions/2.svg'),
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
            <ListItem>Explore Redux concepts</ListItem>
            <ListItem>Write our own Redux Store</ListItem>
            <ListItem>Implement NGRX in an Angular app</ListItem>
            <ListItem>Advanced topics, testing, debugging</ListItem>
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
            <ListItem>github.com/toddmotto/ac-store</ListItem>
            <ListItem>github.com/toddmotto/ac-ngrx-app</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Dev Tools Extension
          </Heading>
          <List textColor="secondary">
            <ListItem>Chrome/Firefox</ListItem>
            <ListItem>extension.remotedev.io</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Part I: Concepts
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            What is app state?
          </Heading>
          <List>
            <ListItem>Server response data</ListItem>
            <ListItem>User credentials</ListItem>
            <ListItem>User input (search/filtering)</ListItem>
            <ListItem>UI state (toggles/messages)</ListItem>
            <ListItem>Router / location state</ListItem>
            <ListItem>Much more...</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading fit caps textColor="white">
            We compose app state
          </Heading>
          <Heading fit caps textColor="white">
            in our Store
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading fit caps textColor="tertiary">
            State management libraries
          </Heading>
          <List>
            <ListItem>Model our app state</ListItem>
            <ListItem>Update state</ListItem>
            <ListItem>Read state values</ListItem>
            <ListItem>Monitor/observe changes to state</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgImage={images.redux} />

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
            <ListItem>One state tree inside Store</ListItem>
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

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Redux: Core Concepts
          </Heading>
          <List>
            <ListItem>Single state tree</ListItem>
            <ListItem>Actions</ListItem>
            <ListItem>Reducers</ListItem>
            <ListItem>Store</ListItem>
            <ListItem>One-way dataflow</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Single state tree
          </Heading>
          <List>
            <ListItem>Plain JavaScript Object</ListItem>
            <ListItem>Composed by reducers</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgImage={images.flow1} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Actions
          </Heading>
          <List>
            <ListItem>JavaScript Objects</ListItem>
            <ListItem>
              Two properties:
              <List margin="0 0 0 50px">
                <ListItem>
                  <Code>type</Code>: string, describes event
                </ListItem>
                <ListItem>
                  <Code>payload</Code>: optional data
                </ListItem>
              </List>
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
            <ListItem>Pure functions</ListItem>
            <ListItem>Given previous state</ListItem>
            <ListItem>
              Given dispatched Action
              <List margin="0 0 0 50px">
                <ListItem>
                  Responds to <Code>Action.type</Code>
                </ListItem>
                <ListItem>
                  Access to <Code>Action.payload</Code>
                </ListItem>
                <ListItem>Composes new state</ListItem>
              </List>
            </ListItem>
            <ListItem>Returns new state</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgImage={images.flow3} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Computes new state
          </Heading>
          <Heading margin="50px 0 0 0" fit caps textColor="secondary">
            state = reducer(state, action)
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgImage={images.flow4} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Store
          </Heading>
          <List>
            <ListItem>Store contains the state</ListItem>
            <ListItem>
              Components:
              <List margin="0 0 0 50px">
                <ListItem>Subscribe to the Store's state</ListItem>
                <ListItem>Dispatch actions to Store</ListItem>
              </List>
            </ListItem>
            <ListItem>Store calls reducers with state/action</ListItem>
            <ListItem>New state is composed</ListItem>
            <ListItem>Store is updated, notifies subscribers</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            One-way dataflow
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgImage={images.store1} />
        <Slide transition={['']} bgImage={images.store2} />
        <Slide transition={['']} bgImage={images.store3} />
        <Slide transition={['']} bgImage={images.store4} />
        <Slide transition={['']} bgImage={images.store5} />

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="white" caps>
            Let's talk immutable
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>
              An immutable object is an object whose state cannot be modified
              after creation.
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Why immutable?
          </Heading>
          <List>
            <ListItem>Predictability</ListItem>
            <ListItem>Explicit state changes</ListItem>
            <ListItem>Performance (Angular's Change Detection)</ListItem>
            <ListItem>Mutation Tracking</ListItem>
            <ListItem>Undo state changes</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Immutability in JavaScript
          </Heading>
          <List>
            <ListItem>Examples: Strings, Numbers</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Mutability in JavaScript
          </Heading>
          <List>
            <ListItem>Examples: Functions, Objects, Arrays</ListItem>
          </List>
        </Slide>

        <Slide transition={['']} bgImage={images.immutable1} />
        <Slide transition={['']} bgImage={images.immutable2} />
        <Slide transition={['']} bgImage={images.immutable3} />
        <Slide transition={['']} bgImage={images.immutable4} />
        <Slide transition={['']} bgImage={images.immutable5} />

        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Part II: Writing a Store
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Project:
          </Heading>
          <List textColor="secondary">
            <ListItem>github.com/toddmotto/ac-store</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Part III: NGRX
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading fit textColor="secondary" caps>
            Meet ngrx/store
          </Heading>
          <Heading margin="50px 0 0" fit textColor="tertiary" caps>
            Redux inspired reactive state management
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            ngrx/store
          </Heading>
          <List>
            <ListItem>Based on Redux</ListItem>
            <ListItem>Written with Observables</ListItem>
            <ListItem>Made for Angular</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            ngrx/store in Angular
          </Heading>
          <List>
            <ListItem>Single source of truth</ListItem>
            <ListItem>Testability</ListItem>
            <ListItem>
              Performance benefits
              <List margin="0 0 0 50px">
                <ListItem>ChangeDetectionStrategy.OnPush</ListItem>
                <ListItem>Immutable @Inputs</ListItem>
                <ListItem>Object reference checks are fast</ListItem>
              </List>
            </ListItem>
            <ListItem>
              Root and feature module support
              <List margin="0 0 0 50px">
                <ListItem>Eagerly loaded modules</ListItem>
                <ListItem>Lazily loaded modules</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            Project:
          </Heading>
          <List textColor="secondary">
            <ListItem>github.com/toddmotto/ac-ngrx-app</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            NGRX: Setup
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgImage={images.ngrxSetup1} />
        <Slide transition={['']} bgImage={images.ngrxSetup2} />
        <Slide transition={['']} bgImage={images.ngrxSetup3} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            NGRX: Actions
          </Heading>
        </Slide>

        <Slide transition={['']} bgImage={images.ngrxActions1} />
        <Slide transition={['']} bgImage={images.ngrxActions2} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            NGRX: Selectors
          </Heading>
        </Slide>

        <Slide transition={['']} bgImage={images.ngrxSelectors1} />
        <Slide transition={['']} bgImage={images.ngrxSelectors2} />
        <Slide transition={['']} bgImage={images.ngrxSelectors3} />
        <Slide transition={['']} bgImage={images.ngrxSelectors4} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            NGRX: Reducers
          </Heading>
        </Slide>

        <Slide transition={['']} bgImage={images.ngrxReducers1} />
        <Slide transition={['']} bgImage={images.ngrxReducers2} />
        <Slide transition={['']} bgImage={images.ngrxReducers3} />
        <Slide transition={['']} bgImage={images.ngrxReducers4} />

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading fit textColor="secondary" caps>
            Meet ngrx/effects
          </Heading>
          <Heading margin="50px 0 0" fit textColor="tertiary" caps>
            Side effects for ngrx/store
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            ngrx/effects
          </Heading>
          <List>
            <ListItem>Listen for @ngrx/store actions</ListItem>
            <ListItem>Isolate side effects from components</ListItem>
            <ListItem>Communicate outside of Angular</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgImage={images.effects1} />
        <Slide transition={['']} bgImage={images.effects2} />
        <Slide transition={['']} bgImage={images.effects3} />
        <Slide transition={['']} bgImage={images.effects4} />
        <Slide transition={['']} bgImage={images.effects5} />
        <Slide transition={['']} bgImage={images.effects6} />
        <Slide transition={['']} bgImage={images.effects7} />
        <Slide transition={['']} bgImage={images.effects8} />
        <Slide transition={['']} bgImage={images.effects9} />
        <Slide transition={['']} bgImage={images.effects10} />
        <Slide transition={['']} bgImage={images.effects11} />

        <Slide transition={['fade']}>
          <Heading size={4} caps textColor="tertiary">
            API
          </Heading>
          <List>
            <ListItem>@Effect()</ListItem>
            <ListItem>Actions Observable</ListItem>
          </List>
        </Slide>

        <Slide transition={['']} bgImage={images.ngrxEffects1} />
        <Slide transition={['']} bgImage={images.ngrxEffects2} />
        <Slide transition={['']} bgImage={images.ngrxEffects3} />
      </Deck>
    );
  }
}
