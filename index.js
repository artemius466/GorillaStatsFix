// I like js ok? :(

let dir = "E:\\SteamLibrary\\steamapps\\common\\Gorilla Tag\\BepInEx\\plugins"
const exec = require('child_process').exec;
const path = require('path');
const arg = process.argv[2];
const fs = require('fs');

async function main() {
    if (arg === '-r' || arg === '--release') {
        exec('dotnet build', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(stdout);
        })

        fs.copyFileSync('./bin/Debug/netstandard2.1/GorillaServerStats.dll', path.join(dir, 'GorillaServerStats.dll'));
        fs.unlinkSync(path.join(dir, 'GorillaServerStats.dll'));
        fs.copyFileSync('./bin/Debug/netstandard2.1/GorillaServerStats.dll', "./Release/GorillaServerStats.dll");

        console.log("Build complete! :3");
    } else {
        await exec('dotnet build', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
        })

        if (fs.existsSync(path.join(dir, 'GorillaServerStats.dll'))) {
            await fs.unlinkSync(path.join(dir, 'GorillaServerStats.dll'));
        }

        await fs.copyFileSync('./bin/Debug/netstandard2.1/GorillaServerStats.dll', path.join(dir, 'GorillaServerStats.dll'));
    }
}

main();

console.clear();
console.log("\nBuild complete! :3\n");