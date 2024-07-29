---
id: post.vpd-422
type: BlogPosting
name: VotingAPI State of the Union
isPartOf: blog.viapositiva
date: 2006-03-27T23:04:29.000Z
commentCount: 1
slug: votingapi-state-union
---
About six months ago I decided that I [really, really wanted a centralized API for voting and content-rating systems](http://drupal.org/node/33629) in Drupal.

After a few rounds of trial-and-error revisioning, VotingAPI was born. It's been encouraging to see people pick it up and utilize it to [create](http://drupal.org/node/49767) a [variety](http://drupal.org/node/53611) of [new tools](http://drupal.org/node/48774) for Drupal sites.

Additional development has been sponsored by [Code0range](http://www.code0range.net/), and while there have been a few delays due to my schedule, the results are exciting. They needed a 4.7 upgrade of the [Node Moderation](http://drupal.org/node/11170) module, which allows users to collaboratively decide what content should be put on the front page. The new version uses VotingAPI for its backend data storage. In addition, they're sponsoring the completion of a new more flexible voting system that allows administrators to moderate different node types, comments, and so on indepdendently. That part of the project has driven a lot of enhancements to the underlying VotingAPI itself.

For each individual VotingAPI-based project, the benefits are marginal. There's a shared API, so some operations (like casting votes and retrieving them) don't have to be written by the module author. The real advantage comes as the shared data is leveraged by presentation and workflow modules. Integration with Earl Miles' essential Views module is in place, though there's still work to be done to make it cleaner and easier for admins to customize. The [Voting Actions](http://drupal.org/node/46895) module also ties it into the Actions API. Vote results can now drive anything from node promotion, emails, etc.

Working with the various developers who've been using VotingAPI has definitely been an educational process. Things I thought were unecessary turned out to be anything but, and stuff I thought would be essential for the API have been overkill in other areas. For the most part, though, I think it's going well. The next steps are laid out pretty clearly, I think.

1. **Integrate Voting Actions directly into the API**  
    There's already [an issue in the queue](http://drupal.org/node/52726) for this change, and some of the preliminary coding has already been done. The API needs to allow modules to expose arbitrarily complex sets of filtering criteria, and actions to take if the criteria are met. (For example, promoting images to the front page if enough people like them, but archiving them in a 'cult hits' gallery if only a few people REALLY love them.) There needs to be a user interfae for advanced admins to tweak these criteria and action sets, as well as a convenient way of saving, importing, and exporting them. Basically, it needs a UI that's less CRUD and more like the Views UI.
2. **Improve the Views integration**  
    Speaking of Views, VotingAPI already supports basic integration. A few key patches to views have already gone in to enable custom tabs on node screens, listing the votes each user has cast on a piece of content. Creating complex listings of voted content, though, is still difficult -- especially if a user has multiple voting modules installed and operating on different kinds of content side by side. The reasons it's tricky are wrapped up in the innards of VotingAPI's internal data storage and Views' way or representing filter criteria, but when the problem is solved it should get much easier to create things like 'top rated nodes' lists, lists of votes that a particular user has cast, and so on.
3. **More hooks for display**  
    Right now, most of the intelligence in VotingAPI revolves around calculation. It has default ways of aggregating data and saving it, and modules can override them as necessary. With Views module doing more heavy lifting for data display, though, it's necessary for modules to override how vote data and vote results are *displayed* as well. There's preliminary support for this in the SimpleVote module, and some more complex support in the under-development CustomVote code.
4. **Better documentation**  
    No, scratch that -- SOME documentation. Earl Miles has done a bang-up job documenting the complexities of Views module in his new series of [handbook pages](http://drupal.org/node/42592). The very simple uses of VotingAPI are straightforward, but once you get into he subtleties of multiple criteria, custom calculations, etc, it can get confusing.
5. **More work on separating Presentation, Calculations, and Actions**  
    This has already received some attention at [a thread on Drupal.org](http://drupal.org/node/53786) but it'll be important for the future. A 'voting construction kit' that lets users mix and match UI widgets (five star voting? a slider?) with custom calculations (the median of all votes weighted by the age of the vote?) with custom presentation (Bar graph of vote values? Chart of votes over time?) and so on would be awesome. It's hard to combine that sort of flexibility with an easy to use UI, though -- some features will always have to be the domain of experienced customization freaks or PHP programmers.
6. **Keep it fast**  
    Working on the CustomVote module, I realized how easy it is to churn the database if I'm not careful when doing vote aggregation, etc. Thinking through effective caching mechanisms -- especially when viewing pages that display tabular voting results -- is essential. The API itself is pretty clean as far as the DB is concerned, but additional support for caching wouldn't hurt.

Whew. I wasn't expecting to write THAT much, but it feels good to get it down and on record. Hopefully additional updates over the next couple of weeks will have good news for progress on these points.
