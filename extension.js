const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your theme extension "mehtaharshxyz-themes" is now active!');
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}