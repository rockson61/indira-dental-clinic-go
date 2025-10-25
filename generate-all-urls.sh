#!/bin/bash
# Generate complete list of all URLs for sitemap

echo "Generating all URLs..."

# Get all page.tsx files and convert to URLs
find app -name "page.tsx" -o -name "page.ts" | \
  grep -v "app/page.tsx" | \
  grep -v "\[slug\]" | \
  sed 's|app||' | \
  sed 's|/page.tsx$||' | \
  sed 's|/page.ts$||' | \
  sort | \
  uniq > all-urls.txt

# Add homepage
echo "/" | cat - all-urls.txt > temp && mv temp all-urls.txt

echo "Total URLs found: $(wc -l < all-urls.txt)"
echo "First 20 URLs:"
head -20 all-urls.txt
