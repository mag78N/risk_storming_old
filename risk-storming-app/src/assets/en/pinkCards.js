export const pinkcards = {
  'pink-1': {
    id: 'pink-1',
    title: 'Familiarity:',
    subTitle: 'Heuristics',
    description:
      'Consistency Heuristic: Given your experience, which problems, that you are familiar with,  would you expect in the current product? ',
    exampleOne:
      "I once found a bug by quickly switching combinatory data input. When I see a lot of switches, levers,... I'll remember that experience. ",
    exampleTwo:
      "When testing Mobile apps, it's often interesting to go into landscape mode, switch language, aeroplane mode,... Many testers have encountered bugs this way.",
    exampleThree:
      'When smoke testing, try to remember problematic pieces of functionality and apply extra pressure there.',
  },
  'pink-2': {
    id: 'pink-2',
    title: 'Explainability:',
    subTitle: 'Heuristics',
    description:
      'Consistency Heuristic: A product that is hard to explain might be too hard for a user to understand.',
    exampleOne:
      'Is your FAQ longer than your documentation? That might indicate your app is difficult to explain. ',
    exampleTwo:
      'Try explaining certain complex behaviour by comparison. If it takes outlandish models, concepts or schemes the function itself might feel alien too. ',
    exampleThree:
      'Does your product offer tooltips and help functions? How helpful are they really?',
  },
  'pink-3': {
    id: 'pink-3',
    title: 'World:',
    subTitle: 'Heuristics',
    description:
      'Consistency Heuristic: We all have expectations of the world around us. Our app should be no exception.',
    exampleOne:
      'Driving on the right vs. Driving on the left. Both perspectives are important, but easily overseen.',
    exampleTwo:
      "Remember Clippy, the friendly paper clip that answered office related questions? Microsoft tried to make him consistent with the concept of being a friend. It didn't work.",
    exampleThree:
      'Doors in the world swing a certain way. I remember getting stuck behind doors in games, because the pixels pushed me in a corner while opening it. ',
  },
  'pink-4': {
    id: 'pink-4',
    title: 'History:',
    subTitle: 'Heuristics',
    description:
      'Consistency Heuristic: There is much to learn from earlier versions. What do they tell you about risk and failure?',
    exampleOne:
      'Previous versions of your product can teach you where problematic features are or where bugs are likely to turn up. Pay attention to this.',
    exampleTwo:
      'Earlier versions of your application can serve as oracles that help you decide if certain behaviour is wrong or not. ',
    exampleThree:
      'Knowledge of behaviour or features that have been removed because they were not on par with expectations can be used to evaluate new feature.',
  },
  'pink-5': {
    id: 'pink-5',
    title: 'Image:',
    subTitle: 'Heuristics',
    description:
      "Consistency Heuristic: Is your product true to the image and reputation you or the app's company wishes to project? ",
    exampleOne:
      'Is your product known for specific features?  Better test those features extra carefully. ',
    exampleTwo:
      'Some products always want to have the newest and most innovative technology. Test for outdated concepts and features.',
    exampleThree:
      'If your slogan is "Just do it." your website better not have an overly convoluted process for buying new sports shoes.',
  },
  'pink-6': {
    id: 'pink-6',
    title: 'Comparable Products:',
    subTitle: 'Heuristics',
    description:
      'Consistency Heuristic: Are your competitors doing things different, maybe even in a better way?',
    exampleOne:
      'Is your product part of a larger range of products, such as the MS Word in the Office Suite?',
    exampleTwo:
      "Best check for similarities and exceptions. Is there a similar product you're building already available on the market? Try it out to find ideas for design, building and testing. ",
    exampleThree:
      'Testing a game could have you recalling other , similar features in games. What did you like about those features? What was missing?',
  },
  'pink-7': {
    id: 'pink-7',
    title: 'Claims:',
    subTitle: 'Heuristics',
    description:
      'Consistency Heuristic: Can your product live up to the hype? ',
    exampleOne:
      'Testing can support salespeople. Which claims are true and which are overselling the product? ',
    exampleTwo:
      'The marketing campaign of your product might raise expectations way too high. ',
    exampleThree:
      'Have each team member write down three sentences about what your app does. Discuss the differences and align if necessary.',
  },
  'pink-8': {
    id: 'pink-8',
    title: 'User Desires:',
    subTitle: 'Heuristics',
    description:
      "Consistency Heuristic: What are the user's desires and does the product live up to them?",
    exampleOne:
      "Is your company collecting user feedback? What's being done with that feedback and how is it treated? ",
    exampleTwo:
      "Users often want many, diverse and sometimes trivial changes. Deciding which ones to act upon is a product manager's domain, but testers can help narrow the scope. . ",
    exampleThree:
      'Pay attention to social media. People often complain in public ways that are not immediately visible to you.',
  },
  'pink-9': {
    id: 'pink-9',
    title: 'Product:',
    subTitle: 'Heuristics',
    description:
      'Consistency Heuristic: Is the product consistent with itself, or can we even spot differences within?',
    exampleOne:
      'Components to interact with can vary enormously. Take a table as an example. Some can be sorted, others can be edited directly and some others click through to details.',
    exampleTwo:
      'While testing an upload function that needed certain templates, we had problems when either the app or templates changed . Error messages were a disaster.',
    exampleThree:
      "Icons and language should be consistent across the board. 'Cancel' here, 'abort' there and 'X' somewhere else gives your product a confusing interface.",
  },
  'pink-10': {
    id: 'pink-10',
    title: 'Purpose:',
    subTitle: 'Heuristics',
    description:
      'Consistency Heuristic: Does the product solve a problem? Will it fulfil its ultimate mission? ',
    exampleOne:
      "Facebook isn't known as an emergency service. Yet people have used it to start a chain reaction of people calling for help, aiding and saving their lives. ",
    exampleTwo:
      "If your product is a gambling algorithm its purpose is to make more money than it gives. You wouldn't test this for fairness.",
    exampleThree:
      "If your app's upload-a-user-picture functionality can't upload very large files, but is actually a Life-monitoring-system, that bug doesn't conflict with the app's purpose.",
  },
  'pink-11': {
    id: 'pink-11',
    title: 'Standards and Regulations:',
    subTitle: 'Heuristics',
    description:
      'Consistency Heuristic: Your app will have to adhere to standards, norms, regulations or the law.',
    exampleOne:
      'Which rules do you have to follow when your application prints documents that need to conform to the law?  ',
    exampleTwo:
      'Could your app be conflicting with a patent already in the hands of a different company?',
    exampleThree:
      'When hiring other companies to create your product you have to make sure you are the sole owner.  Otherwise they might use your business knowledge to implement the same thing for your competitors. ',
  },
  'pink-12': {
    id: 'pink-12',
    title: 'Always and Never:',
    subTitle: 'Heuristics',
    description:
      'Exploratory Heuristic: Look for the keywords "always" and "never" in your specifications. Try to break those rules.',
    exampleOne:
      'There should always be at least one document linked to your transaction. ',
    exampleTwo: 'The name field should never take more than 50 characters. ',
    exampleThree: 'The application should never have any downtime.',
  },
  'pink-13': {
    id: 'pink-13',
    title: 'Change the Model:',
    subTitle: 'Heuristics',
    description:
      'Exploratory Heuristic: Create a model of your app, pair with others to gain creative input. . ',
    exampleOne: 'What if this menu right here was a drop down list? ',
    exampleTwo:
      'Suppose we eliminate this whole functionality. What would happen? ',
    exampleThree:
      'What if we provided a view that shows all queried items and the available providers on a map?',
  },
  'pink-14': {
    id: 'pink-14',
    title: 'Reverse:',
    subTitle: 'Heuristics',
    description:
      'Exploratory Heuristic: What can you learn from a workflow by executing it in opposite order or a different order? ',
    exampleOne:
      'You can often backtrack in a wizard. It allows you to start at the end and work your way through to the beginning. ',
    exampleTwo:
      'When inputting data into a form, start at the bottom and work up. ',
    exampleThree:
      'How often have you ordered a product from a webshop, only to find out you need to create an account in a much later step in the process?',
  },
  'pink-15': {
    id: 'pink-15',
    title: 'Starve:',
    subTitle: 'Heuristics',
    description:
      'Exploratory Heuristic: How does your app handle zeros and negatives?',
    exampleOne:
      'Imagine a list without items. An empty dropdown. Can you anticipate this and provide feedback/instructions? ',
    exampleTwo:
      'Can you remove all records or columns from a table? What are you left with? ',
    exampleThree:
      'Take a fairly old mobile phone and open lots of apps including the one you want to test. Now open another one, the phone will most likely take resources from your app. How will it take this hit?',
  },
  'pink-16': {
    id: 'pink-16',
    title: 'Zero, One, Many:',
    subTitle: 'Heuristics',
    description:
      'Exploratory Heuristic: Blank fields, too many records or exactly one input can lead to horrible errors.',
    exampleOne:
      "A multi-million, high-tech navy battleship once lay motionless in the ocean after one person inserted '0' where it wasn't expected. ",
    exampleTwo:
      'An app storing and calculating with DNA sequences might start acting different when only one value is available instead of a sequence. ',
    exampleThree:
      'Can you paste a whole book into a text field? What happens when you do? ',
  },
  'pink-17': {
    id: 'pink-17',
    title: 'Violate Data Format Rules:',
    subTitle: 'Heuristics',
    description:
      'Exploratory Heuristic: Strings for integers, weird characters where a date is expected, SQL injections,... ',
    exampleOne:
      'Date fields sometimes take integers and calculate them excel-wise to dates. Often, weird inputs and characters can do serious damage to your system. ',
    exampleTwo:
      "Ever heard of Little Bobby Tables? His full name is Robert'); DROP Table Students;--  Schools didn't like enrolling him. ",
    exampleThree:
      "What's the maximum number of characters you can fit in the available fields? What happens if you put in the maximum amount everywhere? ",
  },
  'pink-18': {
    id: 'pink-18',
    title: 'Too Many:',
    subTitle: 'Heuristics',
    description:
      "Exploratory Heuristic: Everything has a theoretical breaking point, so let's find out where exactly that happens. ",
    exampleOne:
      "What's the maximum number of users your app can handle at a time? ",
    exampleTwo: 'How many inputs does it take to overflow the server? ',
    exampleThree:
      'Can you put in immensely huge numbers in a field expecting a number? Decimals? How many?',
  },
  'pink-19': {
    id: 'pink-19',
    title: 'Useful Approximations',
    subTitle: 'Heuristics',
    description:
      "Exploratory Heuristic: Given very complex calculations, it's often hard to predict the exact outcome. Sometimes, 'almost' is good enough. ",
    exampleOne:
      "A system's calculation of the number of possible orders based on many different dimensions can be compared to earlier results. ",
    exampleTwo:
      "The number of people moving to your country and the subset the product calculates is eligible for a work permit can be checked with last month's records. ",
    exampleThree:
      'Gambling rates between two football teams will never go in favour of the worst team.',
  },
  'pink-20': {
    id: 'pink-20',
    title: 'Some, None, All:',
    subTitle: 'Heuristics',
    description:
      'Exploratory Heuristic: What happens when you order some products? And more? And even more? Or all the products? ',
    exampleOne:
      'Filtering for nothing or everything should both show all items in a list, right?',
    exampleTwo:
      'A user in your app with no specific right settings. Does he have all the rights and is a super user or does he have no rights?',
    exampleThree:
      'Overflow errors sometimes only come up around the 8,16,32,... numbers. I once spent half a day investigating why sometimes one line in an invoice disappeared. When it had exactly 32 lines, the last one got deleted.',
  },
  'pink-21': {
    id: 'pink-21',
    color: 'pink',
    title: 'Dogfooding',
    subTitle: 'Strategy Heuristic',
    description:
      'Roll out a newly developed software package to your internal staff to use in real situations.',
    exampleOne: 'Use the company’s own product in real world situations.',
    exampleTwo:
      'Staff are a great resource for feedback and real - world examples.If they won’t use your product, ask them why.',
    exampleThree:
      'If dogfooding doesn’t seem possible at first; isolate certain parts, or change future development to allow for it. ',
  },
  'pink-22': {
    id: 'pink-22',
    color: 'pink',
    title: 'Feature Toggles',
    subTitle: 'Strategy Heuristic',
    description:
      'Hide functionality behind configuration parameters.Activate / deactivate the feature without deploying code!',
    exampleOne:
      'Hidden features after release can be tested in the most production - like environment possible: Production.',
    exampleTwo:
      'Want to experiment with a new feature, but unsure about the impact ? Make sure you’re able to roll back with the flip of a switch!',
    exampleThree:
      'Feature toggles are powerful, but adding too many can create several extra layers of complexity.Test them!',
  },
  'pink-23': {
    id: 'pink-23',
    color: 'pink',
    title: 'Chaos Engineering',
    subTitle: 'Strategy Heuristic',
    description:
      'Chaos Engineering uses test techniques to try and tear down your production environment.',
    exampleOne:
      'Problems in production are a matter of time. Drill your team to deal with this by practicing on scheduled disasters, often called ‘Game days’.',
    exampleTwo:
      'Have ‘automated chaos’ randomly create disasters for your team, then make it more robust. ',
    exampleThree:
      'Build in resiliency by having contingency plans when outages happen.',
  },

  'pink-24': {
    id: 'pink-24',
    color: 'pink',
    title: 'Three Amigos',
    subTitle: 'Strategy Heuristic',
    description:
      'A developer, product owner and tester go to a meeting. Magic happens! ',
    exampleOne:
      'Having a representative of different roles and perspective in a meeting gives everyone a broader & deeper understanding.',
    exampleTwo:
      'During design workshops or requirement refinement sessions, testers and developers are excellent at enhancing acceptance criteria.',
    exampleThree:
      'A bug triage meeting with all three roles present can help to : 1) set priority, 2) decide what a fix could be and 3) decide how to test it.',
  },
  'pink-25': {
    id: 'pink-25',
    color: 'pink',
    title: 'Peer Reviews',
    subTitle: 'Strategy Heuristic',
    description:
      'A team member makes code changes. Right after this, a different team member reviews the code and gives feedback.',
    exampleOne:
      'Having a team member look at your code before deploying is often part of the development process.',
    exampleTwo:
      'Our own errors are often so obvious to others. Four eyes simply see more than two.',
    exampleThree:
      'Peer review is not only possible on source code, but also on test code, documentation and User Stories. ',
  },
};

/* title:
subTitle: 
description:
exampleOne:
exampleTwo:
exampleThree: */
