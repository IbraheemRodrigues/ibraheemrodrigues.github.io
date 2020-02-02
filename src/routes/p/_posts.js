import path from "path";
import fs from "fs";

import fm from "front-matter";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

const cwd = process.cwd()
const posts_folder = path.join(cwd, 'posts')

// Get all file names
const posts = walk(posts_folder).map(({ file, slug }) => {
	let content = fs.readFileSync(file, "UTF-8");
	content = fm(content);

	return {
		slug,
		meta: content.attributes,
		title: content.attributes.title,
		html: md.render(content.body)
	}
})

export default posts;

function walk(dir, slug = "") {
	var results = [];
	var list = fs.readdirSync(dir);
	list.forEach(function (file) {
		slug = slug + '/' + file
		file = dir + '/' + file;
		var stat = fs.statSync(file);
		if (stat && stat.isDirectory()) {
			/* Recurse into a subdirectory */
			results = results.concat(walk(file, slug));
		} else {
			/* Is a file */
			let file_type = file.split(".").pop();
			if (file_type == "md") results.push({ file, slug: slug.slice(0, -3) });
		}
	});
	return results;
}
