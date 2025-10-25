#!/bin/bash
# Generate all URLs from page.tsx files

find app -name "page.tsx" -o -name "page.ts" | \
  grep -v "app/page.tsx" | \
  sed 's|app||' | \
  sed 's|/page.tsx$||' | \
  sed 's|/page.ts$||' | \
  sed 's|/\[slug\]||' | \
  sort | \
  uniq
