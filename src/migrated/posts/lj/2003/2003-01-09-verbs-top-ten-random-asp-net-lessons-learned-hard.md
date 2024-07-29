---
id: post.lj511
type: BlogPosting
name: The Verb's Top Ten Random ASP.Net Lessons Learned The Hard Way
isPartOf: blog.lj
date: 2003-01-09T12:22:00.000Z
commentCount: 1
---
1. ASP.Net is not 'Code in HTML.' It's code with an HTML presentation layer. If you confuse the two, you're in for a world of hurt.
2. Learn the page event model. Love it. Know it. You'll thank yourself later.
3. Don't reinvent the wheel. The .Net framework is there for a reason, and chances are they've already written a good chunk of your code for you.
4. Learn about OOP. If you don't understand inheritance and basic design patterns, you'll be baffled by some of the design decisions inherent in ASP.Net.
5. User Controls are not include files. Period. If you treat them as such, you **will** regret it.
6. Don't code controls that depend on custom page classes. Sure, you **can**. But your code will be riddled with stuff like: CType(Page, MyCustomPageClass).MyCustomFunction(). If you really, really need to? Make a custom control class that overrides the Page property. That's what inheritance is about, remember?
7. If you're building your page contents dynamically every time it loads, be very, very, very careful about viewstate and postback. It might be worth it to kill the Viewstate and manage it yourself.
8. Learn ADO.Net. Really, really learn it. Pick up a good book and dedicate a weekend or two to it. ADO.Net is more flexible, but very scary if you're used to Connection->Recordset->Html hacking.
9. Use Tracing.
10. Did I mention that you should use tracing?
