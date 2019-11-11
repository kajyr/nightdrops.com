MARKED = "node_modules/.bin/marked"
SASS = "node_modules/.bin/sass"

MD_FILES = $(shell find ./src -type f -name '*.md')
DOC_FILES = $(patsubst ./src/%.md, ./docs/%.html, $(MD_FILES))

SASS_FILES = $(shell find ./src -type f -name '*.scss')
CSS_FILES = $(patsubst ./src/%.scss, ./docs/%.css, $(SASS_FILES))

all: docs
.PHONY: all

docs: $(CSS_FILES) $(DOC_FILES)

docs/%.html: ./src/%.md layout.html
	@$(MARKED) --gfm $< | sed -e '/{{ content }}/{r /dev/stdin' -e 'd;}' ./layout.html > $@
	@echo $*

docs/%.css: ./src/%.scss
	@$(SASS) $< $@
	@echo $*