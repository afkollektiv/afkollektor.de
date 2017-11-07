index:
	mkdir -p build
	cp styles/index.css build/index.css
	cp scripts/konami-code.js build/k.js
	cat templates/index-header.theme > build/index.html
	cmark --smart < pages/index.md >> build/index.html
	cat templates/index-footer.theme >> build/index.html
