---
id: post.r7wN0mD
type: BlogPosting
name: The Language of Patterns
url: 'https://autogram.is/discussing/language-of-patterns/'
isPartOf: site.autogram
date: 2020-10-30T00:00:00.000Z
---

So, component and pattern-oriented ways of decomposing problems have become really common in web design and content modeling. They hit the programming world first, and it's interesting to see how the ideas and vocabulary made their way from the world of architecture (In particular, Christopher Alexander's _[A Pattern Language](https://www.amazon.com/gp/product/0195019199)_) to code.

The Gang Of Four book (_[Design Patterns](https://www.amazon.com/dp/0201633612)_, published in 1997) was a huge influence on the dev world, but two particular guys were writing about building software from reusable patterns in the 80s. In 1987, Kent Beck (one of the landed gentry of the Agile movement) and Ward Cunningham (the inventor of Wikis) collaborated on [the earliest presentations on pattern languages I've been able to find](http://c2.com/doc/oopsla87.html). It doesn't just spell out the *technical* aspects of the concept, but their motivations for introducing the pattern-centric approach to managing complexity.

They start by explaining Christopher Alexander's conviction that people who'll live, work, and socialize in a building should design it, because they have the clearest understanding of what they'll need. To Alexander, architectural patterns weren't just a way to standardize things, an efficiency tool for his own work, or a tool for teaching and understanding other architects. They were a way of boiling complexity down to the important choices *a structure's users* could make. Beck and Cunningham applied that reasoning to software: 

> Computer users should write their own programs. The idea sounds foolish when one considers the size and complexity… and the years of training for the design professions. Yet Alexander offers a convincing scenario.

In a [post from just two years ago](https://facebook.com/notes/kent-beck/my-personal-mission/1811782322187957/) Beck expands on the idea when describing life lessons he's learned: "Patterns isolate the repeating parts of problems and solutions so the unique aspects come into clearer focus."

The ideal of LEGO-esque systems isn't a silver bullet, and the Gang of Four Book is fairly criticized for [focusing the movement on code reuse](https://perl.plover.com/yak/design/) rather than Alexander, Beck, and Cunningham's deeper insights. The principle is still critical, though. When planning or evaluating component and pattern systems, one of the most important questions is, "What things does this system abstract away, and what things does it let us focus on?"
