/**
 * @name EventWhale
 * @return {EventWhale}
 */
class EventWhale {
    constructor() {
        this.whale = new Map()
    }
    on(eventName, handler) {
        const handlers = this.whale.get(eventName)
        if (handlers) {
            handlers.push(handler)
        } else {
            this.whale.set(eventName, [handler])
        }
    }
    once(eventName, handler) {
        handler.once = true
        this.on(eventName, handler)
    }
    emit(eventName, evt) {
        const handlers = this.whale.get(eventName)
        if (handlers) {
            handlers.forEach(handler => {
                handler(evt)
            })
            const newHandlers = handlers.filter(handler => !handler.once)
            this.whale.set(eventName, newHandlers)
        }
    }
    off(eventName, handler) {
        const handlers = this.whale.get(eventName)
        if (handlers) {
            if (handler) {
                const index = handlers.indexOf(handler)
                index !== -1 && handlers.splice(index, 1)
            } else {
                this.whale.delete(eventName)
            }
        }
    }
    clear() {
        this.whale.clear()
    }
}

module.exports = EventWhale
