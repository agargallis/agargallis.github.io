import { mkdir, copyFile } from "node:fs/promises";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");

const copyIntoFolder = async (file, folder) => {
  const targetDir = join(dist, folder);
  await mkdir(targetDir, { recursive: true });
  await copyFile(join(dist, file), join(targetDir, "index.html"));
};

const run = async () => {
  await copyIntoFolder("resume.html", "resume");
  await copyIntoFolder("contact.html", "contact");
};

run();
