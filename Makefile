deploy:
	rm -rf dist && npm run build && wrangler pages deploy dist
