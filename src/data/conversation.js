import { happy } from './faces'

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
        emoji: '😀',
        followups: happy
      },
      {
        emoji: '😉',
        followups: ['A bit cheeky heh?',"You'll always speak your mind", "Let's start drawing something on this canvas"]
      },
      {
        emoji: '😎',
        followups: ['Too cool for school', "You really don't care what other people think.", "Let's get this show on the road!"]
      },
      {
        emoji: '🙃',
        followups: ['Sarcasm is the highest form of wit ;) ', "Alright, so you hope people can read between the lines.", "Let's get this show on the road!"]
      },
      {
        emoji: '🤪',
        followups: ["You're a wild one", "Disorder is not to be avoided.", "Let's get this show on the road!"]
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
    selection: null,
    options: [
      {
        emoji: '🏖',
        followups: ['Aha, a beach bum!', "Who wouldn't want to be by the seaside?!"]
      },
      {
        emoji: '🏡',
        followups: ['Home sweet home.', "Nothing like a cosy night in."]
      },
      {
        emoji: '⛰️',
        followups: ['A naturalist!', "No.. Not a naturist", "A natur...al...ist", "Great!"]
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
    options: [
      {
        emoji: '🥁',
        followups: ['Drop the beat!', "Ok, rhythm and structure are important", "Let's incoorporate that into our masterpiece"]
      },
      {
        emoji: '🎷',
        followups: ['A bit of sax',"Soulful!", "Ok, lets bring that in to the piece"]
      },
      {
        emoji: '🎸',
        followups: ['You rock out?', "Ok, I'm getting to know a bit more now", "Let's start making this feel a bit more 'you'"]
      },
      {
        emoji: '🎻',
        followups: ['Bring out the violins', "Sometimes sad, sometimes punchy.", "Let's see how we can make that work"]
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
    options: [
      {
        emoji: '🎩',
        followups: ['A top hat.', "Prim and proper.", "Alright, let's drop it in."]
      },
      {
        emoji: '🧢',
        followups: ['Casual as you like',"A classic baseball cap", "Alright, let's do it."]
      },
      {
        emoji: '🎓',
        followups: ['Education, education, education.', "Ok smarty pants.", "Let's make make this happen/"]
      },
      {
        emoji: '⛑',
        followups: ['A rescuer, A saviour. A hero', "Let's see how we can make that work"]
      },
       {
        emoji: '👑',
        followups: ['A born leader. ', "Let's get this in there"]
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