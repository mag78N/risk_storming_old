export const colorcards = [ 
  {
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
  {
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
  {
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

  {
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
  {
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
  {
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

  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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

  {
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
  {
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
  {
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

  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
{
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
  {
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
  {
    id: 'orange-1',
    color: 'darkorange',
    title: 'Interruption',
    subTitle: 'Patterns',
    description:
      'Approach: Stop, replay, pause and begin again.  Can your application handle exceptional flows?',
    exampleOne:
      'Wizards sometimes have a point where they save initial data. What happens to that data if you cancel the wizard near the end? ',
    exampleTwo:
      'What happens when you leave your application alone for a coffee break? A lunch break? A whole night? ',
    exampleThree:
      'You\'re walking in the park and suddenly a pokémon jumps from behind a tree. You tap it and go into "catch the pokémon" view. Deactivate the screen, make a phone call and then resume catching it.',
  },
  {
    id: 'orange-2',
    color: 'darkorange',
    title: 'Tediousness',
    subTitle: 'Patterns',
    description:
      'Approach: Repetitive tasks and quick-sequence actions. Do you feel you need too many clicks for your actions? ',
    exampleOne:
      "You don't have to have a full-blown automation suite to perform repetitive checks. Consider throw-away automation checks to relieve the pain. ",
    exampleTwo:
      'Inputting many records of data one by one can be really tedious. Can we add shortcut keys or import functionality? Which actions seem wasteful? ',
    exampleThree:
      'Can we reduce the number of clicks the user has to do? What if we increase the actions?',
  },
  {
    id: 'orange-3',
    color: 'darkorange',
    title: 'Fluency',
    subTitle: 'Patterns',
    description:
      'Approach: Are there long wait times, pauses, loading screens or interruptions? ',
    exampleOne:
      'Loading screens can be fragile. They all have their own fickle behaviour. You leave them alone and they do nothing. You start clicking around and everything breaks down. ',
    exampleTwo:
      "You're putting in a record of data. Finally done, so you save. Next record. Which data would you like the product to show from the last record? ",
    exampleThree:
      'Imagine "country" dropdowns where the most used country was all the way down the list of 300 options.',
  },
  {
    id: 'orange-4',
    color: 'darkorange',
    title: 'Disaster Control',
    subTitle: 'Patterns',
    description:
      "Approach: What's the worst thing that could happen? Is your team prepared? Are you practicing CYA?",
    exampleOne:
      'Your application breaks down and the database needs a rollback. How long does it take for everyone to be mobilised and get everything working again? ',
    exampleTwo:
      'Somehow someone inserted double data. Who?  When? And how can this be solved? ',
    exampleThree:
      'Your app produced a legal contract that is wrong. How is it detected? Who fixes it and what are the implications?',
  },
  {
    id: 'orange-5',
    color: 'darkorange',
    title: 'Automation',
    subTitle: 'Patterns',
    description:
      'Approach: Robots. They may not have a heart or brain, but they can do quick and awesome computations. ',
    exampleOne:
      'Performance scripts running the same thing 50 times at the same time. Create a baseline and set tolerances to help with analyzing results. ',
    exampleTwo:
      'Need to do boring checking activities? Automate them and free up your time for new and interesting tests! ',
    exampleThree:
      'Robots are good at monitoring stuff. Let them scan for trouble while you work, sleep, eat and enjoy life.',
  },
  {
    id: 'orange-6',
    color: 'darkorange',
    title: 'Dependencies',
    subTitle: 'Patterns',
    description:
      'Approach: A system rarely exists on its own. What does your product depend on?',
    exampleOne:
      "Integrating with a system that's being built by another firm is often a hell of a job. Communication is key to insuring some quality around integration. . ",
    exampleTwo:
      'As soon as multiple products have to start working together you have to deal with many decision makers and the plans can get blurry. Your group of stakeholders can multiply suddenly.  ',
    exampleThree:
      "One user's work is often dependent on the work of another. How is the work handed over? Does  communication proceed the handoff? ",
  },
  {
    id: 'orange-7',
    color: 'darkorange',
    title: 'Log-digging',
    subTitle: 'Patterns',
    description:
      "Approach: Like treasure maps, logs hold locations to most valuable treasures. You'll be looking for abnormalities. Weird values, error messages or peaks. ",
    exampleOne:
      'At certain times you are going to encounter problems. Logs can give you more insight in what really happened. Increasing readability of logs greatly improves their use.',
    exampleTwo:
      'Invest good time in their formatting. Abnormalities quickly become apparent by putting results from the logs into graphs. ',
    exampleThree:
      'Zooming out and adding conditional formatting in excel can also make anomalies visible.',
  },
  {
    id: 'orange-8',
    color: 'darkorange',
    title: 'Force',
    subTitle: 'Patterns',
    description:
      'Approach: Sometimes brute force is key. The more, the bigger and the more powerful, the better. ',
    exampleOne:
      'Got an app that can upload files? Create the biggest file you can and try to squeeze that through the system. ',
    exampleTwo:
      "Your product probably won't like DDOS attacks. But what happens if you do fire up some? Make sure you have permission!",
    exampleThree:
      "You don't just want to use the functionality. You want to do everything, all the time, all at once. Select everything, edit all the data and save it all at once.",
  },
{
    id: 'orange-9',
    color: 'darkorange',
    title: 'Superficial',
    subTitle: 'Patterns',
    description:
      "Approach: Don't care whether it works or has a purpose? Does it at least look dashing?",
    exampleOne:
      'Do the colours match? Which feelings do they bring out in people? ',
    exampleTwo:
      'Do you see people working with this app all day and not get a headache? ',
    exampleThree:
      'Do a complete spell check of the application. One typo might be a trivial thing, but a hundred are something else entirely.',
  },
  {
    id: 'orange-10',
    color: 'darkorange',
    title: 'Minimalism',
    subTitle: 'Patterns',
    description:
      'Approach: Which wasteful processes, documentation or messages can you lose? ',
    exampleOne:
      'Is everything you do, as a tester, necessary? Are your reports being read? Is your documentation useful to you or others? ',
    exampleTwo:
      'Is the product using too much memory or server power? Can we cut down on it? ',
    exampleThree:
      'Some products require documents to be printed and then be uploaded again, with signature. Is there a possibility to keep everything electronic?',
  },
  {
    id: 'orange-11',
    color: 'darkorange',
    title: 'Confirmation Bias',
    subTitle: 'Patterns',
    description:
      "Bias: The tendency to interpret and recall information in a way that confirms one's beliefs or hypotheses.",
    exampleOne:
      'The tester ran a test script that had  expected result: "I should be able to log in". She failed to notice she was logged in as someone else. She was logged in, but didn\'t look further.',
    exampleTwo:
      "A developer asked a question which he already had a possible solution to and didn't really listen to the answer that was given. ",
    exampleThree:
      'The team believes the application to be ready for production. Some automated checks turned "red" during the last build, but we discarded them as flaky.',
  },
  {
    id: 'orange-12',
    color: 'darkorange',
    title: 'Bandwagon Effect',
    subTitle: 'Patterns',
    description:
      'Bias: People take up ideas or trends more easily if the people around them are following them. ',
    exampleOne:
      'One member of the group  was convinced a developer was the source of a lot of bugs. The team picked this up and he was regarded as a bad developer.',
    exampleTwo:
      "A successful release of the product was surrounded by so much good news that a feeling of comfort grew and the momentum of the team's efforts completely broke down.",
    exampleThree:
      "A test team started complaining and completely broke the morale of the team and the perception of the product. 'Moderately good' became 'bad'.",
  },
  {
    id: 'orange-13',
    color: 'darkorange',
    title: 'Dunning-Kruger Effect',
    subTitle: 'Patterns',
    description:
      "Bias: Being unable to assess your own skill, thereby thinking it's much greater than it actually is. ",
    exampleOne:
      "It's easy to grow overconfident in your automation skills. All green doesn't necessarily mean it's all good. ",
    exampleTwo:
      'When the team picks up so much business knowledge that it starts making assumptions without communication. ',
    exampleThree:
      'A project manager who mistakes his Excel planning capabilities with actual project managing skills.',
  },
  {
    id: 'orange-14',
    color: 'darkorange',
    title: 'Anchoring',
    subTitle: 'Patterns',
    description:
      "Bias: The first piece of information given to people has a huge influence when they're making decisions. ",
    exampleOne:
      "When checking a list of fixes the previous results of your testing will greatly influence whether you'll be lenient the next fix or extra harsh. ",
    exampleTwo:
      'While estimating tasks during sprint planning, the first number being mentioned will draw up or down the estimations of all the other team members. ',
    exampleThree:
      'The previous requirement you tested had 5 bugs. This number might influence your motivation to find the same, more or fewer bugs in the next.',
  },
  {
    id: 'orange-15',
    color: 'darkorange',
    title: 'Curse of Knowledge',
    subTitle: 'Patterns',
    description:
      'Bias: Knowing a lot of things can make it very hard for you to be put in a situation where you know less. ',
    exampleOne:
      'It becomes increasingly more difficult to look at a product with a fresh perspective the longer you work on it.  ',
    exampleTwo:
      'When you know too much you can make the incorrect assumption that people new to the project also know certain pieces of information. You might skip vital pieces of information. ',
    exampleThree:
      'As a new tester you might have a difficult time adjusting since your co-workers assume you know more than you actually do.',
  },
  {
    id: 'orange-16',
    color: 'darkorange',
    title: 'Status Quo Bias',
    subTitle: 'Patterns',
    description:
      'Bias: The unwillingness to change from the current situation. The feeling that if you change, it becomes worse.',
    exampleOne:
      "An unwillingness to adjust the process because you are following 'Best Practices' or because you've always done it this way. ",
    exampleTwo:
      'A programmer not trusting a tester to change code or a tester unwilling to have a programmer test. ',
    exampleThree:
      'Users are hostile of the new product. It will change the way things are done and might make co-workers seem redundant.',
  },
  {
    id: 'orange-17',
    color: 'darkorange',
    title: 'IKEA-effect',
    subTitle: 'Patterns',
    description:
      "Bias: When someone gives more value to something they built over something they haven't. ",
    exampleOne:
      "A programmer could hold his code in much higher regard and think it's of better quality than it really is. ",
    exampleTwo:
      "An automator might assume that his automation is correct when it's flawed. ",
    exampleThree:
      'A programmer might be reluctant to replace his code for a new tool that might do its functions better.',
  },
  {
    id: 'orange-18',
    color: 'darkorange',
    title: 'Observer-Expectancy Effect',
    subTitle: 'Patterns',
    description:
      "Bias: You only pick up the signals that you expect and not the ones you aren't expecting. ",
    exampleOne:
      "A check often  suffers of this bias. It checks what it's told to check, but any other problems are ignored. ",
    exampleTwo:
      "A programmer testing his own code will often test in function of how he understood the requirement in the first place. Therefore, he'll usually be limited in his creativeness and ideas.",
    exampleThree:
      'A project manager might see the burndown go down really fast. However, the team decided to do the easy tasks first and is now stuck with all the heavy ones. ',
  },
  {
    id: 'orange-19',
    color: 'darkorange',
    title: 'Ostrich Effect',
    subTitle: 'Patterns',
    description:
      'Bias: A psychological effect where people try to ignore possible risks when they are uncovered. ',
    exampleOne:
      "You're close to a deadline and find a critical bug. People might choose to ignore this and go ahead anyway. ",
    exampleTwo:
      'A team member is underperforming, but no one wants to stir things up and confront him. ',
    exampleThree:
      "At a certain point the team finds out they won't be able to make the deadline. They decide to hold up appearances and not tell their stakeholders.",
  },
  {
    id: 'orange-20',
    color: 'darkorange',
    title: "Gambler's Fallacy",
    subTitle: 'Patterns',
    description:
      'Bias: The human tendency to perceive meaningful patterns within random data. ',
    exampleOne:
      'Teams create test cases for each bug without thinking twice and then spend a lot of time testing this. In a few years someone will ask "why are we testing these obscure things?".',
    exampleTwo:
      "When smoke or regression testing you'll often go back to things that previously broke.",
    exampleThree:
      'Your app is designed to target users between 25 and 35. Afterwards your 1521 users older than 65 (a miniscule of 0,25%) were very loud in their app store ratings',
  },
  {
    id: 'orange-21',
    color: 'darkorange',
    title: 'Single Responsibility Principle',
    subTitle: 'Patterns',
    description:
      'Approach: Every software module should have one, and only one, reason to change.',
    exampleOne:
      'This principle is closely coupled to business domain logic. If your price calculator is influenced by seasons, promotions, currency... this should be decoupled.',
    exampleTwo:
      'It’s about people and their responsibilities. This principle is broken when a change for one person’s responsibilities could impact someone else’s.',
    exampleThree:
      'Gather the things that change for the same reasons. Separate those things that change for different reasons.',
  },
  {
    id: 'orange-22',
    color: 'darkorange',
    title: 'Story Slicing',
    subTitle: 'Patterns',
    description:
      'Approach: What is the smallest possible block of functionality that can add value to business right now?',
    exampleOne:
      'Simplify functionality by splitting it up into the smallest possible pieces: Load one transaction, load 10 transactions, load all transactions, filter by date,...',
    exampleTwo: 'Split by technology: UI, database, calculation logic,...',
    exampleThree:
      'Consider temporarily removing the complexity of currency, timezone & language: roll out to one country at a time.',
  },
  {
    id: 'orange-23',
    color: 'darkorange',
    title: 'Mutation Testing',
    subTitle: 'Patterns',
    description:
      'Approach: Mutation tests are randomly generated alterations of your code that help evaluate the effectiveness of your unit tests.',
    exampleOne:
      'By randomly changing your source code, you get quick feedback on the value of your automated test code. ',
    exampleTwo:
      'Are your tests actually detecting breaking changes? Is the code even covered? Mutation testing helps you find the answers.',
    exampleThree:
      'Mutation testing can be costly and complex, but the results can be extremely insightful.',
  },
  {
    id: 'orange-24',
    color: 'darkorange',
    title: 'Strangling Patterns',
    subTitle: 'Patterns',
    description:
      'Approach: Used to decouple blocks of functionality out of big clustered systems into smaller services to reduce complexity.',
    exampleOne:
      'Legacy systems are often built in such an overly complex way that you can’t begin to understand all the dependencies. Strangling tries to tackle this pattern.',
    exampleTwo:
      'Identify domains that fit together, such as ‘invoicing’ or ‘customer management’. Try to rebuild and protect these domain contexts in separate systems.',
    exampleThree:
      'Once rebuilt, have both systems run in parallel. Both get the same input. Monitor and compare their output over time. If it matches, you strangled successfully!',
  },

  {
    id: 'orange-25',
    color: 'darkorange',
    title: 'Long Term Load Testing',
    subTitle: 'Patterns',
    description:
      'Approach: Problems in performance are not always found with short bursts of high load. Long lasting, reasonable load is sometimes more realistic... and more troublesome.',
    exampleOne:
      'Simulating real user load and scenarios can be an enlightening activity.',
    exampleTwo:
      'We once found big architectural problems by letting a script run continuously over the weekend.',
    exampleThree:
      "Long term but slow connections can go stale. This doesn't show up in 1 hour but only after a day or longer",
  },
{
    id: 'pink-1',
    color: 'deeppink',
    title: 'Familiarity',
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
{
    id: 'pink-2',
    color: 'deeppink',
    title: 'Explainability',
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
{
    id: 'pink-3',
    color: 'deeppink',
    title: 'World',
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
{
    id: 'pink-4',
    color: 'deeppink',
    title: 'History',
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
{
    id: 'pink-5',
    color: 'deeppink',
    title: 'Image',
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
{
    id: 'pink-6',
    color: 'deeppink',
    title: 'Comparable Products',
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
{
    id: 'pink-7',
    color: 'deeppink',
    title: 'Claims',
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
{
    id: 'pink-8',
    color: 'deeppink',
    title: 'User Desires',
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
{
    id: 'pink-9',
    color: 'deeppink',
    title: 'Product',
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
  {
    id: 'pink-10',
    color: 'deeppink',
    title: 'Purpose',
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
  {
    id: 'pink-11',
    color: 'deeppink',
    title: 'Standards and Regulations',
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
  {
    id: 'pink-12',
    color: 'deeppink',
    title: 'Always and Never',
    subTitle: 'Heuristics',
    description:
      'Exploratory Heuristic: Look for the keywords "always" and "never" in your specifications. Try to break those rules.',
    exampleOne:
      'There should always be at least one document linked to your transaction. ',
    exampleTwo: 'The name field should never take more than 50 characters. ',
    exampleThree: 'The application should never have any downtime.',
  },
  {
    id: 'pink-13',
    color: 'deeppink',
    title: 'Change the Model',
    subTitle: 'Heuristics',
    description:
      'Exploratory Heuristic: Create a model of your app, pair with others to gain creative input. . ',
    exampleOne: 'What if this menu right here was a drop down list? ',
    exampleTwo:
      'Suppose we eliminate this whole functionality. What would happen? ',
    exampleThree:
      'What if we provided a view that shows all queried items and the available providers on a map?',
  },
  {
    id: 'pink-14',
    color: 'deeppink',
    title: 'Reverse',
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
  {
    id: 'pink-15',
    color: 'deeppink',
    title: 'Starve',
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
  {
    id: 'pink-16',
    color: 'deeppink',
    title: 'Zero, One, Many',
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
  {
    id: 'pink-17',
    color: 'deeppink',
    title: 'Violate Data Format Rules',
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
  {
    id: 'pink-18',
    color: 'deeppink',
    title: 'Too Many',
    subTitle: 'Heuristics',
    description:
      "Exploratory Heuristic: Everything has a theoretical breaking point, so let's find out where exactly that happens. ",
    exampleOne:
      "What's the maximum number of users your app can handle at a time? ",
    exampleTwo: 'How many inputs does it take to overflow the server? ',
    exampleThree:
      'Can you put in immensely huge numbers in a field expecting a number? Decimals? How many?',
  },
  {
    id: 'pink-19',
    color: 'deeppink',
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
  {
    id: 'pink-20',
    color: 'deeppink',
    title: 'Some, None, All',
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

  {
    id: 'pink-21',
    color: 'deeppink',
    title: 'Dogfooding',
    subTitle: 'Heuristics',
    description:
      'Strategy Heuristic: Roll out a newly developed software package to your internal staff to use in real situations.',
    exampleOne: 'Use the company’s own product in real world situations.',
    exampleTwo:
      'Staff are a great resource for feedback and real - world examples.If they won’t use your product, ask them why.',
    exampleThree:
      'If dogfooding doesn’t seem possible at first; isolate certain parts, or change future development to allow for it. ',
  },
  {
    id: 'pink-22',
    color: 'deeppink',
    title: 'Feature Toggles',
    subTitle: 'Heuristics',
    description:
      'Strategy Heuristic: Hide functionality behind configuration parameters. Activate/deactivate the feature without deploying code!',
    exampleOne:
      'Hidden features after release can be tested in the most production - like environment possible: Production.',
    exampleTwo:
      'Want to experiment with a new feature, but unsure about the impact ? Make sure you’re able to roll back with the flip of a switch!',
    exampleThree:
      'Feature toggles are powerful, but adding too many can create several extra layers of complexity.Test them!',
  },
  {
    id: 'pink-23',
    color: 'deeppink',
    title: 'Chaos Engineering',
    subTitle: 'Heuristics',
    description:
      'Strategy Heuristic: Chaos Engineering uses test techniques to try and tear down your production environment.',
    exampleOne:
      'Problems in production are a matter of time. Drill your team to deal with this by practicing on scheduled disasters, often called ‘Game days’.',
    exampleTwo:
      'Have ‘automated chaos’ randomly create disasters for your team, then make it more robust. ',
    exampleThree:
      'Build in resiliency by having contingency plans when outages happen.',
  },

  {
    id: 'pink-24',
    color: 'deeppink',
    title: 'Three Amigos',
    subTitle: 'Heuristics',
    description:
      'Strategy Heuristic: A developer, product owner and tester go to a meeting. Magic happens! ',
    exampleOne:
      'Having a representative of different roles and perspective in a meeting gives everyone a broader & deeper understanding.',
    exampleTwo:
      'During design workshops or requirement refinement sessions, testers and developers are excellent at enhancing acceptance criteria.',
    exampleThree:
      'A bug triage meeting with all three roles present can help to : 1) set priority, 2) decide what a fix could be and 3) decide how to test it.',
  },
  {
    id: 'pink-25',
    color: 'deeppink',
    title: 'Peer Reviews',
    subTitle: 'Heuristics',
    description:
      'Strategy Heuristic: A team member makes code changes. Right after this, a different team member reviews the code and gives feedback.',
    exampleOne:
      'Having a team member look at your code before deploying is often part of the development process.',
    exampleTwo:
      'Our own errors are often so obvious to others. Four eyes simply see more than two.',
    exampleThree:
      'Peer review is not only possible on source code, but also on test code, documentation and User Stories. ',
  },{
    id: 'red-1',
    color: 'red',
    title: 'Production Test Tenant',
    subTitle: 'Observability',
    description:
      "Manipulate: Tagging testing actions taken in production with 'test' so that systems know to separate them from actual usage.",
    exampleOne:
      "Building a webshop? Consider creating a 'Test' country which can only be seen by some users and tell systems, such as accounting, to ignore it.",
    exampleTwo:
      'Run your scripts & automations on productions for your test tenant.',
    exampleThree:
      'The team will get close-to-real feedback, but with increased risk of something going wrong in production.',
  },{
    id: 'red-2',
    color: 'red',
    title: 'Logging',
    subTitle: 'Observability',
    description:
      "Gather: The software can write books. They're about as readable as a book on Advance Differential Equations, but hold immensely useful information. Structure them!",
    exampleOne:
      'Logging context rich, arbitrarily wide events is the foundation of observability. E.g. It enable you to find out who, what, when, and where a pesky error happened!',
    exampleTwo:
      "Some services return a 404 as part of the functionality. This doesn't have to mean something went wrong.",
    exampleThree:
      "Try to make logging accessible with visualisation and specialised tools. The days where log-digging exclusively meant reading through 'less service.log' are over.",
  },{
    id: 'red-3',
    color: 'red',
    title: 'Distributed Tracing',
    subTitle: 'Observability',
    description:
      'Tracing: At the entry point of your system, assign a unique ID to actions made by the same agent. This way, the same agent can be traced across services, logs, etc.',
    exampleOne:
      "In a distributed system, you don't want to piece together a certain action across all the different services on your own. Add a correlation ID and all the information you can to each service log.",
    exampleTwo:
      'This is especially handy in stressful situations like being on-call or debugging a hard defect.',
    exampleThree:
      "It can also be useful for testers: Which way does a request take through the system and why? Is there a risk? Can your request take a 'shorter route'?",
  },{
    id: 'red-4',
    color: 'red',
    title: 'Alerting',
    subTitle: 'Observability',
    description:
      'Trigger: Monitor for unwanted behaviour such as a high number of error codes over a short time. Have alerts in place to warn you before your users do.',
    exampleOne:
      "Define Service Level Objectives like '98% uptime' and alert yourself early to avoid being on-called out of bed. You want to deal with this during working hours.",
    exampleTwo:
      "You can - and should - alert based on business metrics. You want to know if your 'new order' calls are close to zero for an extended time to investigate why.",
    exampleThree:
      "Don't be too 'trigger-happy'. If everything is important, nothing is. Define only your most crucial alerts.",
  },{
    id: 'red-5',
    color: 'red',
    title: 'Anomaly Detection',
    subTitle: 'Observability',
    description:
      "Trigger: Alerts are not always straightforward. You look for something outside of the statistical 'normal'. You know what 99% looks like, this warns you about the 1%.",
    exampleOne:
      'Anomaly Detection applies the use of Statistical Analysis methods on the systemÕs real time output to find outliers.',
    exampleTwo:
      'There are powerful tools out there to get you started. If you are hosted on a public Cloud, the vendor they might have services available.',
    exampleThree:
      'You find out that one service has been restarting a little bit too often. Why? Also, why does that not affect your users?',
  },{
    id: 'red-6',
    color: 'red',
    title: 'Business Metrics',
    subTitle: 'Observability',
    description:
      "Gather: The graph of sales numbers is steadily rising? Nice. Total revenue through ads? Useful. A sudden drop?! We're losing money! Action-time.",
    exampleOne:
      'Identify use cases critical to your business, e.g. logins or checkouts.',
    exampleTwo:
      "Define thresholds for these critical use cases, e.g. '95% of our customers can perform action: check out'.",
    exampleThree:
      'Identify how the use cases run through the system and how you can include these actions and the defined thresholds in the monitoring stack.',
  },{
    id: 'red-7',
    color: 'red',
    title: 'Black Box Monitoring',
    subTitle: 'Observability',
    description:
      "Monitor: Network traffic, hard disk space, and memory usage don't point out what is exactly wrong, but they can act as smoke where there might be fire..",
    exampleOne:
      'Things you see or experience in Black Box Monitoring are usually also visible to your users: the app is slow or crashes.',
    exampleTwo:
      'In general, Black Box Monitoring is good at telling you what is wrong right now in your system and a good candidate for on-call-alerts.',
    exampleThree:
      "It helps you to identify incorrect behaviour, but it likely won't help to find the root cause.",
  },{
    id: 'red-8',
    color: 'red',
    title: 'White Box Monitoring',
    subTitle: 'Observability',
    description:
      'Monitor: Database queries, user paths, unexpected response codes are triggers that point us to the exact problems. Best to keep a close eye on them.',
    exampleOne:
      'White Box Monitoring is based on the internals of the systems like logs or internal HTTP calls.',
    exampleTwo:
      "It is very well suited to find underlying problems which have not reached the customer or 'boiling points' to a real outage like unusual service restarts.",
    exampleThree:
      "Google makes 'heavy use of white box monitoring with modest but critical uses of black box monitoring' - Site Reliability Engineering, Beyer, Jones, Petoff & Murphy",
  },{
    id: 'red-9',
    color: 'red',
    title: 'Event Logging',
    subTitle: 'Observability',
    description:
      'Tracing: Keep a history of each datapoint. When was the last time the shopping cart was edited? What was inside it before that? Can we return to that state?',
    exampleOne:
      'Event Logging thinks of every state change in your software as a series of events, which it captures and stores.',
    exampleTwo:
      'Since all events are stored, you can repeat them for debugging or reverting back to a previous state. This can also help in testing, when you can set your system back to a certain point and then explore a different route from there than previously.',
    exampleThree:
      "In some highly restricted industries, Event Storing might be necessary as an audit log to show you can track the 'what and when' of your software changes.",
  },
{
    id: 'red-10',
    color: 'red',
    title: 'Real User Monitoring',
    subTitle: 'Observability',
    description:
      'Monitor: Observe everything a user does in the system, how long it takes, and whether they are successful at it.',
    exampleOne:
      "Some tools assign a 'user happiness metric' to their journey. Whether it was fast, frustrating, or unhelpful.",
    exampleTwo:
      'How many user sessions actually end up with them buying or using our service? At which point is the most frequent failure/abandonment?',
    exampleThree:
      'A powerful technique, but it only helps you in production. Before that, the data in those environments is too limited.',
  },
{
    id: 'red-11',
    color: 'red',
    title: 'Tap Compare',
    subTitle: 'Observability',
    description:
      "Manipulate: Don't want to write the script to simulate actual usage for the new feature? Pluck the most used calls from production and run them on the dev environment.",
    exampleOne:
      'Mostly a regression test technique by which you run vast amounts of production data through the changed system to see if anything bad happens.',
    exampleTwo:
      "Tap Compare can help when there is a lot of moving data in the test systems and it is hard to maintain a regression test set, especially when you don't control all data sources.",
    exampleThree:
      "Combined with other techniques - e.g. Dark Launches - you can automate parts of a Tap Compare and don't need to analyse it manually. ",
  },
{
    id: 'red-12',
    color: 'red',
    title: 'Build it, run it',
    subTitle: 'Observability',
    description:
      'Trigger: Get to know your production problems first hand and take ownership.',
    exampleOne:
      'Putting developers on-call is a very effective quality measurement. The people who can fix stuff should also be responsible for it running correctly.',
    exampleTwo:
      'The state of the production environment is a shared responsibility. Everyone has a stake.',
    exampleThree:
      'After an on-call experience, perform a Blameless Postmortem. Do. not. skip. the. Postmortem!',
  },
{
    id: 'red-13',
    color: 'red',
    title: 'Dark Launch',
    subTitle: 'Observability',
    description:
      'Monitor: Only release your new features to production for a fraction of your users. Get feedback before taking the big leap.',
    exampleOne:
      'Launching a new feature to just the power-users will give you an idea of its usefulness.',
    exampleTwo:
      'Risk is potentially reduced by a release to only sporadic users of the product.',
    exampleThree:
      'If time zones or geographical locations are difficult, reduce complexity by gradually releasing to locations.',
  },
{
    id: 'red-14',
    color: 'red',
    title: 'Zero Downtime Approach',
    subTitle: 'Observability',
    description:
      'Trigger: When your business is dependent on the service being available at all times, downtime becomes a huge cost. How does the service stay up and running?',
    exampleOne:
      'Have multiple instances of the system running so that one can take over when the active one fails.',
    exampleTwo:
      'A Zero Downtime requirement comes with a very heavy investment. Which systems are in place to protect, prevent & cure downtime? Maybe there should be a test for that?',
    exampleThree:
      'Challenge this requirement approach: Do you want to spend money on Mean Time Between Failures, or Mean Time To Repair?',
  },
{
    id: 'red-15',
    color: 'red',
    title: 'Service Level Indicators',
    subTitle: 'Observability',
    description:
      'Monitor: Service level agreements between services are quite common. Service Level Indicators are measurements taken to monitor what was agreed upon.',
    exampleOne:
      'Common Service Level Objectives are availability or response times of services involved and the team in case of an outage.',
    exampleTwo:
      "Don't fall into the trap of adding too many SLOs. In complex systems they might end up slowing you down. Choose SLOs that are meaningful and important.",
    exampleThree:
      'Try to make the SLOs as automated and tool-assisted as possible.',
  },
  {
    id: 'darkblue-1',
    color: 'darkblue',
    title: 'Blameless Postmortem',
    subTitle: 'Dealing With Change',
    description:
      'Innovate: It went wrong. Horribly. No need for drama or blame! What can we do about it now and how do we prevent it from happening in the future?',
    exampleOne:
      'It’s very human to want someone to blame. Try to fight that initial instinct, because it will only create animosity.  Find out what allowed the mistake in the first place.',
    exampleTwo:
      'Any complex system will eventually show problems or break down over time. Embrace this fact, learn and adapt.',
    exampleThree:
      'The focus of a Blameless Postmortem is all about learning & shaping a common understanding of what went wrong and how to make sure it won’t happen again.',
  },
  {
    id: 'darkblue-2',
    color: 'darkblue',
    title: 'Load Balancing',
    subTitle: 'Dealing With Change',
    description:
      'Adapt: A setup that automatically balances traffic among different servers, lowering the chance a server becomes a bottleneck.',
    exampleOne:
      'When you expect lots of traffic to your system or moments of high peaks, a load balancer is a welcome solution.',
    exampleTwo:
      'With a load balancer, you can direct traffic away from the servers you’re deploying on, opening up many interesting possible scenarios.',
    exampleThree:
      'Testing the performance increase is mostly done by monitoring before and after activating the load balancer.',
  },
  {
    id: 'darkblue-3',
    color: 'darkblue',
    title: 'Anti-Corruption Layer',
    subTitle: 'Dealing With Change',
    description:
      'Resist: In distributed systems, even the technology used differs from place to place. Systems protect their language semantics by implementing a translation layer.',
    exampleOne:
      'When integrating different scheduling apps, the data model of a meeting might vary greatly. An ACL helps translate them to your standard.',
    exampleTwo:
      'The layer protects your system from changes made in an external system.',
    exampleThree:
      'For evolvability, an ACL can enable one system to constantly grow and change without impacting the model of a depending service.',
  },
  {
    id: 'darkblue-4',
    color: 'darkblue',
    title: 'Circuit Breaker',
    subTitle: 'Dealing With Change',
    description:
      'Adapt: A monitoring system on the communication layer that triggers when the load gets too high. The triggered event can be several different things.',
    exampleOne:
      'By some anomaly the database gets called 100 times per second and threatens to crash. The Circuit Breaker picks up on this, activates and shuts down the process.',
    exampleTwo:
      'Similarly, it can protect from DOS attacks by throttling certain users.',
    exampleThree:
      'Circuit breaker implementations have a small negative impact on performance.',
  },
  {
    id: 'darkblue-5',
    color: 'darkblue',
    title: 'Bulkhead',
    subTitle: 'Dealing With Change',
    description:
      'Adapt: Partition load across your infrastructure resources so that once a service fails or is heavily used, other consumers face less impact.',
    exampleOne:
      'When dividing services with bulkheads, consider both business and technical implementations. How are your users and user paths distributed?',
    exampleTwo:
      'Separate sessions of consumers can be partitioned as well. This way nobody else is impacted when one person’s journey fails or puts a heavy load on the system.',
    exampleThree:
      'This pattern can help critical consumers by protecting their resources from load and errors triggered by standard users or consumers.',
  },
  {
    id: 'darkblue-6',
    color: 'darkblue',
    title: 'Caching',
    subTitle: 'Dealing With Change',
    description:
      'Adapt: Keep frequently needed data in the working memory of a system. This speeds up calculations considerably in contrast to getting this data from a database every time.',
    exampleOne:
      'Your application can have a really popular product or profile that is accessed very often. Consider caching it so as not to keep loading it every several seconds. ',
    exampleTwo:
      'Keep track of frequently used data of a user and store it for quicker application performance.',
    exampleThree:
      'When caching for every user, you reduce the load on the backend multiplied by your number of users. The benefits can be enormous, for the user, and could be expensive for the business. Wisely choose what to cache.',
  },
  {
    id: 'darkblue-7',
    color: 'darkblue',
    title: 'Distributed Systems',
    subTitle: 'Dealing With Change',
    description:
      'Innovate: Separating systems by very specific business domains, keeping them small and maintainable, often has big advantages over building one big monolith.',
    exampleOne:
      'A distributed system splits responsibilities over different systems. For example: Customer management is one system.',
    exampleTwo:
      'One major advantage to the distributed systems pattern is that every system can be deployed independently from each other. A draw back is increased complexity and risk.',
    exampleThree:
      'Domain Driven Design has a wealth of ideas on this. Build systems that support user groups or consumers who talk the same language, and do the same things.',
  },
  {
    id: 'darkblue-8',
    color: 'darkblue',
    title: 'Single Sign On',
    subTitle: 'Dealing With Change',
    description:
      'Resist: Managing authentication & authorisation across different products, and different companies.',
    exampleOne:
      'Accessing your email, schedule, contacts, browser history all on the same account, across devices. Pretty handy!',
    exampleTwo:
      'A healthcare provider accesses many services such as patient identity, medicine, and law updates. They might want to control the rights to access for this data. ',
    exampleThree:
      'In some countries, it’s possible to buy a house online, just by proving your identity through a government application.',
  },
  {
    id: 'darkblue-9',
    color: 'darkblue',
    title: 'Eventual Consistency',
    subTitle: 'Dealing With Change',
    description:
      'Adapt: Writing and editing data across different linked systems can go very wrong. These are a set of rules that keep your data states consistent.',
    exampleOne:
      "Some assumptions need to be made concerning time rules. Such as 'last writer wins' or 'first writer wins'. Time plays a big role.",
    exampleTwo:
      'It’s perfectly possible that one system holds out-of-date data, while all others stored the new. It will eventually be updated and therefore, consistent.',
    exampleThree:
      "Your bank balance will most likely not use 'eventual consistency' as this needs more strict consistency. Apps storing weather data might.",
  },
  {
    id: 'darkblue-10',
    color: 'darkblue',
    title: 'API Gateway',
    subTitle: 'Dealing With Change',
    description:
      'Resist: One API to rule them all. This extra layer is the primary access point for clients and then distributes or collects what is needed to & from different services.',
    exampleOne:
      'Different clients, such as Desktop, iOS or Android might need different results from the same APIs. An API gateway, or several of them, can regulate this.',
    exampleTwo:
      'As an extra layer between your users and your system, it regulates incoming API calls & can potentially add more security.',
    exampleThree:
      "Pressing 'buy' potentially fires one API call that is then split into: 'get address' from one system, 'get articles' from another, 'shipping options' from yet another.",
  },
  {
    id: 'darkblue-11',
    color: 'darkblue',
    title: 'Container Security Scanning',
    subTitle: 'Dealing With Change',
    description:
      'Resist: Containers took the world by storm. Their benefits to deliver at speed are immense. Keeping them secure proves to be challenging.',
    exampleOne:
      'Containers give a large area for attackers to find vulnerabilities. The central kernel, for example, is an excellent target.',
    exampleTwo:
      'Having so many moving parts in production obscures the visibility of vulnerabilities.',
    exampleThree:
      'Bring Container Security Scanning to your pipeline to mitigate the risk of a compromised container shipping off to production.',
  },
  {
    id: 'darkblue-12',
    color: 'darkblue',
    title: 'Static Code Analysis',
    subTitle: 'Dealing With Change',
    description:
      'Resist: Analysing code without executing it with the aim to find flaws.',
    exampleOne:
      'There are many static code analysation tools out there to detect issues without even running the program. ',
    exampleTwo:
      'Try to explain your code to someone else, you’ll be amazed by the insights the process of explaining and questioning provides.',
    exampleThree:
      "It can provide information on lines of code covered by tests, dead code, and code smells. It doesn’t just check your code's syntax, but also identifies potential security flaws.",
  },
  {
    id: 'darkblue-13',
    color: 'darkblue',
    title: 'Infrastructure as Code',
    subTitle: 'Dealing With Change',
    description:
      'Adapt: Specify the infrastructure your system needs as code, so that any server can read it. This way, it doesn’t matter where it’s hosted. ',
    exampleOne:
      'Infrastructure as code enables you to review and test your infrastructure.',
    exampleTwo:
      'The ease of use not only saves costs and enables you to deploy faster with more reliability, as most of the work is done automatically.',
    exampleThree:
      'Having specifications as code enables it to be part of source control, giving you more control and visibility.',
  },
  {
    id: 'darkblue-14',
    color: 'darkblue',
    title: 'Configurations as Code',
    subTitle: 'Dealing With Change',
    description:
      'Adapt: Making your environments more flexible by extracting the configuration of the system into code. These are managed within their own pipeline, version control, etc. ',
    exampleOne:
      'Having Configurations as Code enables you to store everything needed to build an environment in one place. This makes it more repeatable and debuggable.',
    exampleTwo:
      'Want to run your test environment slightly different than a production environment? Manage this with code.',
    exampleThree:
      'Flip a feature toggle enabling or disabling a new functionality with code.',
  },
  {
    id: 'darkblue-15',
    color: 'darkblue',
    title: 'Separation of Concerns',
    subTitle: 'Dealing With Change',
    description:
      'Resist: Identify and split your software into manageable, distinct parts. One piece should deal with only one responsibility.',
    exampleOne: 'Start with presentation, logic, and content layers.',
    exampleTwo:
      'Very distinct responsibilities are the key. Overdoing this might actually increase complexity. Make sure parts are coherent and understandable. Contracts can help you keep control.',
    exampleThree:
      'Keep an overview by ordering the partitions into a hierarchy. This will help with debugging.',
  },
  {
    id: 'darkblue-16',
    color: 'darkblue',
    title: 'Command Query Responsibility Segregation',
    subTitle: 'Dealing With Change',
    description:
      'Resist: This pattern makes two distinct models for Reading and Writing. This enables more flexibility and increases performance.',
    exampleOne:
      'For a bank account system, a write would be a single action of payment. A read action would be all historical transfers over multiple accounts.',
    exampleTwo:
      'It can be useful in some systems but not in others. Is your Read model significantly different than your Write model or is there too much overlap?',
    exampleThree:
      'CQRS naturally fits well with a task-based UI, Event Sourcing, and Domain Driven Design systems.',
  },
  {
    id: 'darkblue-17',
    color: 'darkblue',
    title: 'Continuous Integration',
    subTitle: 'Dealing With Change',
    description:
      'Innovate: Instead of developing software locally for days, integrate your work into the shared repository every few lines of code written. This reduces risks in conflicting changes.',
    exampleOne:
      'Trunk Based Development enables teams to reliably work together on the same thing, consistently. Integrate at least daily.',
    exampleTwo:
      'Continuous Integration heavily depends on automated tests. These checks should be designed as a first protection mechanism.',
    exampleThree:
      'Working on the same codebase as a team in small iterations increases the shared responsibility of a working product.',
  },
  {
    id: 'darkblue-18',
    color: 'darkblue',
    title: 'Continuous Delivery',
    subTitle: 'Dealing With Change',
    description:
      'Innovate: Deliver software often. Your pipeline enables you to deliver to production frequently and with minimal risk. Try, Fail, Learn, and Adapt quicker and in a more controlled manner.',
    exampleOne:
      'When you deliver constantly, quality needs to be there from the start. Conversations happen sooner. Doubts are tackled from the start.',
    exampleTwo:
      'Some companies deploy code every ten seconds. It’s not a goal in itself, but consider what you could apply to improve the development process.',
    exampleThree:
      'Imagine giving the stakeholders the power to release at any given moment. How does that shift your process & mindset?',
  },
  {
    id: 'darkblue-19',
    color: 'darkblue',
    title: 'Consumer Driven Contract Testing (CDCT)',
    subTitle: 'Dealing With Change',
    description:
      'Resist: Let the users or services who use the API decide what data they can get. Provide them with a flexible way to specify what they expect from the API.',
    exampleOne:
      'Just finished cleaning up your API from legacy code? Run your CDCTs to see if you break any of your consumer’s workflow. Ideally, after each change.',
    exampleTwo: 'Run tests against APIs to be aware of changes.',
    exampleThree:
      '"The call came from within the house": since microservice systems have a lot of APIs within themselves, CDCTs can help you track defects to the changed microservice.',
  },
  {
    id: 'darkblue-20',
    color: 'darkblue',
    title: 'Pre Mortem',
    subTitle: 'Dealing With Change',
    description:
      'Adapt: If we release today, what would be the absolute worst things that could go wrong? Think about future risks to deal with them now.',
    exampleOne:
      'Also called the "nightmare game". Is there a newspaper headline you most definitely want to avoid triggering with the product?',
    exampleTwo:
      'Doing a Pre Mortem with your team and stakeholders will make concerns and uncertainties more transparent.',
    exampleThree:
      'This format focuses on what’s important & what might have been overseen or neglected.',
  },
];
