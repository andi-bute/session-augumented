var SessionCleanup = new Mongo.Collection(null);

Session.setGrouped = function (namespace, key, value) {
    Session.addToCleanup(namespace, key);
    return Session.set(key, value);
}

Session.getNonReactive = function (key) {
  return Deps.nonreactive(function () { return Session.get(key); });
};
Session.addToCleanup = function (namespace, key) {
    SessionCleanup.insert({"namespace": namespace, "key":key});
}
Session.doCleanup = function (namespace) {
    var vars = SessionCleanup.find({namespace: namespace}, {rective:false}).fetch();
    _.each(vars, function(sessionVar) {
        Session.unsetNonReactive(sessionVar.key);
    });
}
Session.unsetNonReactive = function (key) {
    Session.keys[key] = undefined; //delete is supposed to be heavy on the VM
}

