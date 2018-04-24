export default [
  {
    question:
      "You come across a sea otter and an electric eel locked in battle. Do you:",
    options: {
      Watch: {
        intelligence: -3,
        fear: -3
      },
      Run: {
        fear: 5
      },
      Hide: {
        intelligence: 3,
        fear: 1
      },
      "Try to break it up": {
        fear: -7,
        toughness: 5
      }
    }
  },
  {
    question: "When the creatures of the sea notice your presence, they:",
    options: {
      "Hide in fear": {
        cruelty: 5
      },
      "Laugh at you": {
        toughness: -3
      },
      "Get excited to party": {
        fun: 5
      },
      "Greet you politely": {
        honor: 5
      }
    }
  },
  {
    question:
      "If you held Clamscalabir and the sea lay at your feet, you would be:",
    options: {
      "A benevolent and responsible ruler": {
        honor: 5
      },
      "Patronizing the arts": {
        intelligence: 5,
        beauty: 5
      },
      "Hurting people, because lols": {
        cruelty: 5
      },
      "Doing whatever the F you want": {
        fun: 5,
        fear: -3
      }
    }
  },
  {
    question:
      "You discover an underwater castle, apparently uninhabited. Do you:",
    options: {
      "Explore it! Maybe there's a library!": {
        intelligence: 5,
        curiosity: 5
      },
      "Starting wrecking stuff": {
        fun: 5,
        cruelty: 3
      },
      "Try figure out what happened to the inhabitants": {
        honor: 5
      },
      "What would you do with an empty castle? Leave": {
        fun: -3
      }
    }
  },
  {
    question: "You find an injured starfish on the ocean floor. Do you:",
    options: {
      "Interrogate it. Starfish are known to harbor magical secrets": {
        magic: 5,
        cruelty: 3
      },
      "Help it! Star fish are beautiful creatures!": {
        honor: 5,
        beauty: 5,
        cruelty: -5
      },
      "Make fun of it. It's basically just a sponge.": {
        fun: 3,
        cruelty: 3
      },
      "Turn around and go-- whatever hurt it could still be around": {
        fear: 5
      }
    }
  },
  {
    question: "You are given a choice of magical artifacts. You choose:",
    options: {
      "The Shield of Umbonium, ultimate defense": {
        toughness: 5
      },
      "The Book of Dynoflagetllates, hider of secrets": {
        magic: 5,
        curiosity: 5
      },
      "The Spear of Cegrotoxins, killer of sealife": {
        decisiveness: 5,
        cruelty: 5
      },
      "The Comb from The Little Mermaid, unstoppable beautifier": {
        beauty: 5
      }
    }
  },
  {
    question:
      "If you could have lunch with any clam, living or dead, it would be:",
    options: {
      "King Clamathur, legendary leader.": {
        fun: -5,
        honor: 5
      },
      "Ming, the world's oldest Quahog": {
        magic: 5,
        curiosity: 5,
        weirdness: 10
      },
      "Clambert Clamstein, world altering genius": {
        intelligence: 4
      },
      "Jean-Claude Van Clamme, cinema hero": {
        toughness: 5
      }
    }
  },
  {
    question: "Your worst enemy is:",
    options: {
      "Ignorance. Creatures of the sea should be peaceful": {
        curiosity: 5,
        weirdness: 10
      },
      "Sea Otters-- They're cruel!": {
        fun: 3,
        decisiveness: 5,
        honor: 5
      },
      "Time. I can defeat all other enemies.": {
        toughness: 6
      },
      "Clams. I just want to be left alone.": {
        fun: -5
      }
    }
  },
  {
    question: "To you, true beauty is:",
    options: {
      "In the mirror": {
        beauty: 15
      },
      "The cosmic order": {
        magic: 20
      },
      "Self sufficiency": {
        toughness: 6
      },
      "Being kind": {
        fun: -20,
        honor: 10
      }
    }
  },
  {
    question: "The hardest thing to do is",
    options: {
      "Decide what to have for lunch": {
        decisiveness: -5,
        weirdness: -10
      },
      "Not get eaten by sea creatures": {
        fear: 6
      },
      "Deal with other clams": {
        intelligence: 10
      },
      "Pretend to care": {
        cruelty: 10
      }
    }
  },
  {
    question: "Your ideal weekend off looks like",
    options: {
      "Catching up on stuff, it's overwhelming": {
        fear: 5,
        decisiveness: -5
      },
      "Giving back": {
        honor: 6
      },
      "Progress: Nothing to stop me from achieving my goals": {
        decisiveness: 10
      },
      "Chilling out!": {
        cruelty: 10
      }
    }
  },
  {
    question: "Your ideal partner...",
    options: {
      "Could be anyone. I just want to know someone intimately": {
        curiosity: 6,
        beauty: -5
      },
      "Doesn't exist. Born alone die alone, that's clam life": {
        stubbornness: 5,
        toughness: 5
      },
      "Is next to me, all the time": {
        honor: 6
      },
      "Is out there and is perfect": {
        fear: -5,
        decisiveness: -5
      }
    }
  },
  {
    question: "One thing you wish you were better at is:",
    options: {
      "Fighting!": {
        toughness: 6
      },
      "Deceiving clams into giving me things I don't deserve": {
        honor: -5
      },
      "Being funny! I wish I could connect with people": {
        curiosity: -5,
        weirdness: 5
      },
      "Nothing, I'm great the way I am": {
        stubbornness: 6,
        decisiveness: 4
      }
    }
  },
  {
    question: "In a pinch, you're great at",
    options: {
      Dissapearing: {
        fear: 6,
        decisiveness: 4
      },
      "Jumping in the middle of it": {
        toughness: 5,
        honor: 5
      },
      "Figuring out what's really going on": {
        curiosity: 5
      },
      "Getting what's mine": {
        honor: -6
      }
    }
  },
  {
    question: "Your dream home is",
    options: {
      "A sandy labyrinth": {
        fear: 5,
        curiosity: 10
      },
      "A gorgeous coral": {
        toughness: -5,
        beauty: 5,
        honor: -5
      },
      "Being always on the go": {
        decisiveness: -6,
        weirdness: 6
      },
      "A defensible reef": {
        fear: 5,
        beauty: -5
      }
    }
  },
  {
    question: "When you dig your foot in:",
    options: {
      "Somehow I end up doing what I said I wouldn't do": {
        stubbornness: -5,
        toughness: -5,
        curiosity: 5
      },
      "It gets stuck in the sand": {
        decisiveness: -6,
        honor: -5,
        weirdness: 6
      },
      "Noclam can move me": {
        stubbornness: 10,
        honor: -5
      },
      "Clams do what I want": {
        decisiveness: 5,
        toughness: 5
      }
    }
  },
  {
    question: "Your favorite food is:",
    options: {
      "Plant protozoans": {
        curiosity: 5
      },
      "Dead sea animals": {
        cruelty: 5,
        beauty: -5
      },
      "Tiny pieces of seaweed": {
        weirdness: 5
      },
      "Petroleum distillates": {
        stubbornness: 5
      }
    }
  },
  {
    question: "Life is like a game of",
    options: {
      Life: {
        fun: 5,
        magic: -20
      },
      Battleclams: {
        fun: 5,
        magic: 5
      },
      Checkers: {
        fun: -5,
        intelligence: -5,
        stubbornness: 10
      },
      Chess: {
        fun: -1,
        intelligence: 6,
        curiosity: -5
      }
    }
  },
  {
    question: "In the end, it all comes down to",
    options: {
      "Who you are": {
        decisiveness: 5,
        magic: 5,
        honor: 5
      },
      "What you own": {
        intelligence: 6,
        honor: -5
      },
      "What you're capable of": {
        toughness: 5
      },
      "Who you know": {
        fun: 10,
        cruelty: 5
      }
    }
  }
];
