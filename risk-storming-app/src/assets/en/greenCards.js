export const greencards = {
  'green-1': {
    id: 'green-1',
    color: 'green',
    title: 'Requirements (re)Engineering',
    subTitle: 'Techniques',
    description:
      'Project level: Find your own requirements. Review and discuss. What can you learn from these discussions? ',
    exampleOne:
      "Create your own list of personal requirements. Compare your list with the client's list. What can the both of you learn from them? ",
    exampleTwo:
      'Requirements or use case lists are never finite. Can you come up with "misuse" cases? ',
    exampleThree:
      'If you jump into legacy applications, quite often there are no requirements. Your test results are desperately needed because no one knows what the app actually does and what it should do.',
  },
  'green-2': {
    id: 'green-2',
    color: 'green',
    title: 'Intuition',
    subTitle: 'Techniques',
    description:
      'Personal level: You find yourself facing an unknown contraption.  What does your spider-sense tell you? ',
    exampleOne:
      'Does a feature feel intuitive? Do you know which buttons to click? Do you have to do more actions than originally expected? ',
    exampleTwo:
      'Explore an app without any previous knowledge of it. Can you deduce what the app wants to achieve? ',
    exampleThree:
      'Start listing all the features you can find in an unknown module or app. Then check with an expert to see which ones you missed. Would a user miss these features too?',
  },
  'green-3': {
    id: 'green-3',
    color: 'green',
    title: 'Knowledge',
    subTitle: 'Techniques',
    description:
      'Personal level: Important information is often found in the documents left behind by your project. ',
    exampleOne:
      'Old documents or wiki pages can hold interesting, possibly forgotten information. A tester is usually the expert who knows what the state of the product is in at any given moment. ',
    exampleTwo:
      'Identify knowledge that only one or two persons on the project have. Spread it.',
    exampleThree:
      'Consider doing a daily "did you know this about our app?". This could bring knowledge of useful features, funny bugs, weird behaviour and powerful demonstrations to the team.',
  },

  'green-4': {
    id: 'green-4',
    color: 'green',
    title: 'Data Analysis',
    subTitle: 'Techniques',
    description:
      'Product level: Inspecting, cleaning, transforming, and modelling data with the goal of discovering useful information. ',
    exampleOne:
      'Legacy data is often very fragile. Gaps, bad data or displacement could riddle the database. Usually a few good queries can quickly find whether your data is valuable or not. ',
    exampleTwo:
      "Consider improving the visualisation of your  data if it's too hard or too extensive to go through. Add colour, zoom out and look for patterns. Data input and output are both immensely important. ",
    exampleThree:
      'Pay attention to how your input gets changed, saved and returned. How do you store data elements ?',
  },
  'green-5': {
    id: 'green-5',
    color: 'green',
    title: 'Galumphing',
    subTitle: 'Techniques',
    description:
      'Product level: Test in an overly elaborate way, adding redundant but seemingly insignificant actions. ',
    exampleOne:
      'Instead of quickly going through the important scenario of adding an item to a cart and paying, change your behaviour a bit. Add some more items, then remove them while changing your credit cards and address. ',
    exampleTwo:
      "Test Case Scenario's often go from point A to B in as few  actions possible. Users don't usually behave that way. They do unexpected things.",
    exampleThree:
      'Do some extra steps during an installation process: go into settings, uninstall another app or go into landscape mode. Then resume with the app once installed.',
  },
  'green-6': {
    id: 'green-6',
    color: 'green',
    title: 'A/B Testing',
    subTitle: 'Techniques',
    description:
      'Project level: Work out the same concept in two different ways, evaluate them both and choose the best. Marketing does this often.',
    exampleOne:
      'A company sends out two different emails to two samples of people and compare results. Then they use the one that got the best reactions for their campaign. ',
    exampleTwo:
      'For a new feature, make two or more mock-ups with different concepts. Then use the one your users react the best towards. ',
    exampleThree:
      "Present two possible strategies to achieve a test mission. Discuss with the team and your stakeholders to choose the one that's within their best interest.",
  },

  'green-7': {
    id: 'green-7',
    color: 'green',
    title: 'Charm',
    subTitle: 'Techniques',
    description:
      "Project level: Scratching a developer's  back (or any other stakeholder) might loosen up some new information. ",
    exampleOne:
      "A programmer who's on your side is a good friend to have. One that drops anything to unblock you, run a query for test data or results. Cherish those teammates. ",
    exampleTwo:
      'Stakeholders who lean on you to get important things done will not only guide you, but also support and follow you in return. ',
    exampleThree:
      "It's really easy to become a negative tester. One that complains and blocks progress. Be a positive force. Scratch some other people's backs and you'll find yours a lot less itchy.",
  },
  'green-8': {
    id: 'green-8',
    color: 'green',
    title: 'Social Engineering',
    subTitle: 'Techniques',
    description:
      'Project level: A type of confidence trick for the purpose of information gathering, fraud, or accessing systems. ',
    exampleOne:
      'How much personal information do people need to pose as legit users to your system? How hard is it to obtain this information?',
    exampleTwo:
      'Your colleague leaves his computer unlocked for a coffee break. What nasty things could a malicious intruder do in the meantime? ',
    exampleThree:
      "Can you get access to things you shouldn't be able to get access to by pretending you are someone else?",
  },
  'green-9': {
    id: 'green-9',
    color: 'green',
    title: 'Diplomacy',
    subTitle: 'Techniques',
    description:
      'Project level: People often differ in their view of quality.  Being diplomatic in these situation can help. ',
    exampleOne:
      'Knowing how and when to talk to people can greatly influence the value you bring to your project. Consider learning how your stakeholders prefer to communicate. ',
    exampleTwo:
      'A well written and well-founded bug can get fixed more easily rather than having it dismissed as a change or request. ',
    exampleThree:
      "Talking to a programmer directly to explain why you find something important can get things done a lot quicker than going through the 'right' procedures.",
  },
  'green-10': {
    id: 'green-10',
    color: 'green',
    title: 'Equivalence Partitioning',
    subTitle: 'Techniques',
    description:
      'Product level: When a range of values have the same expected outcome, it might not be necessary to run them all. ',
    exampleOne:
      'If the ages between  18 and 45 all result in the same entry price we might test enough if we only try out age 30. ',
    exampleTwo:
      'It might be interesting to try only one string in a field that expects only numeric values. Challenge your assumptions about your Equivalence Partitions. ',
    exampleThree:
      'If you can schedule an alarm on Monday; does that really mean you can do the same for the rest of the week?',
  },
  'green-11': {
    id: 'green-11',
    color: 'green',
    title: 'Boundary Testing',
    subTitle: 'Techniques',
    description:
      'Product level: Focus on the extremes of the input range. Minimum, maximum and just beyond. ',
    exampleOne:
      'Does the increase of the price of an entry ticket at age 45 mean it increases at age 45 or 46? ',
    exampleTwo:
      'During calculations, programmers run the risk of confusing "<", ">", "=", "<=" and ">=". It\'s interesting to test around the borders to uncover just which symbol they used. ',
    exampleThree:
      'In a Calendar app we could test whether scheduling a meeting from 23:30 to 00:30 is handled and visualized correctly.',
  },
  'green-12': {
    id: 'green-12',
    color: 'green',
    title: 'Pair Testing',
    subTitle: 'Techniques',
    description:
      'Project level: Doing testing together with another person. Sometimes another tester, sometimes another role. ',
    exampleOne:
      'Pair with another tester. Explain to each other why you are doing things a certain way. Question each other and give input. Learn to explain and learn to understand. ',
    exampleTwo:
      "Pairing with a programmer often comes down to learning about each other's mindset and understanding how the other person brings value to the team. ",
    exampleThree:
      "A product owner or user will usually test for important, high risk bugs or new features. Learn what's important to them and guide them to it.",
  },
  'green-13': {
    id: 'green-13',
    color: 'green',
    title: 'Pairwise Testing',
    subTitle: 'Techniques',
    description:
      'Product level: Test in pairs or more inputs together to find out if the combination gives different results. ',
    exampleOne:
      'Combining the number of inputs across variables will greatly increase the number of possible checks. You can do smart combinations of input to minimize this.',
    exampleTwo:
      '100 age variables and 10 nationality variables would make for 1000 checks. Sampling for only interesting combinations could bring it down significantly',
    exampleThree:
      'When calculating a payment rate dependent on age, gender,... consider listing all influencing factors in an organized list and use them as a basis for a minimal test set.',
  },

  'green-14': {
    id: 'green-14',
    color: 'green',
    title: 'Touring',
    subTitle: 'Techniques',
    description:
      'Product level: Exploration sessions where the tester focusses on a certain aspect or combination of aspects. Such as the beauty of the app. ',
    exampleOne:
      "Become a tourist who cruises from important tourist attraction to another. Tourist attractions in your app are the important features that can't be missed. ",
    exampleTwo:
      'A lonely businessman tour looks for the point farthest away from the centre functionality of the product. Which functionality requires most clicks? Most screens? ',
    exampleThree:
      'The Buy-one-get-one-free tour, which focuses on doing the same thing in different copies, tabs, configurations simultaneously.',
  },
  'green-15': {
    id: 'green-15',
    color: 'green',
    title: 'Unit Testing',
    subTitle: 'Techniques',
    description:
      'Product level: Testing a system, functionality or other feature as a stand-alone product and protected from outside influences. ',
    exampleOne:
      'Identify a unit, such as a password field or login functionality. Treat it like a black box and see whether it can convert input to the correct output. ',
    exampleTwo:
      'Consider automating these checks. What is the absolute minimum this function should do? ',
    exampleThree:
      'Unit testing at the lowest level checks pieces of code. A class, for example will have multiple unit tests that verify whether it works as the creator intended.',
  },
  'green-16': {
    id: 'green-16',
    color: 'green',
    title: 'Integration Testing',
    subTitle: 'Techniques',
    description:
      'Product level: Testing the interaction between systems, functionalities,... in relation to each other. ',
    exampleOne:
      'Components often pass data to each other via interfaces, but do they interpret the same data in a consistent way? Does one component send "null" and mean "empty" yet the receiving component thinks it\'s a string?',
    exampleTwo:
      'Lots of applications are dependent on other products. Think about logging into a web app through your Facebook account. How would you test communication between them? ',
    exampleThree:
      'Big government projects often draw data from other government products. The communication through XML requests can get huge and complex.',
  },

  'green-17': {
    id: 'green-17',
    color: 'green',
    title: 'Business Scenarios',
    subTitle: 'Techniques',
    description:
      'Project level: The 20% of the functionality that will be used 80% of the time. This is usually where money is involved.',
    exampleOne:
      'A typical user script is to log in, go to item, add item to cart, select address and payment, pay, receive confirmation and logout. ',
    exampleTwo:
      'In-app purchases are tricky. You may try to guide the user to them, but don\u2019t want to scare her. Does it work smoothly and in an non-intrusive way? ',
    exampleThree:
      'Agreed upon business scenarios can very well be acceptance criteria which would present the scope of the User Acceptance phase.',
  },
  'green-18': {
    id: 'green-18',
    color: 'green',
    title: 'Personas',
    subTitle: 'Techniques',
    description:
      'Project level: Testing and analysing from the viewpoint of agreed upon generated user profiles. ',
    exampleOne:
      'You identify arch-users and test from their point of view. For example: Tracy from the finance department. She finds language important and knows a lot about contracts. ',
    exampleTwo:
      "Mark, one of your older users. He's not tech savvy and needs a lot of training. Bugs found by Mark could be around accessibility, user friendliness and clarity. ",
    exampleThree:
      'Personas can be real users, or arch-types, such as "The power user" or "The Kid". Can you generate random personas with Test Sphere?',
  },
  'green-19': {
    id: 'green-19',
    color: 'green',
    title: 'Sampling',
    subTitle: 'Techniques',
    description:
      'Product level: When faced with unlimited possibilities testers select the most likely options the ones most prone to risks. ',
    exampleOne:
      "All testing is sampling. We can't run all checks, so we settle for a subset. Being honest about this and keeping this in mind is what keeps us humble. ",
    exampleTwo:
      'Choosing which set you will test is very important. Are you mindful of the sampling choices you make? Let\'s not put too much testing focus on "ordering foreign books". ',
    exampleThree:
      "Let's test more different variations of ordering English language books, as 99% of our business is in that module.",
  },
  'green-20': {
    id: 'green-20',
    color: 'green',
    title: 'Risk Analysis',
    subTitle: 'Techniques',
    description:
      'Product level: What is important to the customer, business and the project. What needs your utmost attention?',
    exampleOne:
      'If you say your reports are accurate, they should be as accurate as possible.',
    exampleTwo:
      'If you guarantee an SLA of no more than 1 hr downtime, you need to stick to that or realize that there are consequences.',
    exampleThree:
      "Deadlines are often detrimental for testing. When there's a testing phase at the end, how do you prepare for this small time slot?",
  },
  'green-21': {
    id: 'green-21',
    color: 'green',
    title: 'OWASP Top Ten',
    subTitle: 'Techniques',
    description:
      'Project level: Open Web Application Security Project: A list of the top ten biggest security risks, which are regularly updated. ',
    exampleOne:
      'OWASP is a very useful checklist to reference when developing & testing possible security leaks.',
    exampleTwo:
      'You don’t have to dig too deep to find useful test ideas and tools to help find peculiar and important issues.',
    exampleThree:
      'Security is too often an afterthought for projects. It usually takes only one motivated person to raise awareness and improve security.',
  },
  'green-22': {
    id: 'green-22',
    color: 'green',
    title: 'Story Mapping',
    subTitle: 'Techniques',
    description:
      'Project level: A project planning technique that helps you map out your high-level User Journey. It then drills down into details and identifies minimum viable experiments to release.',
    exampleOne:
      'Start writing down product features on cards. Keep it simple. The cards are not the most important thing. Communication and common understanding are.',
    exampleTwo:
      'Break down big ideas into smaller concrete ones, prioritize important ideas first. Stay focused on validating ideas.',
    exampleThree:
      'Use this technique, as a team, to test a hypothetical valuable idea in the smallest increments possible.',
  },
  'green-23': {
    id: 'green-23',
    color: 'green',
    title: 'Mob Testing',
    subTitle: 'Techniques',
    description:
      'Project level: One person controls the system; the others give directions with the aim of finding bugs & limitations.',
    exampleOne:
      'Product demos sometimes go ‘off-script’ as someone says: “Hey, what was that? Can we check that now?” or “Did we think about different currencies?”.',
    exampleTwo:
      'Make sure everyone in the mob is equally valued. Rotate roles in a fair, unbiased manner. Any role can participate.',
    exampleThree:
      'Ideas that seem wrong or random should be encouraged, valued and tried out, not shut down.',
  },
  'green-24': {
    id: 'green-24',
    color: 'green',
    title: 'Stress Testing',
    subTitle: 'Techniques',
    description:
      'Product level: The measures we take to find out at which point a system slows down, freezes, or behaves unexpectedly. ',
    exampleOne:
      'You can test potential bottlenecks by ramping up traffic to that specific area. ',
    exampleTwo:
      'Stress testing tools can be easy to learn, but adding value with them requires in-depth knowledge of the system under test and the underlying technologies.',
    exampleThree:
      'If the strategy behind stress testing seems random, try using data from production to direct your efforts.',
  },
  'green-25': {
    id: 'green-25',
    color: 'green',
    title: 'Test Driven Development',
    subTitle: 'Techniques',
    description:
      'Product level: The first thing you write is a failing test before you write code. Then you write the code that makes the test pass. Repeat.',
    exampleOne:
      'This practice makes your codebase better and provides the team with stability as a feature is being developed. It allows the team to add code more quickly.',
    exampleTwo:
      'You can use examples of inputs and outputs to make TDD more relevant. Include these examples in acceptance criteria.',
    exampleThree: 'Keep them small, clean, and most importantly: valuable.',
  },
};
