---
id: post.vpd-451
type: BlogPosting
name: Multi-page forms and the coders who love them.
isPartOf: blog.viapositiva
date: 2006-08-08T06:41:25.000Z
commentCount: 3
slug: multi-page-forms-coders-love
---
chx and I spent some time this evening talking over the tricky connundrum of multipart (multi-step, multi-page, whatever you want to call them) forms in Drupal. Generally, they tend to fall into one of the following three categories:

1. A really huge form divided up into multiple steps. In this scenerio you probably want to validate at each step, but need to hold onto the values (perhaps in hidden fields) until all the steps are completed and the data can be processed.
2. A chain of forms that each complete and move on to the next. Each one should validate, submit, and hand off control to the next step, which may differ depending on the values submitted in the previous step.
3. Forms that build themselves. You do enter values, submit, and more fields (or different) appear in the form based on what you submitted. You submit again, and again, and so on until it's "done" and then the real work of processing the form is done.

The problem is that drupal\_get\_form(), that workhorse of form building, validation, and processing, doesn't really lend itself to forms that are in any way dynamic. To understand why (and understand what may be a solution), we'll first revisit the current form workflow.

1. Your function, mymodule\_page(), gets called. It constructs a form array and passes it to drupal\_get\_form().
2. drupal\_get\_form() looks to see if there is an incoming set of form values in the $\_POST variable. At this point, the answer is no.
3. drupal\_get\_form() skips over any validation or submission logic and just renders the $form array into HTML and spits it out.
4. the user fills in values and clicks SUBMIT. By default, It's pointing to the same page, so your mymodule\_page() function gets called again!
5. Your mymodule\_page() function builds its $form array again, and calls drupal\_get\_form() again.
6. This time, though, there IS an incoming set of values in the $\_POST variable. drupal\_get\_form() (via a helper function) takes the $form array that your mymodule\_page() function passed in, and walks through it, putting the incoming values into the proper slots in the $form array.
7. drupal\_get\_form() passes things on to drupal\_validate\_form(), which uses the passed-in $form, and the incoming $form\_values, to make sure everything is kosher.
8. If things aren't kosher, it just just spits out the rendered version of the form with the errors highlighted.
9. If things ARE kosher, it passes things on to drupal\_submit\_form(), which handles actually processing the form, saving data, etc. If a 'destination' page has been specified for the form, it redirects the browser to it. If not, it renders the form.

That works smashingly well for single page forms where you enter all of your data, submit, correct any errors, then submit again. But, as we said, the hangup is in step number 6, there. See it? It's sneaky. It's using a set of submitted values from the FIRST time you built the form in step 1, but validating them against the SECOND copy of the form that you built in step 5. This works fine if it's always the same, but in cases where the form is dynamic, there will be a mismatch between the two and it will always fail validation. There are ways around it that work in certain situations, but they all tend to fall down when faced with the demanding workflow of full-sized dynamic and multipart forms.

It appears, though, that [dopry's post on groups.drupal.org](http://groups.drupal.org/node/100) may be the key to the solution. What is it? That's coming soon...
