session-augumented
=====================

Some Session methods I sometimes need

#### getNonReactive
`Session.getNonReactive("key");`
Usefull for situations when you want to use a reactive variable in most cases; but need to also read it in some places without worrying about reactivity. Like when the user triggers an action.

#### setGrouped
Used to be setNameSpaced. When you want to group some session vars together for easy cleanup on situations like page change or user cancels action
`Session.setGrouped("nameSpace", "key", value)`
Retreive the variable as usual, withouth the group.
Use regular `Session.get("key")` or `Session.getNonReactive("key")`

You may trigger cleanup on a group with `Session.doCleanup("namespace")` on whatever action you wish - page changes, user hits cancel, etc.

If you allready have `Session.set` you may also use `Session.addToCleanup("namespace", "key")` to add regular session vars in the cleanup list.