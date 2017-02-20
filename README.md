# chatbomb2
Note: Apparently 'Chatbomb' has already been taken as an app name (so weak), so I'll be changing the name.

Revamped version of Chatbomb that utilizes MongoDB

Still in progress, but what I'm currently implementing:
<ul>
<li>New styling and layout (not a priority on the first version)</li>
<li>Replace the Rails API with a MongoDB backend</li>
<li>Implement a Node mailer</li>
<li>Refactoring code to increase run-time efficiency (for example, on the server-side: storing all connected clients in an object with UID-SOCKETID key-value pairs instead of storing User Objects in an array cuts out almost all of the nasty for-loops from the original)</li>
<li>Fixing all of the bugs!</li>
<li>More to come...</li>
</ul>
