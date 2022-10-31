# Retailer-Reward-Offer-ReactJS

# Web API Resources
1. Candidates need to use ReactJS if they are UI resources.
2. If Javascript, try and create using ReactJS. The end client will take in account the lack of
experience but is looking to see if the resource can adapt to a new technology and follow best
practices and standards.
3. Do nut use Typescript
Top reasons applicants fail the initial stage of interview process/assessment.
1. Unit Tests-these are required and should be clear and easy to decipher. Regression, UAT
2. Must have a Readme files with instructions as to how you would run the app. Get/Rewards,
Get/Rewards (customer ID,) GET/transactions.
3. Variable Naming Convention. If variable A holds the transaction data, then label it transaction
data. Must be built so that another developer can easily find the file/information in the future.
4. Keep the implementation as simple as possible so it’s easy for someone new to read,
understand, and easily navigate the packages.
5. Must have Gitignore file
6. Do not upload external files as a folder.
7. Follow component-based software engineering principles when completing the assessment.
Ensure the code is clean.
8. Copy and Pasting Code. Candidates who do this are highly likely to fail the assessment unless the
code is modified and is good code. Candidates who just copy the code without ensuring the
quality are highly likely to fail. The client has reviewed enough assessment over the years to
quickly identify this.
9. Avoid using unnecessary 3rd party libraries.

# Things to evaluate and consider prior to taking the assessment if you choose to do so in React.
1. For react apps, please structure and organize the project properly with separate folders for
components, CSS Styling etc. and store all the relevant components for the application in the
Components folder and styles in the styles folder etc. not outside in the main app.
2. Do not put complex Javascript logic inside HTML tags unless its basic JS logic, if the logic is
complex, it should be separated out into its own file or component if the component needs to
be further split into child components.
3. DO NOT forget unit tests-These should be clear and easy to decipher.
4. If needed separate out the CSS files whenever possible to be more relevant to the component it
applies to

Pluses
6. Try to use React hooks and custom hooks wherever possible to promote code re-use.

Feedback on prior resources who did not pass the test
1. There are a couple of issues. The controller only has one method, which exposes rewards for ALL
customers instead of letting you retrieve one by id. (This is fine with our requirements; it&#39;s just my pet
peeve.) There&#39;s a &quot;Uil&quot; class, which I assume is supposed to be &quot;Util&quot;. I wish there were more tests. The
&quot;three months&quot; is enforced only by the data returned by the DAO; in a real-world scenario, this solution
would require old data to be purged from the database or reliance on a remote service that only returns
three months&#39; worth of data to start with.
2. I feel like he didn&#39;t think through the API design first.
It seems like he used a TreeMap to calculate the Monthly Rewards and then just kind of lazily leaked this
out to the consumer without thinking about how they might use it.
It&#39;d be more convenient, at least for rendering it in a UI, to have an array of objects with month and
amount properties.
There&#39;s other things I could nit-pick like some poor names such as  updateBeginDate  and CommonUtil,
fields are package-private instead of private, and a lack of unit tests (which he noted in the README
though) (the 1 unit test doesn&#39;t assert on the points).
3. Feedback: There’s no gitignore, which is leading to extra things getting included (.iml file, build
package, etc.)  No tests.  The only endpoint is POST /rest/points which takes a request body full of
transactions (month + amount) and formats them into a map of total points by month.  The $100 = 0
points bug is there, too.
4 There are a couple of really strange things the code is doing (like their bizarre way of determining
whether a transaction is part of the current month) and a bug for $100.  The tests don’t add clarity,
either.

# UI Developer 
A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
 
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every
dollar spent over $50 in each transaction
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
 
Given a record of every transaction during a three-month period, calculate the reward points earned for
each customer per month and total.

 
 Use React JS (do not use TypeScript)
 Simulate an asynchronous API call to fetch data
 Make up a data set to best demonstrate your solution
 Check solution into GitHub
