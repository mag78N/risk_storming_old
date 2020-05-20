export const darkbluecards = {
  'darkblue-1': {
    id: 'darkblue-1',
    color: 'dark-blue',
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
  'darkblue-2': {
    id: 'darkblue-2',
    color: 'dark-blue',
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
  'darkblue-3': {
    id: 'darkblue-3',
    color: 'dark-blue',
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
  'darkblue-4': {
    id: 'darkblue-4',
    color: 'dark-blue',
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
  'darkblue-5': {
    id: 'darkblue-5',
    color: 'dark-blue',
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
  'darkblue-6': {
    id: 'darkblue-6',
    color: 'dark-blue',
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
  'darkblue-7': {
    id: 'darkblue-7',
    color: 'dark-blue',
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
  'darkblue-8': {
    id: 'darkblue-8',
    color: 'dark-blue',
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
  'darkblue-9': {
    id: 'darkblue-9',
    color: 'dark-blue',
    title: 'Eventual Consistency',
    subTitle: 'Dealing With Change',
    description:
      'Adapt: Writing and editing data across different linked systems can go very wrong. These are a set of rules that keep your data states consistent.',
    exampleOne:
      'Some assumptions need to be made concerning time rules. Such as ‘last writer wins’ or ‘first writer wins’. Time plays a big role.',
    exampleTwo:
      'It’s perfectly possible that one system holds out-of-date data, while all others stored the new. It will eventually be updated and therefore, consistent.',
    exampleThree:
      'Your bank balance will most likely not use ‘eventual consistency’ as this needs more strict consistency. Apps storing weather data might.',
  },
  'darkblue-10': {
    id: 'darkblue-10',
    color: 'dark-blue',
    title: 'API Gateway',
    subTitle: 'Dealing With Change',
    description:
      'Resist: One API to rule them all. This extra layer is the primary access point for clients and then distributes or collects what is needed to & from different services.',
    exampleOne:
      'Different clients, such as Desktop, iOS or Android might need different results from the same APIs. An API gateway, or several of them, can regulate this.',
    exampleTwo:
      'As an extra layer between your users and your system, it regulates incoming API calls & can potentially add more security.',
    exampleThree:
      'Pressing ‘buy’ potentially fires one API call that is then split into: ‘get address’ from one system, ‘get articles’ from another, ‘shipping options’ from yet another.',
  },
  'darkblue-11': {
    id: 'darkblue-11',
    color: 'dark-blue',
    title: 'Container Security Scanning',
    subTitle: 'Dealing With Change',
    description:
      'Resist: Containers took the world by storm. Their benefits to deliver at speed are immense. Keeping them secure proves to be challenging.',
    exampleOne:
      'Containers give a large area for attackers to find vulnerabilities. The central kernel, for example, is an excellent target.',
    exampleTwo:
      'Having so many moving parts in production obscures the visibility of vulnerabilities. ',
    exampleThree:
      'Bring Container Security Scanning to your pipeline to mitigate the risk of a compromised container shipping off to production.',
  },
  'darkblue-12': {
    id: 'darkblue-12',
    color: 'dark-blue',
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
  'darkblue-13': {
    id: 'darkblue-13',
    color: 'dark-blue',
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
  'darkblue-14': {
    id: 'darkblue-14',
    color: 'dark-blue',
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
  'darkblue-15': {
    id: 'darkblue-15',
    color: 'dark-blue',
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
  'darkblue-16': {
    id: 'darkblue-16',
    color: 'dark-blue',
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
  'darkblue-17': {
    id: 'darkblue-17',
    color: 'dark-blue',
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
  'darkblue-18': {
    id: 'darkblue-18',
    color: 'dark-blue',
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
  'darkblue-19': {
    id: 'darkblue-19',
    color: 'dark-blue',
    title: 'Consumer Driven Contract Testing (CDCT)',
    subTitle: 'Dealing With Change',
    description:
      'Resist: Let the users or services who use the API decide what data they can get. Provide them with a flexible way to specify what they expect from the API.',
    exampleOne:
      'Just finished cleaning up your API from legacy code? Run your CDCTs to see if you break any of your consumer’s workflow. Ideally, after each change.',
    exampleTwo: 'Run tests against APIs to be aware of changes.',
    exampleThree:
      '“The call came from within the house”: since microservice systems have a lot of APIs within themselves, CDCTs can help you track defects to the changed microservice.',
  },
  'darkblue-20': {
    id: 'darkblue-20',
    color: 'dark-blue',
    title: 'Pre Mortem',
    subTitle: 'Dealing With Change',
    description:
      'Adapt: If we release today, what would be the absolute worst things that could go wrong? Think about future risks to deal with them now.',
    exampleOne:
      'Also called the ‘nightmare game’. Is there a newspaper headline you most definitely want to avoid triggering with the product?',
    exampleTwo:
      'Doing a Pre Mortem with your team and stakeholders will make concerns and uncertainties more transparent.',
    exampleThree:
      'This format focuses on what’s important & what might have been overseen or neglected.',
  },
};
