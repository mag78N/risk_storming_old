export const freeversionColorcards = [
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
  },
];
