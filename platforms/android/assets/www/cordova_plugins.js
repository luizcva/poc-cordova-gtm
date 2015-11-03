cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.jareddickson.cordova.tag-manager/www/TagManager.js",
        "id": "com.jareddickson.cordova.tag-manager.TagManager",
        "clobbers": [
            "cordova.plugins.TagManager"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.jareddickson.cordova.tag-manager": "0.3.0",
    "cordova-plugin-whitelist": "1.1.0"
}
// BOTTOM OF METADATA
});