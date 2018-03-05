#!/usr/bin/env bash
# Deploy dist folder to S3

# Sync HTML with no cache headers
aws s3 sync --acl public-read --delete \
	--exclude '*' --include '*.html' \
	--cache-control 'public, must-revalidate, proxy-revalidate, max-age=0' \
	dist/ "s3://${S3_BUCKET_NAME}"

# Sync everything else
aws s3 sync --acl public-read --delete --exclude '*.html' \
	--cache-control 'public, max-age=604800' dist/ "s3://${S3_BUCKET_NAME}"
