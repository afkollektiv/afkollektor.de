index:	pages/index.md styles/index.css
	mkdir -p build
	cp styles/index.css build/index.css
	discount-theme pages/index.md \
		-o build/index.html \
		-t templates/index.theme
