const pubSub = (() => {
  const _map = {};
  return {
    subscribe(eventName, fn) {
      if (!_map[eventName]) _map[eventName] = [];
      _map[eventName].push(fn);
    },
    unsubscribe(eventName, fn) {
      if (_map[eventName]) {
        const idx = _map[eventName].indexOf(fn);
        if (idx !== -1) _map[eventName].splice(idx, 1);
      }
    },
    publish(eventName, data) {
      if (_map[eventName]) _map[eventName].forEach((fn) => fn(data));
    },
  };
})();

export default pubSub;
