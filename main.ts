import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
	async onload() {
		this.registerMarkdownPostProcessor((element, context) => {
			let f = async () => {
				let heading = document.getElementsByClassName("metadata-properties-heading")[0];

				if (heading == undefined) return;
				if (heading.classList.contains("is-collapsed")) {
					clearInterval(handle);
					return;
				}
				
				if (heading instanceof HTMLElement) {
					heading.click();
				} else {
					console.error("Heading not clickable");
				}
			}

			let handle = setInterval(f,1);
			setTimeout(() => {clearInterval(handle)}, 100);
		});
	}
}
