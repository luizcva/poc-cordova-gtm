cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.jareddickson.cordova.tag-manager/www/TagManager.js",
        "id": "com.jareddickson.cordova.tag-manager.TagManager",
        "clobbers": [
            "cordova.plugins.TagManager"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.1.0",
    "com.jareddickson.cordova.tag-manager": "0.2.1"
}
// BOTTOM OF METADATA
});