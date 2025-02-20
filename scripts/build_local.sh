#!/bin/bash
set -e

LOCAL_PUBLISH="./local_publish"

echo
echo "🍀 Clear local_publish directory"

rm -rf ${LOCAL_PUBLISH}
mkdir -p ${LOCAL_PUBLISH}
# cp -rf dist ${LOCAL_PUBLISH}
# cp -f package.json ${LOCAL_PUBLISH}/package.json

npm pack --pack-destination ${LOCAL_PUBLISH}

echo
echo "💫 Completed generate local publish"