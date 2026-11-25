// The Word You'd Delete From the Dictionary — entry for
// u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2
// One word to erase from the dictionary forever.
// Chosen word: "irregardless" — a word that should never have been in the
// dictionary at all. It is a double negative that means "regardless" while
// pretending to mean the opposite, and "regardless" already exists, so
// deleting it costs the language nothing and fixes an old mistake. The
// joke is the word itself: erasing it is the punchline.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "irregardless";

// Keep the gate honest in-program: one word, 1-77 chars, no whitespace.
if (!/^\S{1,77}$/.test(word)) {
  throw new Error("entry must be a single word of 1-77 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
