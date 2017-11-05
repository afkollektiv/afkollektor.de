index:	pages/index.md styles/index.css
	mkdir -p build
	cp styles/index.css build/index.css
	cp scripts/konami-code.js build/k.js
	discount-theme pages/index.md \
		-o build/index.html \
		-t templates/index.theme
