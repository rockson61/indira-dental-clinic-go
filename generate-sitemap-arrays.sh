#!/bin/bash

echo "// ALL URLS - Auto-generated from codebase"
echo "const allUrls = ["

cat all-urls.txt | while read url; do
  echo "  '$url',"
done

echo "]"
echo ""
echo "Total URLs: $(wc -l < all-urls.txt)"
