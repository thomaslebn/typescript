Folder src : all ts code

Folder dist : non ts code 

Install typescript globally :
`sudo npm i -g typescript`

Check install :
`tsc -v`

Create tsconfig.json :
`tsc --init`

In tsconfig.json (already up) :
1. "target": "es6",
2. "rootDir": "./src",
3. "outDir": "./dist",
4. "removeComments": true,

Compile one typescript file to javascript :
`tsc index.ts`

Compile all typescript files to javascript :
`tsc`

Watch errors but don't compile :
`tsc --watch index.ts`
