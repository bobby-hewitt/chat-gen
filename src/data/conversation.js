import { happy, cheeky, cool, sarcastic, crazy } from './faces'
import { beach, mountain, home} from './places'
import { violin, sax, guitar, drum} from './instruments'
import { baseball, graduation, tophat, fireman, crown } from './hats'

const data = [
  // {
  //   type: 'statement',
  //   text: 'Hey there',
  //   time: 100
  // },
  // {
  //   type: 'statement',
  //   text: "We're going to make something special",
  //   time: 1000
  // },
  // {
  //   type: 'statement',
  //   text: "Let's get started",
  //   time: 500
  // },
  {
    type: 'statement',
    text: "How would you best describe yourself with these emojis?",
    time: 1000
  },
  {
    type: 'response',
    selection: null,
    responseType:'emoji',
    options: [
      {
      	type: 'emoji',
        emoji: '😀',
        followups: happy
      },
      {
      	type: 'emoji',
        emoji: '😉',
        followups: cheeky
      },
      {
      	type: 'emoji',
        emoji: '😎',
        followups: cool
      },
      {
      	type: 'emoji',
        emoji: '🙃',
        followups: sarcastic
      },
      {
      	type: 'emoji',
        emoji: '🤪',
        followups: crazy
      },
      
    ]
  },
 
  {
    type: 'statement',
    text: "If you could be anywhere right now where would you be?",
    time: 1000
  },
  {
    type: 'response',
    responseType: 'emoji',
    selection: null,
    options: [
      {
      	type: 'emoji',
        emoji: '🏖',
        followups: beach
      },
      {
      	type: 'emoji',
        emoji: '🏡',
        followups: home
      },
      {
      	type: 'emoji',
        emoji: '⛰️',
        followups: mountain
      }
    ]
  },
  {
    type: 'statement',
    text: "Ok enough of the top level stuff, let's get into the detail.",
    time: 1200
  },
  {
    type: 'statement',
    text: "Which of these instruments best represent you?",
    time: 800
  },
  {
    type: 'response',
    selection: null,
    responseType:'emoji',
    options: [
      {
      	type: 'emoji',
        emoji: '🥁',
        followups: drum
      },
      {
      	type: 'emoji',
        emoji: '🎷',
        followups: sax
      },
      {
      	type: 'emoji',
        emoji: '🎸',
        followups: guitar
      },
      {
      	type: 'emoji',
        emoji: '🎻',
        followups: violin
      }
    ]
  },
  {
    type: 'statement',
    text: "Ok, I think we're getting somewhere.  Let's move on",
    time: 1200
  },
  {
    type: 'statement',
    text: "Tricky one coming up",
    time: 600
  },
  {
    type: 'statement',
    text: "Which kind of hat best represents you?",
    time: 900
  },
  {
    type: 'response',
    selection: null,
    responseType:'emoji',
    options: [
      {
      	type: 'emoji',
        emoji: '🎩',
        followups: tophat
      },
      {
      	type: 'emoji',
        emoji: '🧢',
        followups: baseball
      },
      {
      	type: 'emoji',
        emoji: '🎓',
        followups: graduation
      },
      {
      	type: 'emoji',
        emoji: '⛑',
        followups: fireman
      },
       {
       	type: 'emoji',
        emoji: '👑',
        followups: crown
      }
    ]
  },
  {
    type: 'statement',
    text: "What is your spirit animal?",
    time: 900
  },
    {
    type: 'response',
    selection: null,
    responseType:'emoji',
    options: [
      {
        emoji: '🦋',
        followups: ['A caterpillar turns into a butterfly', "Everything has a knock on effect"]
      },
      {
        emoji: '🦊',
        followups: ['Aha, a wiley Fox', "Alright, let's do it."]
      },
      {
        emoji: '🦁',
        followups: ['You take pride in your family', "Not to be messed with", ""]
      },
     
       {
        emoji: '🐬 ',
        followups: ['A born leader. ', "Let's get this in there"]
      }
    ]
  },
]

export default data