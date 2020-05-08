export const redcards = {
  'red-1': {
    id: 'red-1',
    color: 'red',
    title: 'Production Test Tenant',
    subTitle: 'Manipulate',
    description:
      'Tagging testing actions taken in production with ÔtestÕ so that systems know to separate them from actual usage.',
    exampleOne:
      "Building a webshop? Consider creating a 'Test' country which can only be seen by some users and tell systems, such as accounting, to ignore it.",
    exampleTwo:
      'Run your scripts & automations on productions for your test tenant.',
    exampleThree:
      'The team will get close-to-real feedback, but with increased risk of something going wrong in production.',
  },
  'red-2': {
    id: 'red-2',
    color: 'red',
    title: 'Logging',
    subTitle: 'Gather',
    description:
      "The software can write books. They're about as readable as a book on Advance Differential Equations, but hold immensely useful information. Structure them!",
    exampleOne:
      'Logging context rich, arbitrarily wide events is the foundation of observability. E.g. It enable you to find out who, what, when, and where a pesky error happened!',
    exampleTwo:
      'Some services return a 404 as part of the functionality. This doesnÕt have to mean something went wrong.',
    exampleThree:
      "Try to make logging accessible with visualisation and specialised tools. The days where log-digging exclusively meant reading through 'less service.log' are over.",
  },
  'red-3': {
    id: 'red-3',
    color: 'red',
    title: 'Distributed Tracing',
    subTitle: 'Tracing',
    description:
      'At the entry point of your system, assign a unique ID to actions made by the same agent. This way, the same agent can be traced across services, logs, etc.',
    exampleOne:
      "In a distributed system, you don't want to piece together a certain action across all the different services on your own. Add a correlation ID and all the information you can to each service log.",
    exampleTwo:
      'This is especially handy in stressful situations like being on-call or debugging a hard defect.',
    exampleThree:
      "It can also be useful for testers: Which way does a request take through the system and why? Is there a risk? Can your request take a 'shorter route'?",
  },
  'red-4': {
    id: 'red-4',
    color: 'red',
    title: 'Alerting',
    subTitle: 'Trigger',
    description:
      'Monitor for unwanted behaviour such as a high number of error codes over a short time. Have alerts in place to warn you before your users do.',
    exampleOne:
      "Define Service Level Objectives like '98% uptime' and alert yourself early to avoid being on-called out of bed. You want to deal with this during working hours.",
    exampleTwo:
      "You can - and should - alert based on business metrics. You want to know if your 'new order' calls are close to zero for an extended time to investigate why.",
    exampleThree:
      "Don't be too 'trigger-happy'. If everything is important, nothing is. Define only your most crucial alerts.",
  },
  'red-5': {
    id: 'red-5',
    color: 'red',
    title: 'Anomaly Detection',
    subTitle: 'Trigger',
    description:
      "Alerts are not always straightforward. You look for something outside of the statistical 'normal'. You know what 99% looks like, this warns you about the 1%.",
    exampleOne:
      'Anomaly Detection applies the use of Statistical Analysis methods on the systemÕs real time output to find outliers.',
    exampleTwo:
      'There are powerful tools out there to get you started. If you are hosted on a public Cloud, the vendor they might have services available.',
    exampleThree:
      'You find out that one service has been restarting a little bit too often. Why? Also, why does that not affect your users?',
  },
  'red-6': {
    id: 'red-6',
    color: 'red',
    title: 'Business Metrics',
    subTitle: 'Gather',
    description:
      "The graph of sales numbers is steadily rising? Nice. Total revenue through ads? Useful. A sudden drop?! We're losing money! Action-time.",
    exampleOne:
      'Identify use cases critical to your business, e.g. logins or checkouts.',
    exampleTwo:
      "Define thresholds for these critical use cases, e.g. '95% of our customers can perform action: check out'.",
    exampleThree:
      'Identify how the use cases run through the system and how you can include these actions and the defined thresholds in the monitoring stack.',
  },
  'red-7': {
    id: 'red-7',
    color: 'red',
    title: 'Black Box Monitoring',
    subTitle: 'Monitor',
    description:
      'Network traffic, hard disk space, and memory usage donÕt point out what is exactly wrong, but they can act as smoke where there might be fire..',
    exampleOne:
      'Things you see or experience in Black Box Monitoring are usually also visible to your users: the app is slow or crashes.',
    exampleTwo:
      'In general, Black Box Monitoring is good at telling you what is wrong right now in your system and a good candidate for on-call-alerts.',
    exampleThree:
      'It helps you to identify incorrect behaviour, but it likely wonÕt help to find the root cause.',
  },
  'red-8': {
    id: 'red-8',
    color: 'red',
    title: 'White Box Monitoring',
    subTitle: 'Monitor',
    description:
      'Database queries, user paths, unexpected response codes are triggers that point us to the exact problems. Best to keep a close eye on them.',
    exampleOne:
      'White Box Monitoring is based on the internals of the systems like logs or internal HTTP calls.',
    exampleTwo:
      "It is very well suited to find underlying problems which have not reached the customer or 'boiling points' to a real outage like unusual service restarts.",
    exampleThree:
      "Google makes 'heavy use of white box monitoring with modest but critical uses of black box monitoring' - Site Reliability Engineering, Beyer, Jones, Petoff & Murphy",
  },
  'red-9': {
    id: 'red-9',
    color: 'red',
    title: 'Event Logging',
    subTitle: 'Tracing',
    description:
      'Keep a history of each datapoint. When was the last time the shopping cart was edited? What was inside it before that? Can we return to that state?',
    exampleOne:
      'Event Logging thinks of every state change in your software as a series of events, which it captures and stores.',
    exampleTwo:
      'Since all events are stored, you can repeat them for debugging or reverting back to a previous state. This can also help in testing, when you can set your system back to a certain point and then explore a different route from there than previously.',
    exampleThree:
      "In some highly restricted industries, Event Storing might be necessary as an audit log to show you can track the 'what and when' of your software changes.",
  },
  'red-10': {
    id: 'red-10',
    color: 'red',
    title: 'Real User Monitoring',
    subTitle: 'Monitor',
    description:
      'Observe everything a user does in the system, how long it takes, and whether they are successful at it.',
    exampleOne:
      "Some tools assign a 'user happiness metric' to their journey. Whether it was fast, frustrating, or unhelpful.",
    exampleTwo:
      'How many user sessions actually end up with them buying or using our service? At which point is the most frequent failure/abandonment?',
    exampleThree:
      'A powerful technique, but it only helps you in production. Before that, the data in those environments is too limited.',
  },
  'red-11': {
    id: 'red-11',
    color: 'red',
    title: 'Tap Compare',
    subTitle: 'Manipulate',
    description:
      "Don't want to write the script to simulate actual usage for the new feature? Pluck the most used calls from production and run them on the dev environment.",
    exampleOne:
      'Mostly a regression test technique by which you run vast amounts of production data through the changed system to see if anything bad happens.',
    exampleTwo:
      'Tap Compare can help when there is a lot of moving data in the test systems and it is hard to maintain a regression test set, especially when you donÕt control all data sources.',
    exampleThree:
      'Combined with other techniques - e.g. Dark Launches - you can automate parts of a Tap Compare and donÕt need to analyse it manually. ',
  },
  'red-12': {
    id: 'red-12',
    color: 'red',
    title: 'Build it, run it',
    subTitle: 'Trigger',
    description:
      'Get to know your production problems first hand and take ownership.',
    exampleOne:
      'Putting developers on-call is a very effective quality measurement. The people who can fix stuff should also be responsible for it running correctly.',
    exampleTwo:
      'The state of the production environment is a shared responsibility. Everyone has a stake.',
    exampleThree:
      'After an on-call experience, perform a Blameless Postmortem. Do. not. skip. the. Postmortem!',
  },
  'red-13': {
    id: 'red-13',
    color: 'red',
    title: 'Dark Launch',
    subTitle: 'Monitor',
    description:
      'Only release your new features to production for a fraction of your users. Get feedback before taking the big leap.',
    exampleOne:
      'Launching a new feature to just the power-users will give you an idea of its usefulness.',
    exampleTwo:
      'Risk is potentially reduced by a release to only sporadic users of the product.',
    exampleThree:
      'If time zones or geographical locations are difficult, reduce complexity by gradually releasing to locations.',
  },
  'red-14': {
    id: 'red-14',
    color: 'red',
    title: 'Zero Downtime Approach',
    subTitle: 'Trigger',
    description:
      'When your business is dependent on the service being available at all times, downtime becomes a huge cost. How does the service stay up and running?',
    exampleOne:
      'Have multiple instances of the system running so that one can take over when the active one fails.',
    exampleTwo:
      'A Zero Downtime requirement comes with a very heavy investment. Which systems are in place to protect, prevent & cure downtime? Maybe there should be aÊ test for that?',
    exampleThree:
      'Challenge this requirement approach: Do you want to spend money on Mean Time Between Failures, or Mean Time To Repair?',
  },
  'red-15': {
    id: 'red-15',
    color: 'red',
    title: 'Service Level Indicators',
    subTitle: 'Monitor',
    description:
      'Service level agreements between services are quite common. Service Level Indicators are measurements taken to monitor what was agreed upon.',
    exampleOne:
      'Common Service Level Objectives are availability or response times of services involved and the team in case of an outage.',
    exampleTwo:
      "Don't fall into the trap of adding too many SLOs. In complex systems they might end up slowing you down. Choose SLOs that are meaningful and important.",
    exampleThree:
      'Try to make the SLOs as automated and tool-assisted as possible.',
  },
};
