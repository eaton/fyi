---
id: post.vpd-384
type: BlogPosting
name: 'Voting API: The Next Generation'
isPartOf: blog.viapositiva
date: 2005-12-11T16:51:04.000Z
commentCount: 2
slug: voting-api-next-generation
---
After a pleasant weekend of movie-watching, relaxing, and sporadic coding, there's a new version of VotingAPI checked into the Drupal CVS. It's probably as good a time as any to step back and examine the reason for the project.

1. **A framework, not a widget**  
    Existing voting solutions implemented good UI widgets, but provided few options for sites that needed a different voting workflow. Creating a new system required starting from square one again. VotingAPI implements the back end -- saving and retrieving votes, calculating results in a variety of ways, and so on -- so that other modules can handle the site-specific stuff.
2. **Make easy things easy**  
    A contributed voting module only needs to use three functions: votingapi\_set\_vote(), votingapi\_get\_user\_votes(), and votingapi\_get\_voting\_results(). Modules that implement complex voting systems and workflow can utilize optional parameters and helper functions to tap into more functionality, but simple voting scenerios are simple to code.
3. **Vote on anything**  
    Voting.module, node\_voting.module, and others were good solutions but they applied only to nodes. VotingAPI is content-agnostic, and can be used to rate nodes, comments, users, or fish. With comment moderation stripped out of the Drupal Core for version 4.7, there's a definite need for a clean system that can deal with comments as well.
4. **Multi-criteria voting**  
    This one's a show-stopper for sites that wanted to use voting to capture data on multiple aspects of a given thing. (Gathering community ratings for a game's graphics, audio, and plot, for example.)
5. **Vote in different ways**  
    Percentage voting, thumbs-up/thumbs-down voting, and custom voting styles are all supported. VotingAPI is smart enough to recognize the differences between the voting styles and calculate the correct results.
6. **Standardize data storage**  
    Existing voting systems all used custom data models. Voting data is valuable to lots of different modules; using a standard API to store and retrieve the data means other modules can be *consumers* of voting data without knowing what system *produced* the data.
7. **Expensive inserts, cheap selects**  
    VotingAPI automatically caches aggregate voting results (total number of votes, average vote, etc) for fast retrieval. Whenever a new vote is cast, aggregate data is recalculated and re-cached. That means easier, less expensive joins for views and filters.
8. **Hooks for other custom calculations**  
    Lesser-used aggregate functions, like median votes, karma-adjusted votes, and so on can be implemented via hook\_votingapi(). With it, modules can insert their own calculation logic during cache-time.

With last night's checkins, [VotingAPI.module](http://drupal.org/node/36041) finally supports all of these features. There's still work to do, and I can think of ways to improve both the caching and simplify retrieval of filtered voting results. As it stands, though, it's fully functional and ready for other module developers to tinker with. Both BuddaBoy and merlinofchaos from #drupal have been instrumental in testing and brainstorming; hopefully the results will make life easier for them, too.

Huzzah!
