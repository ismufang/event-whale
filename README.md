# Event-Whale
event emitter / pubsub

## Install
```sh
npm install event-whale
```

## Usage
```js
import EventWhale from 'event-whale'

const eventWhale = new EventWhale()

// listen to an event
eventWhale.on('foo', e => console.log('foo', e))

// listen to an event only once
eventWhale.once('foo', e => console.log('foo', e))

// fire an event
eventWhale.emit('foo', { a: 'b' })

// close an event
eventWhale.off('foo')

// clearing all events
eventWhale.clear()
```
