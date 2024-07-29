import jetpack from '@eatonfyi/fs-jetpack';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Scour the migrated posts for media:// URLs, copy their files,
 * and change the URLs to reference the 'correct' ones. Down the
 * line we want to make actual use of the media:// URLs, but for
 * now it complicates the 11ty pipeline troubleshooting.
 */

const content = jetpack.dir('./src/migrated/');
const src = jetpack.dir(process.env.MEDIA_DIR);
const dest = jetpack.dir('./src/_media');
const mediaUrl = /media:\/\/([^ "')]+)/g;

for (const file of content.find({ matching: '**/*.md' })) {
  // Read in the file, find media:// links, and copy them to the site media directory.
  const txt = content.read(file, 'utf8');

  // Find the filenames and copy the files
  const links = txt.match(mediaUrl);
  for (const link of links ?? []) {
    const filePath = link.replace('media://', '');
    const inPath = src.path(filePath);
    const outPath = dest.path(filePath);

    if (jetpack.exists(inPath)) {
      jetpack.copy(inPath, outPath, { overwrite: true });
    } else {
      console.error(`${inPath} does not exist`);
    }
  }
}
