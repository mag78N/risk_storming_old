export const csvOrangecards = [
  {
    id: 'orange-1',
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
    title: 'Tediousness',
    subTitle: 'Patterns',
    description:
      'Approach: Repetitive tasks and quick-sequence actions. Do you feel you need too many clicks for your actions? ',
    exampleOne:
      "You don't have to have a full-blown automation suite to perform repetitive checks. Consider throw-away automation checks to relieve the pain.",
    exampleTwo:
      'Inputting many records of data one by one can be really tedious. Can we add shortcut keys or import functionality? Which actions seem wasteful? ',
    exampleThree:
      'Can we reduce the number of clicks the user has to do? What if we increase the actions?',
  },
  {
    id: 'orange-3',
    title: 'Fluency',
    subTitle: 'Patterns',
    description:
      'Approach: Are there long wait times, pauses, loading screens or interruptions? ',
    exampleOne:
      'Loading screens can be fragile. They all have their own fickle behaviour. You leave them alone and they do nothing. You start clicking around and everything breaks down. ',
    exampleTwo:
      "You're putting in a record of data. Finally done, so you save. Next record. Which data would you like the product to show from the last record?",
    exampleThree:
      'Imagine "country" dropdowns where the most used country was all the way down the list of 300 options.',
  },
  {
    id: 'orange-4',
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
    title: 'Dependencies',
    subTitle: 'Patterns',
    description:
      'Approach: A system rarely exists on its own. What does your product depend on?',
    exampleOne:
      "Integrating with a system that's being built by another firm is often a hell of a job. Communication is key to insuring some quality around integration.",
    exampleTwo:
      'As soon as multiple products have to start working together you have to deal with many decision makers and the plans can get blurry. Your group of stakeholders can multiply suddenly.',
    exampleThree:
      "One user's work is often dependent on the work of another. How is the work handed over? Does communication proceed the handoff?",
  },
  {
    id: 'orange-7',
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
    title: 'Confirmation Bias',
    subTitle: 'Patterns',
    description:
      "Bias: The tendency to interpret and recall information in a way that confirms one's beliefs or hypotheses.",
    exampleOne:
      'The tester ran a test script that had  expected result: "I should be able to log in". She failed to notice she was logged in as someone else. She was logged in, but didn\'t look further.',
    exampleTwo:
      "A developer asked a question which he already had a possible solution to and didn't really listen to the answer that was given.",
    exampleThree:
      'The team believes the application to be ready for production. Some automated checks turned "red" during the last build, but we discarded them as flaky.',
  },
  {
    id: 'orange-12',
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
    title: 'Dunning-Kruger Effect',
    subTitle: 'Patterns',
    description:
      "Bias: Being unable to assess your own skill, thereby thinking it's much greater than it actually is.",
    exampleOne:
      "It's easy to grow overconfident in your automation skills. All green doesn't necessarily mean it's all good.",
    exampleTwo:
      'When the team picks up so much business knowledge that it starts making assumptions without communication. ',
    exampleThree:
      'A project manager who mistakes his Excel planning capabilities with actual project managing skills.',
  },
  {
    id: 'orange-14',
    title: 'Anchoring',
    subTitle: 'Patterns',
    description:
      "Bias: The first piece of information given to people has a huge influence when they're making decisions.",
    exampleOne:
      "When checking a list of fixes the previous results of your testing will greatly influence whether you'll be lenient the next fix or extra harsh.",
    exampleTwo:
      'While estimating tasks during sprint planning, the first number being mentioned will draw up or down the estimations of all the other team members. ',
    exampleThree:
      'The previous requirement you tested had 5 bugs. This number might influence your motivation to find the same, more or fewer bugs in the next.',
  },
  {
    id: 'orange-15',
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
    title: 'Status Quo Bias',
    subTitle: 'Patterns',
    description:
      'Bias: The unwillingness to change from the current situation. The feeling that if you change, it becomes worse.',
    exampleOne:
      "An unwillingness to adjust the process because you are following 'Best Practices' or because you've always done it this way.",
    exampleTwo:
      'A programmer not trusting a tester to change code or a tester unwilling to have a programmer test. ',
    exampleThree:
      'Users are hostile of the new product. It will change the way things are done and might make co-workers seem redundant.',
  },
  {
    id: 'orange-17',
    title: 'IKEA-effect',
    subTitle: 'Patterns',
    description:
      "Bias: When someone gives more value to something they built over something they haven't.",
    exampleOne:
      "A programmer could hold his code in much higher regard and think it's of better quality than it really is.",
    exampleTwo:
      "An automator might assume that his automation is correct when it's flawed.",
    exampleThree:
      'A programmer might be reluctant to replace his code for a new tool that might do its functions better.',
  },
  {
    id: 'orange-18',
    title: 'Observer-Expectancy Effect',
    subTitle: 'Patterns',
    description:
      "Bias: You only pick up the signals that you expect and not the ones you aren't expecting.",
    exampleOne:
      "A check often  suffers of this bias. It checks what it's told to check, but any other problems are ignored.",
    exampleTwo:
      "A programmer testing his own code will often test in function of how he understood the requirement in the first place. Therefore, he'll usually be limited in his creativeness and ideas.",
    exampleThree:
      'A project manager might see the burndown go down really fast. However, the team decided to do the easy tasks first and is now stuck with all the heavy ones. ',
  },
  {
    id: 'orange-19',
    title: 'Ostrich Effect',
    subTitle: 'Patterns',
    description:
      'Bias: A psychological effect where people try to ignore possible risks when they are uncovered. ',
    exampleOne:
      "You're close to a deadline and find a critical bug. People might choose to ignore this and go ahead anyway.",
    exampleTwo:
      'A team member is underperforming, but no one wants to stir things up and confront him. ',
    exampleThree:
      "At a certain point the team finds out they won't be able to make the deadline. They decide to hold up appearances and not tell their stakeholders.",
  },
  {
    id: 'orange-20',
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
];
