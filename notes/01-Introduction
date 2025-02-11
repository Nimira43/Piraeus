## Question - Is Socket IO different to WebSockets?

#### Yes, Socket IO and WebSockets are different, although they are related.

###### WebSockets is a protocol that provides full-duplex communication channels over a single TCP connection. It allows for real-time communication between the client and the server by keeping the connection open, unlike HTTP where connections are closed after each request/response pair.

###### Socket IO is a library that builds on top of WebSockets and provides additional features. 

#### Here's how Socket IO is different from plain WebSockets:

##### Compatibility: 
###### Socket IO provides automatic reconnection, while WebSockets does not. This means if the connection drops, Socket.IO will try to reconnect automatically.

##### Fallbacks: 
###### Socket IO has built-in fallback mechanisms that allow it to work even if WebSockets are not supported by the client's browser. It can fall back to other technologies like long-polling.

##### Rooms and Namespaces: 
###### Socket IO provides a way to create multiple "rooms" and "namespaces" which can be useful for organising communication in a more complex application.

##### Event-driven: 
###### Socket IO uses a more event-driven model, where you can emit and listen for custom events, making it easier to handle various events in your application.

##### Additional Features: 
###### Socket IO includes features such as broadcasting, which allows you to send messages to multiple clients at once, and middleware support, which can be used for things like authentication.

#### Summary 

###### While WebSockets is a protocol that provides the basis for real-time communication, Socket IO is a library that makes it easier to work with WebSockets and adds additional features that make development more robust and convenient.

#### Links 

Socket IO - https://socket.io/
WebSockets - https://websocket.org/