#!/bin/bash

echo "Extracting URLs by category..."

# Services
grep "^/services/" all-urls.txt | sort > services-urls.txt
echo "Services: $(wc -l < services-urls.txt)"

# Locations
grep "^/in/" all-urls.txt | sort > location-urls.txt
echo "Locations: $(wc -l < location-urls.txt)"

# Blog
grep "^/blog/" all-urls.txt | sort > blog-urls.txt
echo "Blog: $(wc -l < blog-urls.txt)"

# Ask Dentist
grep "^/ask-the-dentist" all-urls.txt | sort > ask-urls.txt
echo "Ask Dentist: $(wc -l < ask-urls.txt)"

# Conditions
grep "^/conditions" all-urls.txt | sort > conditions-urls.txt
echo "Conditions: $(wc -l < conditions-urls.txt)"

# International
grep "^/international" all-urls.txt | sort > international-urls.txt
echo "International: $(wc -l < international-urls.txt)"

# Main pages
grep -v "^/services/" all-urls.txt | grep -v "^/in/" | grep -v "^/blog/" | grep -v "^/ask-the-dentist" | grep -v "^/conditions" | grep -v "^/international" | sort > main-urls.txt
echo "Main: $(wc -l < main-urls.txt)"

echo "---"
echo "Total extracted categories"
