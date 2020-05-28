export const bluecards = [
  {
    id: 'blue-1',
    color: 'blue',
    title: 'Structure',
    subTitle: 'Quality Aspects',
    description:
      'Reliability Aspect: The architecture, technologies used, different programming languages and duplicated code.',
    exampleOne:
      'Software usually has different layers. Which layer are you testing?',
    exampleTwo: 'Is the code modular or does it resemble one big monolith?',
    exampleThree:
      'Take a look of all the tools, frameworks and languages that make up your project. Are they designed to work together?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [
          {
          task1: '',
          task2: '',
          task3: '',
          }
        ],
      },
    ],
  },
  {
    id: 'blue-2',
    color: 'blue',
    title: 'Functionality',
    subTitle: 'Quality Aspects',
    description:
      'Functionality Aspect: The user needs to be able to do X, so we test it. What could go wrong?',
    exampleOne:
      'Business scenarios are typical ways your app will get used. Identifying those can cover a lot of high profile functionality.',
    exampleTwo:
      'Business people are good at describing high-level functionalities. But did they think of less obvious, hidden or negative functionalities?',
    exampleThree:
      'Most of our testing centres around "can we do this?" or "can\'t we do that?". How far should we go in automating these things?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-3',
    color: 'blue',
    title: 'Data',
    subTitle: 'Quality Aspects',
    description:
      'Functionality Aspect: Data moves in, through and from your app. It can get stuck, lost, scrambled and duplicated.',
    exampleOne:
      'Input, notation, visualization and the storing of data concepts, such as dates and money values, can become confusing, especially in international contexts.',
    exampleTwo:
      'Data flows can get convoluted. Is there a way to put data in limbo? An aborted transaction might do the trick.',
    exampleThree:
      "Input of data is usually incredibly important and often equally fragile. There's tons of rubbish we can try to input into our systems, but how does it handle it?",
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-4',
    color: 'blue',
    title: 'Testability',
    subTitle: 'Quality Aspects',
    description:
      'Maintainability Aspect: Everything and anything that impacts how easy or hard your testing efforts are.',
    exampleOne:
      "Cheat codes are often ways to test a game more easily. If you want to test being all powerful, just enter '↑, ↑, ↓, ↓, ←, →, ←, →, B, A, start, select'. Don’t forget it’s a shortcut!",
    exampleTwo:
      'Do you have enough environments to test on? What do you use them for? Is this clear for every team member?',
    exampleThree:
      'Can you manipulate system time to test functionality that only comes into play at certain dates?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-5',
    color: 'blue',
    title: 'Operations',
    subTitle: 'Quality Aspects',
    description:
      'Maintainability Aspect: How easy or hard is it to rectify a problem in production after the product is released?',
    exampleOne:
      'Is there documentation about the application, so that a different team can handle maintenance of the product? ',
    exampleTwo:
      'Your production release went wrong. How fast and efficient can you rollback?',
    exampleThree:
      'Is the code easy to read and easy to find your way through? You might test this by asking for a change in old code by a new team member.',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-6',
    color: 'blue',
    title: 'Security and Permission',
    subTitle: 'Quality Aspects',
    description:
      'Reliability Aspect: Watch Dogs, cameras, user credentials, firearms or alarm systems. What’s keeping the bad guys out of, and away from your app?',
    exampleOne:
      'What permissions does your mobile app ask for after installation? Are these justified, or did the developer just import the whole permission library?',
    exampleTwo:
      'Some evil people used backdoor functionality by adding /admin to the URL. They gain a lot of  power to do some real damage to the application or infrastructure.',
    exampleThree:
      'Hacking is hard to guard your product from. Keep that virus scan, third party and open source code up-to-date!',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-7',
    color: 'blue',
    title: 'Adaptability',
    subTitle: 'Quality Aspects',
    description:
      'Portability Aspect: Does your product support multiple browsers, operating systems, mobile phones and tablets?',
    exampleOne:
      'There’s a billion different windows machines. They all have a different hardware setup. It’s remarkable old and new programs can work on them.',
    exampleTwo:
      'When building web apps programmers typically dislike testing with Internet Explorer. Which is why you should. Oh, the surprises you get. ',
    exampleThree:
      'Smartphone configurations are always in constant flux. OS versions, screen sizes, shapes, resolutions... Can your app  adapt?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-8',
    color: 'blue',
    title: 'Stability',
    subTitle: 'Quality Aspects',
    description:
      'Reliability Aspect: Is your product going down every 15 minutes? What could be the root cause?',
    exampleOne:
      'Every few builds, some of your Unit tests (checks) fail, hindering further progress. ',
    exampleTwo:
      'Random crashes are pestering your program, causing you to lose progress or even data. ',
    exampleThree:
      'Is the performance of your hardware stable? The Iphone 6’s antenna dropped signal when you held your phone a certain way.',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-9',
    color: 'blue',
    title: 'Internationalization',
    subTitle: 'Quality Aspects',
    description:
      'Usability Aspect: Currency, time zone, language, right-to-left...  Can you use your application anywhere in the world? ',
    exampleOne:
      'What languages does your application support? Does it keep specific differences into account, such as right-to-left reading in e.g. Arabic?',
    exampleTwo:
      'Currency. Is it visualized correctly? How are conversions done? By a fixed conversion pattern or a dynamic service? What happens when this service is unreachable? ',
    exampleThree:
      "Laws, permissions, network security differ from country to country. If you want your product to be used in China, you'll most likely need to adjust a few things...",
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-10',
    color: 'blue',
    title: 'Accessibility',
    subTitle: 'Quality Aspects',
    description:
      'Usability Aspect: Testing for the elderly, the impaired, the drunk and the very young.',
    exampleOne:
      "There's a guy who believes your application should be so intuitive a drunk user is able to find his way. He'll gladly test your app under influence.",
    exampleTwo:
      'The coffee test: mobile phone in one hand, a coffee in the other. Is your app still easy to use with one hand?',
    exampleThree:
      ' Humans are diverse. The blind person. The arthritic. The novice. How do you know your software is accessible to them?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-11',
    color: 'blue',
    title: 'Clarity',
    subTitle: 'Quality Aspects',
    description:
      'Usability Aspect: Every function, icon,  name or term is ideally immediately clear to the user.',
    exampleOne:
      'Take a good look at the first screen you see when you log in. How easy is it for a novice user to find their way around? ',
    exampleTwo:
      'Colours in your app are important. Do they radiate a calming, relaxing design, or are they reminiscent of an epilepsy test?',
    exampleThree:
      'Naming things is often really hard. Are all the buttons named consistently? Are the icons clear and unambiguous?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-12',
    color: 'blue',
    title: 'Complexity',
    subTitle: 'Quality Aspects',
    description:
      "Efficiency Aspect: Complexity is  dependent on the context of the project. What's making your app difficult to build?",
    exampleOne:
      'Software in cars can become pretty complex because they depend  on many different subsystems and hardware. ',
    exampleTwo:
      'Stock Market trading  software is complex because the underlying calculations are a beast. ',
    exampleThree:
      'The software that beats even the most battle-hardened chess masters uses a basic kind of artificial intelligence to predict human chess behaviour. How would you test this?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-13',
    color: 'blue',
    title: 'Confidentiality',
    subTitle: 'Quality Aspects',
    description:
      'Functionality Aspect: Whether the right users get access to the right things and nothing more. ',
    exampleOne:
      'Who gets permission to change user permissions? In other words, Who watches the watchers?',
    exampleTwo:
      'If you work with contractors or consultants, how are your data and ideas protected? Do you have Non-disclosure agreements? ',
    exampleThree:
      'When working in banking or medicine you cannot just copy production data for testing purposes. US regulations, for instance, uses HIPAA or FERPA.',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-14',
    color: 'blue',
    title: 'Resource Management',
    subTitle: 'Quality Aspects',
    description:
      'Efficiency Aspect: How does your app handle resources? ? Can they  be reduced?',
    exampleOne:
      'How much data is stored in cache and does it really help your app? Or does it only slow you down?',
    exampleTwo:
      'How much storage does your application need? Some smartphones have a limited capacity for storage.',
    exampleThree: 'Can you eliminate unnecessary features?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-15',
    color: 'blue',
    title: 'Installability',
    subTitle: 'Quality Aspects',
    description:
      'Portability Aspect: All the factors that matter during the installation process of your app.',
    exampleOne:
      "Does your app have dark patterns by  which it tricks   users into providing information they don't want to share or are  mislead into subscribing to or downloading something they didn’t want?",
    exampleTwo:
      'How long does it take to install your app and is it a reasonable amount of time?',
    exampleThree:
      'Does the app have custom installation options which are easy to understand? What consequences do they have?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-16',
    color: 'blue',
    title: 'Changeability',
    subTitle: 'Quality Aspects',
    description:
      'Maintainability Aspect: Updates, patches, data update, fault finding,... all these and more when your app is in production.',
    exampleOne:
      "You've released your game and it gets hacked or exploited. How much time does it take between detection and fix? ",
    exampleTwo:
      'Is updating or patching  your application intrusive? Does it require restarting or a complete reinstall? ',
    exampleThree:
      "Is there an option to trigger updates manually by the user? How do you handle users who don’t want to or won't update? What if others want to roll back?",
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-17',
    color: 'blue',
    title: 'Performance',
    subTitle: 'Quality Aspects',
    description:
      "Efficiency Aspect: How well can your app execute the commands it's been given? How about many commands all at once?",
    exampleOne:
      'Are all network calls necessary or can some be omitted? ? What do you do with data? Can it be cached locally? If yes: For how long?',
    exampleTwo:
      'Combine things! Doing hard, taxing calculations at the same time with multiple users and browsers can give fun results.',
    exampleThree:
      'Databases can become performance bottlenecks, especially when multiple threads and systems use the same database.',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-18',
    color: 'blue',
    title: 'User Friendliness',
    subTitle: 'Quality Aspects',
    description:
      'Usability Aspect: Will users find the product convenient and easy to work with? But more important: will they enjoy it? ',
    exampleOne:
      'What makes an app attractive? Speed, ease-of-use, reliability? ',
    exampleTwo:
      'Are the most important features available in the middle of your screen? Have your app eye-track-tested and find out whether people easily find what they’re looking for.',
    exampleThree:
      'Some things are intrusive, yet people love them. For example the-groupon-space-cat-logo. This makes your app unique, identifiable and memorable.',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-19',
    color: 'blue',
    title: 'Concurrency',
    subTitle: 'Quality Aspects',
    description:
      'Reliability Aspect: Two users request to do the exact same thing at exactly the same time. ',
    exampleOne:
      'A team of testers typically spreads their focus to cover as much as possible. But combining efforts at the same time has the potential to reveal valuable information',
    exampleTwo:
      'There are quite a few tools (e.g. Neoload, Jmeter) on the market that can fire up the same scripts and calls as concurrent users. Two? Ten? Five hundred? You go ahead.',
    exampleThree:
      'Two libraries in your program try to use the same data at the same time. One gets access, one does not. This may lead to trouble.',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-20',
    color: 'blue',
    title: 'Safe-guard',
    subTitle: 'Quality Aspects',
    description: 'Security Aspect: What’s keeping the bad guys out?',
    exampleOne:
      'Take a look at OWASP top 10 and try to find out which attacks you are vulnerable to.',
    exampleTwo:
      'SamuraiWTF (Web Testing Framework) is one of many open source penetration testing tools.',
    exampleThree:
      'Once a hacker gets in, in what form can he find your data? Will he be able to piece it together pretty easily?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-21',
    color: 'blue',
    title: 'Availability',
    subTitle: 'Quality Aspects',
    description:
      'Reliability Aspect: Every application has brown outs eventually. Some more often than others. How does your team deal with outages?',
    exampleOne:
      'Multiple time zones with multiple languages can make support difficult.',
    exampleTwo:
      'What is the impact of a system outage for your team? What is the cost of increasing the availability just a fraction extra?',
    exampleThree:
      'How fast can the software recover from a system failure? What are your disaster recovery protocols?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-22',
    color: 'blue',
    title: 'Scalability',
    subTitle: 'Quality Aspects',
    description:
      'Efficiency Aspect: Hardware is cheap these days. Just enter your credit card and there you go. How much hardware can you juggle?',
    exampleOne:
      'Some systems have to deal with peak traffic. Problems are often dealt with by throwing more hardware at it.',
    exampleTwo:
      'Code written in certain programming languages have fluctuating behaviour as their database gradually grows. Some deal with it well, others… not so well.',
    exampleThree:
      'Load balancing systems can help you distribute lots of traffic to different backend systems.',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-23',
    color: 'blue',
    title: 'Business Value Capability',
    subTitle: 'Quality Aspects',
    description:
      'Controllability Aspect: Deliver business value to stakeholders with pace and consistency.',
    exampleOne:
      'How long does it take for a new idea to find its way to production? Is this reasonable?',
    exampleTwo:
      'Can costs of implementing a story be measured and weighed against profit it might potentially generate? ',
    exampleThree:
      'Delivery is not done until its impact on business value has been reviewed.',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-24',
    color: 'blue',
    title: 'Impartiality',
    subTitle: 'Quality Aspects',
    description:
      'Functionality Aspect: Software built by humans imitates the social structures that are considered ‘normal’ by those humans. This includes their biases, favouritism & prejudices.',
    exampleOne:
      '"That software guiding care for tens of millions of people systematically privileges white patients over black patients." - Wired',
    exampleTwo:
      '“My wife and I filed joint tax returns [...] have been married for a long time, [... ]Yet Apple’s black box algorithm thinks I deserve 20x the credit limit she does.” - NYtimes',
    exampleThree:
      'Advancement in Artificial Intelligence and Machine Learning push us to confront the worst in the human world… and do something about it?',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
  {
    id: 'blue-25',
    color: 'blue',
    title: 'Observability',
    subTitle: 'Quality Aspects',
    description:
      'Controllability Aspect: How well can you see what’s actually going on within the product? Can you answer new questions without deploying code?',
    exampleOne:
      'How well can you understand the internals of a system by only observing the outputs?',
    exampleTwo:
      'Capture different sources of data within rich logs with improved information for  debugging, vulnerability detection, traffic monitoring,...',
    exampleThree:
      'Swinging red lights! Alarms! Our system has picked up that we’re losing money/users/speed because of a failure in a specific running feature.',
    risks: [
      {
        label: '',
        cards: [],
        tasks: [],
      },
    ],
  },
];
