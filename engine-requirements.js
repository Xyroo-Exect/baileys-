"use strict";

console.log(`
[======================================================================]
[ XyrooBail V7.0.0-RC13 - Exclusive Custom Build by @Xyroo            ]
[ Modifications Include:                                               ]
[ - Full CommonJS Compatibility & Migration                            ]
[ - Advanced Interactive Buttons Support                               ]
[ - Deep Logic USync Bypass for Solo Participant Support               ]
[======================================================================]
`);

const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ XyrooBail requires Node.js 20+ to run.\n` +
    `   You are using Node.js ${process.versions.node}.\n` +
    `   Please upgrade to Node.js 20+ to proceed.\n`
  );
  process.exit(1);
}
