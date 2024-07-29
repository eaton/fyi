---
id: post.lj283
type: BlogPosting
name: 'Sweet Merciful Jesus, Make The Pain Stop'
isPartOf: blog.lj
date: 2002-09-16T12:45:00.000Z
---
OK, it's not quite that bad, but converting a networked IO function to a threaded helper class is downright PAINFUL. Ow, ow, ow, ow. Trying to pare it down to see what can go in the single-thread loop and what can be shudffled off to the helper threads... trying to keep things as simple as possible but still realize the performance benefits...

I've never worked with threading before, and all this concurrency stuff is freaking me out. What if both threads try to modify the results array? They SHOULD play nicely together, since they all know the box they're allowed to modify, but the whole system seems like a one way trip to troubleshooting hell...
