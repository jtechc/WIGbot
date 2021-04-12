const Enmap = require("enmap");

module.exports = {
    settings: new Enmap({
        name: "settings",
        autoFetch: true,
        fetchAll: false,
    }),
    users: new Enmap("users"),
    tags: new Enmap({
        name : "tags" 
    }),
    serverId: "755142481317855293",
    welcomeChannel: "755142481716314213",
    memberCounterChannel: "829192388361584650",
}