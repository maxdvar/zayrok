import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
      ...Object.keys(packageJson.dependencies || {}),
    ],
    plugins: [
      typescript({
        exclude: ["**/*.stories.tsx", "**/*.stories.ts", ".storybook/**/*"],
        tsconfig: "./tsconfig.json",
      }),
      resolve(),
      commonjs(),
      postcss(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/, /\.stories\.(tsx|ts)$/],
  },
];
