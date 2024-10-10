import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			plugins: [
				visualizer({
					open: true, // 自动打开浏览器
					filename: "dist/stats.html", // 输出的文件路径
				}),
			],
		},
	},
	css: {
		modules: {
			localsConvention: "camelCaseOnly", // 设置 CSS 类名转换规则为驼峰式
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true, // 允许在 Less 文件中使用 JavaScript
			},
		},
	},
});
