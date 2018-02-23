function EventEmitter(){
    EventEmitter.init.call();
}

EventEmitter.init = function(){
    this._events = Object.create(Object.create(null));
}