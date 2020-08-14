UPER Problem Solving Framework

U - Understand the problem.
P - Plan how to solve the problem.
E - Execute your plan.
R - Reflect on your work, your results, and the process. 

Understand:
Be honest with yourself with what you understand or don’t understand.

How much do I understand each topic?
Three types of testing: 
- Integration Testing: Several units of software are tested as a group to ensure they work together correctly.
- End-to-End Testing: Is where the whole application is tested, simulating real user scenarios closely. Because these tests are slow and expensive there should be a thick "cushion" of unit tests in a codebase.
- Unit Testing: We test the smaller units of software (often functions or methods) in isolation.

Testing Framework
- Arrange: Setting up our code such that it can be tested.
- Act: Calling a method or function that returns a result of interest to our test.
- Assert: Does our expected return match the actual return.

Testing Benefits
- Surfaces bugs faster
- Reduces the risk of regressions
- Allows us to trust the code
- Makes us think about the edge cases
- Acts as a safety net when making changes or refactoring
- Acts as documentation for the code
- Encourages us to write more testable (better) code.

How can I be more specific with what I don’t know?

What would your final results look like?
Tests are created that prove the contact form code is working and functional.

What does the project do/functionality?
[ ] You may have noticed that the form validation for one of the inputs is a little off...
[ ] Write a test for the "expected" behavior (it will fail because something in the component is doing something unexpected)
[ ] Confirm that the test fails, because of the "unexpected" behavior
[ ] Look at the code in the project to find what is causing the behavior
[ ] Fix the code so that your new test passes
[ ] Celebrate that your test helped you find and fix a bug!

What’s the starting point? 
A React Contact Form

What type of constraints might you have?
Time, Energy, Understanding

What might success look like?
Tests are created for every part of the contact form. 
All tests pass once tests are run.

What are your questions?

Plan:
Prepare list of steps
1. Take a good amount of time to use the form. Find out what behaviors you expect, and any you don't expect. (Don't fix unexpected behaviors yet. We want our test to show us what's wrong in the UI, then fix the behavior - we'll walk you through that down below)
1. Write down on a piece of paper what you want to test. (This is a very important step - always plan before coding!)
1. Add your first test. This one should be a very simple test to make sure the testing setup is working.
1. Write a sufficient amount of tests to give you confidence in the project's code

Plan backwards?

If you still have questions, go back to “understand” phase.

Execute:
Follow Plan

Write Code

It’s OK to adjust

Don’t be afraid to make mistakes

Create checkpoints by using console.log

Reflect:
Successful?

What did you learn?

What would you do differently?

Where might you make improvements?
