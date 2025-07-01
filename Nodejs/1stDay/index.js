const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();
eventEmitter.on('start',() =>{
    console.log("started");
});
eventEmitter.emit('start');