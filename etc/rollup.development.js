import resolve from "@rollup/plugin-node-resolve";
import minify from 'rollup-plugin-minify-html-literals';
import typescript from "@rollup/plugin-typescript";
import analyze from "rollup-plugin-analyzer";
import copy from "rollup-plugin-copy";
import commonjs from "rollup-plugin-commonjs";
import { terser } from 'rollup-plugin-terser';
import size from "rollup-plugin-size";

module.exports = {
    input: "./src/index.ts",
    output: {
        dir: "./dist/scripts",
        format: "esm",
    },
    plugins: [
        commonjs(),
        copy({
            targets: [{ src: "/asset", dest: "dist" }],
        }),
        resolve({dedupe: [
            '@captaincodeman/rdx',
            '@captaincodeman/rdx-model',
            '@captaincodeman/router',
            'lit-element',
            'lit-html',
          ] }),
        typescript(),
        minify({
          options: {
            shouldMinify: (template) => defaultShouldMinify(template) || 
                                        template.parts.some(part => part.text.includes('<style')) ||
                                        template.parts.some(part => part.text.includes('</span'))
          }
        }),
        terser({
            output: {
                comments: false
            }
        }),
        analyze(),
        size()
    ],
};
