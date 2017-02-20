# chatbomb2

Revamped version of Chatbomb that utilizes REMS (ReactJS, Express, MongoDB, and Socket.io)

Still in progress, but what I'm currently implementing:
<ul>
<li>New styling and layout (not a priority on the first version)</li>
<li>Replace the Rails API with a MongoDB backend</li>
<li>Implement a Node mailer</li>
<li>Refactoring code to increase run-time efficiency (for example, on the server-side: storing all connected clients in an object with UID-SOCKETID key-value pairs instead of storing User Objects in an array cuts out almost all of the nasty for-loops from the original)</li>
<li>Fixing all of the bugs! (toggling a timer on/off in a child component can get really ugly!)</li>
<li>More to come...</li>
</ul>
